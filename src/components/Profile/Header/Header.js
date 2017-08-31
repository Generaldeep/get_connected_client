import React, { Component } from 'react';
import { connect } from 'react-redux';
import semantic from 'semantic-ui-react';
import AddCohort from '../Cohort/AddCohort';
import { Grid, Image } from 'semantic-ui-react';
import './profile.css';

const ProfileHeader = ({ userData }) => (
    <div className='userPro'>
      <h3>Weclome To {userData.name}'s Profile</h3>
      <img className="ui circular image imgPro" src={userData.photo} alt={userData.name} />
    </div>
    );

export default connect(({ userData }) => ({ userData }))(ProfileHeader);
