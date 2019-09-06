import React, { Component }from 'react';
import Canvas from '../components/Canvas';
import Nav from '../components/Nav';
import About from '../components/About';
import Project from '../components/Project';
import Contact from '../components/Contact';
import './Home.css';




class Home extends Component {

	// constructor(props) 
	// {
	//         super(props);

	//         this.state = {
	//         top: "",
	//         height: "",
	//         scroll: ""
	//         };

	//         this.handleScroll = this.handleScroll.bind(this);
	//     }

 //  componentDidMount() {
 //  	// const el = document.querySelector('nav');
 //  	// console.log(el.offsetTop);
 //  	const el = this.refs.nav;
 //  	this.setState({top: el.offsetTop, height: el.offsetHeight});
 //        window.addEventListener('scroll', this.handleScroll);
 //  }

 //  componentDidUpdate() {
 //        this.state.scroll > this.state.top ? 
 //            document.body.style.paddingTop = `${this.state.height}px` :
 //            document.body.style.paddingTop = 0;
 //    }

	// handleScroll() {
 //        this.setState({scroll: window.scrollY});
 //    }
	   
	
      render() {
      	return (
      		<div>
	      		<Canvas/>
	      		<Nav id="nav"/>
	      		<About />
	      		<Project />
	      		<Contact />
      		</div>

      	);

	}
}




export default Home;
