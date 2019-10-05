export const fetchDataHandler = (url, options = {}) =>
  fetch(url, options).then(response => response.json());
