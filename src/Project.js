
import React, { useContext } from "react";
import './App.css';
import { MyContext } from "./MyContext";
import { Container , Row , Col, Card, Form } from "react-bootstrap";


function Project(){
     const {toggle} = useContext(MyContext);
    return(
        toggle?(
       <>
       <Container>
       <div>
<div className="experience-text-design mb-5">
Projects I've 
Worked on
        </div>
        <Row className="mt-5 mb-3 bg-color-all-container">
<Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

<div className="backgroudColor-Change">


</div>

</Col>
<Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
<div className="div-font-size">
CricTraker 
</div>
<div className="small-font-size">
Worked on
</div>
<div className="twobuttonflex">
    <button className="buttonOne">
        Website
    </button>
    <button className="buttonOne">
    Admin Panel
    </button>
</div>
<div className="fz-manage">
Technologies I have used
</div>
<div className="flex-design-in-button">
      
            <button className="buttonTwoxdandfig">
                <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
            </button>

            </div>
            <div>
            <button className="buttonTwoxdandfig-One">
                <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/> Go to CricTracker
            </button>  
            <div className="letter-image-pos-absolu">
                <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
            </div>
            </div>
        
</Col>
        </Row>

        <Row className="mt-5 mb-3 bg-color-all-container-mahroon">
<Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

<div className="backgroudColor-Change-lightMahroon">


</div>

</Col>
<Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
<div className="div-font-size">
SportsBuzz 
</div>
<div className="small-font-size">
Worked on
</div>
<div className="twobuttonflex">
    <button className="buttonOne">
        Website
    </button>
    <button className="buttonOne">
    Admin Panel
    </button>
</div>
<div className="fz-manage">
Technologies I have used
</div>
<div className="flex-design-in-button">
      
            <button className="buttonTwoxdandfig">
                <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
            </button>

            </div>
            <div>
            <button className="buttonTwoxdandfig-One">
                <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/> Go to SportsBuzz
            </button>  
            <div className="letter-image-pos-absolu">
                <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
            </div>
            </div>
        
</Col>
        </Row>

        <Row className="mt-5 mb-3 bg-color-all-container-mahroon-Two">
<Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

<div className="backgroudColor-Change-lightMahroon-Two">


</div>

</Col>
<Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
<div className="div-font-size">
Epiko Market
</div>
<div className="small-font-size">
Worked on
</div>
<div className="twobuttonflex">
    <button className="buttonOne">
        Website
    </button>
    <button className="buttonOne">
    Admin Panel
    </button>
</div>
<div className="fz-manage">
Technologies I have used
</div>
<div className="flex-design-in-button">
      
            <button className="buttonTwoxdandfig">
                <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
            </button>

            </div>
            <div>
            <button className="buttonTwoxdandfig-One">
                <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/>Go to Epiko Market
            </button>  
            <div className="letter-image-pos-absolu">
                <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
            </div>
            </div>
        
</Col>
        </Row>


        <div className="center-align">
        <button className="btn-one mt-4 mb-4">
           
           <img src="/Frame (3).png" alt="image" style={{width:"20px"}}/> See Github
        </button> 
        </div>
        <hr className="horizontaline"/>
</div>
       </Container>
       </>):(
        <>
        <Container>
        <div>
<div className="experience-text-design mb-5">
Projects I've 
Worked on
        </div>
        <Row className="mt-5 mb-3 bg-color-all-container">
<Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

<div className="backgroudColor-Change">


</div>

</Col>
<Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
<div className="div-font-size">
CricTraker 
</div>
<div className="small-font-size">
Worked on
</div>
<div className="twobuttonflex">
    <button className="buttonOne">
        Website
    </button>
    <button className="buttonOne">
    Admin Panel
    </button>
</div>
<div className="fz-manage">
Technologies I have used
</div>
<div className="flex-design-in-button">
      
            <button className="buttonTwoxdandfig">
                <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
            </button>

            </div>
            <div>
            <button className="buttonTwoxdandfig-One">
                <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/> Go to CricTracker
            </button>  
            <div className="letter-image-pos-absolu">
                <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
            </div>
            </div>
        
</Col>
        </Row>

        <Row className="mt-5 mb-3 bg-color-all-container-mahroon">
<Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

<div className="backgroudColor-Change-lightMahroon">


</div>

</Col>
<Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
<div className="div-font-size">
SportsBuzz 
</div>
<div className="small-font-size">
Worked on
</div>
<div className="twobuttonflex">
    <button className="buttonOne">
        Website
    </button>
    <button className="buttonOne">
    Admin Panel
    </button>
</div>
<div className="fz-manage">
Technologies I have used
</div>
<div className="flex-design-in-button">
      
            <button className="buttonTwoxdandfig">
                <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
            </button>

            </div>
            <div>
            <button className="buttonTwoxdandfig-One">
                <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/> Go to SportsBuzz
            </button>  
            <div className="letter-image-pos-absolu">
                <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
            </div>
            </div>
        
</Col>
        </Row>

        <Row className="mt-5 mb-3 bg-color-all-container-mahroon-Two">
<Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

<div className="backgroudColor-Change-lightMahroon-Two">


</div>

</Col>
<Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
<div className="div-font-size">
Epiko Market
</div>
<div className="small-font-size">
Worked on
</div>
<div className="twobuttonflex">
    <button className="buttonOne">
        Website
    </button>
    <button className="buttonOne">
    Admin Panel
    </button>
</div>
<div className="fz-manage">
Technologies I have used
</div>
<div className="flex-design-in-button">
      
            <button className="buttonTwoxdandfig">
                <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
            </button>
            <button className="buttonTwoxdandfig">
                <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
            </button>

            </div>
            <div>
            <button className="buttonTwoxdandfig-One">
                <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/>Go to Epiko Market
            </button>  
            <div className="letter-image-pos-absolu">
                <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
            </div>
            </div>
        
</Col>
        </Row>


        <div className="center-align">
        <button className="btn-one mt-4 mb-4">
           
           <img src="/Frame (3).png" alt="image" style={{width:"20px"}}/> See Github
        </button> 
        </div>
        <hr className="horizontaline"/>
</div>
        </Container>
        </>
       )
    )
}
export default Project;