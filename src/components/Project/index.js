import React, { Component }from 'react';
import './style.css';
import ProjectCard from '../ProjectCard';




class Project extends Component {

 state = {
  

 }

 
  componentDidMount() {


  }


      render() {
        return (
        <div id="projectBody"> 
        <div className="container">
          <div className = "row">
            <div className = "col-12 d-flex justify-content-center">
              <h1>PROJECT</h1>
            </div>
          </div>  
          <div className = "row">
            <div className = "col-6">
            <ProjectCard />
             
            </div>
          </div>
        </div>
        </div>



        );

  }
}



export default Project;
