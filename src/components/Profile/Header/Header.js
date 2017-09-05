import React, { Component } from 'react';
import { connect } from 'react-redux';
import semantic from 'semantic-ui-react';
import AddCohort from '../Cohort/AddCohort';
import { Grid, Image } from 'semantic-ui-react';
import './profile.css';

const ProfileHeader = ({ userUid }) => (
    <div className='userPro'>
      <h3>Weclome To {userUid.userName}'s Profile</h3>
      <img className="ui circular image imgPro" src={userUid.userPhoto} alt={userUid.name} />
    </div>
    );

export default connect(({ userData, userUid }) => ({ userData, userUid }))(ProfileHeader);
