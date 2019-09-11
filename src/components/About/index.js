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



constructor(props) {
    super(props);
    this.state = {
       gray: true,
       gray2: true,
       gray3: true,
       show: false
    }
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
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && 'Chloe.'}</Texty>
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && 'Determination and imagination.'}</Texty>
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && 'Building and developing interactive experiences.'}</Texty>
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && 'Creating flare with color'}</Texty>
          <Texty className = "shortIntrotext" enter={this.getEnter} >{this.state.show && '& meaningful animation.'}</Texty>
          </div>
         </div>
          <div className = "row" id = "skill">
            <div className = "col-12" >
            <div className = "row">
              <div className = "col-2 skillContent" >
               <p onMouseEnter={this.changeOpacity.bind(this)}> Frontend </p>
              </div>
              <div className = "col-2 skillContent" >
               <p onMouseEnter={this.changeOpacity2.bind(this)}> Backend </p>
              </div>
              <div className = "col-2 skillContent" >
               <p onMouseEnter={this.changeOpacity3.bind(this)}> Tools & Languages </p>
              </div>
            </div>
              <div className = "row">
      			   <div className = "col-2" >              
                <div>
                  <ul onMouseEnter={this.changeOpacity.bind(this)}>
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
              <div className = "col-2" >
                <ul onMouseEnter={this.changeOpacity2.bind(this)}>
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
               <div className = "col-2">
                  <ul onMouseEnter={this.changeOpacity3.bind(this)}>
                    <li className = {li_class3} key="0">C++</li>
                    <li className = {li_class3} key="1">Python</li>
                    <li className = {li_class3} key="2">Ruby/Rails</li> 
                  </ul>
                </div>
            
          <div className = "col-2">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
     width="340px" height="333px" viewBox="0 0 500 500" enable-background="new 0 0 340 333" xmlSpace="preserve">

  <path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10" 
  d="M298.1,158.1c0.1-0.1,0.3-0.2,0.5-0.3c4.4-2.5,9.5-3.9,14.6-3.9c3.8,4.7,0.5,19.6-1.9,24.7
  c-3.2,6.8-10.4,11.5-14.7,17.8c-9.9,14.5-10.7,31-8.5,51.5c4.2-13.4,13.2-25.1,20.6-37c1,0.1-0.1,2.1,0.8,2.5c0.3,0.2,0.7,0,1-0.2
  c6.7-3.6,13.4-7.8,20.4-10.9c0.5,4.4,13.1-0.4,16-0.3c1.8,1.4-9,16.6-9.9,17.8c1,0.9,2.5,1,3.6,0.3c-3.2,7.7-8.5,14.5-15.1,19.5
  c1.3,0.2,2.6,0.3,4,0.3c-0.2,0-3.2,4.5-3.8,5c-1.8,1.5-4.2,2.5-6.4,3.5c-5.2,2.4-10.8,3.7-16.5,4.2c-5.4,0.5-11.8,0.6-15,5.1
  c1.3,6.2,4.1,11.3,6.8,16.9c7.6,15.9,13.3,33.4,14,51.1c5.1-9.7,12.3-18.2,21-24.9c0.4,0.4,0.8,0.9,1.2,1.3
  c8.3-8,18.3-14.2,29.2-18.1c0.3,0.4,0.7,0.8,1,1.2c8.1-1,16.2-2,24.3-3.1c-2.6,0.3-5.5,9.3-6.6,11.4c-2.9,5.4-6.3,10.5-10.3,15.1
  c-0.2,0.2-0.4,0.5-0.3,0.8c0,0.2,0.2,0.3,0.4,0.5c0.9,0.7,1.8,1.3,2.7,1.9c0.8,0.5-6.2,8.1-7.1,8.8c-3.5,2.9-7.8,5.1-12.1,6.7
  c0.7,1.1,1.9,1.9,3.3,2.2c-5.4,4-12,5.9-18.5,7.7c-4.4,1.2-8.7,1.9-13.3,2c-5.2,0.1-9.7-1.2-14.5-2.5c-1.8,12.1-1.6,24.7-3.4,36.9
  c-2.3,15.4-6.2,30.4-10.5,45.4c-4.3,15-9,29.2-9.1,44.9c0,3.4,0,6.9,1.7,9.8c0.4,0.8,1,1.5,1,2.4c0,1.7-2,2.7-3.6,2.9
  c-8.5,0.8-13.5-8.2-12.1-15.6c3.3-17.3,8.1-34.3,12.8-51.4c3.1-11.3,6.5-22.6,9.5-33.9c1.2-4.6,2.8-9.3,3.9-14
  c0.3-1.5,1.6-15.1,1.9-15.3c-16.5,5.7-38.1-6.5-52.1-14.3c1.4-0.3,2.8-0.6,4.2-0.8c-1.7-2.3-3.6-4.5-5.3-6.7
  c-1.8-2.3-2.3-5.2-3.9-7.4c0.7,1,2.1,1.4,3.3,1c-3.3-5.7-6.1-11.6-8.3-17.8c-0.7-2.1-1.4-4.4-0.6-6.4c1.1,1.3,2.5,2.3,4.1,2.7
  c-0.7-6.9-1.3-19.4,3.2-25.2c2.9,2.8,5.9,5,9.2,7.3c1.3,0.9,11,7.6,11.1,8c-0.1-1.3,0.2-2.6,0.8-3.7c3.9,5.7,9.6,10.1,16,12.5
  c-0.3-1.7-0.7-3.4-1-5.1c6.2,6,10.9,13.4,13.9,21.5c3.2,8.8,3.3,17.1,4.5,26.4c2.5-19.6,1.8-38.5-8.8-56.3c-3-5-5.4-10.4-7.7-15.8
  c-1.9-4.4-3.4-12.2-6.9-15.5c-3.8-3.7-12.5-5.6-17.3-8.1c-6.1-3.1-12-6.6-17.7-10.3c-4.3-2.8-8.7-6.2-9.8-11.1c1.3,0.7,2.8,1,4.3,1
  c-4.5,0.1-4.5-24.2-5.1-27.2c0.7,0.3,1.5,0.6,2.2,1c0-3.6-0.3-7.1-0.9-10.6c3,3,6.5,5.5,10.3,7.3c2,1,6.1,4.1,8.2,3.7
  c0-0.1-0.1-1.7-0.1-1.7c4.8,1.7,9.3,4.4,13.1,7.8c0.7,0.6,1.4,1.3,2.3,1.5c1.5,0.2,3-1.5,2.4-3c2.1,4.1,5.3,7.9,7,12.1
  c2.3,5.4,2.1,12.9,2.9,18.8c0.4,2.7,0.7,5.4,2,7.8c0.4-14,1.6-28.9,6.4-42.1c2.6-7,3.8-14.9,5.5-22.2c1.3-5.6,3.7-11.6,4.5-17.2
  c0.1-0.5,0.1-1.1,0.4-1.6C297.6,158.4,297.8,158.2,298.1,158.1z"/>

  <path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10" d="M355,128.5c-2.4,6.2-8.3,2.4-12.3,0.7c-5-2-11-1.8-15.2-5.5c-3.2-2.8-4.2-6.9-6.1-10.5
  c-1.8-3.4-6.2-6.1-7.1-9.7c-0.3-1.3-0.3-2.8-0.8-4.1c-0.8-2.3-2.8-3.6-4-5.6c-1.7-2.6-2-5.3-2.1-8.4c-0.1-2.6-0.1-5.4,1.3-7.6
  c0.8-1.1,1.9-2,2.8-3c1.9-2.2,2.8-5.2,4.3-7.7c11.1-19.8,41.5-6.5,47.6,10.7c0.9,2.4,4.7,8.5,2.9,10.9c-0.6,0.8-2.9,0.4-3.7,0.9
  c-1.3,0.7-1.9,2.7-3.3,3.1c-1.3,0.4-2.3-1.1-2.8-2.3c-1.3-3.2-5.3-3.6-8.4-3.3c-0.8,0.1-1.8,0.1-2.3-0.5c-0.2-0.4-0.3-0.8-0.3-1.2
  c-0.3-1.8-1.9-3.2-3.4-4.3c-2.5-1.8-5.2-3.6-8.3-4c-8.4-1.1-12.2,9.8-7.7,15.9C334.5,104.6,344.1,115.4,355,128.5z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M305.1,134.7c-0.6,0-1.3-0.2-1.9-0.4c-6.5-2.6-14.5-2.3-19.8-7.6c-4.6-4.7-4.9-11.6-3.3-17.7
  c2.2-8.7,2.9-16.4,0.1-25.6c-2.4-7.8,2.2-17.9,8.2-22.9c10.2-8.4,28.3-6,40.6-4.9c-2.2,1.3-4.8,1.9-7.2,2.7
  c-4.1,1.4-7.9,5.1-9.7,9.1c-0.7,1.6-1.1,3.3-2.3,4.5c-0.7,0.7-1.5,1.2-2.2,1.9c-6,6-1.2,20.8,1.5,27.3c0.6,1.5,1.1,3.7-0.4,4.5
  c-0.5,0.3-1.2,0.2-1.8,0.3c-3.4,0.3-5.7,3.9-5.8,7.3c-0.1,3.4,1.5,6.6,3,9.7c1.5,3.1,2.8,6.4,2.4,9.8c-0.1,0.5-0.2,1.1-0.6,1.5
  C305.8,134.6,305.5,134.7,305.1,134.7z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M369.4,144.1c-0.7,1.4-2.3,1.9-3.7,2.3c-7,2-14.2,3.5-21.4,4.5c-5.7,0.8-13.1,2.4-18.7,1.2
  c-9.3-2-14.9-14.2-16.2-22.6c-0.3-2.2-0.3-4.4-0.7-6.6c-0.5-2.7-1.7-5.4-1.8-8.1s1-6,3.7-6.8c2-0.7,4.3,0.3,5.9,1.8s2.5,3.5,3.4,5.4
  c2.8,5.7,6.2,11.7,12.1,14.2c10.3,4.4,19.9,7.1,31,8.7c1.7,0.2,3.5,0.5,4.9,1.5S370.2,142.6,369.4,144.1z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M392.3,134.5c-1.2,0.9-2.4,1.7-3.8,2.3c2.2-1.9,3.1-5.1,2.5-7.9c-0.9-3.6-0.9-8.5-2.6-11.6
  c-1.7-3.1-7.6-5.2-7.8-8.8c-0.1-1.3,0.8-2.5,1.3-3.8c1.9-4.8-2.1-8.5-5.5-11c-2.3-1.6-5.2-3.4-7.9-4.1c0.4-7.9-1.6-17.9-8-23.1
  c-4-3.3-9.5-4.8-13-8.7c4.4-0.7,8.7-1.4,13.1-1.2c10.9,0.4,20.7,9,23.1,19.8c0.5,2,0.7,4.2,2,5.8c1,1.3,2.6,2.1,3.9,3
  c4.2,2.9,6.9,8,6.9,13.2c0,2.5-0.6,4.9-0.7,7.3c-0.3,8.1,5.2,14.2,1.5,22.5C396.2,130.6,394.4,132.8,392.3,134.5z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M343.9,153.1c5.6-0.6,11.3-1.3,16.9-2c3.7-0.5,12.1-2.6,12.5-7.4c0.1-0.9,0-1.9,0.7-2.5
  c0.4-0.4,0.9-0.5,1.4-0.6c3.2-0.7,6.5-0.4,9.8-0.5c3.3-0.1,6.7-0.7,9.2-2.8c1.8-1.5,2.9-3.5,4.1-5.6c0.6-1.2,1.3-2.3,1.9-3.5
  c3,4.5,4,10.2,3.8,15.6c-0.2,4.7-2.9,7.6-5.9,11.1c-6,7-13.3,11.2-22.7,9.2c-3.7-0.8-8.2,0-11.9,1.3c-5.2,2-11.5,3.2-15.6-1.6
  c-0.9-1-1.5-2.3-2.3-3.4c-1.5-2.2-3.5-3.9-5.9-5c-0.8-0.4-1.7-1-1.5-1.8C340.1,153.5,342,153.3,343.9,153.1z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M318.7,155c0.2,0.2,0.4,0.3,0.6,0.5c2.3,2,5.8,2.1,8.7,1.3c1.3-0.4,2.6-0.9,4-1c8.1-0.5,12.5,8,8.4,14.3
  c-7.5,11.9-7.8,15.1-1,25.6c-0.3-0.5-7.8-2-9.2-2.9c-3.5-2.3-6.1-5.8-8.1-9.4c-3.7-6.9-6.9-19.1-5.6-26.9c0.1-0.8,0.5-1.8,1.3-1.8
  C318.2,154.8,318.4,154.9,318.7,155z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M296.4,154.5c-3.3,2.2-5.5,6.2-7.8,9.6c-2.9,4.4-7.4,9-12.6,8c3.7-2.6,6.8-6.1,8.7-10.2
  c3.3-6.9,3.9-15.8,10.3-20.1c7.2-4.9,21.1-1.9,18.9,9c-3.8,3.2-9.7,0.9-14.5,2.3C298.4,153.4,297.4,153.9,296.4,154.5z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M365.2,121.8c0,0.1-0.1,0.2-0.1,0.3c-2,4.7-9,2.7-12,0.5c-2-1.5-3.6-3.6-5.1-5.6c-2.8-3.8-5.8-7.1-8.9-10.6
  c-3-3.3-4.8-7.3-7.5-10.9c-1-1.3-2-2.6-2.7-4c-0.8-1.6-1.4-3.1-1.5-4.9c-0.1-1.6,0.1-3.3,1.2-4.4c1-1,2.6-1.3,4-1.1
  c1.4,0.2,2.8,0.9,4,1.6c1.3,0.7,2.5,1.3,3.8,2c1.9,1,4,2.5,3.8,4.5c-0.2,1.9-2.2,2.9-3.2,4.5c-1.6,2.4-0.3,4.9,1.2,7
  c5.4,7.6,15.7,10.9,21.7,18.4C364.8,119.8,365.4,120.8,365.2,121.8z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M386.5,134.3c-0.2,0.5-0.4,1-0.7,1.4c-0.9,1.4-2.7,2-4.4,2.5c-1.4,0.4-2.8,0.7-4.2,0.6
  c-2.5-0.2-4.7-1.9-7.1-2.8c-4.2-1.5-9.2-0.4-13.2-2.5c-0.7-0.4-1.5-1.2-1.1-1.9c0.2-0.4,0.6-0.5,0.9-0.7c3.8-1.6,7.8-2.6,11.6-4.2
  c3.8-1.6,7.4-4,9.3-7.6c0.6-1.1,1.1-2.4,1.9-3.3c0.8-1,2.2-1.6,3.4-1.1c3.8,1.7,5.1,4.8,5,8.8C388,125.9,387.7,131.2,386.5,134.3z"
  />
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M302.8,136.8c-5.2,0.4-10.3,2.4-14.5,5.6c-11.6-2.1-19.8,11.1-27.1,18.1c2.4-2.4,3.2-10.2,5-13.5
  c1.9-3.4,4.2-6.6,7.5-8.8C281.1,133.1,294.9,132.5,302.8,136.8z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M368.3,92.5c5.8,1.8,10.5,6.4,9.2,13c-0.2,0.9-0.5,1.8-0.4,2.7c0.1,0.7,0.4,1.3,0.5,2c0.5,2.8-1.8,5.3-3.9,7.3
  c-1.2,1.1-2.5,2.3-4.1,2.5c-1.9,0.2-3.6-0.9-5.1-2.1c-2.3-1.9-4.2-4.2-5.6-6.8c-0.4-0.7-0.8-1.6-0.4-2.3c0.4-0.7,1.4-0.9,2.2-1
  c2.7-0.4,6.9-2,7.8-5c1-3.2-1.9-5.2-3.7-7.4c-0.8-1-0.7-2.6,0.4-3.1c0.6-0.2,1.2-0.1,1.8,0C367.6,92.2,368,92.4,368.3,92.5z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M344.9,99.6c5.1-1,8.1-1.9,11.2-2.2c2.2-0.2,4.4,0.5,6.6,0.7c-0.3,2.4,0.2,5.4-1.1,6.8
  c-1.2,1.3-4.6,1.4-6.5,0.7C351.9,104.5,349.1,102.2,344.9,99.6z"/>
<path class="path" fill="#FFFFFF" stroke="#000000" stroke-width="4" stroke-miterlimit="10"  d="M345.8,95.1c-0.1-1.1-0.1-2.2,0.2-3.2c0.3-1,1.1-2,2.1-2.2c1.1-0.2,2.3,0.4,3.2,1.1c1.8,1.2,3.4,2.6,5,4.1
  c0.1,0.1,0.3,0.3,0.3,0.4c0.3,0.7-0.6,1.4-1.4,1.4c-0.8-0.1-1.5-0.6-2.2-0.8c-2.8-0.7-5.6,2.8-8.3,1.8c-0.1-1.3,0.5-2.7,1.5-3.6"/>
  
</svg>

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
                  <p> As a full-stack web developer with a background in finance, Chloe enjoys solving problems and presenting solutions that incorporate new technologies. Chloe has consistent record of constructing and executing model view controller frameworks.
Her applications focus on delivering user-friendly experiences. Chloe is driven by creativity and a life-long dedication to curiosity. Chloe currently seeks to build powerful applications and deliver dynamic products as an entry-level software engineer. Her language of choice is C++ and JavaScript.</p> 
              </div>
            </div>
      </div>
          </div>

      	</div>



      	);

	}
}



export default About;
