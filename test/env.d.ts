import type { Env } from '@/env.ts';

declare module 'cloudflare:test' {
  interface ProvidedEnv extends Env {}
}
