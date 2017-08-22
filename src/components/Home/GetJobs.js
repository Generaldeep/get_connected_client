import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getJobs } from '../../action';
import { Card, Grid, Image, Feed } from 'semantic-ui-react';
// import './home.css';

const renderJobs = jobs => jobs.map((job, i) => (
    <Card.Group stackable key={i}>
      <Card className="jobscard">
        <Card.Content>
          <Card.Header href={job.detailUrl} target="_blank">{job.jobTitle}</Card.Header>
          <Card.Meta>{job.location}</Card.Meta>
          <Card.Description>{job.company}</Card.Description>
        </Card.Content>
      </Card>
    </Card.Group>
    ));

class GetJobs extends Component {

  componentDidMount() {
    this.props.getJobs();
  }

  // renderJobs = jobs => {
  //   return jobs.map((job, i) => (
  //     <Card.Group stackable key={i}>
  //       <Card className="jobscard">
  //         <Card.Content>
  //           <Card.Header href={job.detailUrl} target="_blank">{job.jobTitle}</Card.Header>
  //           <Card.Meta>{job.location}</Card.Meta>
  //           <Card.Description>{job.company}</Card.Description>
  //         </Card.Content>
  //       </Card>
  //     </Card.Group>
  //   ))
  // };

  render() {
    const { jobs } = this.props;
    return (
      <div className="getjobs">
        {renderJobs(jobs)}
      </div>
    );
  }
}

export default connect(({ jobs }) => ({ jobs }), { getJobs })(GetJobs);
