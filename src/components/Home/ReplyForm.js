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
            <Icon  type="submit" name='reply' size='large' link='true' onClick={this.handleOpen} />
            <Modal open={this.state.modalOpen}>
              <Modal.Header>Add Reply</Modal.Header>
              <Modal.Content>
                 <Form className="links ui form">
                      <Modal.Content>
                        <TextArea rows="2" value={this.state.input} className="editcomment"  onChange={this.updateComment} />
                     </Modal.Content>

                      <Button color='blue' className="submit" type="submit" onClick={(e) => {
                       e.preventDefault();
                       addComment(userData, this.state.input, postKey, postIndex)
                       this.setState({input: ''})
                       this.handleClose()
                       }}>Submit</Button>

                    <div className="cancel">
                      <Button color="red" type="cancel" onClick={(e) =>{
                        e.preventDefault();
                        this.handleClose()
                      }}>Cancel</Button>
                    </div>
                </Form>
               </Modal.Content>
             </Modal>
           </div>
        )
    }
}

export default connect(({ userData }) => ({ userData }), { addComment })(Comments);