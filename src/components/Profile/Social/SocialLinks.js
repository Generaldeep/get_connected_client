import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import EditSocial from './EditSocial'
import { Button, Icon, Size, Header, Popup, Grid } from 'semantic-ui-react';
import { fetchSocial } from '../../../actions';
import './social.css';


class ListOfSocialLinks extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if(this.props.userUid.userUid && this.props.userUid.userUid.length > 0) {
      firebase.database().ref(`users/${this.props.userUid.userUid}/social`).on('value', snapshot => this.props.fetchSocial(snapshot.val()));
    }
    else {
      firebase.database().ref(`users/${this.props.userData.uid}`).on('value', snapshot => {
       return this.props.fetchSocial(snapshot.val())
       })
     }
  }

  renderSocial = (social, userData) => {
   if (social) {
     return social.map((social, i) => {
      return (
        <div key={i}>
         <div className="github">
        <Popup
          trigger={<Button  icon="github square" size="large" />}
          flowing
          hoverable
        >
          <Grid centered divided rows={3}>
            <Grid.Column textAlign='center'>
              <Header as='h6' size="large" href={social.gitHub}>{social.gitHub}</Header>
            </Grid.Column>
          </Grid>
        </Popup>
       </div>
       <div className="linkedin">
        <Popup
          trigger={<Button icon="linkedin square" size="large" />}
          flowing
          hoverable
        >
          <Grid centered divided rows={3}>
            <Grid.Column textAlign='center'>
              <Header as='h6' size="large" href={social.linkedin}>{social.linkedin}</Header>
            </Grid.Column>
          </Grid>
        </Popup>
       </div>

       <div className="twitter">
        <Popup
          trigger={<Button icon="twitter" size="large" />}
          flowing
          hoverable
        >
          <Grid centered divided rows={3}>
            <Grid.Column textAlign='center'>
              <Header as='h6' size="large" href={social.twitter}>{social.twitter}</Header>
            </Grid.Column>
          </Grid>
        </Popup>
       </div>
      </div>
       )
     });
   }
  }

  render() {
    const { social, userData } = this.props;
    return (<div className="social"> { this.renderSocial(social, userData) }</div>);
   }
}

export default connect(({ userData, social, userUid }) => ({ userData, social, userUid }), { fetchSocial })(ListOfSocialLinks);
