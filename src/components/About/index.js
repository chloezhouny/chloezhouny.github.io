import React, { Component }from 'react';
import profile from './profile.jpg';
import './style.css';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';


const { TabPane } = Tabs;


function callback(key) {
  console.log(key);
}


class About extends Component {

 state = {
 	show: true,
 	show2: true,
 	show3: true,
 	 items: [
      <li key="0">CSS</li>,
      <li key="1">HTML</li>,
      <li key="2">React</li>,
      <li key="3">JavaScript</li>,
      <li key="4">JQuery</li>,
      <li key="5">Material UI</li>,
      <li key="6">Ant Design</li>,
      <li key="7">Three.js</li>

    ],

    items2: [
      <li key="0"><div>Node.js</div></li>,
      <li key="1">Express</li>,
      <li key="2">MySQL</li>,
      <li key="3">Sequelize</li>,
      <li key="4">Mongo</li>,
      <li key="5">Firebase</li>,
      <li key="6">Amazon Web Service</li>,
      <li key="7">Git</li>,
      <li key="8">NPM</li>,
      <li key="9">Passport</li>
    ],

     items3: [
      <li key="0">C++</li>,
      <li key="1">Python</li>,
      <li key="2">Ruby/Rails</li>
    ]

 }

 onClick = () => {
    this.setState({
      show: !this.state.show
    });
  }

 onAdd = () => {
    let items = this.state.items;
    items.push(<li key={Date.now()}></li>);
    this.setState({
      show: true,
      items,
    });
  }

 onRemove = () => {
    let items = this.state.items;
    items.splice(items.length - 1, 1);
    this.setState({
      show: true,
      items,
    });
  }

   onChange = () => {
   	 this.setState({
      show: !this.state.show
    });
   }

  componentDidMount() {


  }


      render() {
      	return (     
      	<div className="container">
      		<div className = "row">
      			<div className = "col-12 d-flex justify-content-center">
      				<h1>ABOUT</h1>
      			</div>
      		</div>  
      		<div className = "row">
      			<div className = "col-6">
      				<div id="chloe">
      			 		<img src={profile}/>
      			 	</div>
      			 	<div class = "row d-flex justify-content-center mt-5">
						<div class = "col-8">
							<p>	Hello there, my name is Chloe Zhou. I am a front-end web developer based in San Francisco. When I'm not running my code you can find me in concerts exploring amazing melodies🎶</p>
							<p> As currently a master student in Computer Enginnering, I am seeking entry-level software engineering opportunities or Internship/Co-ops. Skill sets:  C++, HTML & CSS, Javascript, Firebase, Node.js.</p>
						</div>
					</div>
      			</div>
      			<div className = "col-6" id="skill">
      			  <Tabs defaultActiveKey="1" onChange={callback}>

				    <TabPane tab="FRONT-END"  key="1">
				    <Button type="primary" onClick={this.onClick}>Switch</Button>
	
				 	<QueueAnim component="ul" type={['right', 'left']} leaveReverse>
		              {this.state.show ? this.state.items : null}
		         	</QueueAnim>
		
				    </TabPane>
				    <TabPane tab="BACK-END"  key="2">
				      <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
		              {this.state.show2 ? this.state.items2 : null}
		         	</QueueAnim>
				    </TabPane>
				    <TabPane tab="TOOLS & LANGUAGES" key="3">
				      <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
		              {this.state.show3 ? this.state.items3 : null}
		         	</QueueAnim>
				    </TabPane>
				  </Tabs>     			
      			</div>
      		</div>

      	<div className="queue-demo">
	        <p className="buttons">
	          <Button type="primary" onClick={this.onClick}>Switch</Button>
	          <Button onClick={this.onAdd} style={{ marginLeft: 10 }}>Add</Button>
	          <Button onClick={this.onRemove} style={{ marginLeft: 10 }}>Remove</Button>
	        </p>
	        <div className="demo-content">
		        <div className="demo-thead" key="a">
		            <ul>
		              <li />
		              <li />
		              <li />
		            </ul>
		          </div>
		    <div className="demo-tbody" key="b">
		         <QueueAnim component="ul" type={['right', 'left']} leaveReverse>
		              {this.state.show ? this.state.items : null}
		         </QueueAnim>
	        </div>
      </div>
      	</div>
      	</div>



      	);

	}
}



export default About;
