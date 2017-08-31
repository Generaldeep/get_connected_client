import React, { Component } from 'react';
import { addSkill } from '../../../actions';
import { connect } from 'react-redux';
import {Button, Form, TextArea, Modal, Header } from 'semantic-ui-react';
import './skill.css';


class AddSkillsForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      skill: '',
      modalOpen: false,
    }
  }

  handleOpen = (e) => this.setState({
  modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

  updateInput = (event) => {
    this.setState({
      skill: event.target.value
    })
  }

  render() {
   const { userData, addSkill } = this.props;
      return (
       <div className='skillsmodal'>
        <Modal trigger={<Button onClick={this.handleOpen} color='blue' >Add Skill</Button>} open={this.state.modalOpen}>
          <Modal.Content>
            <Header>
              Enter A Skill
            </Header>
            <Form className="links ui form">
              <Modal.Content>
                <input className="skillName" name="skill" type="text" placeholder="Enter a skill ex JavaScript,   React, Node, Express" onChange={this.updateInput} autoHeight/>
                <br/>
                <br/>

                <Button
                   type="submit" color='blue'
                   onClick={(e) => {
                   e.preventDefault();
                   addSkill(userData, this.state.skill);
                   this.handleClose();
                    }}
                    >
                  Submit
                </Button>


                <Button type="cancel" color='red' onClick={(e) =>{
                  e.preventDefault()
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
  }

export default connect(({ userData, skills }) => ({ userData, skills }), { addSkill })(AddSkillsForm);
