import React, { Component } from 'react';
import { connect } from 'react-redux';
import semantic from 'semantic-ui-react';
import AddCohort from '../Cohort/AddCohort';
import { Grid, Image } from 'semantic-ui-react';
import './profile.css';

const ProfileHeader = ({ userData }) => (
  <Grid className="userPro" stackable>
    <Grid.Row>
      <div className="userName">
        <h1>Weclome To {userData.name}'s Profile</h1>
        <Image className="ui circular image imgPro" src={userData.photo} alt={userData.name} />
      </div>
    </Grid.Row>
  </Grid>
    );

export default connect(({ userData }) => ({ userData }))(ProfileHeader);
