import React, { Component }from 'react';
import profile from './profile1.png';
import './style.css';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';

import Texty from 'rc-texty';
import 'rc-texty/assets/index.css';


const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}


class About extends Component {

 state = {
 	 gray: true,
   gray2: true,
   gray3: true,
   show: false
 }




  componentDidMount() {

    this.setState({
      show: !this.state.show
    });
  }

 getEnter = (e) => {
    switch (e.index) {
      case 0:
        return {
          rotate: 90,
          opacity: 0,
          y: -60,
        };
      case 10:
      case 1:
        return {
          y: -60,
          x: -10,
          opacity: 0,
        };
      case 9:
      case 2:
        return {
          y: -60,
          x: 20,
          opacity: 0,
        };
      case 3:
        return {
          y: 60,
          opacity: 0,
        };
      case 8:
      case 4:
        return {
          x: 30,
          opacity: 0,
        };
      case 5:
        return {
          enter: [
            {
              scale: 2,
              opacity: 0,
              type: 'set',
            },
            { scale: 1.2, opacity: 1, duration: 300 },
            { scale: 0.9, duration: 200 },
            { scale: 1.05, duration: 150 },
            { scale: 1, duration: 100 },
          ],
          leave: {
            opacity: 0, scale: 0,
          },
        };
      case 6:
        return {
          scale: 0.8,
          x: 30,
          y: -10,
          opacity: 0,
        };
      case 7:
        return {
          scale: 0.8,
          x: 30,
          y: 10,
          opacity: 0,
        };
      default:
        return {
          opacity: 0,
        };
    }
  }

   changeOpacity = () => {
    this.setState({
      gray: false,
      gray2: true,
      gray3: true
    });
  }

    changeOpacity2 = () =>
  {
      this.setState({
      gray: true,
      gray2: false,
      gray3: true
    });
  }

     changeOpacity3 = () =>
  {
      this.setState({
      gray: true,
      gray2: true,
      gray3: false
    });
  }

  onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }



      render() {
        let li_class = this.state.gray ? "grayli" : "blackli";
         let li_class2 = this.state.gray2 ? "grayli" : "blackli";
         let li_class3 = this.state.gray3 ? "grayli" : "blackli";

      	return (
        <div id="aboutBody"> 
      	 <div className="container aboutContent">
         <div className = "row shortIntro">
          <div className = "col-12 ">
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && 'Always ambitious'}</Texty>
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && 'creative and artful'}</Texty>
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && 'specialized in'}</Texty>
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && 'interactive experiences'}</Texty>
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && '& animation'}</Texty>
          </div>
         </div>
          <div className = "row" id = "skill">
            <div className = "col-12" >
            <div className = "row">
              <div className = "col-3 skillContent" >
               <p onClick={this.changeOpacity.bind(this)}> Frontend </p>
              </div>
              <div className = "col-3 skillContent" >
               <p onClick={this.changeOpacity2.bind(this)}> Backend </p>
              </div>
              <div className = "col-3 skillContent" >
               <p onClick={this.changeOpacity3.bind(this)}> Tools & Languages </p>
              </div>
            </div>
              <div className = "row">
      			   <div className = "col-3" >              
                <div>
                  <ul>
                    <li className = {li_class}  key="0">CSS</li>
                    <li className = {li_class}  key="1">HTML</li>
                    <li className = {li_class}  key="2">React</li>
                    <li className = {li_class} key="3">JavaScript</li>
                    <li className = {li_class} key="4">JQuery</li>
                    <li className = {li_class} key="5">Material UI</li>
                    <li className = {li_class} key="6">Ant Design</li>
                    <li className = {li_class} key="7">Three.js</li>
                  </ul>
                </div>
              </div>
              <div className = "col-3" >

                <ul>
                    <li className = {li_class2} key="0"><div>Node.js</div></li>
                    <li className = {li_class2} key="1">Express</li>
                    <li className = {li_class2} key="2">MySQL</li>
                    <li className = {li_class2} key="3">Sequelize</li>
                    <li className = {li_class2} key="4">Mongo</li>
                    <li className = {li_class2} key="5">Firebase</li>
                    <li className = {li_class2} key="6">Amazon Web Service</li>
                    <li className = {li_class2} key="7">Git</li>
                    <li className = {li_class2} key="8">NPM</li>
                    <li className = {li_class2} key="9">Passport</li>
                </ul>
              </div>
               <div className = "col-3">
                  <ul>
                    <li className = {li_class3} key="0">C++</li>
                    <li className = {li_class3} key="1">Python</li>
                    <li className = {li_class3} key="2">Ruby/Rails</li> 
                  </ul>
                </div>
            </div>
  			
      			</div>
      		</div>
        
        <div className = "row" id="me">
            <div className = "col-6">
              <div id="chloe">
                <img src={profile}/>
              </div>
            </div>
            <div className = "col-6">
              <div id = "paragraph">
                  <h2>Passion </h2>
                  <p> More than a full stack web developer, Chloe sees herself as a Always ambitious and passionate about learning new technologies.

    Aspiring Full Stack Web Developer with a background in Finance and life-long dedication of curiosity. Effective at combining creativity and problem solving to develop user-friendly applications.

Currently seeking for entry-level software engineering opportunities or Internship/Co-ops in 2019. </p> 
              </div>
            </div>
      </div>
          </div>

      	</div>



      	);

	}
}



export default About;
