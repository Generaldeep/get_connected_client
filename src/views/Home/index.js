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
          <Header>Articles</Header>
          <Articles/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Feed/>
        </Grid.Column>
        <Grid.Column mobile={16} tablet={8} computer={5}>
          <Header>Bay Area Jobs</Header>
          <GetJobs/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default Home;

{/* <Grid>
  <Grid.Column only='computer' computer={5}>
    <Header>Articles</Header>
  </Grid.Column>
  <Grid.Column mobile={16} tablet={8} computer={5}>
    <Feed/>
  </Grid.Column>
  <Grid.Column mobile={16} tablet={8} computer={5}>
    <GetJobs/>
  </Grid.Column>
  <Grid.Column only='mobile tablet' mobile={16} tablet={16}>
    <Header>Articles</Header>
  </Grid.Column>
</Grid> */}

{/* <Grid id="home" stackable columns={3}>
  <Grid.Row>
    <Grid.Column>
      <Header>Articles</Header>
      <Articles/>
    </Grid.Column>
    <Grid.Column>
      <Feed/>
    </Grid.Column>
    <Grid.Column>
      <Header>Jobs</Header>
      <GetJobs/>
    </Grid.Column>
  </Grid.Row>
</Grid> */}
