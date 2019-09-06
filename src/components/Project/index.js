import React, { Component }  from 'react';
import styled from "@emotion/styled/macro";
import { Modal, Button } from 'antd';
import { Carousel } from 'antd';
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

const BigTitle = styled.h2({
  textTransform: "uppercase",
  fontFamily: "Helvetica",
});

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
});

const SubTitle = styled.h4({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});


const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "500px",
  height: "350px",
  cursor: "pointer",
  backgroundImage: `url("https://images.unsplash.com/photo-1566568860449-f30e620d4d58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80")`,
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});



class Project extends Component {

constructor(props) 
  {
          super(props);

          this.state = {
         	visible: false 
          };

      }

  componentDidMount() {
  
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
	return (
	<div>
 <Background>
  <DisplayOver>
    <BigTitle>Really Cool Title!</BigTitle>
    <Hover>
      <SubTitle>You could vacation here!</SubTitle>
      <Paragraph>
        More description about this really cool random desert photo from unsplash!
      </Paragraph>
      <CTA onClick={this.showModal}>View More +</CTA>
    </Hover>
  </DisplayOver>
</Background>

        <Modal
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
        	<Carousel autoplay>
		    <div>
		      <h3><img src= "https://images.unsplash.com/photo-1562217180-021f74991332?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/></h3>
		    </div>
		    <div>
		      <h3><img src="https://images.unsplash.com/photo-1566640269407-436c75fc9495?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/></h3>
		    </div>
		    <div>
		      <h3><img src="https://images.unsplash.com/photo-1566640241039-2443899336c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"/></h3>
		    </div>
		    <div>
		      <h3><img src="https://images.unsplash.com/photo-1566640240730-eee83b88f7db?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"/></h3>
		    </div>
  			</Carousel>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
</div>

);
}


}

export default Project;