type Runtime = import('@astrojs/cloudflare').Runtime<Env>;

type Env = {
  SESSION: KVNamespace;
  CONTENT: KVNamespace;
  ADMIN_PASSWORD?: string;
};

declare namespace App {
  interface Locals extends Runtime {
    adminSession?: {
      token: string;
      csrf: string;
    };
  }
}
