export interface ILaunchProgram {
    flight_number: number;
    mission_name: string;
    mission_id: any[];
    upcoming?: boolean;
    launch_year: string;
    launch_date_unix?: number;
    launch_date_utc?: string;
    launch_date_local?: string;
    is_tentative?: boolean;
    tentative_max_precision?: string;
    tbd?: boolean;
    launch_window?: number;
    rocket?: any;
    ships?: any[];
    telemetry?: {
      flight_club?: any;
    };
    launch_site?: any;
    launch_success: boolean;
    launch_failure_details?: any;
    links: {
      mission_patch?: string;
      mission_patch_small: string;
      reddit_campaign?: any;
      reddit_launch?: any;
      reddit_recovery?: any;
      reddit_media?: any;
      presskit?: any;
      article_link?: string;
      wikipedia?: string;
      video_link?: string;
      youtube_id?: string;
      flickr_images?: any[];
    };
    details?: string;
    static_fire_date_utc?: string;
    static_fire_date_unix?: number;
    last_date_update?: string;
    last_ll_launch_date?: string;
    last_ll_update?: string;
    last_wiki_launch_date?: string;
    last_wiki_revision?: string;
    last_wiki_update?: string;
    launch_date_source?: string;
    timeline?: any;
    crew?: any;
  }

export interface IFilters {
    year: any;
    landed: string;
    launch: string;
}