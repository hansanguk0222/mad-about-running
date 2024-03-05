import type { O } from '@mobily/ts-belt';
import { api } from './api';

/**
 * BADGE_TYPES = {
    EMPLOYEE => 4,
    PRO => 3,
    AMBASSADOR => 2,
    PREMIUM => 1,
    FREE => 0
 }
 */

export const getAthlete = async () => {
  const athlete = await api.get('api/v3/athlete').json<{
    id: number;
    username: O.Option<string>;
    resource_state: 1 | 2 | 3;
    firstname: string;
    lastname: string;
    bio: O.Option<string>;
    city: O.Option<string>;
    state: O.Option<string>;
    country: O.Option<string>;
    sex: 'M' | 'F';
    premium: boolean;
    summit: boolean;
    created_at: string;
    updated_at: string;
    badge_type_id: 0 | 1 | 2 | 3 | 4;
    weight: number;
    profile_medium: string;
    profile: string;
    friend: O.Option<string[]>;
    follower: O.Option<string[]>;
  }>();

  console.log(athlete);
};
