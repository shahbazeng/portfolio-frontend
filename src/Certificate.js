// import React, { useContext } from "react";
// import './App.css';
// import { MyContext } from "./MyContext";
// import { Container , Row , Col, Card, Form } from "react-bootstrap";
// import { FaRegEye } from "react-icons/fa";

// function Certificate(){
//     const {toggle} = useContext(MyContext);
//     return(
//         toggle?(
//        <>
//        <Container>
//        <div>
//     <div className="experience-text-design mb-5">
//     Certificate
//         </div>
//       <Row className="mt-3 container-space-yaxis">
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv">
//         Udemy
//         </div>
//         <div className="imageposabsol">
//             <img src="/letter-u.png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         Advanced CSS and Sass: Flexbox,
//         Grid, Animarions and More!
//         </div>
//         <div>
//             <button className="btn-design">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv">
//         Udemy
//         </div>
//         <div className="imageposabsol">
//             <img src="/letter-u.png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         The Complete Java Script Course
//         2020: From Zero to Expert!
//         </div>
//         <div>
//             <button className="btn-design">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//       </Row>
//       <Row className="mt-3 container-space-yaxis">
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards-container-second">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv-second-container">
//        Coursera
//         </div>
//         <div className="imageposabsol">
//             <img src="/download (5).png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         Google UX Design
//         </div>
//         <div>
//             <button className="btn-design-second-Container">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards-container-second">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv-third-container">
//        FreeCodeCamp
//         </div>
//         <div className="imageposabsol">
//             <img src="/download (11).png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         Front End Libraries
//         </div>
//         <div>
//             <button className="btn-design-second-Container">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//       </Row>
//       <Row className="mt-3 container-space-yaxis">
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv-second-container">
//        Linkedin
//         </div>
//         <div className="imageposabsol">
//             <img src="/linkedin.png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         React.js Essential Training !
//         </div>
//         <div>
//             <button className="btn-design">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv-second-container">
//        Educative
//         </div>
//         <div className="imageposabsol">
//             <img src="/notes.png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         Understanding Redux: A Beginner's
// Guide To State Management
//         </div>
//         <div>
//             <button className="btn-design">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//       </Row>
//       <hr className="horizontaline"/>
//     </div>
//         </Container>
//        </>):(
//         <>
//         <Container>
//         <div>
//     <div className="experience-text-design mb-5">
//     Certificate
//         </div>
//       <Row className="mt-3 container-space-yaxis">
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards-dark">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv">
//         Udemy
//         </div>
//         <div className="imageposabsol">
//             <img src="/letter-u.png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         Advanced CSS and Sass: Flexbox,
//         Grid, Animarions and More!
//         </div>
//         <div>
//             <button className="btn-design">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards-dark">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv">
//         Udemy
//         </div>
//         <div className="imageposabsol">
//             <img src="/letter-u.png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         The Complete Java Script Course
//         2020: From Zero to Expert!
//         </div>
//         <div>
//             <button className="btn-design">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//       </Row>
//       <Row className="mt-3 container-space-yaxis">
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards-container-second">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv-second-container">
//        Coursera
//         </div>
//         <div className="imageposabsol">
//             <img src="/download (5).png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         Google UX Design
//         </div>
//         <div>
//             <button className="btn-design-second-Container">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards-container-second">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv-third-container">
//        FreeCodeCamp
//         </div>
//         <div className="imageposabsol">
//             <img src="/download (11).png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         Front End Libraries
//         </div>
//         <div>
//             <button className="btn-design-second-Container">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//       </Row>
//       <Row className="mt-3 container-space-yaxis">
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards-dark">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv-second-container">
//        Linkedin
//         </div>
//         <div className="imageposabsol">
//             <img src="/linkedin.png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         React.js Essential Training !
//         </div>
//         <div>
//             <button className="btn-design">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//         <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//         <div className="parent-div-in-cards-dark">
//             <div className="TwodivsinOneLine">
//             <div>
//        <div className="buttonTypediv-second-container">
//        Educative
//         </div>
//         <div className="imageposabsol">
//             <img src="/notes.png" alt="letter-image" style={{width:"40px"}}/>
//         </div>
//         </div>
//         <div>
//             <img src="/browser 1.png" alt="browser-image" style={{width:"20px"}}/>
//         </div>
//         </div>
//         <div className="fw-bold mt-3">
//         Understanding Redux: A Beginner's
// Guide To State Management
//         </div>
//         <div>
//             <button className="btn-design">
// <FaRegEye/> View
//             </button>
//         </div>
//         </div>

//         </Col>
//       </Row>
//       <hr className="horizontaline"/>
//     </div>

//         </Container>
//         </>
//        )
//     )
// }
// export default Certificate;
// ----------------------------------------------------------------------------------------------------------------------------------------
// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaRegEye } from "react-icons/fa";
// import certificateData from "./data/Certificate.json";

// function Certificate() {
//   const { toggle } = useContext(MyContext);

//   // Function to get container class based on theme
//   const getContainerClass = (baseClass) => {
//     if (toggle) return baseClass;
//     // dark theme adjustments
//     if (baseClass.includes("container-second")) return baseClass; // second container style is same
//     return baseClass + "-dark";
//   };

//   return (
//     <Container>
//       <div>
//         <div className="experience-text-design mb-5">
//           {certificateData.title}
//         </div>

//         {/* Render rows in pairs (2 per row) */}
//         {certificateData.certificates
//           .reduce((rows, cert, idx) => {
//             if (idx % 2 === 0) rows.push([cert]);
//             else rows[rows.length - 1].push(cert);
//             return rows;
//           }, [])
//           .map((pair, rowIdx) => (
//             <Row className="mt-3 container-space-yaxis" key={rowIdx}>
//               {pair.map((cert, idx) => (
//                 <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} key={idx}>
//                   <div className={getContainerClass(cert.styleClass)}>
//                     <div className="TwodivsinOneLine">
//                       <div>
//                         <div className={cert.buttonClass}>{cert.provider}</div>
//                         <div className="imageposabsol">
//                           <img
//                             src={cert.logo}
//                             alt={`${cert.provider} logo`}
//                             style={{ width: "40px" }}
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <img
//                           src={certificateData.browserIcon}
//                           alt="browser icon"
//                           style={{ width: "20px" }}
//                         />
//                       </div>
//                     </div>
//                     <div className="fw-bold mt-3">{cert.title}</div>
//                     <div>
//                       <button className={cert.viewBtnClass}>
//                         <FaRegEye /> View
//                       </button>
//                     </div>
//                   </div>
//                 </Col>
//               ))}
//             </Row>
//           ))}

//         <hr className="horizontaline" />
//       </div>
//     </Container>
//   );
// }

// export default Certificate;

import React, { useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import certificateData from "./data/Certificate.json";

function Certificate() {
  const { toggle } = useContext(MyContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // Animation variants for cards coming from different directions
  const cardVariants = (index) => {
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

  // Function to get container class based on theme
  const getContainerClass = (baseClass) => {
    if (toggle) return baseClass;
    // dark theme adjustments
    if (baseClass.includes("container-second")) return baseClass; // second container style is same
    return baseClass + "-dark";
  };

  return (
    <Container ref={ref}>
      <div>
        {/* Title with animation */}
        <motion.div
          className="experience-text-design mb-5"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {certificateData.title}
          {/* <motion.div
            className="title-underline"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          /> */}
        </motion.div>

        {/* Render rows in pairs (2 per row) */}
        {certificateData.certificates
          .reduce((rows, cert, idx) => {
            if (idx % 2 === 0) rows.push([cert]);
            else rows[rows.length - 1].push(cert);
            return rows;
          }, [])
          .map((pair, rowIdx) => (
            <Row className="mt-3 container-space-yaxis" key={rowIdx}>
              {pair.map((cert, idx) => {
                const globalIndex = rowIdx * 2 + idx;
                return (
                  <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} key={idx}>
                    <motion.div
                      className={getContainerClass(cert.styleClass)}
                      variants={cardVariants(globalIndex)}
                      initial="hidden"
                      animate={isInView ? "visible" : "hidden"}
                      whileHover={{ y: -5 }}
                    >
                      <div className="TwodivsinOneLine">
                        <div>
                          <motion.div
                            className={cert.buttonClass}
                            whileHover={{ scale: 1.05 }}
                          >
                            {cert.provider}
                          </motion.div>
                          <motion.div
                            className="imageposabsol"
                            whileHover={{ scale: 1.1 }}
                          >
                            <img
                              src={cert.logo}
                              alt={`${cert.provider} logo`}
                              style={{ width: "40px" }}
                            />
                          </motion.div>
                        </div>
                        <div>
                          <motion.img
                            src={certificateData.browserIcon}
                            alt="browser icon"
                            style={{ width: "20px" }}
                            whileHover={{ scale: 1.5, rotate: 15 }}
                          />
                        </div>
                      </div>
                      <motion.div
                        className="fw-bold mt-3"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.4 }}
                      >
                        {cert.title}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ delay: 0.5 }}
                      >
                        <motion.button
                          className={cert.viewBtnClass}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                          }}
                        >
                          <FaRegEye /> View
                        </motion.button>
                      </motion.div>
                    </motion.div>
                  </Col>
                );
              })}
            </Row>
          ))}

        {/* Animated divider */}
        <motion.hr
          className="horizontaline"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </div>
    </Container>
  );
}

export default Certificate;
