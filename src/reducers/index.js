import { combineReducers } from 'redux';
import jobs from './jobs_reducer';
import userData from './userData_reducer';
import authentication from './authentication_reducer';
import fetchPosts from './fetchPosts_reducer';


const appReducer = combineReducers({
  userData,
  jobs,
  authentication,
  fetchPosts,

})

const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    state = undefined;
  } else if (action.type === 'DELETE_PROFILE') {
    state = '';
  }

  return appReducer(state, action);
};

export default rootReducer;
