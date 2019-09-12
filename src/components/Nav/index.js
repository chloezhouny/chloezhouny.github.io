import React, { Component }  from 'react';
import './style.css';

class Nav extends Component {

constructor(props) 
  {
          super(props);

          this.state = {
          top: "",
          height: "",
          scroll: "",
          about:false,
          project: false,
          contact: false,
          home: true
          };

          this.handleScroll = this.handleScroll.bind(this);
          this.changeOpacity1 = this.changeOpacity1.bind(this);
          this.changeOpacity2 = this.changeOpacity2.bind(this);
          this.changeOpacity3 = this.changeOpacity3.bind(this);
          this.changeOpacity4 = this.changeOpacity4.bind(this);
      }

  componentDidMount() {
    // const el = document.querySelector('nav');
    // console.log(el.offsetTop);
    const el = this.refs.nav;
    console.log(el);
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
        // this.state.scroll > this.state.top ? 
        //     document.body.style.paddingTop = `${this.state.height}px` :
        //     document.body.style.paddingTop = 0;
    }

  handleScroll() {
        this.setState({scroll: window.scrollY});
    }

    changeOpacity1 = () => {
    this.setState({
    home: false,
    about: true,
    project: false,
    contact: false,

    });
  }

   changeOpacity2 = () => {
    this.setState({
      home: false,
      about: false,
      project: true,
      contact: false
    });
  }

   changeOpacity3 = () => {
    this.setState({
      home: false,
      about: false,
      project: false,
      contact: true,
    });
  }

   changeOpacity4 = () => {
    this.setState({
      home: true,
      about: false,
      project: false,
      contact: false,
    });
  }


  onClick = () => {
    // this.setState({
    //   active: !this.state.active
    // });
  }


     

render ()
{

  let nav_class = this.state.about ? "nav-link clicked" : "nav-link notclicked";
  let nav_class2 = this.state.project ? "nav-link clicked" : "nav-link notclicked";
  let nav_class3 = this.state.contact ? "nav-link clicked" : "nav-link notclicked";

	return (

<nav ref='nav'  className={this.state.scroll > this.state.top ? "sticky navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-light bg-light"}>
  <a className="navbar-brand" href="#body" onClick={this.changeOpacity1}>CZ</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav" >
      <li className="nav-item">
        <a className={nav_class} style={{color: this.state.about ? "black" : "white" }} href="#aboutBody" onClick={this.changeOpacity1}>About.</a>
      </li>
      <li className="nav-item">
        <a className={nav_class2} style={{color: this.state.about ? "black" : "white" }} href="#projectBody" onClick={this.changeOpacity2}>Projects.</a>
      </li>
      <li className="nav-item">
        <a className={nav_class3} style={{color: this.state.about ? "black" : "white" }} href="#contactBody" onClick={this.changeOpacity3} >Contact.</a>
      </li>
    </ul>
  </div>
</nav>
);
}


}

export default Nav;