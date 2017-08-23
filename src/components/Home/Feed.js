import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import {Card, Feed, Grid, Button, Modal, Header, Comment} from 'semantic-ui-react';
import {deletePost, editComment, editPost, fetchPosts} from '../../actions';
import PostsForm from './PostForm';
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
                              {comment.name}
                            </Comment.Author>
                            <Comment.Text>{comment.comment}</Comment.Text>
                            <Comment.Metadata>
                             {comment.time}
                            </Comment.Metadata>
                            <Comment.Actions>
                              <Comment.Action><UpdateReplies comment={comment} user={userData}/></Comment.Action>
                            </Comment.Actions>
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
                <div key={ind}>
                    <Comment.Group>
                     <Comment>
                        <Comment.Avatar src={post.photo} />
                        <Comment.Content>
                          <Comment.Author>
                            {post.name}
                          </Comment.Author>
                          <Comment.Text>{post.post}</Comment.Text>
                          <Comment.Metadata>
                           {post.date}
                          </Comment.Metadata>
                          <Comment.Actions>
                            <Comment.Action><UpdatePosts post={post} user={userData}/></Comment.Action>
                          </Comment.Actions>
                          <Comment.Action><ReplyForm postKey={post.postKey} postIndex={ind}/></Comment.Action>
                        </Comment.Content>
                    {this.renderComments(post.comments, userData)}
                    {/* <ReplyForm postKey={post.postKey} postIndex={ind}/> */}
                   </Comment>
                    </Comment.Group>
                </div>
            )
        })
        return (
            <div>
                {Posts}
            </div>
        )
    }
}
export default connect(({posts, userData}) => ({posts, userData}), {fetchPosts, deletePost, editPost, editComment})(Feeds);