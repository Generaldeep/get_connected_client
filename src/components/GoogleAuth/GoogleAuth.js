import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { login, authenticate } from '../../actions/authentication';
import { Redirect } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './GoogleAuth.css';
import googleB from '../../assets/google-logo.png';


class GoogleAuthentication extends Component {
 static contextTypes = {
  router: React.PropTypes.object,
   }

 componentDidMount = () => {
  firebase.auth()

  //  if(user) {
  //   this.props.authenticate(true)
  //   this.redirect();
  //  }
  // })
 }

 redirect = () => {
  this.context.router.history.push('/Home')
 }

  render() {
    const { userData } = this.props;
    return (
        <div>
            <Button onClick={this.props.login} size="massive"circular icon>
              <img style={{ width: '50px', height: '50px' }} src={googleB} alt="" />
            </Button>
          </div>
    );
  }
}
export default connect(({ userData }) => ({ userData }), { login, authenticate, authenticate  })(GoogleAuthentication);
