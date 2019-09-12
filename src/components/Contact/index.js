import React, { Component }from 'react';
import './style.css';


class Contact extends Component {

 state = {
  

 }

 
  componentDidMount() {


  }


      render() {
        return (
        <div id="contactBody"> 
          <div className="container w-75" id = "contactContent">
            <div className = "row">
              <div className = "col-12 contactLine">
                <p>For any proposal</p>         
              </div>
            </div> 
            <div className = "row">
              <div className = "col-12 contactLine">
                <p>of collaboration,</p>         
              </div>
            </div> 
             <div className = "row">
              <div className = "col-12 contactLine" >
                <p>feel free to contact me.</p>               
              </div>
            </div>   
            <div className = "row">
              <div className = "col-8 email">
                  <p> chloezhouny@gmail.com </p>
              </div>
            </div>
            <div className = "row contactLink">
              <div className = "col-12">
                  <div className = "row d-flex justify-content-center">
                      <div className = "col-1 linkwrapper">
                        <p> Github. </p>
                      </div>
                      <div className = "col-1 linkwrapper">
                        <p> LinkedIn. </p>
                      </div>
                      <div className = "col-1 linkwrapper">
                        <p> Facebook. </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>

        </div>



        );

  }
}



export default Contact;
