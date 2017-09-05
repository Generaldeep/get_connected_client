import initialState from './initialState';

export default function (userUid = initialState.userUid, action) {
  switch (action.type) {
    case 'UPDATE_UID':
      return action.payload;
    case 'CLEAR_UID':
      return action.payload;
    default:
      return userUid;
  }
}
