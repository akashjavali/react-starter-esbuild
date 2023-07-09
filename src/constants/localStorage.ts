/* eslint-disable func-names */
const LocalStorageService = (function () {
  let service: any;

  /**
   * Returns the service object.
   * @returns {Service} The service object.
   */
  function getService() {
    if (!service) {
      // @ts-ignore
      service = this;
      return service;
    }
    return service;
  }

  /**
   * Sets the access and refresh tokens in local storage.
   * @param {object} tokenObj - the object containing the access and refresh tokens.
   * @returns None
   */
  function setToken(tokenObj: { access_token: string; refresh_token: string }) {
    localStorage.setItem('access_token', tokenObj.access_token);
    localStorage.setItem('refresh_token', tokenObj.refresh_token);
  }

  /**
   * Gets the access token from local storage.
   * @returns {string} The access token.
   */
  function getAccessToken() {
    return localStorage.getItem('access_token');
  }

  /**
   * Gets the refresh token from local storage.
   * @returns {string} The refresh token.
   */
  function getRefreshToken() {
    return localStorage.getItem('refresh_token');
  }

  /**
   * Clears the access and refresh tokens from local storage.
   * @returns None
   */
  function clearToken() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');

    //  use access token and refresh token instead of this
    localStorage.removeItem('user');
  }

  /**
   * Sets the user in local storage.
   * @param {any} data - the user data to set in local storage
   * @returns None
   */
  //  use access token and refresh token instead of this
  function setUser(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  /**
   * Gets the user object from local storage.
   * @returns {User | null} - the user object, or null if there is no user object in local storage.
   */
  //  use access token and refresh token instead of this
  function getUser() {
    const userObjectString = localStorage.getItem('user');
    if (userObjectString) {
      return JSON.parse(userObjectString);
    }

    return null;
  }

  return {
    getService,
    setToken,
    getAccessToken,
    getRefreshToken,
    clearToken,
    getUser,
    setUser,
  };
})();

export default LocalStorageService;
