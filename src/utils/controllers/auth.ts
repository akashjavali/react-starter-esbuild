import { API } from 'constants';

import { getApi, postApi, putApi } from '../config/apis';

/**
 * Logs in the user with the given data.
 * @param {any} data - the data to send to the server.
 * @returns None
 */
export const logIn = (data: any) => postApi(`${API.logIn}`, data);

/**
 * Generates an OTP and sends it to the server.
 * @param {number} number - the number to send to the server.
 * @returns None
 */
export const generateOTP = (number: any) => postApi(`${API.otpLogin}`, number);

/**
 * Logs in the user via OTP.
 * @param {any} data - the data to send to the API.
 * @returns A promise that resolves to the response from the API.
 */
export const loginViaOTP = (data: any) => putApi(`${API.otpLogin}`, data);

/**
 * Gets the roles from the API.
 * @returns A promise that resolves to the roles.
 */
export const getRoles = () => getApi(API.roles);
