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
  height:"500px",
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
          link: props.project.link
          };

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



render ()
{
	const { dotPosition } = this.state;
	return (
	<div className = "h-100" id="cardwrapper">
 <Background id= "background" style= {{backgroundImage: `url(${this.state.cover})`}}>
  <DisplayOver onClick={this.showModal}>
    <Hover>
      <Paragraph>
        {this.state.description}
      </Paragraph>
    </Hover>
  </DisplayOver>
</Background>

        <Modal
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
        >
        	<Carousel autoplay dotPosition={dotPosition}>
		    <div>
		      <h3><img src= {this.state.img[0]}/></h3>
		    </div>
		    <div>
		      <h3><img src={this.state.img[1]}/></h3>
		    </div>
		    <div>
		      <h3><img src={this.state.img[2]}/></h3>
		    </div>
		    <div>
		      <h3><img src={this.state.img[3]}/></h3>
		    </div>
  			</Carousel>
  		  <div className = "projectContent">
  		  	<h3>{this.state.title}</h3>
  		  	<hr></hr>
	         <p>{this.state.detail}</p>
          <br></br>
          <a href = {this.state.link}><Icon type="link" />     See the project</a>
        </div>

        </Modal>
</div>

);
}


}

export default ProjectCard;