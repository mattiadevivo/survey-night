/// <reference types="astro/client" />

interface ImportMetaEnv {
  //   readonly DB_PASSWORD: string;
  //   readonly PUBLIC_POKEAPI: string;
  readonly PUBLIC_EMAILJS_SERVICE_ID: string;
  readonly PUBLIC_EMAILJS_TEMPLATE_ID: string;
  readonly PUBLIC_EMAILJS_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
