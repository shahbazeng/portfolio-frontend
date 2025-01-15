
import React, { useContext } from "react";
import './App.css';
import { MyContext } from "./MyContext";
import { Container , Row , Col, Card, Form } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";

function CheckoutResume(){
    const {toggle} = useContext(MyContext);
    return(
        toggle?(
       <>
       <Container>
<div>
<div className="experience-text-design mt-5 mb-5" >
Checkout my Resume
        </div>
        <div className="image-align-center">
            <img src="/boy (1).png" alt="image" style={{width:"50px"}} className="image-border"/>
        </div> 
        <div className="textColorFont">
        NIKUNJ THESIYA
        </div>
        <div className="text-center text-light" style={{fontSize:"13px"}}>
            Frontend Developer | Web Developer | UI Developer
        </div>
        <div className="textCenterWithButton">
        <button className="btn-one">
           <MdOutlineFileDownload className="svgIcon"/> Resume
        </button>
        <button className="btn-two">
          Discuss Project
        </button>
    </div>
    <hr className="horizontaline"/>
</div>
       </Container>
       </>):(
        <>
        <Container>
<div>
<div className="experience-text-design mt-5 mb-5" >
Checkout my Resume
        </div>
        <div className="image-align-center">
            <img src="/boy (1).png" alt="image" style={{width:"50px"}} className="image-border"/>
        </div> 
        <div className="textColorFont">
        NIKUNJ THESIYA
        </div>
        <div className="text-center text-dark" style={{fontSize:"13px"}}>
            Frontend Developer | Web Developer | UI Developer
        </div>
        <div className="textCenterWithButton">
        <button className="btn-one">
           <MdOutlineFileDownload className="svgIcon"/> Resume
        </button>
        <button className="btn-two">
          Discuss Project
        </button>
    </div>
    <hr className="horizontaline"/>
</div>
        </Container>
        </>
       )
    )
}
export default CheckoutResume;