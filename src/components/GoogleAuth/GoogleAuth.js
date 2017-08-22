import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, authenticate, checkForAuthenticatedUser } from '../../actions/authentication';
import { Redirect } from 'react-router-dom';
import { Button, Sidebar, Segment } from 'semantic-ui-react';
// import logo from '../../assets/googleAssets/g-logo.png';
import googleB from '../../assets/google-logo.png';
// import LearnMore from '../../components/Learn/LearnMore';
import firebase from 'firebase';
import './GoogleAuth.css';


class GoogleAuthentication extends Component {
 static contextTypes = {
  router: React.PropTypes.object,
   }

   componentWillMount() {
     const config = {
       apiKey: "AIzaSyDBShnmL4sNL09g5ZjE84iX0gSD_xJ8JQA",
       authDomain: "getconnected-1a33d.firebaseapp.com",
       databaseURL: "https://getconnected-1a33d.firebaseio.com",
       projectId: "getconnected-1a33d",
       storageBucket: "getconnected-1a33d.appspot.com",
       messagingSenderId: "483962483612"
     };
     firebase.initializeApp(config);
   }

 componentDidMount = () => {
  if (!this.props.userData || !this.props.userData.name) {
   this.props.checkForAuthenticatedUser();
  }
 }

  render() {
    const { userData } = this.props;
    if (userData && userData.name) {
      return (<Redirect to="/Home" />);
    }
    return (
            <div id='login'>
            <h2 className='signinheader'>Sign In with Google</h2>
            <Button id='loginbutton' onClick={this.props.login} size="massive"circular icon>
              <img style={{ width: '50px', height: '50px' }} src={googleB} alt="" />
            </Button>
          </div>

    );
  }
}

export default connect(({ userData }) => ({ userData }), { login, authenticate, checkForAuthenticatedUser })(GoogleAuthentication);
