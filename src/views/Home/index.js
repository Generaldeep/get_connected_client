import React,{ Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react'
import GetJobs from '../../components/Home/GetJobs';
import PostForm from '../../components/Home/PostForm';
import Feed from '../../components/Home/Feed';
import Articles from '../../components/Home/Articles';
import './home.css'

class Home extends Component {
  render() {
    return(
      <Grid>
        <Grid.Column only='computer' computer={5}>
          <Header size='medium' textAlign='center'>Articles</Header>
          <Articles/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Feed/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Header size='medium' textAlign='center'>Bay Area Jobs</Header>
          <GetJobs/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home;
