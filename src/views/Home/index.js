import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import GetJobs from '../../components/Home/GetJobs';
import PostForm from '../../components/Home/PostForm';
import Feed from '../../components/Home/Feed';
import Articles from '../../components/Home/Articles';
import './home.css'

class Home extends Component {
  render() {
    return(
      <Grid stackable id="home">
            <div id="jobs">
              <h4>Bay Area Jobs</h4><br /> <br />
              <GetJobs />
            </div>

            <div id="feed">
                <Feed />
            </div>

            <div id="articles">
              <h4>Latest Tech News</h4>
              <Articles />
            </div>

          </Grid>
    )
  }
}

export default Home;
