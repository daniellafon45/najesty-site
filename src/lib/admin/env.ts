import { env } from 'cloudflare:workers';

type WorkerEnv = {
  CONTENT?: KVNamespace;
  SESSION?: KVNamespace;
  ADMIN_PASSWORD?: string;
};

/** Cloudflare Worker bindings (Astro v6+). */
export function workerEnv(): WorkerEnv {
  return env as unknown as WorkerEnv;
}

export function contentKv(): KVNamespace | null {
  return workerEnv().CONTENT ?? null;
}

export function adminPassword(): string {
  return workerEnv().ADMIN_PASSWORD ?? '';
}
