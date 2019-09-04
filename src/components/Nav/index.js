import React, { Component }  from 'react';
import './style.css';

class Nav extends Component {

constructor(props) 
  {
          super(props);

          this.state = {
          top: "",
          height: "",
          scroll: ""
          };

          this.handleScroll = this.handleScroll.bind(this);
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
        this.state.scroll > this.state.top ? 
            document.body.style.paddingTop = `${this.state.height}px` :
            document.body.style.paddingTop = 0;
    }

  handleScroll() {
        this.setState({scroll: window.scrollY});
    }
     

render ()
{
	return (

<nav ref='nav'  className={this.state.scroll > this.state.top ? "sticky navbar navbar-expand-lg navbar-light bg-light" : "navbar navbar-expand-lg navbar-light bg-light"}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
);
}


}

export default Nav;