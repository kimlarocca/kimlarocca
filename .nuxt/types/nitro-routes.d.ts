// Generated by nitro
import type { Serialize, Simplify } from 'nitropack'
declare module 'nitropack' {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/_supabase/session': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxtjs/supabase/dist/runtime/server/api/session').default>>>>
    }
  }
}
export {}