
import React, { useContext } from "react";
import './App.css';
import { MyContext } from "./MyContext";
import { Container , Row , Col, Card, Form } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";

function BannerCode(){
    const {toggle} = useContext(MyContext);
    return(
        toggle?(
        <>
        <Container>
             <div  className="textLight">
                Hello! I'm <span className="change-color">Shahbaz Ali</span> 
                </div>
                <div className="fontweight">
                A Front End Developer | Web Designer 
                </div>
                <div className="textbtncenter">
            with   
            <button>
                3.9 + year
            </button>
            Experiance
                </div>
                <div className="textCenterWithButton">
                    <button className="btn-one">
                       <MdOutlineFileDownload className="svgIcon"/> Resume
                    </button>
                    <button className="btn-two">
                        Hire Me
                    </button>
                </div>
                <div className="posrel">
                    <div className="positionZindex">
                    <img src="/banner_img.png" alt="banner-img"  className="img-fluid manage-Img" />
                    </div>
                   
                    <div className="backgroundColor">
                    
                    </div>
                    <div className="nextjsButton">
                        <button className="fontSize">
                        <img src="/download (4) 1.png"  className="images" />   NextJS
                        </button>
                    </div>
                    <div className="nextjsButtonTwo">
                        <button className="fontSize">
                        <img src="/react 1.png"   className="images"/>  ReactJs
                        </button>
                    </div>
                    <div className="nextjsButtonThree">
                        <button className="fontSize">
                        <img src="/download (3) 1.png"   className="images"/>  GraphQl
                        </button>
                    </div>
                    <div className="nextjsButtonFour">
                        <button className="fontSize">
                        <img src="/download (2) 1.png"   className="images"/>  Tailwind CSS
                        </button>
                    </div>
                    <div className="nextjsButtonFive">
                        <button className="fontSize">
                        <img src="/js 3.png"   className="images"/>  JavaScript
                        </button>
                    </div>
                    <div className="nextjsButtonSix">
                        <button className="fontSize">
                        <img src="/figma 1.png"  className="images"/> Figma
                        </button>
                    </div>
                </div>
        </Container>

        </>
        ):(
            <>
            <Container>
                 <div  className="textLight-dark">
                    Hello! I'm <span className="change-color">Shahbaz Ali</span> 
                    </div>
                    <div className="fontweight-dark">
                    A Front End Developer | Web Designer 
                    </div>
                    <div className="textbtncenter-dark">
                with   
                <button>
                    3.9 + year
                </button>
                Experiance
                    </div>
                    <div className="textCenterWithButton">
                        <button className="btn-one">
                           <MdOutlineFileDownload className="svgIcon"/> Resume
                        </button>
                        <button className="btn-two">
                            Hire Me
                        </button>
                    </div>
                    <div className="posrel">
                        <div className="positionZindex">
                        <img src="/banner_img.png" alt="banner-img" style={{width:"850px"}} className="img-fluid" />
                        </div>
                       
                        <div className="backgroundColor">
                        
                        </div>
                        <div className="nextjsButton">
                            <button className="fontSize-dark">
                            <img src="/download (4) 1.png"  className="images"  />   NextJS
                            </button>
                        </div>
                        <div className="nextjsButtonTwo">
                            <button className="fontSize-dark">
                            <img src="/react 1.png"  className="images" />  ReactJs
                            </button>
                        </div>
                        <div className="nextjsButtonThree">
                            <button className="fontSize-dark">
                            <img src="/download (3) 1.png"  className="images"  />  GraphQl
                            </button>
                        </div>
                        <div className="nextjsButtonFour">
                            <button className="fontSize-dark">
                            <img src="/download (2) 1.png"  className="images"  />  Tailwind CSS
                            </button>
                        </div>
                        <div className="nextjsButtonFive">
                            <button className="fontSize-dark">
                            <img src="/js 3.png"  className="images" />  JavaScript
                            </button>
                        </div>
                        <div className="nextjsButtonSix">
                            <button className="fontSize-dark">
                            <img src="/figma 1.png"  className="images" /> Figma
                            </button>
                        </div>
                    </div>
            </Container>
            </>
        )
    )
}
export default BannerCode;