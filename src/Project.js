// import React, { useContext } from "react";
// import './App.css';
// import { MyContext } from "./MyContext";
// import { Container , Row , Col, Card, Form } from "react-bootstrap";

// function Project(){
//      const {toggle} = useContext(MyContext);
//     return(
//         toggle?(
//        <>
//        <Container>
//        <div>
// <div className="experience-text-design mb-5">
// Projects I've
// Worked on
//         </div>
//         <Row className="mt-5 mb-3 bg-color-all-container">
// <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

// <div className="backgroudColor-Change">

// </div>

// </Col>
// <Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
// <div className="div-font-size">
// CricTraker
// </div>
// <div className="small-font-size">
// Worked on
// </div>
// <div className="twobuttonflex">
//     <button className="buttonOne">
//         Website
//     </button>
//     <button className="buttonOne">
//     Admin Panel
//     </button>
// </div>
// <div className="fz-manage">
// Technologies I have used
// </div>
// <div className="flex-design-in-button">

//             <button className="buttonTwoxdandfig">
//                 <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
//             </button>

//             </div>
//             <div>
//             <button className="buttonTwoxdandfig-One">
//                 <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/> Go to CricTracker
//             </button>
//             <div className="letter-image-pos-absolu">
//                 <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
//             </div>
//             </div>

// </Col>
//         </Row>

//         <Row className="mt-5 mb-3 bg-color-all-container-mahroon">
// <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

// <div className="backgroudColor-Change-lightMahroon">

// </div>

// </Col>
// <Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
// <div className="div-font-size">
// SportsBuzz
// </div>
// <div className="small-font-size">
// Worked on
// </div>
// <div className="twobuttonflex">
//     <button className="buttonOne">
//         Website
//     </button>
//     <button className="buttonOne">
//     Admin Panel
//     </button>
// </div>
// <div className="fz-manage">
// Technologies I have used
// </div>
// <div className="flex-design-in-button">

//             <button className="buttonTwoxdandfig">
//                 <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
//             </button>

//             </div>
//             <div>
//             <button className="buttonTwoxdandfig-One">
//                 <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/> Go to SportsBuzz
//             </button>
//             <div className="letter-image-pos-absolu">
//                 <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
//             </div>
//             </div>

// </Col>
//         </Row>

//         <Row className="mt-5 mb-3 bg-color-all-container-mahroon-Two">
// <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

// <div className="backgroudColor-Change-lightMahroon-Two">

// </div>

// </Col>
// <Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
// <div className="div-font-size">
// Epiko Market
// </div>
// <div className="small-font-size">
// Worked on
// </div>
// <div className="twobuttonflex">
//     <button className="buttonOne">
//         Website
//     </button>
//     <button className="buttonOne">
//     Admin Panel
//     </button>
// </div>
// <div className="fz-manage">
// Technologies I have used
// </div>
// <div className="flex-design-in-button">

//             <button className="buttonTwoxdandfig">
//                 <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
//             </button>

//             </div>
//             <div>
//             <button className="buttonTwoxdandfig-One">
//                 <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/>Go to Epiko Market
//             </button>
//             <div className="letter-image-pos-absolu">
//                 <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
//             </div>
//             </div>

// </Col>
//         </Row>

//         <div className="center-align">
//         <button className="btn-one mt-4 mb-4">

//            <img src="/Frame (3).png" alt="image" style={{width:"20px"}}/> See Github
//         </button>
//         </div>
//         <hr className="horizontaline"/>
// </div>
//        </Container>
//        </>):(
//         <>
//         <Container>
//         <div>
// <div className="experience-text-design mb-5">
// Projects I've
// Worked on
//         </div>
//         <Row className="mt-5 mb-3 bg-color-all-container">
// <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

// <div className="backgroudColor-Change">

// </div>

// </Col>
// <Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
// <div className="div-font-size">
// CricTraker
// </div>
// <div className="small-font-size">
// Worked on
// </div>
// <div className="twobuttonflex">
//     <button className="buttonOne">
//         Website
//     </button>
//     <button className="buttonOne">
//     Admin Panel
//     </button>
// </div>
// <div className="fz-manage">
// Technologies I have used
// </div>
// <div className="flex-design-in-button">

//             <button className="buttonTwoxdandfig">
//                 <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
//             </button>

//             </div>
//             <div>
//             <button className="buttonTwoxdandfig-One">
//                 <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/> Go to CricTracker
//             </button>
//             <div className="letter-image-pos-absolu">
//                 <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
//             </div>
//             </div>

// </Col>
//         </Row>

//         <Row className="mt-5 mb-3 bg-color-all-container-mahroon">
// <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

// <div className="backgroudColor-Change-lightMahroon">

// </div>

// </Col>
// <Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
// <div className="div-font-size">
// SportsBuzz
// </div>
// <div className="small-font-size">
// Worked on
// </div>
// <div className="twobuttonflex">
//     <button className="buttonOne">
//         Website
//     </button>
//     <button className="buttonOne">
//     Admin Panel
//     </button>
// </div>
// <div className="fz-manage">
// Technologies I have used
// </div>
// <div className="flex-design-in-button">

//             <button className="buttonTwoxdandfig">
//                 <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
//             </button>

//             </div>
//             <div>
// <button className="buttonTwoxdandfig-One">
//     <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/> Go to SportsBuzz
// </button>
// <div className="letter-image-pos-absolu">
//     <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
// </div>
// </div>

// </Col>
//         </Row>

//         <Row className="mt-5 mb-3 bg-color-all-container-mahroon-Two">
// <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>

// <div className="backgroudColor-Change-lightMahroon-Two">

// </div>

// </Col>
// <Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
// <div className="div-font-size">
// Epiko Market
// </div>
// <div className="small-font-size">
// Worked on
// </div>
// <div className="twobuttonflex">
//     <button className="buttonOne">
//         Website
//     </button>
//     <button className="buttonOne">
//     Admin Panel
//     </button>
// </div>
// <div className="fz-manage">
// Technologies I have used
// </div>
// <div className="flex-design-in-button">

//             <button className="buttonTwoxdandfig">
//                 <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
//             </button>
//             <button className="buttonTwoxdandfig">
//                 <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
//             </button>

//             </div>
//             <div>
//             <button className="buttonTwoxdandfig-One">
//                 <img src="/Frame (2).png" alt="html-image" style={{width:"20px"}}/>Go to Epiko Market
//             </button>
//             <div className="letter-image-pos-absolu">
//                 <img src="/letter-i.png" style={{width:"30px"}} alt="letter-image"/>
//             </div>
//             </div>

// </Col>
//         </Row>

//         <div className="center-align">
//         <button className="btn-one mt-4 mb-4">

//            <img src="/Frame (3).png" alt="image" style={{width:"20px"}}/> See Github
//         </button>
//         </div>
//         <hr className="horizontaline"/>
// </div>
//         </Container>
//         </>
//        )
//     )
// }
// export default Project;
// ------------------------------------------------------------------------------------------
// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import projectData from "./data/Project.json";

// function Project() {
//   const { toggle } = useContext(MyContext); // kept if you want theme toggles later
//   const titleLines = projectData.title.split("\n");

//   return (
//     <Container>
//       <div>
//         <div className="experience-text-design mb-5">
//           {titleLines.map((t, i) => (
//             <span key={i}>
//               {t}
//               {i < titleLines.length - 1 ? <br /> : null}
//             </span>
//           ))}
//         </div>

//         {projectData.projects.map((p, idx) => (
//           <Row key={p.name} className={`mt-5 mb-3 ${p.rowClass}`}>
//             <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>
//               <div className={p.leftBoxClass}></div>
//             </Col>

//             <Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
//               <div className="div-font-size">{p.name}</div>

//               <div className="small-font-size">Worked on</div>

//               <div className="twobuttonflex">
//                 {p.workedOn.map((w) => (
//                   <button key={w} className="buttonOne">
//                     {w}
//                   </button>
//                 ))}
//               </div>

//               <div className="fz-manage">Technologies I have used</div>

//               <div className="flex-design-in-button">
//                 {p.tech.map((t) => (
//                   <button key={t.label} className="buttonTwoxdandfig">
//                     <img
//                       src={t.icon}
//                       alt={`${t.label}-icon`}
//                       style={{ width: "20px" }}
//                     />
//                     {t.label}
//                   </button>
//                 ))}
//               </div>

//               <div>
//                 {/* <a href={p.action.href} className="buttonTwoxdandfig-One">
//                   <img
//                     src={p.action.icon}
//                     alt="action-icon"
//                     style={{ width: "20px" }}
//                   />{" "}
//                   {p.action.label}
//                 </a> */}
//                 <div>
//                   <button className="buttonTwoxdandfig-One">
//                     <img
//                       src="/Frame (2).png"
//                       alt="html-image"
//                       style={{ width: "20px" }}
//                     />
//                     {p.action.label}
//                   </button>
//                   <div className="letter-image-pos-absolu">
//                     <img
//                       src="/letter-i.png"
//                       style={{ width: "30px" }}
//                       alt="letter-image"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         ))}

//         {/* <div className="center-align">
//           <a href={projectData.cta.href} className="btn-one mt-4 mb-4">
//             <img
//               src={projectData.cta.icon}
//               alt="github"
//               style={{ width: "20px" }}
//             />{" "}
//             {projectData.cta.label}
//           </a>
//         </div> */}

//         <hr className="horizontaline" />
//       </div>
//     </Container>
//   );
// }

// export default Project;

import React, { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import projectData from "./data/Project.json";

function Project() {
  const { toggle } = useContext(MyContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });
  const titleLines = projectData.title.split("\n");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const projectVariants = (index) => {
    const directions = [
      { x: -100, y: 0 }, // from left
      { x: 100, y: 0 }, // from right
      { x: 0, y: -50 }, // from top
      { x: 0, y: 50 }, // from bottom
    ];
    const direction = directions[index % directions.length];

    return {
      hidden: { ...direction, opacity: 0 },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: index * 0.15,
        },
      },
    };
  };

  return (
    <Container ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Title with animation */}
        <motion.div
          className="experience-text-design mb-5"
          variants={itemVariants}
        >
          {titleLines.map((t, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              {t}
              {i < titleLines.length - 1 ? <br /> : null}
            </motion.span>
          ))}
        </motion.div>

        {/* Projects */}
        {projectData.projects.map((p, idx) => (
          <motion.div
            key={p.name}
            variants={projectVariants(idx)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Row className={`mt-5 mb-3 ${p.rowClass}`}>
              <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>
                <motion.div
                  className={p.leftBoxClass}
                  whileHover={{ scale: 1.02 }}
                />
              </Col>

              <Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
                <motion.div
                  className="div-font-size"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
                >
                  {p.name}
                </motion.div>

                <motion.div
                  className="small-font-size"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  Worked on
                </motion.div>

                <motion.div
                  className="twobuttonflex"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  {p.workedOn.map((w) => (
                    <motion.button
                      key={w}
                      className="buttonOne"
                      whileHover={{ scale: 1.05 }}
                    >
                      {w}
                    </motion.button>
                  ))}
                </motion.div>

                <motion.div
                  className="fz-manage"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  Technologies I have used
                </motion.div>

                <motion.div
                  className="flex-design-in-button"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  {p.tech.map((t) => (
                    <motion.button
                      key={t.label}
                      className="buttonTwoxdandfig"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={t.icon}
                        alt={`${t.label}-icon`}
                        style={{ width: "20px" }}
                      />
                      {t.label}
                    </motion.button>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <motion.button
                    className="buttonTwoxdandfig-One"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="/Frame (2).png"
                      alt="html-image"
                      style={{ width: "20px" }}
                    />
                    {p.action.label}
                  </motion.button>
                  <motion.div
                    className="letter-image-pos-absolu"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 }}
                  >
                    <img
                      src="/letter-i.png"
                      style={{ width: "30px" }}
                      alt="letter-image"
                    />
                  </motion.div>
                </motion.div>
              </Col>
            </Row>
          </motion.div>
        ))}

        <motion.hr
          className="horizontaline"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </motion.div>
    </Container>
  );
}

export default Project;
