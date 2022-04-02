import getAddressbook from './service';

/**
 * Action types.
 */
const TYPES = {
  GET_ADDRESSBOOK_BEGIN: 'GET_ADDRESSBOOK_BEGIN',
  GET_ADDRESSBOOK_SUCCESS: 'GET_ADDRESSBOOK_SUCCESS',
  GET_ADDRESSBOOK_FAILURE: 'GET_ADDRESSBOOK_FAILURE',
  USER_SEARCH: 'USER_SEARCH',
  USER_FOCUS_SEARCH: 'USER_FOCUS_SEARCH'
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

/**
 * User search method.
 * @name    userSearch
 * @param   {string} searchTerm User's search term.
 * @returns {function}
 */
const userSearch = (searchTerm) => (dispatch) => dispatch(userSearchAction(searchTerm));

/**
 * User search action.
 * @name    userSearchAction
 * @param   {string} searchTerm User's search term.
 * @returns {function}
 */
const userSearchAction = (searchTerm) => ({
  type: TYPES.USER_SEARCH,
  payload: searchTerm
});

/**
 * User search focus method.
 * @name    userFocusSearch
 * @param   {boolean} focus User clicked input.
 * @returns {function}
 */
const userFocusSearch = (focus) => (dispatch) => dispatch(userFocusSearchAction(focus));

/**
 * User search focus action.
 * @name    userFocusSearchAction
 * @param   {boolean} focus User clicked input.
 * @returns {function}
 */
const userFocusSearchAction = (focus) => ({
  type: TYPES.USER_FOCUS_SEARCH,
  payload: focus
});

export { fetchAddressbook, userSearch, userFocusSearch, TYPES };
