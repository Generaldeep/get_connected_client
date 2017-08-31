import React, { Component } from 'react';
import firebase from 'firebase';
// import GoogleAuthentication from './views/Login';
import { BrowserRouter as Router, Route, Redirect, Link, Icon } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Menu, Segment, Dropdown } from 'semantic-ui-react'
import Home from './views/Home/index';
import Profile from './views/Profile/index';
import Login from './components/GoogleAuth/GoogleAuth';
import { connect } from 'react-redux';
import './App.css';


injectTapEventPlugin();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' }
  }

  componentDidMount() {
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

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });


  render() {
    const { name, uid } = this.props.userData;
    const { activeItem } = this.state;
    return (
     <div>
      <div id='header'>
        <Menu pointing secondary color='blue' stackable={true}>
            <Link to='/Home'>
              <Menu.Item name='Home' to="/Home" active={activeItem === 'Home'} onClick={this.handleItemClick} />
            </Link>
            <Link to={`/Profile/${uid}`}>
              <Menu.Item name='Profile' to="/Profile" active={activeItem === 'Profile'} onClick={this.handleItemClick} />
            </Link>


            <Menu.Menu position='right'>
            {!this.props.userData.name && <Link to='/Login'>
              <Menu.Item name='Login' active={activeItem === 'Login'} onClick={this.handleItemClick}/>
            </Link>}
           { this.props.userData.name && <Link to='/Logout'>
              <Menu.Item name='Logout' active={activeItem === 'Logout'} onClick={this.handleItemClick}/>
            </Link>}
           </Menu.Menu>

        </Menu>
      </div>
     </div>
    )
  }
}

export default connect(({ userData, users }) => ({ userData, users }), null)(App);
