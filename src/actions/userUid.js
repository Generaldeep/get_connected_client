const changeUid = (uid) => {return uid}


export const changeUserUidState = uid => ({
  type: 'UPDATE_UID', payload: changeUid(uid),
});
