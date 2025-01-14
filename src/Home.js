import React, { useContext } from "react";
import './App.css';
import { Container , Row , Col, Card, Form } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { MyContext } from "./MyContext";

function Home(){
    const {toggle} = useContext(MyContext);
    return(
        
            toggle? (
        
        <div>
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




{/* About section */}

    <div>
        <div className="second-conatiner">
        About Me
        </div>
        <div className="fzImageText">
            <img src="/Ellipse 9.png" style={{width:"50px"}}/> I Love
        </div>
        <Row className="mt-5">
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="fourButtonsWrapIndiv">
           
            <div className="display-flex-gap">
            <button className="fontSizeOne">
                <img src="/headphones 1.png" style={{width:"30px"}}/> Listeing to Music
            </button>
            <button className="fontSizeOne">
                <img src="/travel 1.png" style={{width:"30px"}}/> Travelling
            </button>
            </div>
           <div  className="display-flex-gap">
           <button className="fontSizeTwo">
                <img src="/mountain 1.png" style={{width:"30px"}}/> Mountains
            </button>
            <button className="fontSizeTwo">
                <img src="/flying-money 1.png" style={{width:"30px"}}/> Money
            </button>
           </div>
           
            
          

            </Col>
            <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
            <div className="twoContainerdisplayFlex">
            <div className="width-height-div">
                <div className="textManageColor">
                3.9+
                </div>
                <div className="year">
                Years
                </div>
                <div className="experience">
                Experience
                </div>
            </div>
            <div className="width-height-div">
                <div className="textManageColor">
                3.9+
                </div>
                <div className="year">
                Years
                </div>
                <div className="experience">
                Experience
                </div>
            </div>
            </div>
            
           
            </Col>
        </Row>
        <div className="background-setup">
            A Passionate Front End Developer with a Master's and Computer Application and over 3.9 Years of experience in crafting captivating digital experience. My expertise lies in leveraging cutting-edge technologies such a ReactJS, NextJS,Apollo GraphQL, Redux, React Query and various UI frameworksincluding Material UI, NextUI, SCSS, Tailwind CSS, Chakra  and Bootstrap. I take pride in my ability to design seamless users interfaces and components that align perfectly with the intended aesthetic,creating responsive website that adapt gracefully to any device. My skill set also extends to proficientAPI integration, ensuring the seamless  flow of data between front end and back end. In addition, I am
known for writting clean well-structured code that not only functions flawlessly but also enchances the overall maintainabillity of projects. With a track record of contributing to well-known products likeCricTracker,Sportsbuzz, and epiko market, I am commited to pushing the boundries of web develp to deliver the exceptional digital solution.

            </div>
            <div className="align-center">
                <button className="imageText">
                <MdOutlineFileDownload className="svgIconOne"/>  Contact Me
                </button>
            </div>

            <hr className="horizontaline"/>

    </div>


    {/* Education section */}

    <div>
        <div className="font-size-setup">
        Education
        </div>

        <Row className="mt-5">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
     
            <div className="backgroundColorOnCard">
                <div className="dflexjustspaceBetween">
<div>
    <button className="image-design">
        <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2017-2020
    </button>
</div>
<div>
    <button className="image-design-one">
        <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Graduation
    </button>
</div>
</div>
<div className="disgap">
<button className="degreeButton">
Bachelor's Degree
</button>
<div>
    <button className="BCAbutton">
    BCA
    </button>
</div>
</div>
<div>
    <h3 className="mt-3">Bachelor of Computer Applications</h3>
</div>
<div className="twoitemsinOneLine">
    <div className="bgWhite">
        <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
    </div>
    <div className="alignitems">
    Veer Narmad South Gujarat University  
        </div>
</div>
<div className="twoitemsinOneLine">
    <div className="bgWhite">
        <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
    </div>
    <div className="alignitems">
    Surat, Gujrat, India 
        </div>
</div>


            </div>
           
           
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
     
     <div className="backgroundColorOnCard-secondContainer">
         <div className="dflexjustspaceBetween">
<div>
<button className="image-design">
 <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2020-2022
</button>
</div>
<div>
<button className="image-design-one-secondContainer">
 <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Post Graduation
</button>
</div>
</div>
<div className="disgap">
<button className="degreeButton-secondContainer">
Master's Degree
</button>
<div>
<button className="BCAbutton-secondContainer">
MCA
</button>
</div>
</div>
<div>
<h3 className="mt-3">Master of Computer Applications</h3>
</div>
<div className="twoitemsinOneLine">
<div className="bgWhite-secodContainer">
 <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
</div>
<div className="alignitems">
Parul University 
 </div>
</div>
<div className="twoitemsinOneLine">
<div className="bgWhite-secodContainer">
 <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
</div>
<div className="alignitems">
Vadodara, Gujrat , India
 </div>
</div>


     </div>
    
    
     </Col>
        </Row>
        <hr className="horizontaline"/>
    </div>

    {/* Experience section */}


    <div>
        <div className="experience-text-design mb-5">
Experiance
        </div>
        <div className="bgLightTextBlack">
            
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            
            <div className="backgroundBlack">
                <div className="colorSize">
                Troolnbound Pvt .Ltd.
                </div>
                <div className="Size">
                    <img src="/Vector.png" alt="vectoe-img" style={{width:"10px"}}/>Surat, Gujrat, India
                </div>
            </div>
            <div className="imageAbsolute">
               <img src="/cap (2).png" alt="cap-image" style={{width:"60px"}}/>
            </div>
            {/* <div>
                <button className="clandarButton">
                    <img src="/Frame (1).png" alt="farme-img"/> Dec 2024-Present
                </button>
            </div> */}
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            
            
            
            <div className="alignEnd">
                <button className="clandarButton">
                    <img src="/Frame (1).png" alt="farme-img" style={{width:"20px"}}/> Dec 2024-Present
                </button>
            </div>
            </Col>
        </Row>

        <div className="dflexTextImage">
            <div>
                <img src="/boy.png" alt="boy-image" style={{width:"40px"}}/>
            </div>
            <div className="fw-bold">
            Front End Developer
            </div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Designed and developed over 15 complete react and NextJS full  theme 
templete showcasing proficiency in front-end design and development.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Led the development of the Wired Academy project a full-stack NextJS  
apllication.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Managed both front-end and back-end aspects, utilizing NextJS API 
Routes of seamless interaction.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Integrated Strip Payment Getaway for seamless and secure integration.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Successfully deployed the application or versal for optimal perfomance 
and accessibility.
</div>
        </div>
        </div>



        <div className="bgLightTextBlack-second-container">
            
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                
                <div className="backgroundBlack">
                    <div className="colorSize">
                    Yudiz Solution Ltd.
                    </div>
                    <div className="Size">
                        <img src="/Vector.png" alt="vectoe-img" style={{width:"10px"}}/>Ahmabad  Lahore
                    </div>
                </div>
                <div className="imageAbsolute">
                   <img src="/logo (2).png" alt="cap-image" style={{width:"60px"}}/>
                </div>
                {/* <div>
                    <button className="clandarButton">
                        <img src="/Frame (1).png" alt="farme-img"/> Dec 2024-Present
                    </button>
                </div> */}
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                
                
                
                <div className="alignEnd">
                    <button className="clandarButton-second-container">
                        <img src="/Frame (1).png" alt="farme-img" style={{width:"20px"}}/> Jan 2023- May 2024
                    </button>
                </div>
                </Col>
            </Row>
    
            <div className="dflexTextImage">
                <div>
                    <img src="/boy.png" alt="boy-image" style={{width:"40px"}}/>
                </div>
                <div className="fw-bold">
                Front End Developer
                </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Worked on a variety of projects, include Epiko market, CricTraker, and 
    Sportsbuzz.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Collaborated in teams of developers UI designers, and backend developers.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Demonstrated expertise in designing and building resuable components 
    and pages, ensuring responsiveness and adherence to design.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Proficiently handled API integrations, ensuring seamless data exchange,
and played and integral role in reviewing approving / rejecting junior
developers pull requests on GitHub. Aditionally, actively assigned task 
to junior team members in alignment with sprint objectives, fostering
efficient project management.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Played a crucial role in project deployment and debugging accross 
    different environments, including Development, Staging, and Production.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Shared Knowledge and expertise by conducting trainning sessions on 
Java Script, Responsive Web Design and ReactJS for Trainess and junior
developers, contributing to skill development with inthe company.
    </div>
            </div>
            </div>
            <div className="bgLightTextBlack">
            
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            
            <div className="backgroundBlack">
                <div className="colorSize">
                Obtain Infoach
                </div>
                <div className="Size">
                    <img src="/Vector.png" alt="vectoe-img" style={{width:"10px"}}/>Ahmadabad Lahore
                </div>
            </div>
            <div className="imageAbsolute">
               <img src="/letter-i.png" alt="cap-image" style={{width:"60px"}}/>
            </div>
          
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            
            
            
            <div className="alignEnd">
                <button className="clandarButton">
                    <img src="/Frame (1).png" alt="farme-img" style={{width:"20px"}}/> Feb 2020-Dec 2022
                </button>
            </div>
            </Col>
        </Row>

        <div className="dflexTextImage">
            <div>
                <img src="/boy.png" alt="boy-image" style={{width:"40px"}}/>
            </div>
            <div className="fw-bold">
            Web Developer
            </div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Designed numerouse responsive themes using HTML/CSS and ReactJS,
user-friendly and visually appealing web interfaces.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Successfully integrated Rest APIs, enchacing website functionality and 
user experience.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Proficiently worked with PHP and MySQL,handling CRUD operations using 
PHP to manage and manipulate data effectively.
</div>
        </div>
        
      
        </div>
        <hr className="horizontaline"/>
    </div>


    {/* Certificate section */}

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

    {/* Skill section */}
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
    
    {/* Projects I've Worked on */}
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
{/* Cards section */}<div>


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
        {/* Checkout my Resume */}
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
        
{/* Connect with me */}
<div>
<div className="experience-text-design mt-5 mb-3" >
Connect With Me
        </div>
       
       <div className="image-middle-align-one mt-4">
        <button className="imageAndtextButton">
            <img src="/linkedin.png" alt="linkedin-image" className="inner-image-button"/>Linkedin
        </button>
        <button className="imageAndtextButton">
            <img src="/download (15) 5.png" alt="linkedin-image" className="inner-image-button"/>Instagram
        </button>
        <button className="imageAndtextButton">
            <img src="/download (16) 2.png" alt="linkedin-image" className="inner-image-button"/>Facebook
        </button>
        <button className="imageAndtextButton">
            <img src="/download (17) 2.png" alt="linkedin-image" className="inner-image-button"/>Telegram
        </button>
        <button className="imageAndtextButton">
            <img src="/download (18) 2.png" alt="linkedin-image" className="inner-image-button"/>Twitter
        </button>
        <button className="imageAndtextButton">
            <img src="/download (29) 1.png" alt="linkedin-image" className="inner-image-button"/>Skype
        </button>
       </div>
       <div className="image-middle-align-one">
       <button className="imageAndtextButton mt-2">
            <img src="/download (30) 1.png" alt="linkedin-image" className="inner-image-button"/>nikunjthesiya.js@gmail.com
        </button>
       </div>
       <div className="image-middle-align mt-3">
        <img src="/developer 1.png" alt="banner-image" style={{width:"250px"}}/>
        </div>
        <hr className="horizontaline"/>
</div>


{/* Contact me */}
<div className="mt-5">
    <div className="background-light-borderRadius-padding">
        <h1 className="text-center fw-bold">
            Connect Me
        </h1>
        <Row className="mt-3 mb-3">
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (4).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Full Name*" className="BorderNone"/>
               

            </Form.Group>
</Col>
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (5).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Email*" className="BorderNone"/>
                

            </Form.Group>
</Col>
       
            
            </Row>
        
        <Row className="mt-2 mb-3">
       
            <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (6).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Mobile No." className="BorderNone"/>
                

            </Form.Group>
</Col>
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
               
                
                <Form.Control type="text" placeholder="Subject*" className="BorderNone-one"/>
                

            </Form.Group>
</Col>
       

        </Row>
        <Row>
        <Form.Group className="mt-3 mb-3 image-inputField-flex">
               <textarea placeholder="Message*" className="BorderNone-one height-width-setup">

               </textarea>
                
               

           </Form.Group>
           <div>
           
            <button className="imageAndtextButton-one">
            Send <img src="/Livello_2 (1).png" alt="livello" className="inner-image-button-one"/>
        </button>
           </div>
        </Row>
        <div className="posabsolute">
        <img src="/developer 1.png" alt="banner-image" style={{width:"250px"}} className="form-under-image"/>
        </div>
    </div>
    <hr className="horizontaline-one"/>
</div>

{/* Portfolio Made With */}
<div>
<div className="experience-text-design mt-5 mb-3" >
Portfolio Made With
        </div> 
        <div className="displayFlexTwoNumbers-second-Container mt-5 mb-5">
        <button className="fontSize-four">
            <img src="/download (4) 1.png" style={{width:"30px"}} />   NextJS
            </button>
<button className="fontSize-four">
            <img src="/react 1.png" style={{width:"30px"}} />  ReactJs
            </button>
<button className="fontSize-four">
            <img src="/download (3) 1.png" style={{width:"40px"}} />  GraphQl
            </button>
<button className="fontSize-four">
            <img src="/download (2) 1.png" style={{width:"30px"}} />  Tailwind CSS
            </button>
<button className="fontSize-four">
            <img src="/js 3.png" style={{width:"20px"}} />  JavaScript
            </button>
<button className="fontSize-four">
            <img src="/figma 1.png" style={{width:"30px"}} /> Figma
            </button>
            </div>
</div>

{/* Footer */}

<div>
    <div className="backgroundColorYellow ">
        <div className="d-flex align-items-center gap-2">

       
        <div className="backgroundColor-radius">
           
            <img src="/SA.png" alt="sa-img"  style={{width:"30px"}}/>
            
           
        </div>
        <div className="fs-4">
            Shahbaz <span className="fw-bold">Ali</span>
        </div>
        </div>
        <div className="fs-4">
        Designed & Build by <span className="fw-bold">SHEHBAZ ALI  </span>
        </div>
    </div>
</div>
</Container>

        </div>):(<div>
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
            <img src="/download (4) 1.png" style={{width:"30px"}} />   NextJS
            </button>
        </div>
        <div className="nextjsButtonTwo">
            <button className="fontSize-dark">
            <img src="/react 1.png" style={{width:"30px"}} />  ReactJs
            </button>
        </div>
        <div className="nextjsButtonThree">
            <button className="fontSize-dark">
            <img src="/download (3) 1.png" style={{width:"30px"}} />  GraphQl
            </button>
        </div>
        <div className="nextjsButtonFour">
            <button className="fontSize-dark">
            <img src="/download (2) 1.png" style={{width:"30px"}} />  Tailwind CSS
            </button>
        </div>
        <div className="nextjsButtonFive">
            <button className="fontSize-dark">
            <img src="/js 3.png" style={{width:"30px"}} />  JavaScript
            </button>
        </div>
        <div className="nextjsButtonSix">
            <button className="fontSize-dark">
            <img src="/figma 1.png" style={{width:"30px"}} /> Figma
            </button>
        </div>
    </div>




{/* About section */}

    <div>
        <div className="second-conatiner">
        About Me
        </div>
        <div className="fzImageText">
            <img src="/Ellipse 9.png" style={{width:"50px"}}/> I Love
        </div>
        <Row className="mt-5">
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="fourButtonsWrapIndiv">
           
            <div className="display-flex-gap">
            <button className="fontSizeOne bg-light-button">
                <img src="/headphones 1.png" style={{width:"30px"}}/> Listeing to Music
            </button>
            <button className="fontSizeOne bg-light-button">
                <img src="/travel 1.png" style={{width:"30px"}}/> Travelling
            </button>
            </div>
           <div  className="display-flex-gap">
           <button className="fontSizeTwo bg-light-button">
                <img src="/mountain 1.png" style={{width:"30px"}}/> Mountains
            </button>
            <button className="fontSizeTwo bg-light-button">
                <img src="/flying-money 1.png" style={{width:"30px"}}/> Money
            </button>
           </div>
           
            
          

            </Col>
            <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
            <div className="twoContainerdisplayFlex">
            <div className="width-height-div">
                <div className="textManageColor">
                3.9+
                </div>
                <div className="year">
                Years
                </div>
                <div className="experience">
                Experience
                </div>
            </div>
            <div className="width-height-div">
                <div className="textManageColor">
                3.9+
                </div>
                <div className="year">
                Years
                </div>
                <div className="experience">
                Experience
                </div>
            </div>
            </div>
            
           
            </Col>
        </Row>
        <div className="background-setup">
            A Passionate Front End Developer with a Master's and Computer Application and over 3.9 Years of experience in crafting captivating digital experience. My expertise lies in leveraging cutting-edge technologies such a ReactJS, NextJS,Apollo GraphQL, Redux, React Query and various UI frameworksincluding Material UI, NextUI, SCSS, Tailwind CSS, Chakra  and Bootstrap. I take pride in my ability to design seamless users interfaces and components that align perfectly with the intended aesthetic,creating responsive website that adapt gracefully to any device. My skill set also extends to proficientAPI integration, ensuring the seamless  flow of data between front end and back end. In addition, I am
known for writting clean well-structured code that not only functions flawlessly but also enchances the overall maintainabillity of projects. With a track record of contributing to well-known products likeCricTracker,Sportsbuzz, and epiko market, I am commited to pushing the boundries of web develp to deliver the exceptional digital solution.

            </div>
            <div className="align-center">
                <button className="imageText">
                <MdOutlineFileDownload className="svgIconOne"/>  Contact Me
                </button>
            </div>

            <hr className="horizontaline"/>

    </div>


    {/* Education section */}

    <div>
        <div className="font-size-setup">
        Education
        </div>

        <Row className="mt-5">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
     
            <div className="backgroundColorOnCard">
                <div className="dflexjustspaceBetween">
<div>
    <button className="image-design">
        <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2017-2020
    </button>
</div>
<div>
    <button className="image-design-one">
        <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Graduation
    </button>
</div>
</div>
<div className="disgap">
<button className="degreeButton">
Bachelor's Degree
</button>
<div>
    <button className="BCAbutton">
    BCA
    </button>
</div>
</div>
<div>
    <h3 className="mt-3">Bachelor of Computer Applications</h3>
</div>
<div className="twoitemsinOneLine">
    <div className="bgWhite">
        <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
    </div>
    <div className="alignitems">
    Veer Narmad South Gujarat University  
        </div>
</div>
<div className="twoitemsinOneLine">
    <div className="bgWhite">
        <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
    </div>
    <div className="alignitems">
    Surat, Gujrat, India 
        </div>
</div>


            </div>
           
           
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
     
     <div className="backgroundColorOnCard-secondContainer-dark">
         <div className="dflexjustspaceBetween">
<div>
<button className="image-design">
 <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2020-2022
</button>
</div>
<div>
<button className="image-design-one-secondContainer">
 <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Post Graduation
</button>
</div>
</div>
<div className="disgap">
<button className="degreeButton-secondContainer">
Master's Degree
</button>
<div>
<button className="BCAbutton-secondContainer">
MCA
</button>
</div>
</div>
<div>
<h3 className="mt-3">Master of Computer Applications</h3>
</div>
<div className="twoitemsinOneLine">
<div className="bgWhite-secodContainer">
 <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
</div>
<div className="alignitems">
Parul University 
 </div>
</div>
<div className="twoitemsinOneLine">
<div className="bgWhite-secodContainer">
 <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
</div>
<div className="alignitems">
Vadodara, Gujrat , India
 </div>
</div>


     </div>
    
    
     </Col>
        </Row>
        <hr className="horizontaline"/>
    </div>

    {/* Experience section */}


    <div>
        <div className="experience-text-design mb-5">
Experiance
        </div>
        <div className="bgLightTextBlack-dark">
            
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            
            <div className="backgroundBlack">
                <div className="colorSize">
                Troolnbound Pvt .Ltd.
                </div>
                <div className="Size">
                    <img src="/Vector.png" alt="vectoe-img" style={{width:"10px"}}/>Surat, Gujrat, India
                </div>
            </div>
            <div className="imageAbsolute">
               <img src="/cap (2).png" alt="cap-image" style={{width:"60px"}}/>
            </div>
            {/* <div>
                <button className="clandarButton">
                    <img src="/Frame (1).png" alt="farme-img"/> Dec 2024-Present
                </button>
            </div> */}
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            
            
            
            <div className="alignEnd">
                <button className="clandarButton">
                    <img src="/Frame (1).png" alt="farme-img" style={{width:"20px"}}/> Dec 2024-Present
                </button>
            </div>
            </Col>
        </Row>

        <div className="dflexTextImage">
            <div>
                <img src="/boy.png" alt="boy-image" style={{width:"40px"}}/>
            </div>
            <div className="fw-bold">
            Front End Developer
            </div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Designed and developed over 15 complete react and NextJS full  theme 
templete showcasing proficiency in front-end design and development.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Led the development of the Wired Academy project a full-stack NextJS  
apllication.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Managed both front-end and back-end aspects, utilizing NextJS API 
Routes of seamless interaction.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Integrated Strip Payment Getaway for seamless and secure integration.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Successfully deployed the application or versal for optimal perfomance 
and accessibility.
</div>
        </div>
        </div>



        <div className="bgLightTextBlack-second-container">
            
            <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                
                <div className="backgroundBlack">
                    <div className="colorSize">
                    Yudiz Solution Ltd.
                    </div>
                    <div className="Size">
                        <img src="/Vector.png" alt="vectoe-img" style={{width:"10px"}}/>Ahmabad  Lahore
                    </div>
                </div>
                <div className="imageAbsolute">
                   <img src="/logo (2).png" alt="cap-image" style={{width:"60px"}}/>
                </div>
                {/* <div>
                    <button className="clandarButton">
                        <img src="/Frame (1).png" alt="farme-img"/> Dec 2024-Present
                    </button>
                </div> */}
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                
                
                
                <div className="alignEnd">
                    <button className="clandarButton-second-container">
                        <img src="/Frame (1).png" alt="farme-img" style={{width:"20px"}}/> Jan 2023- May 2024
                    </button>
                </div>
                </Col>
            </Row>
    
            <div className="dflexTextImage">
                <div>
                    <img src="/boy.png" alt="boy-image" style={{width:"40px"}}/>
                </div>
                <div className="fw-bold">
                Front End Developer
                </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Worked on a variety of projects, include Epiko market, CricTraker, and 
    Sportsbuzz.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Collaborated in teams of developers UI designers, and backend developers.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Demonstrated expertise in designing and building resuable components 
    and pages, ensuring responsiveness and adherence to design.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Proficiently handled API integrations, ensuring seamless data exchange,
and played and integral role in reviewing approving / rejecting junior
developers pull requests on GitHub. Aditionally, actively assigned task 
to junior team members in alignment with sprint objectives, fostering
efficient project management.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Played a crucial role in project deployment and debugging accross 
    different environments, including Development, Staging, and Production.
    </div>
            </div>
            <div className="dflexTextImage">
    <div>
        <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
    </div>
    <div>
    Shared Knowledge and expertise by conducting trainning sessions on 
Java Script, Responsive Web Design and ReactJS for Trainess and junior
developers, contributing to skill development with inthe company.
    </div>
            </div>
            </div>
            <div className="bgLightTextBlack-dark">
            
        <Row>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            
            <div className="backgroundBlack">
                <div className="colorSize">
                Obtain Infoach
                </div>
                <div className="Size">
                    <img src="/Vector.png" alt="vectoe-img" style={{width:"10px"}}/>Ahmadabad Lahore
                </div>
            </div>
            <div className="imageAbsolute">
               <img src="/letter-i.png" alt="cap-image" style={{width:"60px"}}/>
            </div>
          
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
            
            
            
            <div className="alignEnd">
                <button className="clandarButton">
                    <img src="/Frame (1).png" alt="farme-img" style={{width:"20px"}}/> Feb 2020-Dec 2022
                </button>
            </div>
            </Col>
        </Row>

        <div className="dflexTextImage">
            <div>
                <img src="/boy.png" alt="boy-image" style={{width:"40px"}}/>
            </div>
            <div className="fw-bold">
            Web Developer
            </div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Designed numerouse responsive themes using HTML/CSS and ReactJS,
user-friendly and visually appealing web interfaces.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Successfully integrated Rest APIs, enchacing website functionality and 
user experience.
</div>
        </div>
        <div className="dflexTextImage">
<div>
    <img src="/Livello_2.png" alt="livello" style={{width:"13px"}}/>
</div>
<div>
Proficiently worked with PHP and MySQL,handling CRUD operations using 
PHP to manage and manipulate data effectively.
</div>
        </div>
        
      
        </div>
        <hr className="horizontaline"/>
    </div>


    {/* Certificate section */}

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

    {/* Skill section */}
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
    
    {/* Projects I've Worked on */}
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
{/* Cards section */}<div>


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
        {/* Checkout my Resume */}
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
        
{/* Connect with me */}
<div>
<div className="experience-text-design mt-5 mb-3" >
Connect With Me
        </div>
       
       <div className="image-middle-align-one mt-4">
        <button className="imageAndtextButton">
            <img src="/linkedin.png" alt="linkedin-image" className="inner-image-button"/>Linkedin
        </button>
        <button className="imageAndtextButton">
            <img src="/download (15) 5.png" alt="linkedin-image" className="inner-image-button"/>Instagram
        </button>
        <button className="imageAndtextButton">
            <img src="/download (16) 2.png" alt="linkedin-image" className="inner-image-button"/>Facebook
        </button>
        <button className="imageAndtextButton">
            <img src="/download (17) 2.png" alt="linkedin-image" className="inner-image-button"/>Telegram
        </button>
        <button className="imageAndtextButton">
            <img src="/download (18) 2.png" alt="linkedin-image" className="inner-image-button"/>Twitter
        </button>
        <button className="imageAndtextButton">
            <img src="/download (29) 1.png" alt="linkedin-image" className="inner-image-button"/>Skype
        </button>
       </div>
       <div className="image-middle-align-one">
       <button className="imageAndtextButton mt-2">
            <img src="/download (30) 1.png" alt="linkedin-image" className="inner-image-button"/>nikunjthesiya.js@gmail.com
        </button>
       </div>
       <div className="image-middle-align mt-3">
        <img src="/developer 1.png" alt="banner-image" style={{width:"250px"}}/>
        </div>
        <hr className="horizontaline"/>
</div>


{/* Contact me */}
<div className="mt-5">
    <div className="background-light-borderRadius-padding-dark">
        <h1 className="text-center fw-bold">
            Connect Me
        </h1>
        <Row className="mt-3 mb-3">
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (4).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Full Name*" className="BorderNone"/>
               

            </Form.Group>
</Col>
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (5).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Email*" className="BorderNone"/>
                

            </Form.Group>
</Col>
       
            
            </Row>
        
        <Row className="mt-2 mb-3">
       
            <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (6).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Mobile No." className="BorderNone"/>
                

            </Form.Group>
</Col>
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
               
                
                <Form.Control type="text" placeholder="Subject*" className="BorderNone-one"/>
                

            </Form.Group>
</Col>
       

        </Row>
        <Row>
        <Form.Group className="mt-3 mb-3 image-inputField-flex">
               <textarea placeholder="Message*" className="BorderNone-one height-width-setup">

               </textarea>
                
               

           </Form.Group>
           <div>
           
            <button className="imageAndtextButton-one">
            Send <img src="/Livello_2 (1).png" alt="livello" className="inner-image-button-one"/>
        </button>
           </div>
        </Row>
        <div className="posabsolute">
        <img src="/developer 1.png" alt="banner-image" style={{width:"250px"}}/>
        </div>
    </div>
    <hr className="horizontaline-one"/>
</div>

{/* Portfolio Made With */}
<div>
<div className="experience-text-design mt-5 mb-3" >
Portfolio Made With
        </div> 
        <div className="displayFlexTwoNumbers-second-Container mt-5 mb-5">
        <button className="fontSize-four">
            <img src="/download (4) 1.png" style={{width:"30px"}} />   NextJS
            </button>
<button className="fontSize-four">
            <img src="/react 1.png" style={{width:"30px"}} />  ReactJs
            </button>
<button className="fontSize-four">
            <img src="/download (3) 1.png" style={{width:"40px"}} />  GraphQl
            </button>
<button className="fontSize-four">
            <img src="/download (2) 1.png" style={{width:"30px"}} />  Tailwind CSS
            </button>
<button className="fontSize-four">
            <img src="/js 3.png" style={{width:"20px"}} />  JavaScript
            </button>
<button className="fontSize-four">
            <img src="/figma 1.png" style={{width:"30px"}} /> Figma
            </button>
            </div>
</div>

{/* Footer */}

<div>
    <div className="backgroundColorYellow ">
        <div className="d-flex align-items-center gap-2">

       
        <div className="backgroundColor-radius">
           
            <img src="/SA.png" alt="sa-img"  style={{width:"30px"}}/>
            
           
        </div>
        <div className="fs-4">
            Shahbaz <span className="fw-bold">Ali</span>
        </div>
        </div>
        <div className="fs-4">
        Designed & Build by <span className="fw-bold">SHEHBAZ ALI  </span>
        </div>
    </div>
</div>
</Container>

        </div>)
    )
}
export default Home;