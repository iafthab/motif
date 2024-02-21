type Icon = {
  name: string;
  color?: string;
  size?: string;
};

type MovieOverview = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language?: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date?: string;
  title: string;
  video: boolean;
  origin_country?: string[];
  vote_average: number;
  vote_count: number;
  original_name?: string;
  first_air_date?: string;
  media_type?: string;
  name?: string;
};

type PeopleOverview = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for?: [MovieDetails | SeriesDetails];
};

interface MovieDetails extends MovieOverview {
  belongs_to_collection?: {
    id: boolean;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage: string;
  imdb_id: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  tagline: string;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
}

type EpisodeOverview = {
  id: number;
  name: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: string;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
};

interface SeriesDetails extends MovieOverview {
  created_by: Array<{
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  }>;
  episode_run_time: number | number[];
  first_air_date: string;
  genres: Array<{ id: number; name: string }>;
  homepage: string;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: EpisodeOverview;
  name: string;
  next_episode_to_air: EpisodeOverview;
  networks: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  number_of_episodes: string;
  number_of_seasons: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  seasons: Array<{
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
    vote_average: number;
  }>;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

type FetchedMovieData = {
  page: number;
  results: MovieOverview[];
  total_pages: number;
  total_results: number;
};

type FetchedPeopleData = {
  page: number;
  results: PeopleOverview[];
  total_pages: number;
  total_results: number;
};
type Crew = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  department: string;
};

interface MovieCrew extends Crew {
  credit_id: string;
  job: string;
}

interface SeriesCrew extends Crew {
  jobs: [
    {
      credit_id: string;
      job: string;
      episode_count: number;
    }
  ];
  total_episode_count: number;
}

type MovieCredits = {
  id: number;
  cast: Array<{
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id?: number;
    character?: string;
    credit_id: string;
    order?: number;
  }>;
  crew: Array<MovieCrew>;
};

type SeriesCredits = {
  id: number;
  cast: Array<{
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    roles: Array<{
      credit_id: string;
      character: string;
      episode_count: number;
    }>;
    total_episode_count: number;
    order: number;
  }>;
  crew: Array<SeriesCrew>;
};
