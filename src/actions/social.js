import firebase from 'firebase';

// export const restructureFetchedFireBaseObjects = (object) => {
//   const restructuredPosts = Object.values(object);
//   return restructuredPosts;
// }

export const fetchFromFireBase = (socialObj) => {
  if (!socialObj) {
    return [];
  }
  return Object.values({ socialObj });
};

export const updateLinksAndSendToBD = (userData, social, socialLinks) => {
  firebase.database().ref('users').child(`${userData.uid}/social`).update({ gitHub: socialLinks.GitHub, twitter: socialLinks.Twitter, linkedin: socialLinks.LinkedIn });
};

// ACTION CREATORS
export const addSocialLinks = (userData, social, socialLinks) => ({
  type: 'ADD_SOCIAL',
  payload: updateLinksAndSendToBD(userData, social, socialLinks),
});

export const fetchSocial = socialObj => ({
  type: 'FETCH_LINKS', payload: fetchFromFireBase(socialObj),
});
