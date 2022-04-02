import { TYPES } from './action';

export const initialState = {
  response: [],
  loading: false,
  error: null,
  data: [],
  searchTerm: '',
  userInputFocus: false
};

/**
 * Addressbook reducer.
 */
export const addressbook = (state = initialState, action) => {
  if (action.type === TYPES.GET_ADDRESSBOOK_BEGIN)
    return {
      ...state,
      loading: true
    };
  else if (action.type === TYPES.GET_ADDRESSBOOK_SUCCESS)
    return {
      ...state,
      loading: false,
      response: action.payload.data.sort((a, b) => a.first_name.localeCompare(b.first_name)),
      data: action.payload.data.sort((a, b) => a.first_name.localeCompare(b.first_name))
    };
  else if (action.type === TYPES.GET_ADDRESSBOOK_FAILURE)
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  else if (action.type === TYPES.USER_SEARCH) {
    const searchTerm = action.payload.toLowerCase();

    if (searchTerm === '') return { ...state, data: state.response };
    else
      return {
        ...state,
        data: state.response
          .filter(
            (d) =>
              d.first_name.toLowerCase().includes(searchTerm) ||
              d.last_name.toLowerCase().includes(searchTerm) ||
              d.policy_number.toLowerCase().includes(searchTerm)
          )
          .sort((a, b) => a.first_name.localeCompare(b.first_name)),
        searchTerm: searchTerm
      };
  } else if (action.type === TYPES.USER_FOCUS_SEARCH) {
    return {
      ...state,
      userInputFocus: action.payload
    };
  } else return state;
};
