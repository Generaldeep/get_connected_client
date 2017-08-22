export const getJobsRequest = () => fetch('https://shielded-brushlands-43810.herokuapp.com/jobs',
)
 .then(res => res.json());

// action creator
export const getJobs = () => ({
  type: 'GET_JOBS',
  payload: getJobsRequest(),
});
