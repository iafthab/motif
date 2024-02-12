type Icon = {
  name: string;
  color?: string;
  size?: string;
};

interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  media_type: string;
}

interface SeriesDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  first_air_date: string;
  media_type: string;
  name: string;
  vote_average: number;
  vote_count: number;
}

interface PeopleDetails {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  known_for: [MovieDetails | SeriesDetails];
}

interface fetchedData {
  page: number;
  results: MovieDetails[] | SeriesDetails[] | PeopleDetails[];
  total_pages: number;
  total_results: number;
}
