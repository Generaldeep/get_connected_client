import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Card, Feed, Grid, Button, Modal, Header, Comment} from 'semantic-ui-react';
import {deletePost, editComment, editPost, fetchPosts, changeUserUidState} from '../../actions';
import PostForm from './PostForm';
import ReplyForm from './ReplyForm';
import UpdateReplies from './UpdateReplies';
import UpdatePosts from './UpdatePosts';
import firebase from 'firebase';
import './home.css';


class Feeds extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.database().ref('feed/posts').on("value", (snapshot) => {
     return this.props.fetchPosts(snapshot.val());
    })
  }

  handleItemClick = (uid, photo, name) => {this.props.changeUserUidState(uid, photo, name)}

  renderComments = (commentObject, userData) => {
    if (commentObject) {
        const comments = Object.values(commentObject);
        return comments.map((comment, i) => {
          return (
            <div key={i}>
                <Comment.Group>
                 <Comment>
                    <Comment.Avatar src={comment.photo} />
                    <Comment.Content>
                      <Comment.Author>
                        <Link to={`/Profile/${comment.uid}`}
                          onClick={(e) => this.handleItemClick(comment.uid, comment.photo, comment.name)}
                        >{comment.name}</Link>
                        <Comment.Metadata>
                         {comment.time}
                        </Comment.Metadata>
                      </Comment.Author>
                      <Comment.Text>{comment.comment}</Comment.Text>
                      <div className='updatePostIcons'>
                      <Comment.Actions>
                        <Comment.Action><UpdateReplies comment={comment} user={userData}/></Comment.Action>
                      </Comment.Actions>
                    </div>
                    </Comment.Content>
                </Comment>
                </Comment.Group>
            </div>
          )
        });
    }
  }

  render() {
    const { userData } = this.props;
    const Posts = this.props.posts.map((post, ind) => {
      return (
        <div key={ind} className='origPost'>
            <Comment.Group>
             <Comment>
                <Comment.Avatar src={post.photo} />
                <Comment.Content>
                  <Comment.Author>
                    <Link to={`/Profile/${post.uid}`}
                      onClick={(e) => this.handleItemClick(post.uid, post.photo, post.name)}
                    >{post.name}</Link>
                    <Comment.Metadata>
                     {post.date}
                    </Comment.Metadata>
                  </Comment.Author>
                  <Comment.Text>{post.post}</Comment.Text>
                  <Comment.Actions>
                    <div className='updatePostIcons'>
                    <Comment.Action><UpdatePosts post={post} user={userData}/></Comment.Action>
                  </div>
                  </Comment.Actions>
                  <Comment.Action><ReplyForm postKey={post.postKey} postIndex={ind}/></Comment.Action>
                </Comment.Content>
            {this.renderComments(post.comments, userData)}
           </Comment>
            </Comment.Group>
            <br/>
        </div>
      )
    })
    return (
      <div>
        <PostForm/>
          {Posts}
      </div>
    )
  }
}
export default connect(({posts, userData}) => ({posts, userData}), ({fetchPosts, deletePost, editPost, editComment, changeUserUidState}))(Feeds);
