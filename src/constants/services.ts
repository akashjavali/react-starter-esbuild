const API_SERVER_URL = process.env.REACT_APP_API_SERVER_URL || '';

const API_VERSION = 'v1';

const API = {
  // auth urls
  logIn: 'login',
  otpLogin: 'otp',
  verifyToken: 'verify-token',

  // Admin urls
  user: 'admin/user',
};

export { API_SERVER_URL, API_VERSION, API };
