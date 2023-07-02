import { baseMoviesApiUrl } from './MoviesApi';

export const transformMovie = (movie) => {
  return {
    movieId: movie.id,
    nameRU: movie.nameRU,
    image: baseMoviesApiUrl + movie.image.url,
    trailerLink: movie.trailerLink,
    duration: movie.duration,
    country: movie.country,
    director: movie.director,
    year: movie.year,
    description: movie.description,
    thumbnail: baseMoviesApiUrl + movie.image.formats.thumbnail.url,
    owner: movie.owner,
    nameEN: movie.nameEN,
  }
}