import React, { Component }from 'react';
import './style.css';
import Project from '../Project';





class Projects extends Component {

 state = {
 

 }

 
  componentDidMount() {


  }


      render() {
      	return (     
      	 
            <div className="container">
               <div className = "row">
                <div className = "col-12 d-flex justify-content-center">
                  <h1>PROJECTS</h1>
                </div>
               </div>  
            <div className = "row">
            <div className = "col-12 d-flex justify-content-center">
                  <Project />
                </div>
            </div>
        </div>
      	);

	}
}



export default Projects;
