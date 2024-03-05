declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CLIENT_ID: string;
      NEXT_PUBLIC_CLIENT_SECRET: string;
      NEXT_PUBLIC_REFRESH_TOKEN: string;
      NEXT_PUBLIC_GRANT_TYPE: string;
      NEXT_PUBLIC_ANALYTICS_ID: string;
    }
  }
}

export {};
