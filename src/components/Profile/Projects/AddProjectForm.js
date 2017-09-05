import React, {Component} from 'react';
import {addProject} from '../../../actions';
import {connect} from 'react-redux';
import { Modal, Header, Button, Form, TextArea } from 'semantic-ui-react';
import './project.css';

class AddProjectForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectName: '',
            description: '',
            modalOpen: false,
        }
    }

    handleOpen = (e) => this.setState({
      modalOpen: true,
    });
    handleClose = (e) => this.setState({
      modalOpen: false,
    });
    updateInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value})
    }
    render() {
      const {userData, addProject, userUid } = this.props;
      if(userUid.userUid === userData.uid) {
        return(
         <div>
          <Modal trigger={<Button color='blue' onClick={this.handleOpen} >Add A Project </Button>}          open={this.state.modalOpen}>
            <Modal.Content>
              <Form className="theForm ui form">
                <Modal.Content>
                  <Header>Project Name </Header>
                    <input className="proName" placeholder="Enter project name" name="projectName" onChange={this.updateInput} type="text" autoHeight/>
                      <Header>Project Description</Header>
                    <input className="proDesc" name="description" placeholder="Enter brief description about your project" onChange={this.updateInput} type="text" autoHeight/>
                    <br/>
                    <br/>

                    <Button
                      className="ui button" type="submit" color='blue'
                      onClick={(e) => {
                      e.preventDefault();
                      addProject(userData, {
                      projectName: this.state.projectName,
                      description: this.state.description,
                      uid: userData.uid,
                      });
                      this.handleClose();
                      }} >
                      Submit
                    </Button>

                    <Button className='ui button' type="cancel" color='red' onClick={(e) =>{
                      e.preventDefault();
                      this.handleClose();
                      }}>
                      Cancel
                    </Button>
                </Modal.Content>

              </Form>
          </Modal.Content>
      </Modal>
     </div>
      )
    }
    else {
      return <div/>
    }
  }
}


export default connect(({ userData, userUid }) => ({ userData, userUid }), {addProject})(AddProjectForm);
