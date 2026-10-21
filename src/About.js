import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import aboutFallback from "./data/About.json";

function About() {
  const { toggle } = useContext(MyContext);

  // API State & Local Backend URL
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        // Agar aapki skills ya about data alag endpoint par hai
        const response = await fetch(`${API_BASE}/api/skills`, {
          signal: ac.signal,
          headers: { Accept: "application/json" },
        });
        const json = await response.json();
        
        // Agar array aati hai toh latest item uthayein
        const latestData = Array.isArray(json) && json.length ? json[json.length - 1] : json;
        setRes(latestData);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.warn("Skills fetch using fallback", e);
        }
        setRes(null);
      } finally {
        setLoading(false);
      }
    })();
    return () => ac.abort();
  }, [API_BASE]);

  // Backend response normalized format:
  // Backend response safe parsing:
  const rawAbout = Array.isArray(res) ? res[res.length - 1] : (res || aboutFallback);

  // Map fields seamlessly between MongoDB Schema and JSON Fallback
  const about = {
    sectionTitle: rawAbout?.sectionTitle || rawAbout?.title || "About Me",
    user: {
      name: rawAbout?.user?.name || rawAbout?.name || "Shahbaz Ali",
      avatar: rawAbout?.user?.avatar || rawAbout?.avatar || "/Ellipse9.png",
      description: rawAbout?.user?.description || rawAbout?.bio || "",
    },
    hobbies: rawAbout?.hobbies?.length ? rawAbout.hobbies : aboutFallback.hobbies,
    stats: rawAbout?.stats?.length ? rawAbout.stats : aboutFallback.stats,
    cta: rawAbout?.cta?.label ? rawAbout.cta : aboutFallback.cta,
  };

  const [animatedText, setAnimatedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasTyped, setHasTyped] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  // Typing effect initialization
  useEffect(() => {
    if (isInView && !hasTyped) {
      setAnimatedText("");
      setCurrentIndex(0);
      controls.start("visible");
      setHasTyped(true);
    }
  }, [isInView, controls, about?.user?.description, hasTyped]);

  // Typing effect loop
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
      <motion.div initial="hidden" animate={controls} variants={containerVariants}>
        <motion.div variants={itemVariants} className="second-conatiner">
          {about.sectionTitle}
        </motion.div>

        <motion.div className="fzImageText" variants={itemVariants}>
          {about.user.avatar ? (
            <motion.img
              src={about.user.avatar}
              style={{ width: toggle ? "80px" : "50px" }}
              alt="profile"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
          ) : null}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
          >
            {toggle ? about.user.name : "I Love"}
          </motion.span>
        </motion.div>

        <Row className="mt-5">
          <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className="fourButtonsWrapIndiv">
            {toggle ? (
              <div className="buttonsGrid">
                {(about.hobbies || []).slice(0, 4).map((item, index) => (
                  <motion.button
                    key={index}
                    className="fontSizeTwo"
                    variants={itemVariants}
                    custom={index}
                    whileHover={buttonVariants.hover}
                    whileTap={buttonVariants.tap}
                  >
                    <motion.img
                      src={item.icon || "/headphones 1.png"}
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
                  {(about.hobbies || []).slice(0, 2).map((item, idx) => (
                    <motion.button
                      key={idx}
                      className="fontSizeOne bg-light-button"
                      variants={itemVariants}
                      custom={idx}
                      whileHover={buttonVariants.hover}
                      whileTap={buttonVariants.tap}
                    >
                      <motion.img
                        src={item.icon || "/headphones 1.png"}
                        style={{ width: "30px" }}
                        whileHover={{ rotate: 15 }}
                      />
                      {item.title}
                    </motion.button>
                  ))}
                </div>
                <div className="display-flex-gap">
                  {(about.hobbies || []).slice(2, 4).map((item, idx) => (
                    <motion.button
                      key={idx}
                      className="fontSizeTwo bg-light-button"
                      variants={itemVariants}
                      custom={idx + 2}
                      whileHover={buttonVariants.hover}
                      whileTap={buttonVariants.tap}
                    >
                      <motion.img
                        src={item.icon || "/headphones 1.png"}
                        style={{ width: "30px"  }}
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
              {(about.stats || []).map((stat, idx) => (
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
                      isInView ? { height: [5, 20, 5], opacity: [0.6, 1, 0.6] } : {}
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
            {typeof about.cta === "string" ? about.cta : about.cta?.label || "Download"}
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