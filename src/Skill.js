
import React, { useContext } from "react";
import './App.css';
import { MyContext } from "./MyContext";
import { Container , Row , Col, Card, Form } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";

function Skill(){
      const {toggle} = useContext(MyContext);
    return(
        toggle?(
       <>
       <Container>
         <div>
            <div className="experience-text-design mb-5">
        Skill
                </div> 
                <div className="experience-text-design mb-5">
                Design Tool I Use
                </div>
                <div className="displayFlexTwoNumbers">
                    <button className="buttonTwoxdandfig">
                        <img src="/download (19) 2.png" alt="xd-images" style={{width:"30px"}}/>Adobe XD
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/figma 3.png" alt="figma-image" style={{width:"30px"}}/>Figma
                    </button>
                </div>
                <div className="experience-text-design mt-5 mb-5">
                Technologies I Use
                </div>
                <div className="displayFlexTwoNumbers-second-Container">
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
                    <button className="buttonTwoxdandfig">
                        <img src="/react 2.png" alt="html-image" style={{width:"20px"}}/> ReactJS
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (12) 2.png" alt="html-image" style={{width:"20px"}}/> Redux
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (13) 2.png" alt="html-image" style={{width:"20px"}}/> Firebase
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (14) 1.png" alt="html-image" style={{width:"20px"}}/> AMP
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (15) 1.png" alt="html-image" style={{width:"20px"}}/> React Hook Form
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (16) 1.png" alt="html-image" style={{width:"20px"}}/> Material UI
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (2) 1.png" alt="html-image" style={{width:"20px"}}/> Tailwind CSS
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (17) 1.png" alt="html-image" style={{width:"20px"}}/> Chakra UI
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (18) 1.png" alt="html-image" style={{width:"20px"}}/> Semantic UI
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (12) 1.png" alt="html-image" style={{width:"20px"}}/> Ant Design
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (3) 2.png" alt="html-image" style={{width:"20px"}}/> GrapQL
                    </button>
                    <button className="buttonTwoxdandfig">
                        <img src="/download (22) 2.png" alt="html-image" style={{width:"20px"}}/> Git
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
        
                </div>
                <div className="mb-5 mt-2 width-hundred-display-align">
                   <div className="w-50 experience-text-design-one">
                   DEVELOPMENT & PRODUCTIVITY
                   TOOLS I USE
                    </div> 
                    </div>
              
              <div className="displayFlexTwoNumbers-second-Container">
              <button className="buttonTwoxdandfig">
                        <img src="/download (14) 2.png" alt="html-image" style={{width:"20px"}}/> Visual Studio Code
                    </button>
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
                    </div>
             
                    <div className="center-align">
            <button className="btn-two">
            <MdOutlineFileDownload className="svgIcon"/> Resume
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
            Skill
                    </div> 
                    <div className="experience-text-design mb-5">
                    Design Tool I Use
                    </div>
                    <div className="displayFlexTwoNumbers">
                        <button className="buttonTwoxdandfig">
                            <img src="/download (19) 2.png" alt="xd-images" style={{width:"30px"}}/>Adobe XD
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/figma 3.png" alt="figma-image" style={{width:"30px"}}/>Figma
                        </button>
                    </div>
                    <div className="experience-text-design mt-5 mb-5">
                    Technologies I Use
                    </div>
                    <div className="displayFlexTwoNumbers-second-Container">
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
                        <button className="buttonTwoxdandfig">
                            <img src="/react 2.png" alt="html-image" style={{width:"20px"}}/> ReactJS
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (12) 2.png" alt="html-image" style={{width:"20px"}}/> Redux
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (13) 2.png" alt="html-image" style={{width:"20px"}}/> Firebase
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (14) 1.png" alt="html-image" style={{width:"20px"}}/> AMP
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (15) 1.png" alt="html-image" style={{width:"20px"}}/> React Hook Form
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (16) 1.png" alt="html-image" style={{width:"20px"}}/> Material UI
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (2) 1.png" alt="html-image" style={{width:"20px"}}/> Tailwind CSS
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (17) 1.png" alt="html-image" style={{width:"20px"}}/> Chakra UI
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (18) 1.png" alt="html-image" style={{width:"20px"}}/> Semantic UI
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (12) 1.png" alt="html-image" style={{width:"20px"}}/> Ant Design
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (3) 2.png" alt="html-image" style={{width:"20px"}}/> GrapQL
                        </button>
                        <button className="buttonTwoxdandfig">
                            <img src="/download (22) 2.png" alt="html-image" style={{width:"20px"}}/> Git
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
            
                    </div>
                    <div className="mb-5 mt-2 width-hundred-display-align">
                       <div className="w-50 experience-text-design-one">
                       DEVELOPMENT & PRODUCTIVITY
                       TOOLS I USE
                        </div> 
                        </div>
                  
                  <div className="displayFlexTwoNumbers-second-Container">
                  <button className="buttonTwoxdandfig">
                            <img src="/download (14) 2.png" alt="html-image" style={{width:"20px"}}/> Visual Studio Code
                        </button>
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
                        </div>
                 
                        <div className="center-align">
                <button className="btn-two">
                <MdOutlineFileDownload className="svgIcon"/> Resume
                    </button>
                </div>  
                <hr className="horizontaline"/>
                </div>
                
            </Container>

        </>
       )
    )
}
export default Skill;