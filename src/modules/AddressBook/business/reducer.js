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
  switch (action.type) {
    case TYPES.GET_ADDRESSBOOK_BEGIN:
      return {
        ...state,
        response: null,
        loading: true,
        error: null
      };

    case TYPES.GET_ADDRESSBOOK_SUCCESS:
      return {
        ...state,
        error: null,
        loading: false,
        response: action.payload,
        data: action.payload.data
      };

    case TYPES.GET_ADDRESSBOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        response: null
      };

    default:
      return state;
  }
};
