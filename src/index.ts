import type { Env } from './env.ts';

export default {
  fetch(_req, _env, _ctx) {
    return new Response('Hello World!');
  },
} satisfies ExportedHandler<Env>;
