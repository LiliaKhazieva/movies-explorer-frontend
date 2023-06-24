import { SHORT_MOVIE_DURATION } from './constants';

export const filterMovies = ({
  movies,
  searchQuery,
  isShort,
}) => {
  if (!movies) {
    return null;
  }
  return movies.filter(movie => {
    return (isShort ? movie.duration <= SHORT_MOVIE_DURATION : movie)
      && movie.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
  })
}