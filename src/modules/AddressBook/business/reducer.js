import { TYPES } from './action';

export const initialState = {
  response: null,
  loading: false,
  error: null,
  data: []
};

/**
 * Addressbook reducer.
 */
export const addressbook = (state = initialState, action) => {
  if (action.type === TYPES.GET_ADDRESSBOOK_BEGIN)
    return {
      ...state,
      response: null,
      loading: true,
      error: null
    };
  else if (action.type === TYPES.GET_ADDRESSBOOK_SUCCESS)
    return {
      ...state,
      error: null,
      loading: false,
      response: action.payload,
      data: action.payload.data
    };
  else if (action.type === TYPES.GET_ADDRESSBOOK_FAILURE)
    return {
      ...state,
      loading: false,
      error: action.payload,
      response: null
    };
  else if (action.type === TYPES.USER_SEARCH) {
    const searchTerm = action.payload.toLowerCase();
    console.log(searchTerm);
    if (searchTerm === '') return { ...state, data: state.response.data };
    else
      return {
        ...state,
        data: state.response.data.filter(
          (d) =>
            d.first_name.toLowerCase().includes(searchTerm) ||
            d.last_name.toLowerCase().includes(searchTerm) ||
            d.policy_number.toLowerCase().includes(searchTerm)
        )
      };
  } else return state;
};
