import React, { Component }  from 'react';
import styled from "@emotion/styled/macro";
import { Modal, Button } from 'antd';
import { Carousel, Radio } from 'antd';
import { Icon } from 'antd';
import './style.css';



 const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
});

// const BigTitle = styled.h2({
//   textTransform: "uppercase",
//   fontFamily: "Helvetica",
// });

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
  position: "flex",
  justifyContent: "center"

});

const SubTitle = styled.h4({
  position: "absolute",
  top: "50px",
  left: "0",
  right: "0",
  color: "transparent",
  fontFamily: "Helvetica",
  transition: "transform 350ms ease",
  textAlign: "center",
});

const Paragraph = styled.p({
  position: "absolute",
  top: "80px",
  transition: "transform 350ms ease",
  color: "transparent",
  textAlign: "center",
  width: "90%"
});

const CTA = styled.a({
  position: "absolute",
  left: "0",
  right: "0",
  bottom: "20px",
  transform: "translate3d(0,-50px,0)",
  transition: "transform 350ms ease",
  textAlign: "center",
  color: "black",

})


const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "transparent",
  position: "relative",
  width: "100%",
  height:"36vw",
  cursor: "pointer",
  backgroundImage: "${props => props.myImage}",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,0.3)"
  },
  [`:hover ${Paragraph}`]: {
    transition: "350ms ease all 0.1s",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
    transition: "350ms ease all 0.1s",
    color: "white"
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
   [`:hover ${CTA}`]: {
    color: "white"
  },
});



class ProjectCard extends Component {

constructor(props) 
  {
          super(props);

          this.state = {
         	visible: false,
         	dotPosition: 'bottom',
          title: props.project.title,
          cover: props.project.cover,
          description: props.project.description,
          img: props.project.img,
          detail: props.project.detail,
          link: props.project.link,
          code: props.project.code,
          tech: props.project.tech
          };
           this.next = this.next.bind(this);
          this.previous = this.previous.bind(this);
          this.carousel = React.createRef();

      }

  componentDidMount() {
    console.log(this.state.img);
    console.log(this.state.cover);
  
  }

 showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

 next() {
    this.carousel.next();
  }
  previous() {
    this.carousel.prev();
  }


render ()
{
	// const { dotPosition } = this.state;
  const props = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
	return (
	<div className = "h-100" id="cardwrapper">
 <Background id= "background" style= {{backgroundImage: `url(${this.state.cover})`}}>
  <DisplayOver onClick={this.showModal}>
    <Hover>
      <Paragraph>
      </Paragraph>
    </Hover>
  </DisplayOver>
</Background>

        <Modal
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
        >
        	<Carousel ref={node => (this.carousel = node)} {...props}>
  		    <div>
  		      <h3><img src= {this.state.img[0]}/></h3>
          </div>
          <div>
            <h3><img src= {this.state.img[1]}/></h3>
          </div>
           <div>
              <h3><img src= {this.state.img[2]}/></h3>
           </div>
             <div>
              <h3><img src= {this.state.img[3]}/></h3>
            </div>
  			</Carousel>
        <div className = "row" id="arrow">
          <div className = "col-12 d-flex arrowcol">
            <div id = "left">
              <Icon type="left" onClick={this.previous}/>  
            </div> 
            <div id = "right">
              <Icon type="right" onClick={this.next}/>
            </div>
          </div>
        </div>

  		  <div className = "projectContent">
          <div className = "row">
            <div className = "col-12 d-flex justify-content-center">
    		  	   <h3 id="modaltitle">{this.state.title}</h3>
            </div>
          </div>
          <div className = "row">
            <div className = "col-7 offset-1">
    	        <p>{this.state.detail}</p>
              <br></br>
              <a href = {this.state.link}><Icon type="link" />     See the project</a>
              <a id = "code" href = {this.state.code}><Icon type="code" />     View Code</a>
            </div>
            <div className = "col-3 offset-1">
            {this.state.tech.map(tech => (
        <li id="tech">{tech}</li> ))}       
            </div>
          </div>
        </div>

        </Modal>
</div>

);
}


}

export default ProjectCard;