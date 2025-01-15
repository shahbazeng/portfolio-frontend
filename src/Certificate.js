
import React, { useContext } from "react";
import './App.css';
import { MyContext } from "./MyContext";
import { Container , Row , Col, Card, Form } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";


function Certificate(){
    const {toggle} = useContext(MyContext);
    return(
        toggle?(
       <>
       <Container>
       <div>
    <div className="experience-text-design mb-5">
    Certificate
        </div>
      <Row className="mt-3 container-space-yaxis">
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv">
        Udemy
        </div> 
        <div className="imageposabsol">
            <img src="/letter-u.png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        Advanced CSS and Sass: Flexbox,
        Grid, Animarions and More!
        </div>
        <div>
            <button className="btn-design">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv">
        Udemy
        </div> 
        <div className="imageposabsol">
            <img src="/letter-u.png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        The Complete Java Script Course
        2020: From Zero to Expert!
        </div>
        <div>
            <button className="btn-design">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
      </Row>
      <Row className="mt-3 container-space-yaxis">
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards-container-second">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv-second-container">
       Coursera
        </div> 
        <div className="imageposabsol">
            <img src="/download (5).png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        Google UX Design
        </div>
        <div>
            <button className="btn-design-second-Container">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards-container-second">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv-third-container">
       FreeCodeCamp
        </div> 
        <div className="imageposabsol">
            <img src="/download (11).png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        Front End Libraries
        </div>
        <div>
            <button className="btn-design-second-Container">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
      </Row>
      <Row className="mt-3 container-space-yaxis">
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv-second-container">
       Linkedin
        </div> 
        <div className="imageposabsol">
            <img src="/linkedin.png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        React.js Essential Training !
        </div>
        <div>
            <button className="btn-design">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv-second-container">
       Educative
        </div> 
        <div className="imageposabsol">
            <img src="/notes.png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        Understanding Redux: A Beginner's
Guide To State Management
        </div>
        <div>
            <button className="btn-design">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
      </Row>
      <hr className="horizontaline"/>
    </div>
        </Container>
       </>):(
        <>
        <Container>
        <div>
    <div className="experience-text-design mb-5">
    Certificate
        </div>
      <Row className="mt-3 container-space-yaxis">
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards-dark">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv">
        Udemy
        </div> 
        <div className="imageposabsol">
            <img src="/letter-u.png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        Advanced CSS and Sass: Flexbox,
        Grid, Animarions and More!
        </div>
        <div>
            <button className="btn-design">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards-dark">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv">
        Udemy
        </div> 
        <div className="imageposabsol">
            <img src="/letter-u.png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        The Complete Java Script Course
        2020: From Zero to Expert!
        </div>
        <div>
            <button className="btn-design">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
      </Row>
      <Row className="mt-3 container-space-yaxis">
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards-container-second">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv-second-container">
       Coursera
        </div> 
        <div className="imageposabsol">
            <img src="/download (5).png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        Google UX Design
        </div>
        <div>
            <button className="btn-design-second-Container">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards-container-second">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv-third-container">
       FreeCodeCamp
        </div> 
        <div className="imageposabsol">
            <img src="/download (11).png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        Front End Libraries
        </div>
        <div>
            <button className="btn-design-second-Container">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
      </Row>
      <Row className="mt-3 container-space-yaxis">
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards-dark">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv-second-container">
       Linkedin
        </div> 
        <div className="imageposabsol">
            <img src="/linkedin.png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        React.js Essential Training !
        </div>
        <div>
            <button className="btn-design">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
        <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
        <div className="parent-div-in-cards-dark">
            <div className="TwodivsinOneLine">
            <div>
       <div className="buttonTypediv-second-container">
       Educative
        </div> 
        <div className="imageposabsol">
            <img src="/notes.png" alt="letter-image" style={{width:"40px"}}/>
        </div>
        </div>
        <div>
            <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
        </div>
        </div>
        <div className="fw-bold mt-3">
        Understanding Redux: A Beginner's
Guide To State Management
        </div>
        <div>
            <button className="btn-design">
<FaRegEye/> View
            </button>
        </div>
        </div>
        
        </Col>
      </Row>
      <hr className="horizontaline"/>
    </div>

        </Container>
        </>
       )
    )
}
export default Certificate;