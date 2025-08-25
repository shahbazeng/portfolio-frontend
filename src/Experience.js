// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Card, Form } from "react-bootstrap";

// function Experiance() {
//   const { toggle } = useContext(MyContext);
//   return toggle ? (
//     <>
//       <Container>
//         <div>
//           <div className="experience-text-design mb-5">Experiance</div>
//           <div className="bgLightTextBlack">
//             <Row className="dispaly-flex-direction-column">
//               <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//                 <div className="display-left-alignment">
//                   <div className="backgroundBlack">
//                     <div className="colorSize">Troolnbound Pvt .Ltd.</div>
//                     <div className="Size">
//                       <img
//                         src="/Vector.png"
//                         alt="vectoe-img"
//                         style={{ width: "10px" }}
//                       />
//                       Surat, Gujrat, India
//                     </div>
//                   </div>
//                   <div className="imageAbsolute">
//                     <img
//                       src="/cap (2).png"
//                       alt="cap-image"
//                       style={{ width: "60px" }}
//                     />
//                   </div>
//                 </div>

//                 {/* <div>
//                 <button className="clandarButton">
//                     <img src="/Frame (1).png" alt="farme-img"/> Dec 2024-Present
//                 </button>
//             </div> */}
//               </Col>
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="alignEnd">
//                   <button className="clandarButton">
//                     <img
//                       src="/Frame (1).png"
//                       alt="farme-img"
//                       style={{ width: "20px" }}
//                     />{" "}
//                     Dec 2024-Present
//                   </button>
//                 </div>
//               </Col>
//             </Row>

//             <div className="dflexTextImage">
//               <div>
//                 <img src="/boy.png" alt="boy-image" style={{ width: "40px" }} />
//               </div>
//               <div className="fw-bold">Front End Developer</div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Designed and developed over 15 complete react and NextJS full
//                 theme templete showcasing proficiency in front-end design and
//                 development.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Led the development of the Wired Academy project a full-stack
//                 NextJS apllication.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Managed both front-end and back-end aspects, utilizing NextJS
//                 API Routes of seamless interaction.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Integrated Strip Payment Getaway for seamless and secure
//                 integration.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Successfully deployed the application or versal for optimal
//                 perfomance and accessibility.
//               </div>
//             </div>
//           </div>

//           <div className="bgLightTextBlack-second-container">
//             <Row className="dispaly-flex-direction-column">
//               <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//                 <div className="backgroundBlack">
//                   <div className="colorSize">Yudiz Solution Ltd.</div>
//                   <div className="Size">
//                     <img
//                       src="/Vector.png"
//                       alt="vectoe-img"
//                       style={{ width: "10px" }}
//                     />
//                     Ahmabad Lahore
//                   </div>
//                 </div>
//                 <div className="imageAbsolute">
//                   <img
//                     src="/logo (2).png"
//                     alt="cap-image"
//                     style={{ width: "60px" }}
//                   />
//                 </div>
//                 {/* <div>
//                     <button className="clandarButton">
//                         <img src="/Frame (1).png" alt="farme-img"/> Dec 2024-Present
//                     </button>
//                 </div> */}
//               </Col>
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="alignEnd">
//                   <button className="clandarButton-second-container">
//                     <img
//                       src="/Frame (1).png"
//                       alt="farme-img"
//                       style={{ width: "20px" }}
//                     />{" "}
//                     Jan 2023- May 2024
//                   </button>
//                 </div>
//               </Col>
//             </Row>

//             <div className="dflexTextImage">
//               <div>
//                 <img src="/boy.png" alt="boy-image" style={{ width: "40px" }} />
//               </div>
//               <div className="fw-bold">Front End Developer</div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Worked on a variety of projects, include Epiko market,
//                 CricTraker, and Sportsbuzz.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Collaborated in teams of developers UI designers, and backend
//                 developers.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Demonstrated expertise in designing and building resuable
//                 components and pages, ensuring responsiveness and adherence to
//                 design.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Proficiently handled API integrations, ensuring seamless data
//                 exchange, and played and integral role in reviewing approving /
//                 rejecting junior developers pull requests on GitHub.
//                 Aditionally, actively assigned task to junior team members in
//                 alignment with sprint objectives, fostering efficient project
//                 management.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Played a crucial role in project deployment and debugging
//                 accross different environments, including Development, Staging,
//                 and Production.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Shared Knowledge and expertise by conducting trainning sessions
//                 on Java Script, Responsive Web Design and ReactJS for Trainess
//                 and junior developers, contributing to skill development with
//                 inthe company.
//               </div>
//             </div>
//           </div>
//           <div className="bgLightTextBlack">
//             <Row className="dispaly-flex-direction-column">
//               <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//                 <div className="backgroundBlack">
//                   <div className="colorSize">Obtain Infoach</div>
//                   <div className="Size">
//                     <img
//                       src="/Vector.png"
//                       alt="vectoe-img"
//                       style={{ width: "10px" }}
//                     />
//                     Ahmadabad Lahore
//                   </div>
//                 </div>
//                 <div className="imageAbsolute">
//                   <img
//                     src="/letter-i.png"
//                     alt="cap-image"
//                     style={{ width: "60px" }}
//                   />
//                 </div>
//               </Col>
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="alignEnd">
//                   <button className="clandarButton">
//                     <img
//                       src="/Frame (1).png"
//                       alt="farme-img"
//                       style={{ width: "20px" }}
//                     />{" "}
//                     Feb 2020-Dec 2022
//                   </button>
//                 </div>
//               </Col>
//             </Row>

//             <div className="dflexTextImage">
//               <div>
//                 <img src="/boy.png" alt="boy-image" style={{ width: "40px" }} />
//               </div>
//               <div className="fw-bold">Web Developer</div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Designed numerouse responsive themes using HTML/CSS and ReactJS,
//                 user-friendly and visually appealing web interfaces.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Successfully integrated Rest APIs, enchacing website
//                 functionality and user experience.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Proficiently worked with PHP and MySQL,handling CRUD operations
//                 using PHP to manage and manipulate data effectively.
//               </div>
//             </div>
//           </div>
//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   ) : (
//     <>
//       <Container>
//         <div>
//           <div className="experience-text-design mb-5">Experiance</div>
//           <div className="bgLightTextBlack-dark">
//             <Row className="dispaly-flex-direction-column">
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="backgroundBlack">
//                   <div className="colorSize">Troolnbound Pvt .Ltd.</div>
//                   <div className="Size">
//                     <img
//                       src="/Vector.png"
//                       alt="vectoe-img"
//                       style={{ width: "10px" }}
//                     />
//                     Surat, Gujrat, India
//                   </div>
//                 </div>
//                 <div className="imageAbsolute">
//                   <img
//                     src="/cap (2).png"
//                     alt="cap-image"
//                     style={{ width: "60px" }}
//                   />
//                 </div>
//                 {/* <div>
//                 <button className="clandarButton">
//                     <img src="/Frame (1).png" alt="farme-img"/> Dec 2024-Present
//                 </button>
//             </div> */}
//               </Col>
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="alignEnd">
//                   <button className="clandarButton">
//                     <img
//                       src="/Frame (1).png"
//                       alt="farme-img"
//                       style={{ width: "20px" }}
//                     />{" "}
//                     Dec 2024-Present
//                   </button>
//                 </div>
//               </Col>
//             </Row>

//             <div className="dflexTextImage">
//               <div>
//                 <img src="/boy.png" alt="boy-image" style={{ width: "40px" }} />
//               </div>
//               <div className="fw-bold">Front End Developer</div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Designed and developed over 15 complete react and NextJS full
//                 theme templete showcasing proficiency in front-end design and
//                 development.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Led the development of the Wired Academy project a full-stack
//                 NextJS apllication.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Managed both front-end and back-end aspects, utilizing NextJS
//                 API Routes of seamless interaction.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Integrated Strip Payment Getaway for seamless and secure
//                 integration.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Successfully deployed the application or versal for optimal
//                 perfomance and accessibility.
//               </div>
//             </div>
//           </div>

//           <div className="bgLightTextBlack-second-container">
//             <Row className="dispaly-flex-direction-column">
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="backgroundBlack">
//                   <div className="colorSize">Yudiz Solution Ltd.</div>
//                   <div className="Size">
//                     <img
//                       src="/Vector.png"
//                       alt="vectoe-img"
//                       style={{ width: "10px" }}
//                     />
//                     Ahmabad Lahore
//                   </div>
//                 </div>
//                 <div className="imageAbsolute">
//                   <img
//                     src="/logo (2).png"
//                     alt="cap-image"
//                     style={{ width: "60px" }}
//                   />
//                 </div>
//                 {/* <div>
//                     <button className="clandarButton">
//                         <img src="/Frame (1).png" alt="farme-img"/> Dec 2024-Present
//                     </button>
//                 </div> */}
//               </Col>
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="alignEnd">
//                   <button className="clandarButton-second-container">
//                     <img
//                       src="/Frame (1).png"
//                       alt="farme-img"
//                       style={{ width: "20px" }}
//                     />{" "}
//                     Jan 2023- May 2024
//                   </button>
//                 </div>
//               </Col>
//             </Row>

//             <div className="dflexTextImage">
//               <div>
//                 <img src="/boy.png" alt="boy-image" style={{ width: "40px" }} />
//               </div>
//               <div className="fw-bold">Front End Developer</div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Worked on a variety of projects, include Epiko market,
//                 CricTraker, and Sportsbuzz.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Collaborated in teams of developers UI designers, and backend
//                 developers.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Demonstrated expertise in designing and building resuable
//                 components and pages, ensuring responsiveness and adherence to
//                 design.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Proficiently handled API integrations, ensuring seamless data
//                 exchange, and played and integral role in reviewing approving /
//                 rejecting junior developers pull requests on GitHub.
//                 Aditionally, actively assigned task to junior team members in
//                 alignment with sprint objectives, fostering efficient project
//                 management.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Played a crucial role in project deployment and debugging
//                 accross different environments, including Development, Staging,
//                 and Production.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Shared Knowledge and expertise by conducting trainning sessions
//                 on Java Script, Responsive Web Design and ReactJS for Trainess
//                 and junior developers, contributing to skill development with
//                 inthe company.
//               </div>
//             </div>
//           </div>
//           <div className="bgLightTextBlack-dark">
//             <Row className="dispaly-flex-direction-column">
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="backgroundBlack">
//                   <div className="colorSize">Obtain Infoach</div>
//                   <div className="Size">
//                     <img
//                       src="/Vector.png"
//                       alt="vectoe-img"
//                       style={{ width: "10px" }}
//                     />
//                     Ahmadabad Lahore
//                   </div>
//                 </div>
//                 <div className="imageAbsolute">
//                   <img
//                     src="/letter-i.png"
//                     alt="cap-image"
//                     style={{ width: "60px" }}
//                   />
//                 </div>
//               </Col>
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="alignEnd">
//                   <button className="clandarButton">
//                     <img
//                       src="/Frame (1).png"
//                       alt="farme-img"
//                       style={{ width: "20px" }}
//                     />{" "}
//                     Feb 2020-Dec 2022
//                   </button>
//                 </div>
//               </Col>
//             </Row>

//             <div className="dflexTextImage">
//               <div>
//                 <img src="/boy.png" alt="boy-image" style={{ width: "40px" }} />
//               </div>
//               <div className="fw-bold">Web Developer</div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Designed numerouse responsive themes using HTML/CSS and ReactJS,
//                 user-friendly and visually appealing web interfaces.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Successfully integrated Rest APIs, enchacing website
//                 functionality and user experience.
//               </div>
//             </div>
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src="/Livello_2.png"
//                   alt="livello"
//                   style={{ width: "13px" }}
//                 />
//               </div>
//               <div>
//                 Proficiently worked with PHP and MySQL,handling CRUD operations
//                 using PHP to manage and manipulate data effectively.
//               </div>
//             </div>
//           </div>
//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   );
// }
// export default Experiance;
// ------------------------------------------------------------------------------------
// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import experienceData from "./data/Experience.json";

// function Experiance() {
//   const { toggle } = useContext(MyContext);

//   return (
//     <Container>
//       <div>
//         <div className="experience-text-design mb-5">
//           {experienceData.title}
//         </div>

//         {experienceData.jobs.map((job, index) => (
//           <div
//             key={index}
//             className={
//               toggle
//                 ? index === 1
//                   ? "bgLightTextBlack-second-container"
//                   : "bgLightTextBlack"
//                 : index === 1
//                 ? "bgLightTextBlack-second-container"
//                 : "bgLightTextBlack-dark"
//             }
//           >
//             <Row className="dispaly-flex-direction-column">
//               {/* Left Side: Company & Logo */}
//               <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//                 <div className="display-left-alignment backgroundBlack">
//                   <div className="colorSize">{job.company}</div>
//                   <div className="Size">
//                     <img
//                       src={experienceData.icons.location}
//                       alt="location"
//                       style={{ width: "10px" }}
//                     />{" "}
//                     {job.location}
//                   </div>
//                 </div>
//                 <div className="imageAbsolute">
//                   <img
//                     src={job.logo}
//                     alt={`${job.company} logo`}
//                     style={{ width: "60px" }}
//                   />
//                 </div>
//               </Col>

//               {/* Right Side: Date Range */}
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <div className="alignEnd">
//                   <button
//                     className={
//                       index === 1
//                         ? "clandarButton-second-container"
//                         : "clandarButton"
//                     }
//                   >
//                     <img
//                       src={experienceData.icons.calendar}
//                       alt="calendar"
//                       style={{ width: "20px" }}
//                     />{" "}
//                     {job.dateRange}
//                   </button>
//                 </div>
//               </Col>
//             </Row>

//             {/* Role */}
//             <div className="dflexTextImage">
//               <div>
//                 <img
//                   src={experienceData.icons.roleIcon}
//                   alt="role"
//                   style={{ width: "40px" }}
//                 />
//               </div>
//               <div className="fw-bold">{job.role}</div>
//             </div>

//             {/* Highlights */}
//             {job.highlights.map((point, idx) => (
//               <div className="dflexTextImage" key={idx}>
//                 <div>
//                   <img
//                     src={experienceData.icons.bullet}
//                     alt="bullet"
//                     style={{ width: "13px" }}
//                   />
//                 </div>
//                 <div>{point}</div>
//               </div>
//             ))}
//           </div>
//         ))}

//         <hr className="horizontaline" />
//       </div>
//     </Container>
//   );
// }

// export default Experiance;
// -----------------------------------------------------------------------------------------------------
// without integrate api
// import React, { useContext, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import experienceData from "./data/Experience.json";

// function Experience() {
//   const { toggle } = useContext(MyContext);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.2 });

//   // Directional animation variants
//   const titleVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 120 },
//     },
//   };

//   const jobVariants = (index) => ({
//     hidden: {
//       x: index % 2 === 0 ? -100 : 100,
//       opacity: 0,
//       rotate: index % 2 === 0 ? -5 : 5,
//     },
//     visible: {
//       x: 0,
//       opacity: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 10,
//         delay: index * 0.15,
//       },
//     },
//   });

//   const logoVariants = {
//     hidden: { scale: 0, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         delay: 0.4,
//       },
//     },
//   };

//   const calendarVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         delay: 0.5,
//       },
//     },
//   };

//   const roleVariants = {
//     hidden: { x: -50, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         delay: 0.6,
//       },
//     },
//   };

//   const bulletVariants = (i) => ({
//     hidden: {
//       x: i % 2 === 0 ? -50 : 50,
//       opacity: 0,
//     },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         delay: 0.7 + i * 0.1,
//         type: "spring",
//         stiffness: 120,
//       },
//     },
//   });

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE}/api/experiences`
//       );
//       const data = await response.json();
//       console.log("data experiences", data);
//     }
//     fetchData();
//   }, []);
//   return (
//     <Container ref={ref}>
//       <motion.div
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         transition={{ staggerChildren: 0.1 }}
//       >
//         {/* Title - Comes from top */}
//         <motion.div
//           className="experience-text-design mb-5"
//           variants={titleVariants}
//         >
//           {experienceData.title}
//           {/* <motion.div
//             className="title-underline"
//             initial={{ scaleX: 0 }}
//             animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
//             transition={{ delay: 0.3, duration: 0.5 }}
//           /> */}
//         </motion.div>

//         {experienceData.jobs.map((job, index) => (
//           <motion.div
//             key={index}
//             className={
//               toggle
//                 ? index === 1
//                   ? "bgLightTextBlack-second-container"
//                   : "bgLightTextBlack"
//                 : index === 1
//                 ? "bgLightTextBlack-second-container"
//                 : "bgLightTextBlack-dark"
//             }
//             variants={jobVariants(index)}
//             whileHover={{ y: -5 }}
//           >
//             <Row className="dispaly-flex-direction-column">
//               {/* Left Side - Comes from left */}
//               <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//                 <motion.div
//                   className="display-left-alignment backgroundBlack"
//                   initial={{ x: -50 }}
//                   animate={isInView ? { x: 0 } : { x: -50 }}
//                   transition={{ delay: 0.2 }}
//                 >
//                   <div className="colorSize">{job.company}</div>
//                   <div className="Size">
//                     <motion.img
//                       src={experienceData.icons.location}
//                       alt="location"
//                       style={{ width: "10px" }}
//                       whileHover={{ scale: 1.5, rotate: 15 }}
//                     />{" "}
//                     {job.location}
//                   </div>
//                 </motion.div>

//                 {/* Logo - Pops in */}
//                 <motion.div className="imageAbsolute" variants={logoVariants}>
//                   <motion.img
//                     src={job.logo}
//                     alt={`${job.company} logo`}
//                     style={{ width: "60px" }}
//                     whileHover={{
//                       scale: 1.1,
//                       rotate: [0, 10, -10, 0],
//                       transition: { duration: 0.7 },
//                     }}
//                   />
//                 </motion.div>
//               </Col>

//               {/* Right Side - Comes from bottom */}
//               <Col
//                 xs={12}
//                 sm={12}
//                 md={6}
//                 lg={6}
//                 xl={6}
//                 xxl={6}
//                 className="position-absolute-simple"
//               >
//                 <motion.div className="alignEnd" variants={calendarVariants}>
//                   <motion.button
//                     className={
//                       index === 1
//                         ? "clandarButton-second-container"
//                         : "clandarButton"
//                     }
//                     whileHover={{
//                       scale: 1.05,
//                       boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
//                     }}
//                   >
//                     <motion.img
//                       src={experienceData.icons.calendar}
//                       alt="calendar"
//                       style={{ width: "20px" }}
//                       whileHover={{ scale: 1.3, rotate: 15 }}
//                     />{" "}
//                     {job.dateRange}
//                   </motion.button>
//                 </motion.div>
//               </Col>
//             </Row>

//             {/* Role - Comes from left */}
//             <motion.div className="dflexTextImage" variants={roleVariants}>
//               <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
//                 <img
//                   src={experienceData.icons.roleIcon}
//                   alt="role"
//                   style={{ width: "40px" }}
//                 />
//               </motion.div>
//               <div className="fw-bold">{job.role}</div>
//             </motion.div>

//             {/* Highlights - Alternate directions */}
//             {job.highlights.map((point, idx) => (
//               <motion.div
//                 className="dflexTextImage"
//                 key={idx}
//                 variants={bulletVariants(idx)}
//               >
//                 <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
//                   <img
//                     src={experienceData.icons.bullet}
//                     alt="bullet"
//                     style={{ width: "13px" }}
//                   />
//                 </motion.div>
//                 <motion.div whileHover={{ x: 5 }}>{point}</motion.div>
//               </motion.div>
//             ))}
//           </motion.div>
//         ))}

//         {/* Divider - Expands from center */}
//         <motion.hr
//           className="horizontaline"
//           initial={{ scaleX: 0 }}
//           animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//         />
//       </motion.div>
//     </Container>
//   );
// }

// export default Experience;

import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import experienceData from "./data/Experience.json";

function Experience() {
  const { toggle } = useContext(MyContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // ---------- API state (About pattern) ----------
  const [apiJobs, setApiJobs] = useState(null);
  const API_BASE = (process.env.REACT_APP_API_BASE || "").replace(/\/+$/, "");

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/experiences`, {
          signal: ac.signal,
          // credentials: "include", // uncomment if your API uses auth cookies
        });
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        const json = await r.json();

        // normalize + sort newest first
        const jobs = (Array.isArray(json) ? json : json?.data || []).map(
          (j) => ({
            ...j,
            highlights: Array.isArray(j.highlights)
              ? j.highlights
              : j.highlights
              ? [j.highlights]
              : [],
          })
        );

        jobs.sort(
          (a, b) =>
            new Date(b.updatedAt || b.createdAt || 0) -
            new Date(a.updatedAt || a.createdAt || 0)
        );

        setApiJobs(jobs);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.warn("Experiences: falling back to local JSON.", e);
        }
        setApiJobs(null);
      }
    })();

    return () => ac.abort();
  }, [API_BASE]);
  // ------------------------------------------------

  // use API data if present, else fallback to static JSON
  const jobs = apiJobs && apiJobs.length ? apiJobs : experienceData.jobs;

  // ---------- animations ----------
  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const jobVariants = (index) => ({
    hidden: {
      x: index % 2 === 0 ? -100 : 100,
      opacity: 0,
      rotate: index % 2 === 0 ? -5 : 5,
    },
    visible: {
      x: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10,
        delay: index * 0.15,
      },
    },
  });

  const logoVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 200, delay: 0.4 },
    },
  };

  const calendarVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, delay: 0.5 },
    },
  };

  const roleVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, delay: 0.6 },
    },
  };

  const bulletVariants = (i) => ({
    hidden: { x: i % 2 === 0 ? -50 : 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { delay: 0.7 + i * 0.1, type: "spring", stiffness: 120 },
    },
  });

  // theme helpers (unchanged)
  const cardClass = (index) =>
    toggle
      ? index === 1
        ? "bgLightTextBlack-second-container"
        : "bgLightTextBlack"
      : index === 1
      ? "bgLightTextBlack-second-container"
      : "bgLightTextBlack-dark";

  // resolve relative/absolute logo URLs safely
  const resolveLogo = (src) => {
    if (!src) return "";
    if (src.startsWith("http")) return src;
    // allow absolute-from-root paths like "/cap.png"
    return src.startsWith("/") ? src : `${API_BASE}/${src}`;
  };

  return (
    <Container ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Title */}
        <motion.div
          className="experience-text-design mb-5"
          variants={titleVariants}
        >
          {experienceData.title}
        </motion.div>

        {jobs.map((job, index) => (
          <motion.div
            key={job._id || job.company + index}
            className={cardClass(index)}
            variants={jobVariants(index)}
            whileHover={{ y: -5 }}
          >
            <Row className="dispaly-flex-direction-column">
              {/* Left */}
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <motion.div
                  className="display-left-alignment backgroundBlack"
                  initial={{ x: -50 }}
                  animate={isInView ? { x: 0 } : { x: -50 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="colorSize">{job.company}</div>
                  <div className="Size">
                    <motion.img
                      src={experienceData.icons.location}
                      alt="location"
                      style={{ width: "10px" }}
                      whileHover={{ scale: 1.5, rotate: 15 }}
                    />{" "}
                    {job.location}
                  </div>
                </motion.div>

                {/* Logo */}
                <motion.div className="imageAbsolute" variants={logoVariants}>
                  <motion.img
                    src={resolveLogo(job.logo)}
                    alt={`${job.company} logo`}
                    style={{ width: "60px" }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, 10, -10, 0],
                      transition: { duration: 0.7 },
                    }}
                  />
                </motion.div>
              </Col>

              {/* Right */}
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                className="position-absolute-simple"
              >
                <motion.div className="alignEnd" variants={calendarVariants}>
                  <motion.button
                    className={
                      index === 1
                        ? "clandarButton-second-container"
                        : "clandarButton"
                    }
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    }}
                  >
                    <motion.img
                      src={experienceData.icons.calendar}
                      alt="calendar"
                      style={{ width: "20px" }}
                      whileHover={{ scale: 1.3, rotate: 15 }}
                    />{" "}
                    {job.dateRange}
                  </motion.button>
                </motion.div>
              </Col>
            </Row>

            {/* Role */}
            <motion.div className="dflexTextImage" variants={roleVariants}>
              <motion.div whileHover={{ scale: 1.2, rotate: 15 }}>
                <img
                  src={experienceData.icons.roleIcon}
                  alt="role"
                  style={{ width: "40px" }}
                />
              </motion.div>
              <div className="fw-bold">{job.role}</div>
            </motion.div>

            {/* Highlights */}
            {(job.highlights || []).map((point, idx) => (
              <motion.div
                className="dflexTextImage"
                key={idx}
                variants={bulletVariants(idx)}
              >
                <motion.div whileHover={{ scale: 1.5, rotate: 15 }}>
                  <img
                    src={experienceData.icons.bullet}
                    alt="bullet"
                    style={{ width: "13px" }}
                  />
                </motion.div>
                <motion.div whileHover={{ x: 5 }}>{point}</motion.div>
              </motion.div>
            ))}
          </motion.div>
        ))}

        {/* Divider */}
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

export default Experience;
