export const getArticlesRequest = () => fetch(' https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=0eb7021bf1b044538207181f6648a32f',
  )
  .then(res => res.json());


// action creator
export const getArticles = () => ({
  type: 'GET_ARTICLES',
  payload: getArticlesRequest(),
});
