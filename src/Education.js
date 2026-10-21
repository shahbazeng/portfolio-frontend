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

  // ------------ API state & Local Backend URL ------------
  const [res, setRes] = useState(null);
  const API_BASE = "http://localhost:5000";

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

  // Normalize and map database schema fields to frontend UI properties
  const apiList = Array.isArray(res)
    ? res
    : Array.isArray(res?.data)
    ? res.data
    : null;

  const rawList = apiList ?? educationFallback.items;

  const list = rawList
    .map((item) => ({
      years: item.years || item.year || "2017-2020",
      stage: item.stage || "Graduation",
      degree: item.degree || "Bachelor's Degree",
      short: item.short || "BCA",
      program: item.program || item.degree || "Bachelor of Computer Applications",
      university: item.university || item.institution || "University",
      location: item.location || "Surat, Gujarat, India",
    }))
    .slice(0, 2);

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
          {educationFallback.title || "Education"}
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