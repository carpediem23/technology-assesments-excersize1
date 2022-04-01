import { HttpService } from '../../../services';

/**
 * Fetch addressbook service method.
 * @name    getAddressbook
 * @returns {Promise} Response result.
 */
const getAddressbook = () => HttpService.beginRequest({ url: '/address_book.json' });

export default getAddressbook;
