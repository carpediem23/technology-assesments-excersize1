import { HttpService } from '../../../services';

/**
 * Fetch addressbook service method.
 * @name    getAddressbook
 * @returns {Promise} Response result.
 */
const getAddressbook = () => HttpService.beginRequest({ url: '/excersize_1_scheme.json' });

export default getAddressbook;
