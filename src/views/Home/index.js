import React,{ Component } from 'react';
import { connect } from 'react-redux';
import GetJobs from '../../components/Home/GetJobs';
import PostForm from '../../components/Home/PostForm';
import Feed from '../../components/Home/Feed';
import Articles from '../../components/Home/Articles';
import './home.css'

class Home extends Component {
  render() {
    return(
      <div id="home">
            <div id="jobs">
              <h2>Bay Area Jobs</h2><br /> <br />
              <GetJobs />
            </div>
            
            <div id="feed">
                <Feed />
            </div>
            <div id="articles">
              <h3>Latest Tech News</h3>
              <Articles />
            </div>
          </div>
    )
  }
}

export default Home;
