// src/env.d.ts
/// <reference types="astro/client" />

declare namespace ImportMetaEnv {
  /** Base URL of the backend API (must start with http/https) */
  readonly PUBLIC_API_URL: string;
}
