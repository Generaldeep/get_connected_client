import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Header } from 'semantic-ui-react';
import { clearUserUid, changeUserUidState } from '../../actions';
import ProfileHeader from '../../components/Profile/Header/Header';
import ProjectsList from '../../components/Profile/Projects/ProjectsList';
import SkillsList from '../../components/Profile/Skills/SkillsList';
import AddProjectForm from '../../components/Profile/Projects/AddProjectForm';
import AddSkillsForm from '../../components/Profile/Skills/SkillsForm';
import SocialLinks from '../../components/Profile/Social/AddSocial';
import ListOfSocialLinks from '../../components/Profile/Social/SocialLinks';
// import AddCohort from '../../components/Profile/Cohort/AddCohort';
import AddSocial from '../../components/Profile/Social/AddSocial';
// import DeleteProfile from '../../components/Profile/DeleteProfile/DeleteProfile';
import '../../components/Profile/profile.css';
import './profile.css';

class Profile extends Component {
  componentWillMount() {
    if(!this.props.userUid.userUid) {
      this.props.changeUserUidState(this.props.userData.uid)
    }
  }

  componentWillUnmount() {
    this.props.clearUserUid()
  }
  render() {
    return (
      <Grid id="profile">

        <Grid.Row>
          <Grid.Column className='profileheader'>
            <ProfileHeader />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <AddSocial/>
              <ListOfSocialLinks/>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Header size='medium' textAlign='center'>Technical Skills</Header>
              <Grid.Column className='skillslist'>
                <SkillsList />
              </Grid.Column>
              <Grid.Column>
                <AddSkillsForm />
              </Grid.Column>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              <Header size='medium' textAlign='center'>Technical Projects</Header>
              <Grid.Column className='projectlist'>
                <ProjectsList />
              </Grid.Column>
              <Grid.Column>
                <AddProjectForm />
              </Grid.Column>
            </Grid.Column>
          </Grid.Row>

      </Grid>
    );
  }
}

export default connect(({ userData, userUid }) => ({ userData, userUid }), ({changeUserUidState, clearUserUid}))(Profile);
