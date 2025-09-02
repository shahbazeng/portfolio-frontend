// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import aboutData from "./data/About.json";

// function About() {
//   const { toggle } = useContext(MyContext);

//   return (
//     <Container>
//       <div>
//         <div className="second-conatiner">{aboutData.sectionTitle}</div>
//         <div className="fzImageText">
//           <img
//             src={aboutData.user.avatar}
//             style={{ width: toggle ? "80px" : "50px" }}
//             alt="profile"
//           />
//           {toggle ? aboutData.user.name : "I Love"}
//         </div>

//         <Row className="mt-5">
//           <Col
//             xs={12}
//             sm={12}
//             md={12}
//             lg={6}
//             xl={6}
//             xxl={6}
//             className="fourButtonsWrapIndiv"
//           >
//             {toggle ? (
//               // Light theme: grid layout for buttons
//               <div className="buttonsGrid">
//                 {aboutData.hobbies.slice(0, 4).map((item, index) => (
//                   <button key={index} className="fontSizeTwo">
//                     <img src={item.icon} alt="icon" style={{ width: "30px" }} />
//                     {item.title}
//                   </button>
//                 ))}
//               </div>
//             ) : (
//               // Dark theme: two rows layout
//               <>
//                 <div className="display-flex-gap">
//                   {aboutData.hobbies.slice(0, 2).map((item, idx) => (
//                     <button key={idx} className="fontSizeOne bg-light-button">
//                       <img src={item.icon} style={{ width: "30px" }} />
//                       {item.title}
//                     </button>
//                   ))}
//                 </div>
//                 <div className="display-flex-gap">
//                   {aboutData.hobbies.slice(2, 4).map((item, idx) => (
//                     <button key={idx} className="fontSizeTwo bg-light-button">
//                       <img src={item.icon} style={{ width: "30px" }} />
//                       {item.title}
//                     </button>
//                   ))}
//                 </div>
//               </>
//             )}
//           </Col>

//           <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>

//           <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
//             <div className="twoContainerdisplayFlex">
//               {aboutData.stats.map((stat, idx) => (
//                 <div className="width-height-div" key={idx}>
//                   <div className="textManageColor">{stat.value}</div>
//                   <div className="year">{stat.top}</div>
//                   <div className="experience">{stat.bottom}</div>
//                 </div>
//               ))}
//             </div>
//           </Col>
//         </Row>

//         <div className="background-setup">{aboutData.user.description}</div>

//         <div className="align-center">
//           <button className="imageText">
//             <MdOutlineFileDownload className="svgIconOne" />{" "}
//             {aboutData.cta.label}
//           </button>
//         </div>

//         <hr className="horizontaline" />
//       </div>
//     </Container>
//   );
// }

// export default About;
// -------------------------------------------------------------------------------------------------------------------------------
//without api intgeration
// import React, { useContext, useEffect, useRef, useState } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import aboutFallback from "./data/About.json";

// function About() {
//   const { toggle } = useContext(MyContext);

//   // API state
//   const [res, setRes] = useState(null);
//   const API_BASE = (process.env.REACT_APP_API_BASE || "").replace(/\/+$/, "");

//   useEffect(() => {
//     const ac = new AbortController();
//     (async () => {
//       try {
//         const r = await fetch(`${API_BASE}/api/abouts`, { signal: ac.signal });
//         const json = await r.json();
//         setRes(json);
//       } catch (e) {
//         if (e.name !== "AbortError") console.warn("Using fallback", e);
//       }
//     })();
//     return () => ac.abort();
//   }, [API_BASE]);

//   //---- yahi se UI ke liye object nikalo ----
//   const about = Array.isArray(res) && res.length ? res[0] : aboutFallback;

//   // typing effect (description from API)
//   const [animatedText, setAnimatedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.3 });

//   useEffect(() => {
//     if (isInView) {
//       setAnimatedText("");
//       setCurrentIndex(0);
//       controls.start("visible");
//     }
//   }, [isInView, controls, about?.user?.description]);

//   useEffect(() => {
//     const desc = about?.user?.description || "";
//     if (isInView && currentIndex < desc.length) {
//       const t = setTimeout(() => {
//         setAnimatedText((p) => p + desc[currentIndex]);
//         setCurrentIndex((p) => p + 1);
//       }, 20);
//       return () => clearTimeout(t);
//     }
//   }, [currentIndex, isInView, about?.user?.description]);

//   // animations
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.1, when: "beforeChildren" },
//     },
//   };
//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100, damping: 10 },
//     },
//   };
//   const buttonVariants = {
//     hover: { scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,.1)" },
//     tap: { scale: 0.95 },
//   };
//   const statVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: (i) => ({
//       scale: 1,
//       opacity: 1,
//       transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
//     }),
//   };

//   return (
//     <Container ref={ref}>
//       <motion.div
//         initial="hidden"
//         animate={controls}
//         variants={containerVariants}
//       >
//         <motion.div variants={itemVariants} className="second-conatiner">
//           {about?.sectionTitle || "About Me"}
//         </motion.div>

//         <motion.div className="fzImageText" variants={itemVariants}>
//           <motion.img
//             src={about?.user?.avatar}
//             style={{ width: toggle ? "80px" : "50px" }}
//             alt="profile"
//             initial={{ scale: 0 }}
//             animate={isInView ? { scale: 1 } : { scale: 0 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           />
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             {toggle ? about?.user?.name : about?.user?.name || "I Love"}
//           </motion.span>
//         </motion.div>

//         <Row className="mt-5">
//           <Col
//             xs={12}
//             sm={12}
//             md={12}
//             lg={6}
//             xl={6}
//             xxl={6}
//             className="fourButtonsWrapIndiv"
//           >
//             {toggle ? (
//               <div className="buttonsGrid">
//                 {(about?.hobbies || []).slice(0, 4).map((item, index) => (
//                   <motion.button
//                     key={index}
//                     className="fontSizeTwo"
//                     variants={itemVariants}
//                     custom={index}
//                     whileHover={buttonVariants.hover}
//                     whileTap={buttonVariants.tap}
//                   >
//                     <motion.img
//                       src={item.icon}
//                       alt=""
//                       style={{ width: "30px" }}
//                       whileHover={{ rotate: 15 }}
//                     />
//                     {item.title}
//                   </motion.button>
//                 ))}
//               </div>
//             ) : (
//               <>
//                 <div className="display-flex-gap">
//                   {(about?.hobbies || []).slice(0, 2).map((item, idx) => (
//                     <motion.button
//                       key={idx}
//                       className="fontSizeOne bg-light-button"
//                       variants={itemVariants}
//                       custom={idx}
//                       whileHover={buttonVariants.hover}
//                       whileTap={buttonVariants.tap}
//                     >
//                       <motion.img
//                         src={item.icon}
//                         style={{ width: "30px" }}
//                         whileHover={{ rotate: 15 }}
//                       />
//                       {item.title}
//                     </motion.button>
//                   ))}
//                 </div>
//                 <div className="display-flex-gap">
//                   {(about?.hobbies || []).slice(2, 4).map((item, idx) => (
//                     <motion.button
//                       key={idx}
//                       className="fontSizeTwo bg-light-button"
//                       variants={itemVariants}
//                       custom={idx + 2}
//                       whileHover={buttonVariants.hover}
//                       whileTap={buttonVariants.tap}
//                     >
//                       <motion.img
//                         src={item.icon}
//                         style={{ width: "30px" }}
//                         whileHover={{ rotate: 15 }}
//                       />
//                       {item.title}
//                     </motion.button>
//                   ))}
//                 </div>
//               </>
//             )}
//           </Col>

//           <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>

//           <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
//             <motion.div className="twoContainerdisplayFlex">
//               {(about?.stats || []).map((stat, idx) => (
//                 <motion.div
//                   key={idx}
//                   className="width-height-div"
//                   custom={idx}
//                   initial="hidden"
//                   animate={isInView ? "visible" : "hidden"}
//                   variants={statVariants}
//                 >
//                   <div className="textManageColor">{stat.value}</div>
//                   <div className="year">{stat.top}</div>
//                   <div className="experience">{stat.bottom}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </Col>
//         </Row>

//         <motion.div
//           className="background-setup"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ delay: 0.5 }}
//         >
//           {isInView && (
//             <div className="voice-dictation-animation">
//               <div className="voice-wave">
//                 {[1, 2, 3, 4, 5].map((i) => (
//                   <motion.span
//                     key={i}
//                     animate={
//                       isInView
//                         ? { height: [5, 20, 5], opacity: [0.6, 1, 0.6] }
//                         : {}
//                     }
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                       delay: i * 0.1,
//                     }}
//                     style={{
//                       display: "inline-block",
//                       width: "4px",
//                       background: "#feb20f",
//                       margin: "0 2px",
//                       borderRadius: "4px",
//                     }}
//                   />
//                 ))}
//               </div>
//               <div className="typing-text">
//                 {animatedText}
//                 <span className="cursor">|</span>
//               </div>
//             </div>
//           )}
//         </motion.div>

//         <motion.div
//           className="align-center"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ delay: 0.8 }}
//         >
//           <motion.button
//             className="imageText"
//             whileHover={buttonVariants.hover}
//             whileTap={buttonVariants.tap}
//           >
//             <MdOutlineFileDownload className="svgIconOne" />{" "}
//             {about?.cta?.label || "Download"}
//           </motion.button>
//         </motion.div>

//         <motion.hr
//           className="horizontaline"
//           initial={{ width: 0 }}
//           animate={isInView ? { width: "100%" } : { width: 0 }}
//           transition={{ duration: 1, delay: 0.9 }}
//         />
//       </motion.div>
//     </Container>
//   );
// }

// export default About;

import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import aboutFallback from "./data/About.json";

function About() {
  const { toggle } = useContext(MyContext);

  // API state
  const [res, setRes] = useState(null);
  const API_BASE = (process.env.REACT_APP_API_BASE || "").replace(/\/+$/, "");

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/abouts`, { signal: ac.signal });
        const json = await r.json();
        setRes(json);
      } catch (e) {
        if (e.name !== "AbortError") console.warn("Using fallback", e);
      }
    })();
    return () => ac.abort();
  }, [API_BASE]);

  //---- yahi se UI ke liye object nikalo ----
  const about = Array.isArray(res) && res.length ? res[0] : aboutFallback;

  // typing effect (description from API)
  const [animatedText, setAnimatedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasTyped, setHasTyped] = useState(false); // ✅ new flag
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // start typing only once
  useEffect(() => {
    if (isInView && !hasTyped) {
      setAnimatedText("");
      setCurrentIndex(0);
      controls.start("visible");
      setHasTyped(true); // ✅ only once
    }
  }, [isInView, controls, about?.user?.description, hasTyped]);

  // typing animation effect
  useEffect(() => {
    const desc = about?.user?.description || "";
    if (hasTyped && currentIndex < desc.length) {
      const t = setTimeout(() => {
        setAnimatedText((p) => p + desc[currentIndex]);
        setCurrentIndex((p) => p + 1);
      }, 20);
      return () => clearTimeout(t);
    }
  }, [currentIndex, about?.user?.description, hasTyped]);

  // animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };
  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,.1)" },
    tap: { scale: 0.95 },
  };
  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { delay: i * 0.2, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <Container ref={ref}>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="second-conatiner">
          {about?.sectionTitle || "About Me"}
        </motion.div>

        <motion.div className="fzImageText" variants={itemVariants}>
          <motion.img
            src={about?.user?.avatar}
            style={{ width: toggle ? "80px" : "50px" }}
            alt="profile"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            {toggle ? about?.user?.name : about?.user?.name || "I Love"}
          </motion.span>
        </motion.div>

        <Row className="mt-5">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
            className="fourButtonsWrapIndiv"
          >
            {toggle ? (
              <div className="buttonsGrid">
                {(about?.hobbies || []).slice(0, 4).map((item, index) => (
                  <motion.button
                    key={index}
                    className="fontSizeTwo"
                    variants={itemVariants}
                    custom={index}
                    whileHover={buttonVariants.hover}
                    whileTap={buttonVariants.tap}
                  >
                    <motion.img
                      src={item.icon}
                      alt=""
                      style={{ width: "30px" }}
                      whileHover={{ rotate: 15 }}
                    />
                    {item.title}
                  </motion.button>
                ))}
              </div>
            ) : (
              <>
                <div className="display-flex-gap">
                  {(about?.hobbies || []).slice(0, 2).map((item, idx) => (
                    <motion.button
                      key={idx}
                      className="fontSizeOne bg-light-button"
                      variants={itemVariants}
                      custom={idx}
                      whileHover={buttonVariants.hover}
                      whileTap={buttonVariants.tap}
                    >
                      <motion.img
                        src={item.icon}
                        style={{ width: "30px" }}
                        whileHover={{ rotate: 15 }}
                      />
                      {item.title}
                    </motion.button>
                  ))}
                </div>
                <div className="display-flex-gap">
                  {(about?.hobbies || []).slice(2, 4).map((item, idx) => (
                    <motion.button
                      key={idx}
                      className="fontSizeTwo bg-light-button"
                      variants={itemVariants}
                      custom={idx + 2}
                      whileHover={buttonVariants.hover}
                      whileTap={buttonVariants.tap}
                    >
                      <motion.img
                        src={item.icon}
                        style={{ width: "30px" }}
                        whileHover={{ rotate: 15 }}
                      />
                      {item.title}
                    </motion.button>
                  ))}
                </div>
              </>
            )}
          </Col>

          <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>

          <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
            <motion.div className="twoContainerdisplayFlex">
              {(about?.stats || []).map((stat, idx) => (
                <motion.div
                  key={idx}
                  className="width-height-div"
                  custom={idx}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={statVariants}
                >
                  <div className="textManageColor">{stat.value}</div>
                  <div className="year">{stat.top}</div>
                  <div className="experience">{stat.bottom}</div>
                </motion.div>
              ))}
            </motion.div>
          </Col>
        </Row>

        <motion.div
          className="background-setup"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5 }}
        >
          {hasTyped && (
            <div className="voice-dictation-animation">
              <div className="voice-wave">
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.span
                    key={i}
                    animate={
                      isInView
                        ? { height: [5, 20, 5], opacity: [0.6, 1, 0.6] }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: i * 0.1,
                    }}
                    style={{
                      display: "inline-block",
                      width: "4px",
                      background: "#feb20f",
                      margin: "0 2px",
                      borderRadius: "4px",
                    }}
                  />
                ))}
              </div>
              <div className="typing-text">
                {animatedText}
                <span className="cursor">|</span>
              </div>
            </div>
          )}
        </motion.div>

        <motion.div
          className="align-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="imageText"
            whileHover={buttonVariants.hover}
            whileTap={buttonVariants.tap}
          >
            <MdOutlineFileDownload className="svgIconOne" />{" "}
            {about?.cta?.label || "Download"}
          </motion.button>
        </motion.div>

        <motion.hr
          className="horizontaline"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        />
      </motion.div>
    </Container>
  );
}

export default About;

// import React, { useContext, useEffect, useRef, useState } from "react";
// import { motion, useAnimation, useInView } from "framer-motion";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import aboutData from "./data/About.json";

// function About() {
//   const { toggle } = useContext(MyContext);
//   const [animatedText, setAnimatedText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const controls = useAnimation();
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.3 });

//   // Reset animation when section comes into view
//   useEffect(() => {
//     if (isInView) {
//       setAnimatedText("");
//       setCurrentIndex(0);
//       controls.start("visible");
//     }
//   }, [isInView, controls]);

//   // Text animation effect
//   useEffect(() => {
//     if (
//       isInView &&
//       aboutData.user.description &&
//       currentIndex < aboutData.user.description.length
//     ) {
//       const timeout = setTimeout(() => {
//         setAnimatedText(
//           (prev) => prev + aboutData.user.description[currentIndex]
//         );
//         setCurrentIndex((prev) => prev + 1);
//       }, 20);

//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, aboutData.user.description, isInView]);

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
//     hidden: { y: 20, opacity: 0 },
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

//   const buttonVariants = {
//     hover: {
//       scale: 1.05,
//       boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
//     },
//     tap: { scale: 0.95 },
//   };

//   const statVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: (i) => ({
//       scale: 1,
//       opacity: 1,
//       transition: {
//         delay: i * 0.2,
//         type: "spring",
//         stiffness: 100,
//       },
//     }),
//   };

//   return (
//     <Container ref={ref}>
//       <motion.div
//         initial="hidden"
//         animate={controls}
//         variants={containerVariants}
//       >
//         <motion.div variants={itemVariants} className="second-conatiner">
//           {aboutData.sectionTitle}
//         </motion.div>

//         <motion.div className="fzImageText" variants={itemVariants}>
//           <motion.img
//             src={aboutData.user.avatar}
//             style={{ width: toggle ? "80px" : "50px" }}
//             alt="profile"
//             initial={{ scale: 0 }}
//             animate={isInView ? { scale: 1 } : { scale: 0 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           />
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//             transition={{ delay: 0.3 }}
//           >
//             {toggle ? aboutData.user.name : "I Love"}
//           </motion.span>
//         </motion.div>

//         <Row className="mt-5">
//           <Col
//             xs={12}
//             sm={12}
//             md={12}
//             lg={6}
//             xl={6}
//             xxl={6}
//             className="fourButtonsWrapIndiv"
//           >
//             {toggle ? (
//               <div className="buttonsGrid">
//                 {aboutData.hobbies.slice(0, 4).map((item, index) => (
//                   <motion.button
//                     key={index}
//                     className="fontSizeTwo"
//                     variants={itemVariants}
//                     custom={index}
//                     whileHover={buttonVariants.hover}
//                     whileTap={buttonVariants.tap}
//                   >
//                     <motion.img
//                       src={item.icon}
//                       alt="icon"
//                       style={{ width: "30px" }}
//                       whileHover={{ rotate: 15 }}
//                     />
//                     {item.title}
//                   </motion.button>
//                 ))}
//               </div>
//             ) : (
//               <>
//                 <div className="display-flex-gap">
//                   {aboutData.hobbies.slice(0, 2).map((item, idx) => (
//                     <motion.button
//                       key={idx}
//                       className="fontSizeOne bg-light-button"
//                       variants={itemVariants}
//                       custom={idx}
//                       whileHover={buttonVariants.hover}
//                       whileTap={buttonVariants.tap}
//                     >
//                       <motion.img
//                         src={item.icon}
//                         style={{ width: "30px" }}
//                         whileHover={{ rotate: 15 }}
//                       />
//                       {item.title}
//                     </motion.button>
//                   ))}
//                 </div>
//                 <div className="display-flex-gap">
//                   {aboutData.hobbies.slice(2, 4).map((item, idx) => (
//                     <motion.button
//                       key={idx}
//                       className="fontSizeTwo bg-light-button"
//                       variants={itemVariants}
//                       custom={idx + 2}
//                       whileHover={buttonVariants.hover}
//                       whileTap={buttonVariants.tap}
//                     >
//                       <motion.img
//                         src={item.icon}
//                         style={{ width: "30px" }}
//                         whileHover={{ rotate: 15 }}
//                       />
//                       {item.title}
//                     </motion.button>
//                   ))}
//                 </div>
//               </>
//             )}
//           </Col>

//           <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>

//           <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
//             <motion.div className="twoContainerdisplayFlex">
//               {aboutData.stats.map((stat, idx) => (
//                 <motion.div
//                   className="width-height-div"
//                   key={idx}
//                   custom={idx}
//                   initial="hidden"
//                   animate={isInView ? "visible" : "hidden"}
//                   variants={statVariants}
//                 >
//                   <div className="textManageColor">{stat.value}</div>
//                   <div className="year">{stat.top}</div>
//                   <div className="experience">{stat.bottom}</div>
//                 </motion.div>
//               ))}
//             </motion.div>
//           </Col>
//         </Row>

//         <motion.div
//           className="background-setup"
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ delay: 0.5 }}
//         >
//           {isInView && (
//             <div className="voice-dictation-animation">
//               <div className="voice-wave">
//                 {[1, 2, 3, 4, 5].map((i) => (
//                   <motion.span
//                     key={i}
//                     animate={
//                       isInView
//                         ? {
//                             height: [5, 20, 5],
//                             opacity: [0.6, 1, 0.6],
//                           }
//                         : {}
//                     }
//                     transition={{
//                       duration: 1.5,
//                       repeat: Infinity,
//                       repeatType: "reverse",
//                       delay: i * 0.1,
//                     }}
//                     style={{
//                       display: "inline-block",
//                       width: "4px",
//                       background: "#4a6cf7",
//                       margin: "0 2px",
//                       borderRadius: "4px",
//                     }}
//                   />
//                 ))}
//               </div>
//               <div className="typing-text">
//                 {animatedText}
//                 <span className="cursor">|</span>
//               </div>
//             </div>
//           )}
//         </motion.div>

//         <motion.div
//           className="align-center"
//           initial={{ opacity: 0 }}
//           animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//           transition={{ delay: 0.8 }}
//         >
//           <motion.button
//             className="imageText"
//             whileHover={buttonVariants.hover}
//             whileTap={buttonVariants.tap}
//           >
//             <MdOutlineFileDownload className="svgIconOne" />{" "}
//             {aboutData.cta.label}
//           </motion.button>
//         </motion.div>

//         <motion.hr
//           className="horizontaline"
//           initial={{ width: 0 }}
//           animate={isInView ? { width: "100%" } : { width: 0 }}
//           transition={{ duration: 1, delay: 0.9 }}
//         />
//       </motion.div>
//     </Container>
//   );
// }

// export default About;
// ----------------------------------------------------------------------------------------------------------------
// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Card, Form } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

// function About() {
//   const [result2, setResult2] = useState([]);
//   const [userData, setUserData] = useState([]);

//   const { toggle } = useContext(MyContext);

//   useEffect(() => {
//     axios.get("http://localhost:5000/about_section").then((res) => {
//       setResult2(res.data.result2);
//       setUserData(res.data.user);
//       console.log("res resul 2", res.data.result2);
//       console.log("res user data", res.data.user);
//     });
//   }, []);
//   return toggle ? (
//     <>
//       <Container>
//         <div>
//           <div className="second-conatiner">About Me</div>
//           <div className="fzImageText">
//             <img
//               src={`http://localhost:5000/${userData.profile_image}`}
//               style={{ width: "80px" }}
//             />
//             {userData.name}
//           </div>
//           <Row className="mt-5">
//             <Col
//               xs={12}
//               sm={12}
//               md={12}
//               lg={6}
//               xl={6}
//               xxl={6}
//               className="fourButtonsWrapIndiv"
//             >
//               <div className="buttonsGrid">
//                 {result2.slice(0, 4).map((item, index) => (
//                   <button key={index} className="fontSizeTwo">
//                     <img
//                       src={`http://localhost:5000/${item.icon}`}
//                       alt="icon"
//                       style={{ width: "30px" }}
//                     />
//                     {item.title}
//                   </button>
//                 ))}
//               </div>
//             </Col>

//             <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>
//             <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
//               <div className="twoContainerdisplayFlex">
//                 <div className="width-height-div">
//                   <div className="textManageColor">{userData.experience}+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//                 <div className="width-height-div">
//                   <div className="textManageColor">{userData.experience}+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//           {/* <Row className="mt-5">
//             <Col
//               xs={12}
//               sm={12}
//               md={12}
//               lg={6}
//               xl={6}
//               xxl={6}
//               className="fourButtonsWrapIndiv"
//             >
//               <div className="display-flex-gap">
//                 <button className="fontSizeOne">
//                   <img src="/headphones 1.png" style={{ width: "30px" }} />
//                   Listeing to Music
//                 </button>
//                 <button className="fontSizeOne">
//                   <img src="/travel 1.png" style={{ width: "30px" }} />
//                   Travelling
//                 </button>
//               </div>
//               <div className="display-flex-gap">
//                 <button className="fontSizeTwo">
//                   <img src="/mountain 1.png" style={{ width: "30px" }} />
//                   Mountains
//                 </button>
//                 <button className="fontSizeTwo">
//                   <img src="/flying-money 1.png" style={{ width: "30px" }} />
//                   Money
//                 </button>
//               </div>
//             </Col>
//             <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>
//             <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
//               <div className="twoContainerdisplayFlex">
//                 <div className="width-height-div">
//                   <div className="textManageColor">{userData.experience}+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//                 <div className="width-height-div">
//                   <div className="textManageColor">{userData.experience}+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//               </div>
//             </Col>
//           </Row> */}
//           <div className="background-setup">
//             {/* A Passionate Front End Developer with a Master's and Computer
//             Application and over 3.9 Years of experience in crafting captivating
//             digital experience. My expertise lies in leveraging cutting-edge
//             technologies such a ReactJS, NextJS,Apollo GraphQL, Redux, React
//             Query and various UI frameworksincluding Material UI, NextUI, SCSS,
//             Tailwind CSS, Chakra and Bootstrap. I take pride in my ability to
//             design seamless users interfaces and components that align perfectly
//             with the intended aesthetic,creating responsive website that adapt
//             gracefully to any device. My skill set also extends to proficientAPI
//             integration, ensuring the seamless flow of data between front end
//             and back end. In addition, I am known for writting clean
//             well-structured code that not only functions flawlessly but also
//             enchances the overall maintainabillity of projects. With a track
//             record of contributing to well-known products
//             likeCricTracker,Sportsbuzz, and epiko market, I am commited to
//             pushing the boundries of web develp to deliver the exceptional
//             digital solution. */}
//             {userData.description}
//           </div>
//           <div className="align-center">
//             <button className="imageText">
//               <MdOutlineFileDownload className="svgIconOne" /> Contact Me
//             </button>
//           </div>

//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   ) : (
//     <>
//       <Container>
//         <div>
//           <div className="second-conatiner">About Me</div>
//           <div className="fzImageText">
//             <img src="/Ellipse 9.png" style={{ width: "50px" }} /> I Love
//           </div>
//           <Row className="mt-5">
//             <Col
//               xs={12}
//               sm={12}
//               md={12}
//               lg={6}
//               xl={6}
//               xxl={6}
//               className="fourButtonsWrapIndiv"
//             >
//               <div className="display-flex-gap">
//                 <button className="fontSizeOne bg-light-button">
//                   <img src="/headphones 1.png" style={{ width: "30px" }} />
//                   Listeing to Music
//                 </button>
//                 <button className="fontSizeOne bg-light-button">
//                   <img src="/travel 1.png" style={{ width: "30px" }} />
//                   Travelling
//                 </button>
//               </div>
//               <div className="display-flex-gap">
//                 <button className="fontSizeTwo bg-light-button">
//                   <img src="/mountain 1.png" style={{ width: "30px" }} />
//                   Mountains
//                 </button>
//                 <button className="fontSizeTwo bg-light-button">
//                   <img src="/flying-money 1.png" style={{ width: "30px" }} />
//                   Money
//                 </button>
//               </div>
//             </Col>
//             <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>
//             <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
//               <div className="twoContainerdisplayFlex">
//                 <div className="width-height-div">
//                   <div className="textManageColor">3.9+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//                 <div className="width-height-div">
//                   <div className="textManageColor">3.9+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//           <div className="background-setup">
//             A Passionate Front End Developer with a Master's and Computer
//             Application and over 3.9 Years of experience in crafting captivating
//             digital experience. My expertise lies in leveraging cutting-edge
//             technologies such a ReactJS, NextJS,Apollo GraphQL, Redux, React
//             Query and various UI frameworksincluding Material UI, NextUI, SCSS,
//             Tailwind CSS, Chakra and Bootstrap. I take pride in my ability to
//             design seamless users interfaces and components that align perfectly
//             with the intended aesthetic,creating responsive website that adapt
//             gracefully to any device. My skill set also extends to proficientAPI
//             integration, ensuring the seamless flow of data between front end
//             and back end. In addition, I am known for writting clean
//             well-structured code that not only functions flawlessly but also
//             enchances the overall maintainabillity of projects. With a track
//             record of contributing to well-known products
//             likeCricTracker,Sportsbuzz, and epiko market, I am commited to
//             pushing the boundries of web develp to deliver the exceptional
//             digital solution.
//           </div>
//           <div className="align-center">
//             <button className="imageText">
//               <MdOutlineFileDownload className="svgIconOne" /> Contact Me
//             </button>
//           </div>

//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   );
// }
// export default About;
