export const getMovieCredits = ({
  crew,
  key,
  value,
  length,
}: {
  crew: Array<MovieCrew>;
  key: keyof MovieCrew;
  value: string;
  length: number;
}) => {
  return crew
    .filter((crew) => {
      return crew[key] === value;
    })
    .slice(0, length);
};

export const getSeriesCredits = ({
  crew,
  value,
  secondaryValue,
  length,
}: {
  crew: Array<SeriesCrew>;
  value: string;
  secondaryValue?: string;
  length: number;
}) => {
  return crew
    .filter((member) => {
      return member.jobs[0].job === value || secondaryValue;
    })
    .sort((a, b) => b.total_episode_count - a.total_episode_count)
    .slice(0, length);
};
