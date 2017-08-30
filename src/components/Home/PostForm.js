import React, {Component} from 'react';
import { addPost } from '../../actions';
import { connect } from 'react-redux';
import { Button, Form, TextArea, Header } from 'semantic-ui-react';
import './home.css';


class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }
    updateInput = (event) => {
        this.setState({
         input: event.target.value
        })
    }
    render() {
        const { userData, addPost } = this.props;
        return (
            <Form id='postForm' >
                <Header>Welcome To Get Connected</Header>
                <br/>

                <input placeholder="Add Post"  name="post" onChange={this.updateInput} value={this.state.input} type="text"/>

                <div className='addPostButton'>
                <Button color='blue' className="submit" type="submit"  onClick={(e) => {
                    e.preventDefault();
                    addPost(userData, this.state.input)
                    this.setState({input:''});
                }} content='Add Post' labelPosition='left' icon='pencil' />
              </div>
            </Form>
        )
    }
}

export default connect(({ userData }) => ({ userData }), ({ addPost }))(PostForm)
