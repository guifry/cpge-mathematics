const ALLOWED_ORIGINS = ['https://guifry.github.io', 'https://strategic-networking.vercel.app'];
const MODEL = 'claude-haiku-4-5-20251001';
const MAX_TOKENS = 4096;

function originOk(origin) {
  if (!origin) return false;
  if (ALLOWED_ORIGINS.includes(origin)) return true;
  if (origin.startsWith('http://localhost:')) return true;
  return false;
}

function corsHeaders(origin) {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    if (!originOk(origin)) return new Response('forbidden', { status: 403 });

    const headers = corsHeaders(origin);
    if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers });
    if (request.method !== 'POST') return new Response('method not allowed', { status: 405, headers });

    const body = await request.json().catch(() => null);
    if (!body || !body.messages) return new Response('bad request', { status: 400, headers });

    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: body.system || '',
        messages: body.messages,
        stream: true,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      return new Response(err, { status: res.status, headers });
    }

    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    const pump = async () => {
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();

        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          if (line === 'data: [DONE]') continue;
          let event;
          try { event = JSON.parse(line.substring(6)); } catch { continue; }

          if (event.type === 'content_block_delta' && event.delta?.text) {
            await writer.write(encoder.encode(
              `data: ${JSON.stringify({ type: 'delta', text: event.delta.text })}\n\n`
            ));
          } else if (event.type === 'message_delta' && event.usage) {
            await writer.write(encoder.encode(
              `data: ${JSON.stringify({ type: 'done', usage: { input_tokens: 0, output_tokens: event.usage.output_tokens } })}\n\n`
            ));
          } else if (event.type === 'message_start' && event.message?.usage) {
            await writer.write(encoder.encode(
              `data: ${JSON.stringify({ type: 'usage_start', usage: { input_tokens: event.message.usage.input_tokens } })}\n\n`
            ));
          }
        }
      }
      await writer.close();
    };

    pump().catch(() => writer.close());

    return new Response(readable, {
      headers: { ...headers, 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' },
    });
  },
};
