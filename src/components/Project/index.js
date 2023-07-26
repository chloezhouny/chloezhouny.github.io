import React, { Component } from "react";
import { Tabs } from "antd";


import "./style.css";
import ProjectCard from "../ProjectCard";
import {main, funGame, node, all} from './projects'

const { TabPane } = Tabs;

class Project extends Component {
  state = {};

  componentDidMount() {}

  render() {
    
    return (
      <div id="projectBody" className="d-flex justify-content-center">
        <div className="container-fluid" id="projectWrapper">
          <div className="row h-25">
            <div className="col-12 d-flex justify-content-center">
              <h1>Projects</h1>
            </div>
          </div>
          <div className="row h-75" id="projectContent">
            <div className="col-12 h-100">
              <Tabs className="h-100">
                <TabPane tab="All" key="1" className="h-100 projectNav">
                  <div className="row h-100">
                    <div className="col-6 cardbody left">
                   {all.left.map(project => (
                     <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={project} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {project.title} </h2>
                              <p> {project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>

                    <div className="col-6 cardbody right">
                    {all.right.map(project => (
                     <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={project} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {project.title} </h2>
                              <p> {project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Main" key="2" className="h-100 projectNav">
                  <div className="row h-100">
                    <div className="col-6 cardbody left">
                   {main.left.map(project => (
                     <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={project} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {project.title} </h2>
                              <p> {project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>

                    <div className="col-6 cardbody right">
                    {main.right.map(project => (
                     <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={project} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {project.title} </h2>
                              <p> {project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Fun Games" key="3" className="projectNav">
                  <div className="row h-100">
                    <div className="col-6 cardbody left">
                      {funGame.left.map(project => (
                     <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={project} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {project.title} </h2>
                              <p> {project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                    <div className="col-6 cardbody right">
                      {funGame.right.map(project => (
                     <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={project} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {project.title} </h2>
                              <p> {project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Node.js" key="4" className="projectNav">
                  <div className="row h-100">
                    <div className="col-6 cardbody left">
                      {node.left.map(project => (
                     <div className="row card">
                        <div className="col-12">
                          <div className="row">
                            <div className="offset-2 col-8">
                              <ProjectCard project={project} />
                            </div>
                          </div>
                          <div className="row">
                            <div className="offset-2 col-8">
                              <h2> {project.title} </h2>
                              <p> {project.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
