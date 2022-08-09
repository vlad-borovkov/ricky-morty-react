class Api {
  constructor({ domain }) {
    this._domain = domain;
    this._headers = {
      'Content-Type': 'application/json',
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status} - ${res.statusText}`);
  }

  makeRequest(url, method = 'GET', body) {
    const requestUrl = this._domain + url;
    return fetch(requestUrl, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  getAllEpisodesValue(pageNumber) {
    const infoUsersDefault = `/episode?page=${pageNumber}`;
    return this.makeRequest(infoUsersDefault);
  }

  getEpisodesValue(number) {
    const infoUsersDefault = `/episode/${number}`;
    return this.makeRequest(infoUsersDefault);
  }

  getEpisodesValueNext(pageNumber) {
    const infoUsersDefault = `/episode?page=${pageNumber}`;
    return this.makeRequest(infoUsersDefault);
  }

  getCharactersFromServer(number) {
    const charactersFromServer = `/character/${number}`;
    return this.makeRequest(charactersFromServer);
  }

  getLocationsFromServer(number) {
    const locationFromServer = `/location/${number}`;
    return this.makeRequest(locationFromServer);
  }
}

export const api = new Api({
  domain: 'https://rickandmortyapi.com/api',
});
