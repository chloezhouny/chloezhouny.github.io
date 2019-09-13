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
          home: true,
          step: 1,
          changingCount: 0,
          brandColor: ""
          };

          this.handleScroll = this.handleScroll.bind(this);
          this.changeOpacity1 = this.changeOpacity1.bind(this);
          this.changeOpacity2 = this.changeOpacity2.bind(this);
          this.changeOpacity3 = this.changeOpacity3.bind(this);
          this.changeOpacity4 = this.changeOpacity4.bind(this);
          this.changingColor = this.changingColor.bind(this);
      }

  componentDidMount() {
    // const el = document.querySelector('nav');
    // console.log(el.offsetTop);
    const el = this.refs.nav;
    console.log(el);
    this.setState({top: el.offsetTop, height: el.offsetHeight});
    window.addEventListener('scroll', this.handleScroll);
    this.changingColor();
    this.test();
    setInterval(this.changingColor,50);
  }

  componentDidUpdate() {
       const nav1 = this.refs.nav1;
       const nav2 = this.refs.nav2;
       const nav3 = this.refs.nav3;
       console.log("scroll", this.state.scroll);
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

  changingColor = () => {  

    console.log("brand color", this.state.brandColor);

      var red =   this.state.changingCount;
      var green = this.state.changingCount;
      var blue =  this.state.changingCount; 

    this.state.changingCount = this.state.changingCount + this.state.step * 1.5;

    if (this.state.changingCount > 70)
    {
       this.setState({
      step: -1
    });
    }

    if (this.state.changingCount === 0)
    {
      this.setState({
      step: 1
    }); 
    }

    this.setState({
      brandColor: `rgb(${red},${green},${blue})`
    }); 
}

test = () => {
   console.log("in test")
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
  let nav_color = this.state.scroll > 600 && this.state.scroll < 2600 ? "black" : "white";
  let brand_color = this.state.brandColor;
  let style = 
  {
    backgroundColor: brand_color
  }

	return (

<nav ref='nav' className="sticky navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" style={style} href="#body" onClick={this.changeOpacity1}>cz</a>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav" >
      <li className="nav-item">
        <a ref='nav1' className={[nav_class, nav_color].join(' ')} href="#divider" onClick={this.changeOpacity1}>About. &nbsp;</a>
      </li>
      <li className="nav-item">
        <a ref='nav2'className={[nav_class2, nav_color].join(' ')} href="#projectBody" onClick={this.changeOpacity2}>Projects. &nbsp;  </a>
      </li>
      <li className="nav-item">
        <a ref='nav3'className={[nav_class3, nav_color].join(' ')} href="#contactBody" onClick={this.changeOpacity3} >Contact. &nbsp;  </a>
      </li>
    </ul>
  </div>
</nav>
);
}


}

export default Nav;