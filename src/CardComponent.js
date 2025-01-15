
import React, { useContext } from "react";
import './App.css';
import { MyContext } from "./MyContext";
import { Container , Row , Col, Card, Form } from "react-bootstrap";


function CardComponent(){
     const {toggle} = useContext(MyContext);
    return(
        toggle?(
        <>
        <Container>
        <div>


<div className="experience-text-design mb-5">
By Me a Coffee
        </div>
        <Row className="mt-5">
<Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
<div className="backgroundwhite">
    <div className="backgroundColor-Black-innerDiv">
        
    </div>
    <div className="textDesign">
        Modren Resume / CV Figma Design Made by me
    </div>
    <div className="twobuttonsinonelinestyle">
        <button className="buttonOneDesign">
            10$
        </button>
        <button className="buttonTwoDesign">
            Purchase Design
        </button>
    </div>
</div>
</Col>
<Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
<div className="backgroundwhite-one">
    <div className="backgroundColor-Black-innerDiv">
        
    </div>
    <div className="textDesign">
        Modren Resume / CV Figma Design Made by me
    </div>
    <div className="twobuttonsinonelinestyle">
        <button className="buttonOneDesign">
            10$
        </button>
        <button className="buttonTwoDesign-one">
            Purchase Design
        </button>
    </div>
</div>
</Col>
<Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
<div className="backgroundwhite">
    <div className="backgroundColor-Black-innerDiv">
        
    </div>
    <div className="textDesign">
        Modren Resume / CV Figma Design Made by me
    </div>
    <div className="twobuttonsinonelinestyle">
        <button className="buttonOneDesign">
            10$
        </button>
        <button className="buttonTwoDesign">
            Purchase Design
        </button>
    </div>
</div>
</Col>
        </Row>
        <hr className="horizontaline"/>
        </div>
        </Container>
        </>
        ):(
            <>
            <Container>
            <div>


<div className="experience-text-design mb-5">
By Me a Coffee
        </div>
        <Row className="mt-5">
<Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
<div className="backgroundwhite-dark">
    <div className="backgroundColor-Black-innerDiv">
        
    </div>
    <div className="textDesign">
        Modren Resume / CV Figma Design Made by me
    </div>
    <div className="twobuttonsinonelinestyle">
        <button className="buttonOneDesign">
            10$
        </button>
        <button className="buttonTwoDesign">
            Purchase Design
        </button>
    </div>
</div>
</Col>
<Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
<div className="backgroundwhite-one">
    <div className="backgroundColor-Black-innerDiv">
        
    </div>
    <div className="textDesign">
        Modren Resume / CV Figma Design Made by me
    </div>
    <div className="twobuttonsinonelinestyle">
        <button className="buttonOneDesign">
            10$
        </button>
        <button className="buttonTwoDesign-one">
            Purchase Design
        </button>
    </div>
</div>
</Col>
<Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
<div className="backgroundwhite-dark">
    <div className="backgroundColor-Black-innerDiv">
        
    </div>
    <div className="textDesign">
        Modren Resume / CV Figma Design Made by me
    </div>
    <div className="twobuttonsinonelinestyle">
        <button className="buttonOneDesign">
            10$
        </button>
        <button className="buttonTwoDesign">
            Purchase Design
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
export default CardComponent;