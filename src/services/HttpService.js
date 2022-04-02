import axios from 'axios';

/**
 * Token kontrolü TokenService üzerinden sorgulanıyor.
 */
const baseURL = process.env.API_URL || '';
const X_API_KEY = process.env.X_API_Key;
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

// Create a axios client.
const client = axios.create({
  baseURL: baseURL,
  cancelToken: source.token
});

// client defaults.
client.defaults.headers.common['Content-Type'] = 'application/json';
client.defaults.headers.common['X-API-KEY'] = X_API_KEY;
client.defaults.timeout = 60000;

/**
 * Info at https://github.com/axios/axios
 * @name    beginRequest
 * @param   {object} request Request object.
 * @param   {object} options config object.
 * @returns {Promise} Returns a Promise object.
 * @example
 * beginRequest({url: "/users"}).then(response => console.log(response));
 */
export const beginRequest = (config) => {
  return client(config).catch(handleError);
};

/**
 * Cancel to current request.
 * @name    cancelRequest
 */
export const cancelRequest = () => {
  source.cancel('User calceled current request.');
};

/**
 * Error handler.
 * @name    handleError
 * @param   {object} error Error object.
 */
const handleError = (error) => {
  if (axios.isCancel(error)) {
    console.error('Request canceled', error.message);
  } else {
    console.error(error.response.data.error);
  }
};
