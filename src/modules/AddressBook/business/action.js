import getAddressbook from './service';

/**
 * Action types.
 */
const TYPES = {
  GET_ADDRESSBOOK_BEGIN: 'GET_ADDRESSBOOK_BEGIN',
  GET_ADDRESSBOOK_SUCCESS: 'GET_ADDRESSBOOK_SUCCESS',
  GET_ADDRESSBOOK_FAILURE: 'GET_ADDRESSBOOK_FAILURE'
};

/**
 * Fetch to addressbook mock service.
 * @name  fetchAddressbook
 * @returns {function}
 */
const fetchAddressbook = () => {
  return (dispatch) => {
    dispatch(fetchAdressbookBegin());
    return getAddressbook()
      .then((response) => {
        dispatch(fetchAdressbookSuccess(response));
      })
      .catch((error) => {
        dispatch(fetchAdressbookFailure(error));
      });
  };
};

/**
 * Fetch operation begin action.
 * @name  fetchAdressbookBegin
 * @returns {function}
 */
const fetchAdressbookBegin = () => ({
  type: TYPES.GET_ADDRESSBOOK_BEGIN
});

/**
 * Fetch operation success action.
 * @name  fetchAdressbookSuccess
 * @returns {function}
 */
const fetchAdressbookSuccess = (response) => ({
  type: TYPES.GET_ADDRESSBOOK_SUCCESS,
  payload: { ...response }
});

/**
 * Fetch operation failed action.
 * @name  fetchAdressbookFailure
 * @returns {function}
 */
const fetchAdressbookFailure = (response) => ({
  type: TYPES.GET_ADDRESSBOOK_FAILURE,
  payload: response
});

export { fetchAddressbook, TYPES };
