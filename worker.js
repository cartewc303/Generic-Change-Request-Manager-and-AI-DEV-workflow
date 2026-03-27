worker.js


// ─── Anthropic API Proxy — Cloudflare Worker ─────────────
// Sits between your GitHub Pages HTML and the Anthropic API.
// Adds your API key server-side so it never appears in the browser.
//
// SETUP:
// 1. Go to dash.cloudflare.com → Workers & Pages → Create Worker
// 2. Paste this entire file into the editor
// 3. Click Settings → Variables → Add variable:
//    Name:  ANTHROPIC_API_KEY
//    Value: your sk-ant-api03-... key
//    Click Encrypt, then Save
// 4. Click Deploy
// 5. Copy your worker URL (e.g. https://cr-proxy.yourname.workers.dev)
// 6. Paste that URL into change_request_manager_v3.html
//    where it says: const PROXY_URL = 'YOUR_WORKER_URL_HERE'

export default {
  async fetch(request, env) {

    // ── Handle CORS preflight ──────────────────────────────
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: corsHeaders()
      });
    }

    // ── Only allow POST ────────────────────────────────────
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() }
      });
    }

    // ── Check API key is configured ────────────────────────
    if (!env.ANTHROPIC_API_KEY) {
      return new Response(JSON.stringify({
        error: { type: 'configuration_error', message: 'ANTHROPIC_API_KEY not set in Worker environment variables.' }
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() }
      });
    }

    // ── Forward request to Anthropic ───────────────────────
    try {
      const body = await request.text();

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type':      'application/json',
          'x-api-key':         env.ANTHROPIC_API_KEY,
          'anthropic-version': '2023-06-01'
        },
        body
      });

      const data = await response.text();

      return new Response(data, {
        status: response.status,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders()
        }
      });

    } catch (err) {
      return new Response(JSON.stringify({
        error: { type: 'proxy_error', message: err.message }
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json', ...corsHeaders() }
      });
    }
  }
};

// ── CORS headers — allows GitHub Pages to call this worker ─
function corsHeaders() {
  return {
    'Access-Control-Allow-Origin':  '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
}