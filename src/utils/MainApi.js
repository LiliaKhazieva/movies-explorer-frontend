class MainApi {
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

  editProfile(name, email) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
      }),
    }).then(this._getResponseCheck);
  }

  getSavedMovies() {
    return fetch(`${this.baseUrl}/movies`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then(this._getResponseCheck);
  }

  saveMovie(movie) {
    return fetch(`${this.baseUrl}/movies`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(movie),
    }).then(this._getResponseCheck);
  }

  deleteMovie(id) {
    return fetch(`${this.baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
      },
    }).then(this._getResponseCheck);
  }
}

const mainApi = new MainApi({
  baseUrl: "https://api.lilia-movies.nomoredomains.rocks",
});

export default mainApi;