import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Button } from 'semantic-ui-react';
import { Redirect } from 'react-router';
import { deleteUser, logout } from '../../../actions';

class DeleteProfile extends Component {

  render() {
    return (
      <Button
        className="ui button" type="submit" color="red"
        onClick={(e) => {
          e.preventDefault();
          firebase.auth().signOut();
          firebase.database().ref(`users/${this.props.userData.uid}/`).remove();
          this.props.logout();
        }}
      >
       Delete Profile
     </Button>
    );
  }

}

export default connect(({ userData }) => ({ userData }), { deleteUser, logout })(DeleteProfile);
