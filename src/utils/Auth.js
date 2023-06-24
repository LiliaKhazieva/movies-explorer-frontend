class Auth {
  constructor(options) {
    this.baseUrl = options.baseUrl;
    this.headers = options.headers;
  }

  _getResponseCheck(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status)
  }

  register(name, email, password) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(this._getResponseCheck)
  }

  login(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password })
    })
      .then(this._getResponseCheck)
  }

  checkToken(jwt) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`,
      }
    })
      .then(this._getResponseCheck)
  }
}

const auth = new Auth({
  baseUrl: "https://api.lilia-movies.nomoredomains.rocks",
});

export default auth;