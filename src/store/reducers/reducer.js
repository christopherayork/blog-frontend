import * as actions from '../actions';

const initialState = {
  posts: [],
};

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.GET_POST_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case actions.GET_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
      };
    case actions.GET_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actions.GET_USER_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case actions.GET_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ''
      };
    case actions.GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actions.POST_POST_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case actions.POST_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ''
      };
    case actions.POST_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actions.PUT_POST_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case actions.PUT_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ''
      };
    case actions.PUT_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case actions.DELETE_POST_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case actions.DELETE_POST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: ''
      };
    case actions.DELETE_POST_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
};