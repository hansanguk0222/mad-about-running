type HttpStatusCode =
  | 100
  | 101
  | 102
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 226
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 419
  | 420
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;

type ActivityStats = {
  biggest_ride_distance: number;
  biggest_climb_elevation_gain: number;
  recent_ride_totals: ActivityTotal;
  recent_run_totals: ActivityTotal;
  recent_swim_totals: ActivityTotal;
  ytd_ride_totals: ActivityTotal;
  ytd_run_totals: ActivityTotal;
  ytd_swim_totals: ActivityTotal;
  all_ride_totals: ActivityTotal;
  all_run_totals: ActivityTotal;
  all_swim_totals: ActivityTotal;
};

type ActivityTotal = {
  count: number;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  elevation_gain: number;
  achievement_count: number;
};

type ActivityType =
  | 'Canoeing'
  | 'Crossfit'
  | 'EBikeRide'
  | 'Elliptical'
  | 'Golf'
  | 'Handcycle'
  | 'Hike'
  | 'IceSkate'
  | 'InlineSkate'
  | 'Kayaking'
  | 'Kitesurf'
  | 'NordicSki'
  | 'Ride'
  | 'RockClimbing'
  | 'RollerSki'
  | 'Rowing'
  | 'Run'
  | 'Sail'
  | 'Skateboard'
  | 'Snowboard'
  | 'Snowshoe'
  | 'Soccer'
  | 'StairStepper'
  | 'StandUpPaddling'
  | 'Surfing'
  | 'Swim'
  | 'Velomobile'
  | 'VirtualRide'
  | 'VirtualRun'
  | 'Walk'
  | 'WeightTraining'
  | 'Wheelchair'
  | 'Windsurf'
  | 'Workout'
  | 'Yoga';

type ActivityZoneType = 'heartrate' | 'power';

type ActivityZone = {
  score: number;
  distribution_buckets: string;
  type: ActivityZoneType;
  sensor_based: boolean;
  points: number;
  custom_zones: boolean;
  max: number;
};

type Resolution = 'low' | 'medium' | 'high';

type BaseStreamSeriesType = 'distance' | 'time';

type BaseStream = {
  original_size: number;
  resolution: Resolution;
  series_type: BaseStreamSeriesType;
};

type ClubActivity = {
  athelte: MetaAthlete;
  name: string;
  distance: string;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  type: ActivityType;
  sport_type: SportType;
};

type ClubAthlete = {
  resource_state: number;
  firstname: string;
  lastname: string;
  member: string;
  admin: boolean;
  owner: boolean;
};

type Comment = {
  id: number;
  activity_id: number;
  text: string;
  athlete: SummaryAthlete;
  created_at: string;
};

// Error는 TS에서 이미 사용함
type StravaError = {
  code: string;
  field: string;
  resource: string;
};

type ExplorerResponse = ExplorerSegment;
type ClimbCategoryDESC = 'NC' | 'HC' | '4' | '3' | '2' | '1';

type ExplorerSegment = {
  id: number;
  name: string;
  climb_category: number;
  climb_category_desc: ClimbCategoryDESC;
  avg_grade: number;
  start_latlng: LatLng;
  end_latlng: LatLng;
  elev_difference: number;
  distance: number;
  points: string;
};

type Fault = {
  errors: StravaError;
  message: string;
};

type HeartRateZoneRanges = {
  custom_zones: boolean;
  zones: ZoneRanges;
};

type Lap = {
  id: number;
  activity: MetaActivity;
  athlete: MetaAthlete;
  average_cadance: number;
  average_speed: number;
  distance: number;
  elapsed_time: number;
  start_index: number;
  end_index: number;
  max_speed: number;
  moving_time: number;
  name: string;
  pace_zone: number;
  split: number;
  start_date: string;
  start_date_local: string;
  total_elevation_gain: number;
};

type LatLng = [number, number];

type MetaActivity = number;

type MetaAthlete = number;

type MetaClub = {
  id: number;
  resource_state: number;
  name: string;
};

type PhotosSummary = {
  count: number;
  primary: PhotosSummary_primary;
};

type PhotosSummary_primary = {
  id: number;
  source: number;
  unique_id: string;
  urls: string;
};

type PolylineMap = {
  id: string;
  polyline: string;
  summary_polyline: string;
};

type PowerZoneRanges = {
  zones: ZoneRanges;
};

/**
 * RouteType
 * @description 1은 자전거, 2는 러닝
 */
type RouteType = 1 | 2;

/**
 * RouteSubType
 * @description 1은 로드, 2는 산악 자전거, 3은 크로스, 4는 트레일, 5는 여러 운동 섞임
 */
type RouteSubType = 1 | 2 | 3 | 4 | 5;

type Route = {
  athlete: SummaryAthlete;
  description: string;
  distance: number;
  elevation_gain: number;
  id: number;
  id_str: string;
  map: PolylineMap;
  name: string;
  private: boolean;
  starred: boolean;
  timestamp: number;
  type: RouteType;
  sub_type: RouteSubType;
  created_at: string;
  updated_at: string;
  estimated_moving_time: number;
  segments: SummarySegment;
};

type Split = {
  average_speed: number;
  distance: number;
  elapsed_time: number;
  elevation_difference: number;
  pace_zone: number;
  moving_time: number;
  split: number;
};

type SportType =
  | 'AlpineSki'
  | 'BackcountrySki'
  | 'Badminton'
  | 'Canoeing'
  | 'Crossfit'
  | 'EBikeRide'
  | 'Elliptical'
  | 'EMountainBikeRide'
  | 'Golf'
  | 'GravelRide'
  | 'Handcycle'
  | 'HighIntensityIntervalTraining'
  | 'Hike'
  | 'IceSkate'
  | 'InlineSkate'
  | 'Kayaking'
  | 'Kitesurf'
  | 'MountainBikeRide'
  | 'NordicSki'
  | 'Pickleball'
  | 'Pilates'
  | 'Racquetball'
  | 'Ride'
  | 'RockClimbing'
  | 'RollerSki'
  | 'Rowing'
  | 'Run'
  | 'Sail'
  | 'Skateboard'
  | 'Snowboard'
  | 'Snowshoe'
  | 'Soccer'
  | 'Squash'
  | 'StairStepper'
  | 'StandUpPaddling'
  | 'Surfing'
  | 'Swim'
  | 'TableTennis'
  | 'Tennis'
  | 'TrailRun'
  | 'Velomobile'
  | 'VirtualRide'
  | 'VirtualRow'
  | 'VirtualRun'
  | 'Walk'
  | 'WeightTraining'
  | 'Wheelchair'
  | 'Windsurf'
  | 'Workout'
  | 'Yoga';

type StreamSet = {
  time: TimeStream;
  distance: DistanceStream;
  latlng: LatLngStream;
  altitude: AltitudeStream;
  velocity_smooth: SmoothVelocityStream;
  heartrate: HeartrateStream;
  cadence: CadenceStream;
  watts: PowerStream;
  temp: TemperatureStream;
  moving: MovingStream;
  grade_smooth: SmoothGradeStream;
};

type SummaryGear = {
  id: string;
  resource_state: number;
  primary: boolean;
  name: string;
  distance: number;
};

type SummaryPRSegmentEffort = {
  pr_activity_id: number;
  pr_elapsed_time: number;
  pr_date: string;
  effort_count: number;
};

type ActivityType = 'Ride' | 'Run';

type SummarySegment = {
  id: number;
  name: string;
  activity_type: ActivityType;
  distance: number;
  average_grade: number;
  maximum_grade: number;
  elevation_high: number;
  elevation_low: number;
  start_latlng: LatLng;
  end_latlng: LatLng;
  climb_category: number;
  city: string;
  state: string;
  country: string;
  private: boolean;
  athlete_pr_effort: SummaryPRSegmentEffort;
  athlete_segment_stats: SummaryPRSegmentEffort;
};

type SummarySegmentEffort = {
  id: number;
  activity_id: number;
  elapsed_time: number;
  start_date: string;
  start_date_local: string;
  distance: number;
  is_kom: boolean;
};

type TimedZoneDistribution = TimedZoneDistribution;

type UpdatableActivity = {
  commute: boolean;
  trainer: boolean;
  hide_from_home: boolean;
  description: string;
  name: string;
  type: ActivityType;
  sport_type: SportType;
  gear_id: string;
};

type Upload = {
  id: number;
  id_str: string;
  external_id: string;
  error: string;
  status: string;
  acitivty_id: number;
};

type Sex = 'M' | 'F';

type SummaryAthlete = {
  id: number;
  resource_state: number;
  firstname: string;
  lastname: string;
  profile_medium: string;
  profile: string;
  city: string;
  state: string;
  country: string;
  sex: Sex;
  premium: boolean;
  summit: boolean;
  created_at: string;
  updated_at: string;
};

type ZoneRange = {
  min: number;
  max: number;
};

type ZoneRanges = Array<ZoneRange>;

type Zones = {
  heart_rate: HeartRateZoneRanges;
  power: PowerZoneRanges;
};

type SeriesType = 'distance' | 'time';

type AltitudeStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<number>;
};

type CadenceStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<number>;
};

/**
 * DetailGear
 * @description 2 -> summary, 3 -> detail
 */

type DetailedGearResourceState = 2 | 3;
type DetailedGear = {
  id: string;
  resource_state: DetailedGearResourceState;
  primary: boolean;
  name: string;
  distance: number;
  brand_name: string;
  model_name: string;
  frame_type: number;
  description: string;
};

type DetailedSegment = {
  id: number;
  name: string;
  activity_type: ActivityType;
  distance: number;
  average_grade: number;
  maximum_grade: number;
  elevation_high: number;
  elevation_low: number;
  start_latlng: LatLng;
  end_latlng: LatLng;
  climb_category: number;
  city: string;
  state: string;
  country: string;
  praivate: boolean;
  athlete_pr_effort: SummaryPRSegmentEffort;
  athlete_segment_stats: SummarySegmentEffort;
  created_at: string;
  updated_at: string;
  total_elevation_gain: number;
  map: PolylineMap;
  effort_count: number;
  athlete_count: number;
  hazardous: boolean;
  star_count: number;
};

type DetailedSegmentEffort = {
  id: number;
  activity_id: number;
  elapsed_time: number;
  start_date: string;
  start_date_local: string;
  distance: number;
  is_kom: boolean;
  name: string;
  activity: MetaActivity;
  athlete: MetaActivity;
  moving_time: number;
  start_index: number;
  end_index: number;
  average_cadence: number;
  average_watts: number;
  device_watts: boolean;
  average_heartrate: number;
  max_heartrate: number;
  segment: SummarySegment;
  kom_rank: number;
  pr_rank: number;
  hidden: boolean;
};

type DistanceStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<number>;
};

type HeartrateStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<number>;
};

type LatLngStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<LatLng>;
};

type MovingStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<boolean>;
};

type PowerStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<number>;
};

type SmoothGradeStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<number>;
};

type SmoothVelocityStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<number>;
};

type SummaryActivity = {
  id: number;
  external_id: string;
  upload_id: number;
  athlete: MetaAthlete;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  elev_high: number;
  elev_low: number;
  type: ActivityType;
  sport_type: SportType;
  start_date: string;
  start_date_local: string;
  timezone: string;
  start_latlng: LatLng;
  end_latlng: LatLng;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  photo_count: number;
  total_photo_count: number;
  map: PolylineMap;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  flagged: boolean;
  workout_type: number;
  upload_id_str: string;
  average_speed: number;
  max_speed: number;
  has_kudoed: boolean;
  hide_from_home: boolean;
  gear_id: string;
  kilojoules: number;
  average_watts: number;
  device_watts: boolean;
  max_watts: number;
  weighted_average_watts: number;
};

/**
 * SummaryAthleteResourceState
 * @description 1 -> meta, 2 -> summary, 3 -> detail
 */
type SummaryAthleteResourceState = 1 | 2 | 3;
type SummaryAthlete = {
  id: number;
  resource_state: SummaryAthleteResourceState;
  firstname: string;
  lastname: string;
  profile_medium: string;
  profile: string;
  city: string;
  state: string;
  country: string;
  sex: Sex;
  premium: boolean;
  summit: boolean;
  created_at: string;
  updated_at: string;
};

/**
 * SummaryClubResourceState
 * @description 1 -> meta, 2 -> summary, 3 -> detail
 */
type SummaryClubResourceState = 1 | 2 | 3;
type SummaryClub = {
  id: number;
  resource_state: SummaryClubResourceState;
  name: string;
  profile_medium: string;
  cover_photo: string;
  sport_type: SportType;
  activity_types: ActivityType;
  city: string;
  state: string;
  country: string;
  private: boolean;
  member_count: number;
  featured: boolean;
  verified: boolean;
  url: string;
};

type TemperatureStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<number>;
};

type TimeStream = {
  original_size: number;
  resolution: Resolution;
  series_type: SeriesType;
  data: Array<number>;
};

type TimedZoneRange = {
  min: number;
  max: number;
  time: number;
};

type DetailedActivity = {
  id: number;
  external_id: string;
  uploaded_id: number;
  athlete: MetaAthlete;
  name: string;
  distance: number;
  moving_time: number;
  elapsed_time: number;
  total_elevation_gain: number;
  elev_high: number;
  elev_low: number;
  type: ActivityType;
  sport_type: SportType;
  start_date: string;
  start_date_local: string;
  timezone: string;
  start_latlng: LatLng;
  end_latlng: LatLng;
  achievement_count: number;
  kudos_count: number;
  comment_count: number;
  athlete_count: number;
  photo_count: number;
  total_photo_count: number;
  map: PolylineMap;
  trainer: boolean;
  commute: boolean;
  manual: boolean;
  private: boolean;
  flagged: boolean;
  workout_type: number;
  upload_id_str: string;
  average_speed: number;
  max_speed: number;
  has_kudoed: boolean;
  hide_from_home: boolean;
  gear_id: string;
  kilojoules: number;
  average_watts: number;
  device_watts: boolean;
  max_watts: number;
  weighted_average_watts: number;
  description: string;
  photos: PhotosSummary;
  gear: SummaryGear;
  calories: number;
  segment_efforts: DetailedSegmentEffort;
  device_name: string;
  embed_token: string;
  splits_metric: Split;
  splits_standard: Split;
  laps: Lap;
  best_efforts: DetailedSegmentEffort;
};

type DetailedAthlete = {
  id: number;
  resource_state: number;
  firstname: string;
  lastname: string;
  profile_medium: string;
  profile: string;
  city: string;
  state: string;
  country: string;
  sex: Sex;
  premium: boolean;
  summit: boolean;
  created_at: string;
  updated_at: string;
  follower_count: number;
  friend_count: number;
  measurement_preference: string;
  ftp: number;
  weight: number;
  clubs: SummaryClub;
  bikes: SummaryGear;
  shoes: SummaryGear;
};

type Membership = 'member' | 'pending';

type DetailedClub = {
  id: number;
  resource_state: number;
  name: string;
  profile_medium: string;
  cover_photo: string;
  cover_photo_small: string;
  sport_type: SportType;
  activity_types: ActivityType;
  city: string;
  state: string;
  country: string;
  private: number;
  member_count: number;
  featured: boolean;
  verified: boolean;
  url: string;
  membership: Membership;
  admin: boolean;
  owner: boolean;
  following_count: number;
};

type CreateActivityOpts = {
  type: ActivityType;
  description: string;
  distance: number;
  trainer: number;
  commute: number;
};

type GetActivityByIdOpts = {
  includeAllEfforts: boolean;
};

type GetCommentsByActivityIdOpts = {
  pageSize: number;
  afterCursor: string | null | undefined;
};

type GetKudoersByActivityIdOpts = {
  page: number;
  perPage: number;
};

type GetLoggedInAthleteActivitiesOpts = {
  before: number;
  after: number;
  page: number;
  perPage: number;
};

type GetClubActivitiesByIdOpts = {
  page: number;
  perPage: number;
};

type GetClubAdminsByIdOpts = {
  page: number;
  perPage: number;
};

type GetClubMembersByIdOpts = {
  page: number;
  perPage: number;
};

type GetLoggedInAthleteClubs = {
  page: number;
  perPage: number;
};

type GetRoutesByAthleteIdProps = {
  page: number;
  perPage: number;
};

type GetEffortsBySegmentIdProps = {
  startDateLocal: string;
  endDateLocal: string;
  perPage: number;
};

type ExploreSegmentsOpts = {
  activityType: ActivityType;
  minCat: number;
  maxCat: number;
};

type GetLoggedInAthleteStarredSegmentsOpts = {
  page: number;
  perPage: number;
};

/**
 *   time: TimeStream;
  distance: DistanceStream;
  latlng: LatLngStream; // 예외
  altitude: AltitudeStream;
  velocity_smooth: SmoothVelocityStream;
  heartrate: HeartrateStream;
  cadence: CadenceStream;
  watts: PowerStream;
  temp: TemperatureStream;
  moving: MovingStream;
  grade_smooth: SmoothGradeStream;
 */

type ResponseStream =
  | {
      type: keyof Omit<StreamSet, 'latlng' | 'moving'>;
      data: Array<number>;
      series_type: SeriesType;
      original_size: number;
      resolution: Resolution;
    }
  | {
      type: 'latlng';
      data: Array<LatLng>;
      series_type: SeriesType;
      original_size: number;
      resolution: Resolution;
    }
  | {
      type: 'moving';
      data: Array<boolean>;
      series_type: SeriesType;
      original_size: number;
      resolution: Resolution;
    };

type CreateUploadOpts = {
  file: string;
  name: string;
  description: string;
  trainer: string;
  commute: string;
  dataType: string;
  externalId: string;
};

declare module 'strava_api_v3' {
  const ApiClient: {
    basePath: string;
    authentications: {
      strava_oauth: { type: 'oauth2'; accessToken: string };
    };
    defaultHeaders: Array<string>;
    timeout: number;
    cache: boolean;
    enabledCookies: boolean;
    agent: unknown;
    requestAgent: unknown;
    instance: Omit<typeof ApiClient, 'instance'>;
  };
  const api: {
    createActivity: (
      name: string,
      sportType: SportType,
      startDateLoal: string,
      elapsedTime: string,
      opts: CreateActivityOpts | null | undefined,
      callback: (error: Fault, data: DetailedActivity, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedActivity>;
    getActivityById: (
      id: number,
      opts: GetActivityByIdOpts | null | undefined,
      callback: (error: Fault, data: DetailedActivity, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedActivity>;
    getCommentsByActivityId: (
      id: number,
      opts: GetCommentsByActivityIdOpts | null | undefined,
      callback: (error: Fault, data: Array<DetailedActivity>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<DetailedActivity>>;
    getKudoersByActivityId: (
      id: number,
      opts: GetKudoersByActivityIdOpts | null | undefined,
      callback: (error: Fault, data: Array<SummaryAthlete>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<SummaryAthlete>>;
    getLapsByActivityId: (
      id: number,
      callback: (error: Fault, data: Array<Lap>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<Lap>>;
    getLoggedInAthleteActivities: (
      opts: GetLoggedInAthleteActivitiesOpts | null | undefined,
      callback: (error: Fault, data: Array<SummaryActivity>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<SummaryActivity>>;
    getZonesByActivityId: (
      id: number,
      callback: (error: Fault, data: Array<ActivityZone>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<ActivityZone>>;
    updateActivityById: (
      id: number,
      opts: UpdatableActivity | null | undefined,
      callback: (error: Fault, data: DetailedActivity, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedActivity>;
    getLoggedInAthlete: (
      callback: (error: Fault, data: DetailedAthlete, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedAthlete>;
    getLoggedInAthleteZones: (
      callback: (error: Fault, data: Array<Zones>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<Zones>>;
    getStats: (
      id: number,
      callback: (error: Fault, data: ActivityStats, statusCode: HttpStatusCode) => void,
    ) => Promise<ActivityStats>;
    updateLoggedInAthlete: (
      weight: number,
      callback: (error: Fault, data: DetailedAthlete, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedAthlete>;
    getClubActivitiesById: (
      id: number,
      opts: GetClubActivitiesByIdOpts | null | undefined,
      callback: (error: Fault, data: Array<ClubActivity>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<ClubActivity>>;
    getClubAdminsById: (
      id: number,
      opts: GetClubAdminsByIdOpts | null | undefined,
      callback: (error: Fault, data: Array<SummaryAthlete>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<SummaryAthlete>>;
    getClub: (
      id: number,
      callback: (error: Fault, data: DetailedClub, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedClub>;
    getClubMembersById: (
      id: number,
      opts: GetClubMembersByIdOpts | null | undefined,
      callback: (error: Fault, data: Array<ClubAthlete>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<ClubAthlete>>;
    getLoggedInAthleteClubs: (
      opts: GetLoggedInAthleteClubs | null | undefined,
      callback: (error: Fault, data: Array<SummaryClub>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<SummaryClub>>;
    getGearById: (
      id: string,
      callback: (error: Fault, data: DetailedGear, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedGear>;
    getRouteAsGPX: (
      id: number,
      callback: (error: Fault, data: any, statusCode: HttpStatusCode) => void,
    ) => Promise<any>;
    getRouteAsTCX: (
      id: number,
      callback: (error: Fault, data: any, statusCode: HttpStatusCode) => void,
    ) => Promise<any>;
    getRouteById: (
      id: number,
      callback: (error: Fault, data: Route, statusCode: HttpStatusCode) => void,
    ) => Promise<Route>;
    getRoutesByAthleteId: (
      opts: GetRoutesByAthleteIdProps | null | undefined,
      callback: (error: Fault, data: Array<Route>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<Route>>;
    getEffortsBySegmentId: (
      segmendId: number,
      opts: GetEffortsBySegmentIdProps | null | undefined,
      callback: (
        error: Fault,
        data: Array<DetailedSegmentEffort>,
        statusCode: HttpStatusCode,
      ) => void,
    ) => Promise<Array<DetailedSegmentEffort>>;
    getSegmentEffortById: (
      id: number,
      callback: (error: Fault, data: DetailedSegmentEffort, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedSegmentEffort>;
    exploreSegments: (
      bounds: [number, number, number, number],
      opts: ExploreSegmentsOpts | null | undefined,
      callback: (error: Fault, data: Array<ExplorerResponse>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<ExplorerResponse>>;
    getLoggedInAthleteStarredSegments: (
      opts: GetLoggedInAthleteStarredSegmentsOpts | null | undefined,
      callback: (error: Fault, data: Array<SummarySegment>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<SummarySegment>>;
    getSegmentById: (
      id: number,
      callback: (error: Fault, data: DetailedSegment, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedSegment>;
    starSegment: (
      id: number,
      starred: boolean,
      callback: (error: Fault, data: DetailedSegment, statusCode: HttpStatusCode) => void,
    ) => Promise<DetailedSegment>;
    getActivityStreams: (
      id: number,
      keys: Array<BaseStreamSeriesType>,
      key_by_type: boolean,
      callback: (error: Fault, data: Array<ResponseStream>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<ResponseStream>>;
    getRouteStreams: (
      id: number,
      callback: (error: Fault, data: Array<ResponseStream>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<ResponseStream>>;
    getSegmentEffortStreams: (
      id: number,
      keys: Array<BaseStreamSeriesType>,
      key_by_type: boolean,
      callback: (error: Fault, data: Array<ResponseStream>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<ResponseStream>>;
    getSegmentStreams: (
      id: number,
      keys: Array<BaseStreamSeriesType>,
      key_by_type: boolean,
      callback: (error: Fault, data: Array<ResponseStream>, statusCode: HttpStatusCode) => void,
    ) => Promise<Array<ResponseStream>>;
    createUpload: (
      opts: CreateUploadOpts | null | undefined,
      callback: (error: Fault, data: Upload, statusCode: HttpStatusCode) => void,
    ) => Promise<Upload>;
    getUploadById: (
      uploadId: number,
      callback: (error: Fault, data: Upload, statusCode: HttpStatusCode) => void,
    ) => Promise<Upload>;
  };
  const ActivitiesApi: () => typeof api;
}
