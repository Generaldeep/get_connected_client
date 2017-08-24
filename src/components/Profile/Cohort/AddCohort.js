// import React, { Component } from 'react';
// import { addCohort } from '../../../actions';
// import { connect } from 'react-redux';
// import { Button, Icon, Size } from 'semantic-ui-react';
//
//
// class AddCohort extends Component {
//   constructor(props) {
//     super (props)
//     this.state = {
//       cohort: this.props.userData.cohort,
//       showForm: false
//     }
//   }
//   updateCohort = (event) => {
//     this.setState({
//       cohort: event.target.value
//     })
//   }
//
//   toggleForm = () => {
//     this.setState((prevState) => {
//       return { showForm: !prevState.showForm }
//     })
//   }
// renderButton = (cohort) => {
//       return (
//         <div>
//           <Button color='blue' onClick={this.toggleForm}>Update Your Cohort: {cohort}</Button>
//         </div>
//       )
//   }
//
//
//   render(){
//     const { userData, addCohort } = this.props;
//     const { cohort } = this.state;
//     if(this.state.showForm){
//       return (
//         <form>
//           <div>
//             <label >Cohort: </label>
//             <input className="cohortName" type="text" value={this.state.cohort} name="cohortName" onChange={this.updateCohort} />
//           </div>
//           <div>
//           <Button className="ui button" color='blue' type="submit" onClick={(e) => {
//             e.preventDefault();
//             addCohort(userData, cohort);
//             this.toggleForm()
//           }}>Submit</Button>
//           </div>
//         </form>
//       )
//     }
//     return (
//         <div>{this.renderButton(userData.cohort)}</div>
//     )
//   }
// }
//
// export default connect(({ userData}) => ({ userData }), { addCohort })(AddCohort);
