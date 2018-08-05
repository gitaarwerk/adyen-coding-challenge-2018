function objectToQueryString(dataObject) {
  console.log('data', dataObject);
  const newQueryStringBuffer = [];
  for (var item in dataObject) {
    if (dataObject[item]) {
      newQueryStringBuffer.push(
        encodeURIComponent(item) + '=' + encodeURIComponent(dataObject[item])
      );
    }
  }
  return newQueryStringBuffer.join('&');
}

/**
 * @param   {string} path
 * @param   {Object} [headers]
 * @returns {Promise<Response>}
 */
export function get(path, queryStringObject = {}, headers = {}) {
  console.log(`${path}?${objectToQueryString(queryStringObject)}`);
  return fetch(`${path}?${objectToQueryString(queryStringObject)}`, {
    method: 'GET',
    credentials: 'same-origin',
    cache: 'no-store'
  });
}

/**
 * @param {string}  path
 * @param {*}       data
 * @returns {Promise<Response>}
 */
export function post(path, data, queryStringObject = {}) {
  return fetch(`${path}?${objectToQueryString(queryStringObject)}`, {
    method: 'POST',
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    },
    credentials: 'same-origin',
    body: JSON.stringify(data)
  });
}

/**
 * @typedef   {Object}    ParsedErrorResponse
 * @property  {number}    [statusCode]
 * @property  {string}    message
 * @typedef   {Object}               ParsedResponse
 * @property  {*}                   [res]
 * @property  {ParsedErrorResponse} [err]
 * @param   {Response}  response
 *
 * @returns {ParsedResponse}
 */
export function parseRequest(response) {
  const responseHeaders = getContentTypeFromResponseHeaders(response);

  if (responseHeaders.includes('application/json')) {
    return parseJsonResponse(response);
  }

  return response.text().then(text => ({ res: text }));
}

/**
 * @param {Response} response
 * @returns {ParsedResponse}
 */
function getContentTypeFromResponseHeaders(response) {
  return (response.headers.get('Content-Type') || '').split(';').map(item => item.trim());
}

/**
 * @param {Response} response
 * @returns {ParsedResponse}
 */
function parseJsonResponse(response) {
  return response.json().then(
    data => ({ res: data }),
    () => ({
      err: {
        message: 'Not valid JSON'
      }
    })
  );
}
