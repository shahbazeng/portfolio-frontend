import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import { Container } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import fallbackSkill from "./data/Skill.json";

function Skill() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // ✅ API state & Backend URL
  const [skill, setSkill] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_BASE = "http://localhost:5000";

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/skills`, {
          signal: ac.signal,
          headers: { Accept: "application/json" },
        });
        const json = await res.json();
        setSkill(Array.isArray(json) ? json[0] : json);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.warn("Skills: using fallback", e);
        }
        setSkill(null);
      } finally {
        setLoading(false);
      }
    })();
    return () => ac.abort();
  }, [API_BASE]);

  // Unified source (API → fallback JSON)
  const ui = skill || fallbackSkill;

  // ---- slider state ----
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

        {/* Loading */}
        {loading && (
          <motion.div className="small-font-size mb-3" variants={itemVariants}>
            Loading skills...
          </motion.div>
        )}

        {/* Design Tools */}
        <motion.div
          className="experience-text-design mb-5"
          variants={itemVariants}
        >
          {ui?.design?.title || "Design Tool I Use"}
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
          {ui?.tech?.title || "Technologies I Use"}
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
            {ui?.devProd?.titleLine1 || "DEVELOPMENT & PRODUCTIVITY"}
            <br />
            {ui?.devProd?.titleLine2 || "TOOLS I USE"}
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