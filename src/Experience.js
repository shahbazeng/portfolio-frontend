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

import React, { useContext } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import experienceData from "./data/Experience.json";

function Experiance() {
  const { toggle } = useContext(MyContext);

  return (
    <Container>
      <div>
        <div className="experience-text-design mb-5">
          {experienceData.title}
        </div>

        {experienceData.jobs.map((job, index) => (
          <div
            key={index}
            className={
              toggle
                ? index === 1
                  ? "bgLightTextBlack-second-container"
                  : "bgLightTextBlack"
                : index === 1
                ? "bgLightTextBlack-second-container"
                : "bgLightTextBlack-dark"
            }
          >
            <Row className="dispaly-flex-direction-column">
              {/* Left Side: Company & Logo */}
              <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                <div className="display-left-alignment backgroundBlack">
                  <div className="colorSize">{job.company}</div>
                  <div className="Size">
                    <img
                      src={experienceData.icons.location}
                      alt="location"
                      style={{ width: "10px" }}
                    />{" "}
                    {job.location}
                  </div>
                </div>
                <div className="imageAbsolute">
                  <img
                    src={job.logo}
                    alt={`${job.company} logo`}
                    style={{ width: "60px" }}
                  />
                </div>
              </Col>

              {/* Right Side: Date Range */}
              <Col
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                xxl={6}
                className="position-absolute-simple"
              >
                <div className="alignEnd">
                  <button
                    className={
                      index === 1
                        ? "clandarButton-second-container"
                        : "clandarButton"
                    }
                  >
                    <img
                      src={experienceData.icons.calendar}
                      alt="calendar"
                      style={{ width: "20px" }}
                    />{" "}
                    {job.dateRange}
                  </button>
                </div>
              </Col>
            </Row>

            {/* Role */}
            <div className="dflexTextImage">
              <div>
                <img
                  src={experienceData.icons.roleIcon}
                  alt="role"
                  style={{ width: "40px" }}
                />
              </div>
              <div className="fw-bold">{job.role}</div>
            </div>

            {/* Highlights */}
            {job.highlights.map((point, idx) => (
              <div className="dflexTextImage" key={idx}>
                <div>
                  <img
                    src={experienceData.icons.bullet}
                    alt="bullet"
                    style={{ width: "13px" }}
                  />
                </div>
                <div>{point}</div>
              </div>
            ))}
          </div>
        ))}

        <hr className="horizontaline" />
      </div>
    </Container>
  );
}

export default Experiance;
