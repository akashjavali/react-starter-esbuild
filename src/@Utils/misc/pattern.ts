/**
 * A collection of regular expressions used to validate user input.
 * @type {object}
 */
export const pattern = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  mobile: /^([+]\d{2})?[6-9]\d{9}$/,
  aadhaar: /^\d{4}\d{4}\d{4}$/g,
  panNo: /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
  gstNo: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/,
  nameInitial: /(\p{L}{1})\p{L}+/,
  otp: /^([0-9]{6})$/,
  pincode: /^[1-9][0-9]{5}$/,
  bank_account: /^\d{9,18}$/,
  ifsc: /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/,
  positiveInteger: /^[0-9]*$/,
  noSpace: /^[^\s]/,
  name: /^[a-zA-Z\s]+$/,
  rupees: /^\d*(?:\.\d*)?$/,
  map: /^https:\/\/goo\.gl\/maps\/[a-zA-Z0-9]+$/,
  removeSpecialChars: /^[A-Za-z0-9 ]+$/,
  allowOnlyNumbers: /^(\s*|\d+)$/,
  containsAlphaNumericOrEmptyStr: /^[a-zA-Z0-9]*$/,
  amountWithTwoDecimals: /^\d*(\.?\d{1,2})$/,
  days: /^(?:[1-9]\d|[1-9])$/,
  website:
    /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm,
} as const;

/**
 * Checks if the password is valid.
 * @param {string} value - the password to check
 * @returns {string} the error message if the password is invalid, otherwise null
 */
export const checkSignInPasswordPattern = (value: string) => {
  const isWhitespace = /^(?=.*\s)/;
  if (isWhitespace.test(value)) {
    return 'Enter a valid password.';
  }
  return true;
};

/**
 * Checks if the password is valid.
 * @param {string} value - the password to check
 * @returns {string} the error message if the password is invalid, otherwise null
 */
export const checkPasswordPattern = (value: string) => {
  const isWhitespace = /^(?=.*\s)/;
  if (isWhitespace.test(value)) {
    return 'Password must not contain whitespace.';
  }

  /**
   * Checks if the password contains at least one uppercase character.
   * @param {string} value - the password to check
   * @returns {string} - the error message if the password does not contain at least one uppercase character.
   */
  const isContainsUppercase = /^(?=.*[A-Z])/;
  if (!isContainsUppercase.test(value)) {
    return 'Password must have at least one uppercase character.';
  }

  /**
   * Checks if the password contains at least one lowercase character.
   * @param {string} value - the password to check
   * @returns {string} - the error message if the password does not contain at least one lowercase character.
   */
  const isContainsLowercase = /^(?=.*[a-z])/;
  if (!isContainsLowercase.test(value)) {
    return 'Password must have at least one lowercase character.';
  }

  /**
   * Checks if the password contains at least one digit.
   * @param {string} value - the password to check
   * @returns {string} - the error message if the password does not contain at least one digit.
   */
  const isContainsNumber = /^(?=.*[0-9])/;
  if (!isContainsNumber.test(value)) {
    return 'Password must contain at least one digit.';
  }

  /**
   * Checks if the password contains at least one special symbol.
   * @param {string} value - the password to check
   * @returns {string} - the error message if the password does not contain at least one special symbol
   */
  const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\\[\]|\\:;"'<>,.?/_₹])/;
  if (!isContainsSymbol.test(value)) {
    return 'Password must contain at least one special symbol.';
  }

  // const isValidLength = /^.{6}$/;
  // if (!isValidLength.test(value)) {
  //   return "Password must be 6 characters long.";
  // }
  return true;
};
