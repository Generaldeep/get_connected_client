import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addSocialLinks, social } from '../../../actions';
import { Popup, Button, Header, Image, Modal, Form, TextArea } from 'semantic-ui-react'

  class SocialLinks extends Component {
     constructor(props){
       super(props)
         this.state = {
             LinkedIn: this.props.social.linkedin,
             GitHub: this.props.social.gitHub,
             Twitter: this.props.social.twitter,
             modalOpen: false,
         }
       }

    updateInput = (event) => {
      const givenLink = event.target.value;
      const linkName = event.target.name;
      this.setState({[linkName] : givenLink})
    }

    handleOpen = (e) => this.setState({
    modalOpen: true,
    })

    handleClose = (e) => this.setState({
      modalOpen: false,
    })

  render() {
    const { userData, social, userUid } = this.props;
    if(userData.uid === userUid.userUid) {
      return (
        <div className='updatesocial'>
          <Button color='blue' onClick={this.handleOpen}>Update Social Links</Button>
          <Modal  open={this.state.modalOpen}>
            <Modal.Header>Enter Your Social Links</Modal.Header>
            <Modal.Content>
               <Form className="links ui form">
                  <Header>LinkedIn</Header>
                    <Modal.Content>
                      <input rows="2" className="socialLink" value={this.state.LinkedIn} name="LinkedIn" type="url"   onChange={this.updateInput}/>
                      <Header>GitHub</Header>
                       <input rows="2" className="socialLink" value={this.state.GitHub} name="GitHub" type="url" onChange={this.updateInput}/>
                      <Header>Twitter</Header>
                       <input rows="2" className="socialLink"  value={this.state.Twitter} name="Twitter" type="url" onChange={this.updateInput}/>
                   </Modal.Content>
                   <br/>
                   <br/>

                    <Button className="ui button" color="blue" type="submit" onClick={(e) => {
                     e.preventDefault();
                     addSocialLinks(userData, social, {
                       LinkedIn: this.state.LinkedIn,
                       GitHub: this.state.GitHub,
                       Twitter: this.state.Twitter
                      });
                      this.handleClose();
                     }}>Submit</Button>


                    <Button className='ui button' color="red" type="cancel" onClick={(e) =>{
                      e.preventDefault();
                      this.handleClose()
                    }} >Cancel</Button>

              </Form>
             </Modal.Content>
           </Modal>
        </div>
      )
    }
    else {
      return <div/>;
    }
  }
}

export default connect(({ userData, social, userUid}) => ({ userData, social, userUid}), { addSocialLinks })(SocialLinks);
