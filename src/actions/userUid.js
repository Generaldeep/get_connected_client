const changeUid = (uid) => {console.log('logged');}


export const changeUserUidState = (uid, photo, name) => ({
  type: 'UPDATE_UID', payload: {userUid: uid, userPhoto: photo, userName: name},
});

export const clearUserUid = () => ({
  type: 'CLEAR_UID', payload: ''
})
