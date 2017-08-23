import React,{ Component } from 'react';
import { connect } from 'react-redux';
import GetJobs from '../../components/Home/GetJobs';
import PostForm from '../../components/Home/PostForm';
import Feed from '../../components/Home/Feed';

class Home extends Component {
  render() {
    return(
      <div>

        <div>
          <PostForm/>
        </div>
        
        <br/>
        <br/>

        <div>
          <Feed/>
        </div>

        {/* <div>
          <GetJobs/>
        </div> */}

      </div>
    )
  }
}

export default Home;
