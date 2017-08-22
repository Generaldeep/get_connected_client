import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Profile from '../../components/Profile/Profile';

class Home extends Component {
  render() {
    return(
      <div><Profile/></div>
    )
  }
}

export default Home;
