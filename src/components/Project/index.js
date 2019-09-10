import React, { Component }from 'react';
import './style.css';
import ProjectCard from '../ProjectCard';
import { Tabs } from 'antd';


import venvi1 from './venvi1.png';
import venvi2 from './venvi2.png';
import venvi3 from './venvi3.png';
import venvi4 from './venvi4.png';

const { TabPane } = Tabs;


class Project extends Component {

 state = {


 }

 
  componentDidMount() {


  }


      render() {

        var venvi = {
          bg: "https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1598&q=80",
          title: "VENVI",
          description: "a web app where users review specific models of cars, buy and sell cars and test drive in 3D",
          img: [venvi1, venvi2, venvi3, venvi4],
          detail: "VENVI is a web app where users can find and submit user reviews for specific models of cars, buy and sell cars and test drive in 3D. This app takes a different approach from the commonly seen critical reviews from cars, user reviews are also an important factor in influencing purchasing decisions and we provide that.",
          link: "https://phillipchang.github.io/venvi-fe/"
        }

        return (
        <div id="projectBody" className = "d-flex justify-content-center"> 
        <div className="container-fluid h-100" id="projectContent">
          <div className = "row h-25">
            <div className = "col-12 d-flex justify-content-start">
              <h1>PROJECTS</h1>
            </div>
          </div>  
          <div className = "row h-75" id="">
            <div className = "col-12 h-100">
              <Tabs className = "h-100">
                <TabPane tab="All" key="1" className = "h-100">
                  
                  <div className = "row h-100">
                    
                    <div className = "col-6 cardbody left">
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>   
                  </div>

                  <div className = "col-6 cardbody right">

                      <div className = "row card ">
                        <div className = "col-10 offset-2">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>

                      <div className = "row card">
                        <div className = "col-10 offset-2">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>

                      <div className = "row card">
                        <div className = "col-10 offset-2">
                            <ProjectCard project={venvi} />
                        </div>
                      </div> 

                    </div>
                  </div>              
                </TabPane>
                <TabPane tab="Node.js" key="2">
                <div className = "row h-100">
                    
                    <div className = "col-6 cardbody left">
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>  
                  </div>
                  <div className = "col-6 cardbody left">
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>  
                  </div>
                </div>
                </TabPane>
                <TabPane tab="Fun Games" key="3">
                <div className = "row h-100">
                    
                    <div className = "col-6 cardbody left">
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>  
                  </div>
                  <div className = "col-6 cardbody left">
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>
                      <div className = "row card">
                        <div className = "col-10">
                            <ProjectCard project={venvi} />
                        </div>
                      </div>  
                  </div>
                </div>
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
