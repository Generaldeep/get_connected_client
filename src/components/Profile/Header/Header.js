import React, { Component } from 'react';
import { connect } from 'react-redux';
import semantic from 'semantic-ui-react';
import AddCohort from '../Cohort/AddCohort';
import { Grid, Image, Header } from 'semantic-ui-react';
import './profile.css';

const ProfileHeader = ({ userData }) => (
  <Grid className="userPro" stackable>
    <Grid.Column className="userName">
        <Header size='tiny' color='blue'>Weclome To {userData.name}'s Profile</Header>
        <Image className="ui circular image imgPro" src={userData.photo} alt={userData.name} />
    </Grid.Column>
  </Grid>
    );

export default connect(({ userData }) => ({ userData }))(ProfileHeader);
