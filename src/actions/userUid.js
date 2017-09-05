const changeUid = (uid) => {console.log('logged');}


export const changeUserUidState = uid => ({
  type: 'UPDATE_UID', payload: uid,
});

export const clearUserUid = () => ({
  type: 'CLEAR_UID', payload: ''
})
