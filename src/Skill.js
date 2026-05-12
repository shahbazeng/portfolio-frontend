// import React, { useContext } from "react";
// import './App.css';
// import { MyContext } from "./MyContext";
// import { Container , Row , Col, Card, Form } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";

// function Skill(){
//       const {toggle} = useContext(MyContext);
//     return(
//         toggle?(
//        <>
//        <Container>
//          <div>
//             <div className="experience-text-design mb-5">
//         Skill
//                 </div>
//                 <div className="experience-text-design mb-5">
//                 Design Tool I Use
//                 </div>
//                 <div className="displayFlexTwoNumbers">
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (19) 2.png" alt="xd-images" style={{width:"30px"}}/>Adobe XD
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/figma 3.png" alt="figma-image" style={{width:"30px"}}/>Figma
//                     </button>
//                 </div>
//                 <div className="experience-text-design mt-5 mb-5">
//                 Technologies I Use
//                 </div>
//                 <div className="displayFlexTwoNumbers-second-Container">
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/react 2.png" alt="html-image" style={{width:"20px"}}/> ReactJS
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (12) 2.png" alt="html-image" style={{width:"20px"}}/> Redux
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (13) 2.png" alt="html-image" style={{width:"20px"}}/> Firebase
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (14) 1.png" alt="html-image" style={{width:"20px"}}/> AMP
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (15) 1.png" alt="html-image" style={{width:"20px"}}/> React Hook Form
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (16) 1.png" alt="html-image" style={{width:"20px"}}/> Material UI
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (2) 1.png" alt="html-image" style={{width:"20px"}}/> Tailwind CSS
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (17) 1.png" alt="html-image" style={{width:"20px"}}/> Chakra UI
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (18) 1.png" alt="html-image" style={{width:"20px"}}/> Semantic UI
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (12) 1.png" alt="html-image" style={{width:"20px"}}/> Ant Design
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (3) 2.png" alt="html-image" style={{width:"20px"}}/> GrapQL
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (22) 2.png" alt="html-image" style={{width:"20px"}}/> Git
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
//                     </button>

//                 </div>
//                 <div className="mb-5 mt-2 width-hundred-display-align">
//                    <div className="w-50 experience-text-design-one">
//                    DEVELOPMENT & PRODUCTIVITY
//                    TOOLS I USE
//                     </div>
//                     </div>

//               <div className="displayFlexTwoNumbers-second-Container">
//               <button className="buttonTwoxdandfig">
//                         <img src="/download (14) 2.png" alt="html-image" style={{width:"20px"}}/> Visual Studio Code
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
//                     </button>
//                     <button className="buttonTwoxdandfig">
//                         <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
//                     </button>
//                     </div>

//                     <div className="center-align">
//             <button className="btn-two">
//             <MdOutlineFileDownload className="svgIcon"/> Resume
//                 </button>
//             </div>
//             <hr className="horizontaline"/>
//             </div>
//        </Container>
//        </>):(
//         <>
//         <Container>
//             <div>
//                 <div className="experience-text-design mb-5">
//             Skill
//                     </div>
//                     <div className="experience-text-design mb-5">
//                     Design Tool I Use
//                     </div>
//                     <div className="displayFlexTwoNumbers">
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (19) 2.png" alt="xd-images" style={{width:"30px"}}/>Adobe XD
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/figma 3.png" alt="figma-image" style={{width:"30px"}}/>Figma
//                         </button>
//                     </div>
//                     <div className="experience-text-design mt-5 mb-5">
//                     Technologies I Use
//                     </div>
//                     <div className="displayFlexTwoNumbers-second-Container">
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (7) 1.png" alt="html-image" style={{width:"20px"}}/> HTML5
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (8) 1.png" alt="html-image" style={{width:"20px"}}/> CSS2
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/js 2.png" alt="html-image" style={{width:"20px"}}/> JavaScript
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (9) 1.png" alt="html-image" style={{width:"20px"}}/> JQuery
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (10) 1.png" alt="html-image" style={{width:"20px"}}/> SCSS
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/react 2.png" alt="html-image" style={{width:"20px"}}/> ReactJS
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (12) 2.png" alt="html-image" style={{width:"20px"}}/> Redux
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (13) 2.png" alt="html-image" style={{width:"20px"}}/> Firebase
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (14) 1.png" alt="html-image" style={{width:"20px"}}/> AMP
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (15) 1.png" alt="html-image" style={{width:"20px"}}/> React Hook Form
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (16) 1.png" alt="html-image" style={{width:"20px"}}/> Material UI
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (2) 1.png" alt="html-image" style={{width:"20px"}}/> Tailwind CSS
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (17) 1.png" alt="html-image" style={{width:"20px"}}/> Chakra UI
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (18) 1.png" alt="html-image" style={{width:"20px"}}/> Semantic UI
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (12) 1.png" alt="html-image" style={{width:"20px"}}/> Ant Design
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (3) 2.png" alt="html-image" style={{width:"20px"}}/> GrapQL
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (22) 2.png" alt="html-image" style={{width:"20px"}}/> Git
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (20) 1.png" alt="html-image" style={{width:"20px"}}/> Framer Motion
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (21) 1.png" alt="html-image" style={{width:"20px"}}/> React Query
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (19) 1.png" alt="html-image" style={{width:"20px"}}/> Apollo GraphQL
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (13) 1.png" alt="html-image" style={{width:"20px"}}/> Styled Components
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (11) 1.png" alt="html-image" style={{width:"20px"}}/> Booststarp
//                         </button>

//                     </div>
//                     <div className="mb-5 mt-2 width-hundred-display-align">
//                        <div className="w-50 experience-text-design-one">
//                        DEVELOPMENT & PRODUCTIVITY
//                        TOOLS I USE
//                         </div>
//                         </div>

//                   <div className="displayFlexTwoNumbers-second-Container">
//                   <button className="buttonTwoxdandfig">
//                             <img src="/download (14) 2.png" alt="html-image" style={{width:"20px"}}/> Visual Studio Code
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (25) 1.png" alt="html-image" style={{width:"20px"}}/> Gitlab
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (26) 1.png" alt="html-image" style={{width:"20px"}}/> Github
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (27) 1.png" alt="html-image" style={{width:"20px"}}/> Notion
//                         </button>
//                         <button className="buttonTwoxdandfig">
//                             <img src="/download (28) 1.png" alt="html-image" style={{width:"20px"}}/> Postman
//                         </button>
//                         </div>

//                         <div className="center-align">
//                 <button className="btn-two">
//                 <MdOutlineFileDownload className="svgIcon"/> Resume
//                     </button>
//                 </div>
//                 <hr className="horizontaline"/>
//                 </div>

//             </Container>

//         </>
//        )
//     )
// }
// export default Skill;
// -----------------------------------------------------------------------------------------------------------------
// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import skillData from "./data/Skill.json";

// function Skill() {
//   const { toggle } = useContext(MyContext);

//   const renderButtons = (list) =>
//     list.map((item) => (
//       <button key={item.label} className="buttonTwoxdandfig">
//         <img src={item.icon} alt={item.label} style={{ width: "20px" }} />{" "}
//         {item.label}
//       </button>
//     ));

//   return (
//     <Container>
//       <div>
//         <div className="experience-text-design mb-5">{skillData.title}</div>

//         {/* Design Tools */}
//         <div className="experience-text-design mb-5">
//           {skillData.design.title}
//         </div>
//         <div className="displayFlexTwoNumbers">
//           {/* Design tools have larger icons in your light code; keep 30px if you want */}
//           {skillData.design.tools.map((item) => (
//             <button key={item.label} className="buttonTwoxdandfig">
//               <img src={item.icon} alt={item.label} style={{ width: "30px" }} />
//               {item.label}
//             </button>
//           ))}
//         </div>

//         {/* Technologies */}
//         <div className="experience-text-design mt-5 mb-5">
//           {skillData.tech.title}
//         </div>
//         <div className="displayFlexTwoNumbers-second-Container">
//           {renderButtons(skillData.tech.tools)}
//         </div>

//         {/* Dev & Productivity */}
//         <div className="mb-5 mt-2 width-hundred-display-align">
//           <div className="w-50 experience-text-design-one">
//             {skillData.devProd.titleLine1}
//             <br />
//             {skillData.devProd.titleLine2}
//           </div>
//         </div>
//         <div className="displayFlexTwoNumbers-second-Container">
//           {renderButtons(skillData.devProd.tools)}
//         </div>

//         {/* Resume */}
//         <div className="center-align">
//           <a
//             href={skillData.resume.file}
//             download
//             className="btn-two"
//             style={{ textDecoration: "none" }}
//           >
//             <MdOutlineFileDownload className="svgIcon" />{" "}
//             {skillData.resume.label}
//           </a>
//         </div>

//         <hr className="horizontaline" />
//       </div>
//     </Container>
//   );
// }

// export default Skill;
// --------------------------------------------------------------------------------------------------------------------------------------
//without integration of api
// import React, { useContext, useState, useEffect, useRef } from "react";
// import { motion, useInView } from "framer-motion";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import skillData from "./data/Skill.json";

// function Skill() {
//   const { toggle } = useContext(MyContext);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.2 });
//   const [activeTechGroup, setActiveTechGroup] = useState(0);
//   const itemsPerGroup = 6; // Show 6 items per group

//   // Calculate total number of groups needed
//   const totalGroups = Math.ceil(skillData.tech.tools.length / itemsPerGroup);

//   // Auto-slide tech groups
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveTechGroup((prev) => (prev + 1) % totalGroups);
//     }, 3000); // Change group every 3 seconds

//     return () => clearInterval(interval);
//   }, [totalGroups]);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
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

//   const renderButtons = (list) =>
//     list.map((item, i) => (
//       <motion.button
//         key={item.label}
//         className="buttonTwoxdandfig"
//         initial="hidden"
//         animate="visible"
//         variants={itemVariants}
//         custom={i}
//         whileHover={{ scale: 1.05 }}
//       >
//         <img src={item.icon} alt={item.label} style={{ width: "20px" }} />{" "}
//         {item.label}
//       </motion.button>
//     ));
//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE}/api/skills`
//       );
//       const data = await response.json();
//       console.log(" skill data from api", data);
//     }
//     fetchData();
//   }, []);
//   return (
//     <Container ref={ref}>
//       <motion.div
//         initial="hidden"
//         animate={isInView ? "visible" : "hidden"}
//         variants={containerVariants}
//       >
//         {/* Title */}
//         <motion.div
//           className="experience-text-design mb-5"
//           variants={itemVariants}
//         >
//           {skillData.title}
//         </motion.div>

//         {/* Design Tools */}
//         <motion.div
//           className="experience-text-design mb-5"
//           variants={itemVariants}
//         >
//           {skillData.design.title}
//         </motion.div>
//         <motion.div
//           className="displayFlexTwoNumbers"
//           variants={containerVariants}
//         >
//           {skillData.design.tools.map((item, i) => (
//             <motion.button
//               key={item.label}
//               className="buttonTwoxdandfig"
//               variants={itemVariants}
//               custom={i}
//               whileHover={{ scale: 1.05 }}
//             >
//               <img src={item.icon} alt={item.label} style={{ width: "30px" }} />
//               {item.label}
//             </motion.button>
//           ))}
//         </motion.div>

//         {/* Technologies - Grouped slider */}
//         <motion.div
//           className="experience-text-design mt-5 mb-5"
//           variants={itemVariants}
//         >
//           {skillData.tech.title}
//         </motion.div>

//         <div className="tech-slider-container">
//           <motion.div
//             className="tech-slider-track"
//             animate={{
//               x: `-${activeTechGroup * 100}%`,
//               transition: { type: "spring", stiffness: 100, damping: 10 },
//             }}
//           >
//             {Array.from({ length: totalGroups }).map((_, groupIndex) => (
//               <div key={groupIndex} className="tech-slide-group">
//                 {skillData.tech.tools
//                   .slice(
//                     groupIndex * itemsPerGroup,
//                     (groupIndex + 1) * itemsPerGroup
//                   )
//                   .map((item, itemIndex) => (
//                     <motion.div
//                       key={item.label}
//                       className="tech-item"
//                       initial={{ opacity: 0, y: 20 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ delay: itemIndex * 0.05 }}
//                     >
//                       <button className="buttonTwoxdandfig w-100">
//                         <img
//                           src={item.icon}
//                           alt={item.label}
//                           style={{ width: "20px" }}
//                         />
//                         {item.label}
//                       </button>
//                     </motion.div>
//                   ))}
//               </div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Dev & Productivity */}
//         <motion.div
//           className="mb-5 mt-2 width-hundred-display-align"
//           variants={itemVariants}
//         >
//           <div className="w-50 experience-text-design-one">
//             {skillData.devProd.titleLine1}
//             <br />
//             {skillData.devProd.titleLine2}
//           </div>
//         </motion.div>
//         <motion.div
//           className="displayFlexTwoNumbers-second-Container"
//           variants={containerVariants}
//         >
//           {renderButtons(skillData.devProd.tools)}
//         </motion.div>

//         {/* Resume */}
//         <motion.div className="center-align" variants={itemVariants}>
//           <motion.a
//             href={skillData.resume.file}
//             download
//             className="btn-two"
//             style={{ textDecoration: "none" }}
//             whileHover={{ scale: 1.05 }}
//           >
//             <MdOutlineFileDownload className="svgIcon" />{" "}
//             {skillData.resume.label}
//           </motion.a>
//         </motion.div>

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

// export default Skill;

// src/Skill.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import { Container } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import fallbackSkill from "./data/Skill.json";

function Skill() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // ✅ API state
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);

  // fetch from API (array -> first object)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE}/api/skills`,
          {
            headers: { Accept: "application/json" },
          }
        );
        const json = await res.json();
        setSkill(Array.isArray(json) ? json[0] : json);
      } catch (e) {
        // fall back silently
        setSkill(null);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // unified source (API → fallback JSON)
  const ui = skill || fallbackSkill;

  // ---- slider state (depends on data length) ----
  const itemsPerGroup = 6;
  const techCount = ui?.tech?.tools?.length || 0;
  const totalGroups = Math.max(1, Math.ceil(techCount / itemsPerGroup));
  const [activeTechGroup, setActiveTechGroup] = useState(0);

  // Auto-slide tech groups
  useEffect(() => {
    if (!totalGroups) return;
    const id = setInterval(() => {
      setActiveTechGroup((prev) => (prev + 1) % totalGroups);
    }, 5000);
    return () => clearInterval(id);
  }, [totalGroups]);

  // ---- animations ----
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
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

  const renderButtons = (list = []) =>
    list.map((item, i) => (
      <motion.button
        key={`${item.label}-${i}`}
        className="buttonTwoxdandfig"
        initial="hidden"
        animate="visible"
        variants={itemVariants}
        custom={i}
        whileHover={{ scale: 1.05 }}
      >
        {item.icon && (
          <img src={item.icon} alt={item.label} style={{ width: 20 }} />
        )}{" "}
        {item.label}
      </motion.button>
    ));

  return (
    <Container ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {/* Title */}
        <motion.div
          className="experience-text-design mb-5"
          variants={itemVariants}
        >
          {ui?.title || "Skill"}
        </motion.div>

        {/* Loading (optional) */}
        {loading && (
          <motion.div className="small-font-size mb-3" variants={itemVariants}>
            Loading skills…
          </motion.div>
        )}

        {/* Design Tools */}
        <motion.div
          className="experience-text-design mb-5"
          variants={itemVariants}
        >
          {ui?.design?.title}
        </motion.div>
        <motion.div
          className="displayFlexTwoNumbers"
          variants={containerVariants}
        >
          {(ui?.design?.tools || []).map((item, i) => (
            <motion.button
              key={`${item.label}-${i}`}
              className="buttonTwoxdandfig"
              variants={itemVariants}
              custom={i}
              whileHover={{ scale: 1.05 }}
            >
              {item.icon && (
                <img src={item.icon} alt={item.label} style={{ width: 30 }} />
              )}
              {item.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Technologies - Grouped slider */}
        <motion.div
          className="experience-text-design mt-5 mb-5"
          variants={itemVariants}
        >
          {ui?.tech?.title}
        </motion.div>

        <div className="tech-slider-container">
          <motion.div
            className="tech-slider-track"
            animate={{
              x: `-${activeTechGroup * 100}%`,
              transition: { type: "spring", stiffness: 100, damping: 10 },
            }}
          >
            {Array.from({ length: totalGroups }).map((_, groupIndex) => (
              <div key={groupIndex} className="tech-slide-group">
                {(ui?.tech?.tools || [])
                  .slice(
                    groupIndex * itemsPerGroup,
                    (groupIndex + 1) * itemsPerGroup
                  )
                  .map((item, itemIndex) => (
                    <motion.div
                      key={`${item.label}-${groupIndex}-${itemIndex}`}
                      className="tech-item"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: itemIndex * 0.05 }}
                    >
                      <button className="buttonTwoxdandfig w-100">
                        {item.icon && (
                          <img
                            src={item.icon}
                            alt={item.label}
                            style={{ width: 20 }}
                          />
                        )}
                        {item.label}
                      </button>
                    </motion.div>
                  ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dev & Productivity */}
        <motion.div
          className="mb-5 mt-2 width-hundred-display-align"
          variants={itemVariants}
        >
          <div className="w-50 experience-text-design-one">
            {ui?.devProd?.titleLine1}
            <br />
            {ui?.devProd?.titleLine2}
          </div>
        </motion.div>
        <motion.div
          className="displayFlexTwoNumbers-second-Container"
          variants={containerVariants}
        >
          {renderButtons(ui?.devProd?.tools)}
        </motion.div>

        {/* Resume */}
        {ui?.resume?.file && (
          <motion.div className="center-align" variants={itemVariants}>
            <motion.a
              href={ui.resume.file}
              download
              className="btn-two"
              style={{ textDecoration: "none" }}
              whileHover={{ scale: 1.05 }}
            >
              <MdOutlineFileDownload className="svgIcon" />{" "}
              {ui.resume.label || "Resume"}
            </motion.a>
          </motion.div>
        )}

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

export default Skill;
