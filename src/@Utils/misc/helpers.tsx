/**
 * Takes in a string of code and adds the correct amount of spaces to the beginning of each line.
 * @param {string} docName - the name of the document to format
 * @returns {string} the formatted document name
 */
export const getDocumentName = (docName: string) => {
  if (!docName || typeof docName !== 'string') {
    return null;
  }

  const names = docName?.split('.');
  if (names.length <= 2) {
    return docName;
  }
  const filteredNames = names.filter((name, index) => names.length - 2 !== index);

  const originalDocName = filteredNames.join('.');
  return originalDocName;
};
