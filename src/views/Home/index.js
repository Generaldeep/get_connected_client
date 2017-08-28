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
      <Grid id="home" stackable columns={1} >
        <Grid.Row columns={3}>
          <Grid.Column>
            <GetJobs />
          </Grid.Column>
          <Grid.Column>
            <Feed />
          </Grid.Column>
          <Grid.Column>
            <Articles />
          </Grid.Column>
        </Grid.Row>
        </Grid>
      {/* <Grid id="home" stackable columns={1} >
        <Grid.Row columns={3}>
          <Grid.Column>
            <GetJobs />
          </Grid.Column>
          <Grid.Column>
            <Feed />
          </Grid.Column>
          <Grid.Column>
            <Articles />
          </Grid.Column>
        </Grid.Row>
        </Grid> */}
    )
  }
}

export default Home;
