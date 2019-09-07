import React, { Component }from 'react';
import './style.css';
import ProjectCard from '../ProjectCard';
import { Tabs } from 'antd';

const { TabPane } = Tabs;


class Project extends Component {

 state = {
  

 }

 
  componentDidMount() {


  }


      render() {
        return (
        <div id="projectBody" className = "d-flex justify-content-center"> 
        <div className="container-fluid h-100" id="projectContent">
          <div className = "row h-25">
            <div className = "col-12 d-flex justify-content-center">
              <h1>PROJECTS</h1>
            </div>
          </div>  
          <div className = "row h-75">
            <div className = "col-12 h-100">
              <Tabs type="card" className = "h-100">
                <TabPane tab="ALL" key="1" className = "h-100">
                  <div className = "row h-100">
                    <div className = "col-4 cardbody">
                      <ProjectCard />
                    </div>
                    <div className = "col-4 cardbody">
                      <ProjectCard />
                    </div>
                    <div className = "col-4 cardbody">
                      <ProjectCard />
                    </div>
                  </div>
                  <div className = "row h-100">
                    <div className = "col-4 cardbody">
                      <ProjectCard />
                    </div>
                    <div className = "col-4 cardbody">
                      <ProjectCard />
                    </div>
                    <div className = "col-4 cardbody">
                      <ProjectCard />
                    </div>
                  </div>           
                </TabPane>
                <TabPane tab="NODE.JS" key="2">
                </TabPane>
                <TabPane tab="LITTLE GAMES" key="3">
                </TabPane>
            </Tabs>
           </div>
          </div>
        </div>
        </div>



        );

  }
}



export default Project;
