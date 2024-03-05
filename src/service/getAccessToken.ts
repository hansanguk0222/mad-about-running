import { pipe } from '@mobily/ts-belt';
import ky from 'ky';
// import { cookies } from 'next/headers';

export const getAccessToken = async () => {
  const body = pipe(new FormData(), (formData) => {
    formData.append('client_id', process.env.NEXT_PUBLIC_CLIENT_ID);
    formData.append('client_secret', process.env.NEXT_PUBLIC_CLIENT_SECRET);
    formData.append('refresh_token', process.env.NEXT_PUBLIC_REFRESH_TOKEN);
    formData.append('grant_type', process.env.NEXT_PUBLIC_GRANT_TYPE);

    return formData;
  });

  const { access_token } = await ky
    .post('https://www.strava.com/oauth/token', {
      body,
    })
    .json<{
      token_type: 'Bearer';
      access_token: string;
      expires_at: number;
      expires_in: number;
      refresh_token: string;
    }>();

  // cookies().set('accessToken', access_token);

  console.log(access_token);

  return access_token;
};
