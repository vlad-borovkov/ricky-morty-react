class Api {
  constructor({ domain }) {
    this._domain = domain;
    this._headers = {
      "Content-Type": "application/json",
    };
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`${res.status} - ${res.statusText}`);
  }

  makeRequest(url, method = "GET", body) {
    const requestUrl = this._domain + url;
    return fetch(requestUrl, {
      method: method,
      headers: this._headers,
      body: JSON.stringify(body),
    }).then(this._checkResponse);
  }

  getAllEpisodesValue(pageNumber) {
    const infoUsersDefault = `/${pageNumber}`;
    return this.makeRequest(infoUsersDefault)
  }

  getEpisodesValue() {
    const infoUsersDefault = "/episode";
    return this.makeRequest(infoUsersDefault)
  }

  getEpisodesValueNext(pageNumber) {
    const infoUsersDefault = `/episode?page=${pageNumber}`;
    return this.makeRequest(infoUsersDefault)
  }

  getCharactersFromServer(number) {
    const cardsFromServer = `/character/${number}`;
    return this.makeRequest(cardsFromServer)
  }

  changeUserInfo(userValue) {
    const requestUrl = "/users/me";
    const userData = userValue;
    
    //передать объект на сервер
    return this.makeRequest(requestUrl, "PATCH", userData);
  }

  changeAvatar(avatarUrl) {
    const requestUrl = "/users/me/avatar";
    return this.makeRequest(requestUrl, "PATCH", avatarUrl);
  }

  handlerAddCard(cardsData) {
    const requestUrl = "/cards";
    return this.makeRequest(requestUrl, "POST", cardsData);
  }

  changeLikeCardStatus(cardId, islikedState) {
    const requestUrl = `/cards/${cardId}/likes`;
    return this.makeRequest(requestUrl, `${islikedState ? "PUT" : "DELETE"}`)
  }

  deleteLikeOnCard(cardId) {
    const requestUrl = `/cards/${cardId}/likes`;
    return this.makeRequest(requestUrl, "DELETE");
  }

  addLikeOnCard(cardId) {
    const requestUrl = `/cards/${cardId}/likes`;
    return this.makeRequest(requestUrl, "PUT");
  }

  deleteCard(cardId) {
    const requestUrl = `/cards/${cardId}`;
    return this.makeRequest(requestUrl, "DELETE");
  }
}

export const api = new Api({
  domain: "https://rickandmortyapi.com/api/",
});
