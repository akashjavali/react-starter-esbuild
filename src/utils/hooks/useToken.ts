import { useState } from 'react';
import axios from 'axios';
import LocalStorageService from '../misc/localStorage';

const LocalStorage = LocalStorageService.getService();

/**
 * A hook that returns the current token and a function to save a new token.
 * @returns {[string | null, (userToken: { access_token: string; refresh_token: string }) => void]}
 */
export default function useToken() {
  const getToken = () => {
    const tokenString = LocalStorage.getAccessToken();
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  /**
   * Saves the user's token to local storage.
   * @param {object} userToken - the user's token object
   * @returns None
   */
  const saveToken = (userToken: { access_token: string; refresh_token: string }) => {
    setToken(userToken);
    LocalStorage.setToken(userToken); // can be changed to local storage
  };

  /**
   * Removes the token from the local storage and the axios header.
   */
  const removeToken = () => {
    LocalStorage.clearStorage();
    setToken(null);
    axios.defaults.headers.common.Authorization = '';
  };

  return {
    setToken: saveToken,
    removeToken,
    token,
  };
}
