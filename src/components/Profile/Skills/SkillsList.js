import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleRoot } from 'radium';
import Coverflow from 'react-coverflow'
import firebase from 'firebase';
import { Card } from 'semantic-ui-react';
import { fetchSkills } from '../../../actions';
import EditSkills from './EditSkills';
// import { Container, Header } from 'semantic-ui-react';
import './skill.css';



class SkillsList extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    if(this.props.userUid.userUid && this.props.userUid.userUid.length > 0) {
      firebase.database().ref(`skills/${this.props.userUid.userUid}`).on('value', snapshot => {
       return this.props.fetchSkills(snapshot.val())
     })
    }
    else {
      firebase.database().ref(`skills/${this.props.userData.uid}`).on('value', snapshot => {
       return this.props.fetchSkills(snapshot.val())
       })
     }
  }

  renderSkills = (skills, userData) => {
    if (skills) {
      return skills.map((skill, i) => {
        return (
        <Card fluid={true} key={i}>
        <Card.Content>
          <Card.Header>
           { skill.skill }
           <EditSkills skills={skill} user={userData}/>
          </Card.Header>
        </Card.Content>
       </Card>
      )
      });
    }
  }



  render(){
    const { skills, userData } = this.props;
    return(
        <StyleRoot>
         <Coverflow
           displayQuantityOfSide={1}
           navigation
           enableScroll
           enableHeading={false}
           clickable={false}
           active={1}
           media={{
             '@media (max-width: 800px)': {
               width: '600px',
               height: '300px',
             },
             '@media (min-width: 800px)': {
               width: '1000px',
               height: '300px',
               },
             }}
           >
          {this.renderSkills(skills, userData)}
         </Coverflow>
        </StyleRoot>
    );
  }
}

export default connect(({ userData, skills, userUid }) => ({ userData, skills, userUid }), ({ fetchSkills }))(SkillsList);
