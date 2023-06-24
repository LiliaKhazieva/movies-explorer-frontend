export const baseMoviesApiUrl = 'https://api.nomoreparties.co';

class MoviesApi {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _getResponseCheck(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getMovies() {
    return fetch(`${this.baseUrl}/beatfilm-movies`, {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(this._getResponseCheck);
  }
}

const moviesApi = new MoviesApi({
  baseUrl: baseMoviesApiUrl,
});

export default moviesApi;