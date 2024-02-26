// import type { DeviceBrowser } from './MobileOK';
import type { DeviceBrowser } from '@/types/MobileOK';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string;
      NEXT_PUBLIC_GARMIN_CONNECT_ID: string;
      NEXT_PUBLIC_GARMIN_CONNECT_PW: string;
    }
  }
}

export {};
