import React,{ Component } from 'react';
import { connect } from 'react-redux';
import GetJobs from '../../components/Home/GetJobs';

class Home extends Component {
  render() {
    return(
      <div><GetJobs/></div>
    )
  }
}

export default Home;
