import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Button, Form, Input, Icon, Modal, TextArea } from 'semantic-ui-react';
import {addComment} from '../../actions';
import './home.css';


class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      modalOpen: false
    }
  }
  updateComment = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleOpen = (e) => this.setState({
  modalOpen: true,
  })

  handleClose = (e) => this.setState({
    modalOpen: false,
  })

    render() {
     const { userData, addComment, postKey, postIndex } = this.props;
        return (
          <div>
            <Icon  type="submit" color='blue' link='true' onClick={this.handleOpen}>Reply</Icon>
            <Modal open={this.state.modalOpen}>
              <Modal.Content>
                 <Form className="links ui form">
                      <Modal.Content>
                        <input placeholder="Add Post"  name="post" onChange={this.updateComment} value={this.state.input} type="text"/>
                        <br/>
                        <br/>

                        <Button color='blue' className="submit" type="submit" onClick={(e) => {
                         e.preventDefault();
                         addComment(userData, this.state.input, postKey, postIndex)
                         this.setState({input: ''})
                         this.handleClose()
                         }}>Submit</Button>

                         <Button color="red" type="cancel" onClick={(e) =>{
                           e.preventDefault();
                           this.handleClose()
                         }}>Cancel</Button>
                     </Modal.Content>

                </Form>
               </Modal.Content>
             </Modal>
           </div>
        )
    }
}

export default connect(({ userData }) => ({ userData }), { addComment })(Comments);
