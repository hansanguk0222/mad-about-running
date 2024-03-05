import { pipe } from '@mobily/ts-belt';
import ky from 'ky';
import { getAccessToken } from './getAccessToken';

export const api = ky.extend({
  prefixUrl: 'https://www.strava.com',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
  hooks: {
    afterResponse: [
      async (request, options, response) => {
        if (response.status === 401) {
          const accessToken = await getAccessToken();

          request.headers.set('Authorization', `Bearer ${accessToken}`);

          return ky(request);
        }
      },
    ],
  },
});
