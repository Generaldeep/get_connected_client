import React, { Component } from 'react';
import { Card, Grid, Image } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  state = { jobs: []};

   renderJobs = jobs => jobs.map((job, i) => (
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

  componentDidMount() {
    this.getJobs();
  }

  getJobs = () => {
    fetch('https://secure-caverns-39632.herokuapp.com/api/jobs')
      .then(res => res.json())
      .then(jobs => this.setState({jobs}))
  }

  render() {
    const { jobs } = this.state;
    return (
      <div>
        <h2>Jobs</h2>
        {this.renderJobs(jobs)}
      </div>
    );
  }
}

export default App;
