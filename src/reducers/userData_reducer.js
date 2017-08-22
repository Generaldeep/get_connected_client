import initialState from './initialState';

export default (state = initialState.userData, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING': {
      return state;
    }
    case 'LOGIN_FULFILLED': {
      return Object.assign({}, state, action.payload);
    }
    case 'LOGIN_REJECTED': {
      return state;
    }

    case 'CHECK_FOR_AUTHENTICATED_USER_PENDING': {
      return state;
    }
    case 'CHECK_FOR_AUTHENTICATED_USER_FULFILLED': {
      return Object.assign({}, state, action.payload);
    }
    case 'CHECK_FOR_AUTHENTICATED_USER_REJECTED': {
      return state;
    }
    default:
      return state;
  }
};
