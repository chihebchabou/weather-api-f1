import { IS_ERROR, IS_LOADING, IS_SUCCESSFUL } from '../actions/types';

const initialState = {
  response: null,
  loading: false,
  error: '',
};

const weatherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case IS_SUCCESSFUL:
      return {
        ...state,
        response: payload,
        loading: false,
      };
    case IS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case IS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default weatherReducer;
