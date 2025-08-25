// import React, { useContext } from "react";
// import './App.css';
// import { MyContext } from "./MyContext";
// import { Container , Row , Col, Card, Form } from "react-bootstrap";

// function CardComponent(){
//      const {toggle} = useContext(MyContext);
//     return(
//         toggle?(
//         <>
//         <Container>
//         <div>

// <div className="experience-text-design mb-5">
// By Me a Coffee
//         </div>
//         <Row className="mt-5">
// <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
// <div className="backgroundwhite">
//     <div className="backgroundColor-Black-innerDiv">

//     </div>
//     <div className="textDesign">
//         Modren Resume / CV Figma Design Made by me
//     </div>
//     <div className="twobuttonsinonelinestyle">
//         <button className="buttonOneDesign">
//             10$
//         </button>
//         <button className="buttonTwoDesign">
//             Purchase Design
//         </button>
//     </div>
// </div>
// </Col>
// <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
// <div className="backgroundwhite-one">
//     <div className="backgroundColor-Black-innerDiv">

//     </div>
//     <div className="textDesign">
//         Modren Resume / CV Figma Design Made by me
//     </div>
//     <div className="twobuttonsinonelinestyle">
//         <button className="buttonOneDesign">
//             10$
//         </button>
//         <button className="buttonTwoDesign-one">
//             Purchase Design
//         </button>
//     </div>
// </div>
// </Col>
// <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
// <div className="backgroundwhite">
//     <div className="backgroundColor-Black-innerDiv">

//     </div>
//     <div className="textDesign">
//         Modren Resume / CV Figma Design Made by me
//     </div>
//     <div className="twobuttonsinonelinestyle">
//         <button className="buttonOneDesign">
//             10$
//         </button>
//         <button className="buttonTwoDesign">
//             Purchase Design
//         </button>
//     </div>
// </div>
// </Col>
//         </Row>
//         <hr className="horizontaline"/>
//         </div>
//         </Container>
//         </>
//         ):(
//             <>
//             <Container>
//             <div>

// <div className="experience-text-design mb-5">
// By Me a Coffee
//         </div>
//         <Row className="mt-5">
// <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
// <div className="backgroundwhite-dark">
//     <div className="backgroundColor-Black-innerDiv">

//     </div>
//     <div className="textDesign">
//         Modren Resume / CV Figma Design Made by me
//     </div>
//     <div className="twobuttonsinonelinestyle">
//         <button className="buttonOneDesign">
//             10$
//         </button>
//         <button className="buttonTwoDesign">
//             Purchase Design
//         </button>
//     </div>
// </div>
// </Col>
// <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
// <div className="backgroundwhite-one">
//     <div className="backgroundColor-Black-innerDiv">

//     </div>
//     <div className="textDesign">
//         Modren Resume / CV Figma Design Made by me
//     </div>
//     <div className="twobuttonsinonelinestyle">
//         <button className="buttonOneDesign">
//             10$
//         </button>
//         <button className="buttonTwoDesign-one">
//             Purchase Design
//         </button>
//     </div>
// </div>
// </Col>
// <Col xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
// <div className="backgroundwhite-dark">
//     <div className="backgroundColor-Black-innerDiv">

//     </div>
//     <div className="textDesign">
//         Modren Resume / CV Figma Design Made by me
//     </div>
//     <div className="twobuttonsinonelinestyle">
//         <button className="buttonOneDesign">
//             10$
//         </button>
//         <button className="buttonTwoDesign">
//             Purchase Design
//         </button>
//     </div>
// </div>
// </Col>
//         </Row>
//         <hr className="horizontaline"/>
//         </div>
//             </Container>
//             </>
//         )
//     )
// }
// export default CardComponent;
// --------------------------------------------------------------------------------------------------
// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import cardsData from "./data/Card.json";

// function CardComponent() {
//   const { toggle } = useContext(MyContext);

//   const getWrapperClass = (c) => (toggle ? c.wrapperLight : c.wrapperDark);
//   const getCtaClass = (c) => (toggle ? c.ctaClassLight : c.ctaClassDark);

//   return (
//     <Container>
//       <div>
//         <div className="experience-text-design mb-5">{cardsData.title}</div>

//         <Row className="mt-5">
//           {cardsData.cards.map((card, idx) => (
//             <Col key={idx} xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
//               <div className={getWrapperClass(card)}>
//                 <div className="backgroundColor-Black-innerDiv"></div>

//                 <div className="textDesign">{card.text}</div>

//                 <div className="twobuttonsinonelinestyle">
//                   <button className="buttonOneDesign">{card.price}</button>

//                   {/* CTA can be button or link; using <a> so href works */}
//                   <a
//                     href={card.href}
//                     style={{ textDecoration: "none" }}
//                     className={getCtaClass(card)}
//                   >
//                     {card.ctaLabel}
//                   </a>
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

// export default CardComponent;
// --------------------------------------------------------------------------------------

// without api integration
// import React, { useContext, useRef, useEffect } from "react";
// import { motion, useInView } from "framer-motion";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col } from "react-bootstrap";
// import cardsData from "./data/Card.json";

// function CardComponent() {
//   const { toggle } = useContext(MyContext);
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.2 });

//   const getWrapperClass = (c) => (toggle ? c.wrapperLight : c.wrapperDark);
//   const getCtaClass = (c) => (toggle ? c.ctaClassLight : c.ctaClassDark);

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

//   const cardVariants = (index) => {
//     const directions = [
//       { x: -100, y: 0 }, // from left
//       { x: 100, y: 0 }, // from right
//       { x: 0, y: -50 }, // from top
//       { x: 0, y: 50 }, // from bottom
//     ];
//     const direction = directions[index % directions.length];

//     return {
//       hidden: { ...direction, opacity: 0 },
//       visible: {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//           type: "spring",
//           stiffness: 80,
//           damping: 10,
//           delay: index * 0.15,
//         },
//       },
//       hover: {
//         y: -10,
//         transition: { type: "spring", stiffness: 300 },
//       },
//     };
//   };

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch(
//         `${process.env.REACT_APP_API_BASE}/api/coffee`
//       );
//       const data = await response.json();
//       console.log(" Fetched data:", data);
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
//           initial={{ y: -50, opacity: 0 }}
//           animate={isInView ? { y: 0, opacity: 1 } : {}}
//           transition={{ type: "spring", stiffness: 120 }}
//         >
//           {cardsData.title}
//         </motion.div>

//         {/* Cards */}
//         <Row className="mt-5">
//           {cardsData.cards.map((card, idx) => (
//             <Col key={idx} xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
//               <motion.div
//                 className={getWrapperClass(card)}
//                 variants={cardVariants(idx)}
//                 whileHover="hover"
//               >
//                 <motion.div
//                   className="backgroundColor-Black-innerDiv"
//                   initial={{ scale: 0.9, opacity: 0 }}
//                   animate={isInView ? { scale: 1, opacity: 1 } : {}}
//                   transition={{ delay: 0.2 }}
//                 />

//                 <motion.div
//                   className="textDesign"
//                   initial={{ opacity: 0 }}
//                   animate={isInView ? { opacity: 1 } : {}}
//                   transition={{ delay: 0.3 }}
//                 >
//                   {card.text}
//                 </motion.div>

//                 <motion.div
//                   className="twobuttonsinonelinestyle"
//                   initial={{ opacity: 0 }}
//                   animate={isInView ? { opacity: 1 } : {}}
//                   transition={{ delay: 0.4 }}
//                 >
//                   <motion.button
//                     className="buttonOneDesign"
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {card.price}
//                   </motion.button>

//                   <motion.a
//                     href={card.href}
//                     style={{ textDecoration: "none" }}
//                     className={getCtaClass(card)}
//                     whileHover={{ scale: 1.05 }}
//                   >
//                     {card.ctaLabel}
//                   </motion.a>
//                 </motion.div>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>

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

// export default CardComponent;

// src/CardComponent.jsx
import React, { useContext, useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import cardsFallback from "./data/Card.json";

function CardComponent() {
  const { toggle } = useContext(MyContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // ---------- API state ----------
  const [cardsDoc, setCardsDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE}/api/coffee`,
          {
            headers: { Accept: "application/json" },
          }
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        // API returns an array with one object: { title, cards: [...] }
        setCardsDoc(Array.isArray(json) ? json[0] : json);
      } catch (e) {
        setErr(e.message || "Failed to load cards");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // unified data source (API → fallback)
  const data = cardsDoc || cardsFallback;

  // class helpers with sensible fallbacks
  const getWrapperClass = (c) =>
    toggle
      ? c.wrapperLight || "backgroundwhite"
      : c.wrapperDark || "backgroundwhite-dark";
  const getCtaClass = (c) =>
    toggle
      ? c.ctaClassLight || "buttonTwoDesign"
      : c.ctaClassDark || "buttonTwoDesign";

  // ---------- animations ----------
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, when: "beforeChildren" },
    },
  };

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
      hover: { y: -10, transition: { type: "spring", stiffness: 300 } },
    };
  };

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
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {data?.title || "Buy Me a Coffee"}
        </motion.div>

        {/* Loading / Error (optional) */}
        {loading && (
          <motion.div className="small-font-size" variants={containerVariants}>
            Loading…
          </motion.div>
        )}
        {!loading && err && (
          <motion.div
            className="small-font-size text-danger"
            variants={containerVariants}
          >
            {err}
          </motion.div>
        )}

        {/* Cards */}
        <Row className="mt-5">
          {(data?.cards || []).map((card, idx) => (
            <Col key={idx} xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
              <motion.div
                className={getWrapperClass(card)}
                variants={cardVariants(idx)}
                whileHover="hover"
              >
                {/* Image as background */}
                <motion.div
                  className="backgroundColor-Black-innerDiv"
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
                  style={{
                    width: "100%",
                    minHeight: 260,
                    borderRadius: 16,
                    backgroundImage: card.image
                      ? `url(${card.image})`
                      : undefined,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <motion.div
                  className="textDesign"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                >
                  {card.text}
                </motion.div>

                <motion.div
                  className="twobuttonsinonelinestyle"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  {card.price && (
                    <motion.button
                      className="buttonOneDesign"
                      whileHover={{ scale: 1.05 }}
                    >
                      {card.price}
                    </motion.button>
                  )}

                  <motion.a
                    href={card.href || "#"}
                    target={
                      card.href && card.href !== "#" ? "_blank" : undefined
                    }
                    rel="noreferrer"
                    style={{ textDecoration: "none" }}
                    className={getCtaClass(card)}
                    whileHover={{ scale: 1.05 }}
                  >
                    {card.ctaLabel || "Purchase"}
                  </motion.a>

                  {/* Optional asset download if provided */}
                  {card.assetUrl && card.assetUrl.trim() !== "" && (
                    <motion.a
                      href={card.assetUrl}
                      download
                      className="buttonOneDesign ms-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      Download
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            </Col>
          ))}
        </Row>

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

export default CardComponent;
