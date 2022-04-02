import { HttpService } from '../../../services';

/**
 * Fetch addressbook service method.
 * @name    getAddressbook
 * @returns {Promise} Response result.
 */
const getAddressbook = () =>
  HttpService.beginRequest({
    url: '/addressbook_scheme.json',
    validateStatus: (status) => status < 400
  });

export default getAddressbook;
