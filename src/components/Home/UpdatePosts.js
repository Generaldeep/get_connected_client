import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, editPost } from '../../actions';
import { Card, Feed, Grid, Button, Modal, Header, Form, TextArea, Input, Icon } from 'semantic-ui-react';
import './home.css';


class UpdatePosts extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      input: this.props.post.post,
      modalOpen: false,
    });
  }

  updateInput = (event) => {
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
    const { post, user } = this.props;
    if (user.uid === post.uid) {
      return (
        <div className="deletepost">
         <div className="delete">
          <Icon
            color="red" type="submit" name='remove' size='large' onClick={(e) => {
              e.preventDefault();
              deletePost(post);
            }}
          ></Icon>
        </div>
          <Icon className="edit" color="green" size='large' name='write' onClick={this.handleOpen}></Icon>
          <Modal open={this.state.modalOpen}>
            <Modal.Header>Edit Post</Modal.Header>
            <Modal.Content>
               <Form className="links ui form">
                    <Modal.Content>
                     <input rows="2" value={this.state.input} className="editpost" onChange={this.updateInput}/>
                     <br/>
                     <br/>

                    <Button
                      color="blue" type="submit" onClick={(e) => {
                        e.preventDefault();
                        editPost(post, user, this.state.input);
                        this.handleClose();
                      }}
                    >Update</Button>

                    <Button className='ui button' color="red" type="cancel" onClick={(e) =>{
                      e.preventDefault();
                      this.handleClose()
                    }} >Cancel</Button>
                   </Modal.Content>

              </Form>
             </Modal.Content>
           </Modal>
        </div>
      );
    }
    return (
     <div></div>
    );
  }
}

export default connect(null, ({ deletePost, editPost }))(UpdatePosts);
