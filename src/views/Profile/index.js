import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
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
  render() {
    return (
      <Grid id="profile" stackable>
        <Grid.Row columns={2}>
          <Grid.Column>
            <ProfileHeader />

            <div className="cohortinfo">
              {/* <div className="updatecohort">
                <AddCohort />
              </div> */}
              <div className="updatesocial">
                <div>
                  <h2>Social Media Links</h2>
                  <AddSocial />
                  <ListOfSocialLinks />
                </div>
              </div>

              {/* <div className="deletesocial">
                <h5>No Longer Want To Keep Profile?</h5>
                <DeleteProfile />
              </div> */}
            </div>

          </Grid.Column>

          <Grid.Column>
            <div className="projectsskills">
              <div className="skills">
                <div className="skillslist">
                  <h4>Technical Skills</h4>
                  <SkillsList />
                  <div className="addskills">
                    <AddSkillsForm />
                  </div>
                </div>
              </div>


              <div className="projects">
                <h2>Technical Projects</h2>
                <div>
                  <ProjectsList />
                  <div className="projectlist">
                    <AddProjectForm />
                  </div>
                </div>
              </div>

            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(({ userData }) => ({ userData }))(Profile);
