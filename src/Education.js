// import React, { useContext } from "react";
// import './App.css';
// import { MyContext } from "./MyContext";
// import { Container , Row , Col, Card, Form } from "react-bootstrap";

// function Education(){
//     const {toggle} = useContext(MyContext);
//     return(
//         toggle?(
//        <>
//        <Container>
//        <div>
//         <div className="font-size-setup">
//         Education
//         </div>

//         <Row className="mt-5">
//             <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>

//             <div className="backgroundColorOnCard">
//                 <div className="dflexjustspaceBetween">
// <div>
//     <button className="image-design">
//         <img src="/Frame.png" className="mt-2 buttonImg" />2017-2020
//     </button>
// </div>
// <div>
//     <button className="image-design-one">
//         <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Graduation
//     </button>
// </div>
// </div>
// <div className="disgap">
// <button className="degreeButton">
// Bachelor's Degree
// </button>
// <div>
//     <button className="BCAbutton">
//     BCA
//     </button>
// </div>
// </div>
// <div>
//     <div className="mt-3 card-text">Bachelor of Computer Applications</div>
// </div>
// <div className="twoitemsinOneLine">
//     <div className="bgWhite">
//         <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
//     </div>
//     <div className="alignitems">
//     Veer Narmad South Gujarat University
//         </div>
// </div>
// <div className="twoitemsinOneLine">
//     <div className="bgWhite">
//         <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
//     </div>
//     <div className="alignitems">
//     Surat, Gujrat, India
//         </div>
// </div>

//             </div>

//             </Col>
//             <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>

//      <div className="backgroundColorOnCard-secondContainer">
//          <div className="dflexjustspaceBetween">
// <div>
// <button className="image-design">
//  <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2020-2022
// </button>
// </div>
// <div>
// <button className="image-design-one-secondContainer">
//  <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Post Graduation
// </button>
// </div>
// </div>
// <div className="disgap">
// <button className="degreeButton-secondContainer">
// Master's Degree
// </button>
// <div>
// <button className="BCAbutton-secondContainer">
// MCA
// </button>
// </div>
// </div>
// <div>
// <div className="mt-3 card-text">Master of Computer Applications</div>
// </div>
// <div className="twoitemsinOneLine">
// <div className="bgWhite-secodContainer">
//  <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
// </div>
// <div className="alignitems">
// Parul University
//  </div>
// </div>
// <div className="twoitemsinOneLine">
// <div className="bgWhite-secodContainer">
//  <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
// </div>
// <div className="alignitems">
// Vadodara, Gujrat , India
//  </div>
// </div>

//      </div>

//      </Col>
//         </Row>
//         <hr className="horizontaline"/>
//     </div>
//        </Container>
//        </>
//         ):(<>
//         <Container>
//         <div>
//         <div className="font-size-setup">
//         Education
//         </div>

//         <Row className="mt-5">
//             <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>

//             <div className="backgroundColorOnCard">
//                 <div className="dflexjustspaceBetween">
// <div>
//     <button className="image-design">
//         <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2017-2020
//     </button>
// </div>
// <div>
//     <button className="image-design-one">
//         <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Graduation
//     </button>
// </div>
// </div>
// <div className="disgap">
// <button className="degreeButton">
// Bachelor's Degree
// </button>
// <div>
//     <button className="BCAbutton">
//     BCA
//     </button>
// </div>
// </div>
// <div>
//     <h3 className="mt-3">Bachelor of Computer Applications</h3>
// </div>
// <div className="twoitemsinOneLine">
//     <div className="bgWhite">
//         <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
//     </div>
//     <div className="alignitems">
//     Veer Narmad South Gujarat University
//         </div>
// </div>
// <div className="twoitemsinOneLine">
//     <div className="bgWhite">
//         <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
//     </div>
//     <div className="alignitems">
//     Surat, Gujrat, India
//         </div>
// </div>

//             </div>

//             </Col>
//             <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>

//      <div className="backgroundColorOnCard-secondContainer-dark">
//          <div className="dflexjustspaceBetween">
// <div>
// <button className="image-design">
//  <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2020-2022
// </button>
// </div>
// <div>
// <button className="image-design-one-secondContainer">
//  <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Post Graduation
// </button>
// </div>
// </div>
// <div className="disgap">
// <button className="degreeButton-secondContainer">
// Master's Degree
// </button>
// <div>
// <button className="BCAbutton-secondContainer">
// MCA
// </button>
// </div>
// </div>
// <div>
// <h3 className="mt-3">Master of Computer Applications</h3>
// </div>
// <div className="twoitemsinOneLine">
// <div className="bgWhite-secodContainer">
//  <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
// </div>
// <div className="alignitems">
// Parul University
//  </div>
// </div>
// <div className="twoitemsinOneLine">
// <div className="bgWhite-secodContainer">
//  <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
// </div>
// <div className="alignitems">
// Vadodara, Gujrat , India
//  </div>
// </div>

//      </div>

//      </Col>
//         </Row>
//         <hr className="horizontaline"/>
//     </div>
//             </Container>
//         </>)
//     )
// }
// export default Education;
// ------------------------------------------------------------------------------------------------------------
// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import educationData from "./data/Education.json";

// function Education() {
//   const { toggle } = useContext(MyContext);

//   // helper classes (index-based + theme-based)
//   const getCardClass = (i) =>
//     i === 0
//       ? "backgroundColorOnCard"
//       : toggle
//       ? "backgroundColorOnCard-secondContainer"
//       : "backgroundColorOnCard-secondContainer-dark";

//   const getStageBtnClass = (i) =>
//     i === 0 ? "image-design-one" : "image-design-one-secondContainer";

//   const getDegreeBtnClass = (i) =>
//     i === 0 ? "degreeButton" : "degreeButton-secondContainer";

//   const getShortBtnClass = (i) =>
//     i === 0 ? "BCAbutton" : "BCAbutton-secondContainer";

//   return (
//     <Container>
//       <div>
//         <div className="font-size-setup">{educationData.title}</div>

//         <Row className="mt-5">
//           {educationData.items.map((item, i) => (
//             <Col key={item.years} xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//               <div className={getCardClass(i)}>
//                 {/* top row: years + stage */}
//                 <div className="dflexjustspaceBetween">
//                   <div>
//                     <button className="image-design">
//                       <img
//                         src={educationData.icons.calendar}
//                         className="mt-2 buttonImg"
//                         alt="calendar"
//                         style={{ width: "30px" }}
//                       />
//                       {item.years}
//                     </button>
//                   </div>
//                   <div>
//                     <button className={getStageBtnClass(i)}>
//                       <img
//                         src={educationData.icons.cap}
//                         className="mt-2"
//                         alt="cap"
//                         style={{ width: "30px" }}
//                       />
//                       {item.stage}
//                     </button>
//                   </div>
//                 </div>

//                 {/* degree + short code */}
//                 <div className="disgap">
//                   <button className={getDegreeBtnClass(i)}>
//                     {item.degree}
//                   </button>
//                   <div>
//                     <button className={getShortBtnClass(i)}>
//                       {item.short}
//                     </button>
//                   </div>
//                 </div>

//                 {/* program title */}
//                 <div className="mt-3 card-text">{item.program}</div>

//                 {/* university */}
//                 <div className="twoitemsinOneLine">
//                   <div
//                     className={i === 0 ? "bgWhite" : "bgWhite-secodContainer"}
//                   >
//                     <img
//                       src={educationData.icons.university}
//                       alt="university"
//                       style={{ width: "20px" }}
//                     />
//                   </div>
//                   <div className="alignitems">{item.university}</div>
//                 </div>

//                 {/* location */}
//                 <div className="twoitemsinOneLine">
//                   <div
//                     className={i === 0 ? "bgWhite" : "bgWhite-secodContainer"}
//                   >
//                     <img
//                       src={educationData.icons.location}
//                       alt="location"
//                       style={{ width: "16px" }}
//                     />
//                   </div>
//                   <div className="alignitems">{item.location}</div>
//                 </div>
//               </div>
//             </Col>
//           ))}
//         </Row>

//         <hr className="horizontaline" />
//       </div>
//     </Container>
//   );
// }

// export default Education;
// ------------------------------------------------------------------
// without integration api
// import React, { useContext, useRef, useEffect } from "react";
// import { motion, useInView } from "framer-motion";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import educationData from "./data/Education.json";

// function Education() {
//   const { toggle } = useContext(MyContext);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.2 });

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const floatingVariants = {
//     float: {
//       y: [-5, 5],
//       transition: {
//         y: {
//           duration: 3,
//           repeat: Infinity,
//           repeatType: "reverse",
//           ease: "easeInOut",
//         },
//       },
//     },
//   };

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE}/api/educations`
//       );
//       const data = await response.json();
//       console.log("data education component", data);
//     }
//     fetchData();
//   }, []);
//   // helper classes (index-based + theme-based)
//   const getCardClass = (i) =>
//     i === 0
//       ? "backgroundColorOnCard"
//       : toggle
//       ? "backgroundColorOnCard-secondContainer"
//       : "backgroundColorOnCard-secondContainer-dark";

//   const getStageBtnClass = (i) =>
//     i === 0 ? "image-design-one" : "image-design-one-secondContainer";

//   const getDegreeBtnClass = (i) =>
//     i === 0 ? "degreeButton" : "degreeButton-secondContainer";

//   const getShortBtnClass = (i) =>
//     i === 0 ? "BCAbutton" : "BCAbutton-secondContainer";

//   return (
//     <Container ref={ref}>
//       <motion.div
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         variants={containerVariants}
//       >
//         <motion.div className="font-size-setup" variants={itemVariants}>
//           {educationData.title}
//         </motion.div>

//         <Row className="mt-5">
//           {educationData.items.map((item, i) => (
//             <Col key={item.years} xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
//               <motion.div
//                 className={getCardClass(i)}
//                 variants={itemVariants}
//                 custom={i}
//                 whileHover={{ y: -5 }}
//               >
//                 {/* Floating icons */}

//                 {/* top row: years + stage */}
//                 <div className="dflexjustspaceBetween">
//                   <div>
//                     <motion.button
//                       className="image-design"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <motion.img
//                         src={educationData.icons.calendar}
//                         className="mt-2 buttonImg"
//                         alt="calendar"
//                         style={{ width: "30px" }}
//                         whileHover={{ rotate: 10 }}
//                       />
//                       {item.years}
//                     </motion.button>
//                   </div>
//                   <div>
//                     <motion.button
//                       className={getStageBtnClass(i)}
//                       whileHover={{ scale: 1.05 }}
//                     >
//                       <motion.img
//                         src={educationData.icons.cap}
//                         className="mt-2"
//                         alt="cap"
//                         style={{ width: "30px" }}
//                         animate={{
//                           y: [0, -5, 0],
//                           rotate: [0, 5, -5, 0],
//                         }}
//                         transition={{
//                           duration: 4,
//                           repeat: Infinity,
//                           repeatType: "reverse",
//                         }}
//                       />
//                       {item.stage}
//                     </motion.button>
//                   </div>
//                 </div>

//                 {/* degree + short code */}
//                 <div className="disgap">
//                   <motion.button
//                     className={getDegreeBtnClass(i)}
//                     initial={{ scale: 0.9 }}
//                     animate={isInView ? { scale: 1 } : { scale: 0.9 }}
//                     transition={{ delay: i * 0.1 }}
//                   >
//                     {item.degree}
//                   </motion.button>
//                   <div>
//                     <motion.button
//                       className={getShortBtnClass(i)}
//                       whileHover={{ scale: 1.1 }}
//                     >
//                       {item.short}
//                     </motion.button>
//                   </div>
//                 </div>

//                 {/* program title */}
//                 <motion.div
//                   className="mt-3 card-text"
//                   initial={{ opacity: 0 }}
//                   animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//                   transition={{ delay: 0.3 }}
//                 >
//                   {item.program}
//                 </motion.div>

//                 {/* university */}
//                 <motion.div
//                   className="twoitemsinOneLine"
//                   initial={{ x: -20 }}
//                   animate={isInView ? { x: 0 } : { x: -20 }}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <div
//                     className={i === 0 ? "bgWhite" : "bgWhite-secodContainer"}
//                   >
//                     <motion.img
//                       src={educationData.icons.university}
//                       alt="university"
//                       style={{ width: "20px" }}
//                       whileHover={{ scale: 1.2 }}
//                     />
//                   </div>
//                   <div className="alignitems">{item.university}</div>
//                 </motion.div>

//                 {/* location */}
//                 <motion.div
//                   className="twoitemsinOneLine"
//                   initial={{ x: -20 }}
//                   animate={isInView ? { x: 0 } : { x: -20 }}
//                   transition={{ delay: 0.5 }}
//                 >
//                   <div
//                     className={i === 0 ? "bgWhite" : "bgWhite-secodContainer"}
//                   >
//                     <motion.img
//                       src={educationData.icons.location}
//                       alt="location"
//                       style={{ width: "16px" }}
//                       whileHover={{ scale: 1.2 }}
//                     />
//                   </div>
//                   <div className="alignitems">{item.location}</div>
//                 </motion.div>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>

//         <motion.hr
//           className="horizontaline"
//           initial={{ width: 0 }}
//           animate={isInView ? { width: "100%" } : { width: 0 }}
//           transition={{ duration: 1, delay: 0.6 }}
//         />
//       </motion.div>
//     </Container>
//   );
// }

// export default Education;

import React, { useContext, useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import educationFallback from "./data/Education.json";

function Education() {
  const { toggle } = useContext(MyContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // ------------ API state (About pattern) ------------
  const [res, setRes] = useState(null);
  const API_BASE = (process.env.REACT_APP_API_BASE || "").replace(/\/+$/, "");

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/educations`, {
          signal: ac.signal,
        });
        const json = await r.json();
        setRes(json);
      } catch (e) {
        if (e.name !== "AbortError")
          console.warn("Education: using fallback", e);
      }
    })();
    return () => ac.abort();
  }, [API_BASE]);

  // normalize (array hi chahiye), sort by end year desc, top 2
  const apiList = Array.isArray(res)
    ? res
    : Array.isArray(res?.data)
    ? res.data
    : null;

  const list = [...(apiList ?? educationFallback.items)]
    .sort((a, b) => {
      const sA = parseInt(String(a?.years || "").split("-")[0], 10) || 0;
      const sB = parseInt(String(b?.years || "").split("-")[0], 10) || 0;
      return sA - sB; // ascending
    })
    .slice(0, 2);

  // ---------------------------------------------------

  // animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  // helper classes (index-based + theme-based)
  const getCardClass = (i) =>
    i === 0
      ? "backgroundColorOnCard"
      : toggle
      ? "backgroundColorOnCard-secondContainer"
      : "backgroundColorOnCard-secondContainer-dark";

  const getStageBtnClass = (i) =>
    i === 0 ? "image-design-one" : "image-design-one-secondContainer";

  const getDegreeBtnClass = (i) =>
    i === 0 ? "degreeButton" : "degreeButton-secondContainer";

  const getShortBtnClass = (i) =>
    i === 0 ? "BCAbutton" : "BCAbutton-secondContainer";

  return (
    <Container ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div className="font-size-setup" variants={itemVariants}>
          {educationFallback.title}
        </motion.div>

        <Row className="mt-5">
          {list.map((item, i) => (
            <Col
              key={item._id || item.years || i}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={6}
              xxl={6}
            >
              <motion.div
                className={getCardClass(i)}
                variants={itemVariants}
                custom={i}
                whileHover={{ y: -5 }}
              >
                {/* top row: years + stage */}
                <div className="dflexjustspaceBetween">
                  <div>
                    <motion.button
                      className="image-design"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.img
                        src={educationFallback.icons.calendar}
                        className="mt-2 buttonImg"
                        alt="calendar"
                        style={{ width: 30 }}
                        whileHover={{ rotate: 10 }}
                      />
                      {item.years}
                    </motion.button>
                  </div>
                  <div>
                    <motion.button
                      className={getStageBtnClass(i)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.img
                        src={educationFallback.icons.cap}
                        className="mt-2"
                        alt="cap"
                        style={{ width: 30 }}
                        animate={{ y: [0, -5, 0], rotate: [0, 5, -5, 0] }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          repeatType: "reverse",
                        }}
                      />
                      {item.stage}
                    </motion.button>
                  </div>
                </div>

                {/* degree + short */}
                <div className="disgap">
                  <motion.button
                    className={getDegreeBtnClass(i)}
                    initial={{ scale: 0.9 }}
                    animate={isInView ? { scale: 1 } : { scale: 0.9 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item.degree}
                  </motion.button>
                  <motion.button
                    className={getShortBtnClass(i)}
                    whileHover={{ scale: 1.1 }}
                  >
                    {item.short}
                  </motion.button>
                </div>

                {/* program */}
                <motion.div
                  className="mt-3 card-text"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {item.program}
                </motion.div>

                {/* university */}
                <motion.div
                  className="twoitemsinOneLine"
                  initial={{ x: -20 }}
                  animate={isInView ? { x: 0 } : { x: -20 }}
                  transition={{ delay: 0.4 }}
                >
                  <div
                    className={i === 0 ? "bgWhite" : "bgWhite-secodContainer"}
                  >
                    <motion.img
                      src={educationFallback.icons.university}
                      alt="university"
                      style={{ width: 20 }}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <div className="alignitems">{item.university}</div>
                </motion.div>

                {/* location */}
                <motion.div
                  className="twoitemsinOneLine"
                  initial={{ x: -20 }}
                  animate={isInView ? { x: 0 } : { x: -20 }}
                  transition={{ delay: 0.5 }}
                >
                  <div
                    className={i === 0 ? "bgWhite" : "bgWhite-secodContainer"}
                  >
                    <motion.img
                      src={educationFallback.icons.location}
                      alt="location"
                      style={{ width: 16 }}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                  <div className="alignitems">{item.location}</div>
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <motion.hr
          className="horizontaline"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />
      </motion.div>
    </Container>
  );
}

export default Education;
