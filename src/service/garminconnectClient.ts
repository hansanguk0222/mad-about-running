import { GarminConnect } from 'garmin-connect';

export const GarminConnectClient = new GarminConnect({
  username: process.env.NEXT_PUBLIC_GARMIN_CONNECT_ID,
  password: process.env.NEXT_PUBLIC_GARMIN_CONNECT_PW,
});
