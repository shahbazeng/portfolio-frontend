import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import projectData from "./data/Project.json";

function Project() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const titleLines = (projectData?.title || "Projects").split("\n");

  // Safe API Base URL with Fallback
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  // Animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  const projectVariants = (index) => {
    const directions = [
      { x: -100, y: 0 },
      { x: 100, y: 0 },
      { x: 0, y: -50 },
      { x: 0, y: 50 },
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

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/projects`, {
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        setProjects(Array.isArray(json) ? json : json.data || []);
      } catch (e) {
        setErr(e.message || "Failed to load projects");
        // Fallback to local json data if API fails
        setProjects(projectData.projects || []);
      } finally {
        setLoading(false);
      }
    })();
  }, [API_BASE]);

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
          {titleLines.map((t, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 }}
            >
              {t}
              {i < titleLines.length - 1 ? <br /> : null}
            </motion.span>
          ))}
        </motion.div>

        {/* Loading / Error */}
        {loading && (
          <motion.div variants={itemVariants} className="small-font-size">
            Loading projects…
          </motion.div>
        )}

        {/* Projects from API or Fallback */}
        {!loading &&
          projects.map((p, idx) => (
            <motion.div
              key={p._id || p.name || idx}
              variants={projectVariants(idx)}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Row className={`mt-5 mb-3 ${p.rowClass || ""}`}>
                <Col xs={12} sm={12} md={6} lg={5} xl={5} xxl={5}>
                  <motion.div
                    className={p.leftBoxClass || ""}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      width: "100%",
                      minHeight: 260,
                      backgroundImage: p.image ? `url(${p.image})` : undefined,
                      backgroundSize:
                        p.imageFit === "contain" ? "contain" : "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      borderRadius: 16,
                    }}
                  />
                </Col>

                <Col xs={12} sm={12} md={6} lg={7} xl={7} xxl={7}>
                  <motion.div
                    className="div-font-size"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.2 }}
                  >
                    {p.name}
                  </motion.div>

                  <motion.div
                    className="small-font-size"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3 }}
                  >
                    Worked on
                  </motion.div>

                  <motion.div
                    className="twobuttonflex"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                  >
                    {(p.workedOn || []).map((w) => (
                      <motion.button
                        key={w}
                        className="buttonOne"
                        whileHover={{ scale: 1.05 }}
                      >
                        {w}
                      </motion.button>
                    ))}
                  </motion.div>

                  <motion.div
                    className="fz-manage"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                  >
                    Technologies I have used
                  </motion.div>

                  <motion.div
                    className="flex-design-in-button"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.6 }}
                  >
                    {(p.tech || []).map((t) => (
                      <motion.button
                        key={t.label}
                        className="buttonTwoxdandfig"
                        whileHover={{ scale: 1.1 }}
                      >
                        {t.icon && (
                          <img
                            src={t.icon}
                            alt={`${t.label}-icon`}
                            style={{ width: "20px", marginRight: 6 }}
                          />
                        )}
                        {t.label}
                      </motion.button>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.7 }}
                    className="relative"
                  >
                    <motion.button
                      className="buttonTwoxdandfig-One"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => {
                        const url = p.action?.href || "#";
                        if (url && url !== "#")
                          window.open(url, "_blank", "noopener,noreferrer");
                      }}
                    >
                      {p.action?.icon && (
                        <img
                          src={p.action.icon}
                          alt="action-icon"
                          style={{ width: 20, marginRight: 6 }}
                        />
                      )}
                      {p.action?.label || "Visit"}
                    </motion.button>

                    {p.badge?.icon && (
                      <motion.div
                        className="letter-image-pos-absolu"
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.8 }}
                      >
                        <img
                          src={p.badge.icon}
                          style={{ width: "30px" }}
                          alt="badge"
                        />
                      </motion.div>
                    )}
                  </motion.div>
                </Col>
              </Row>
            </motion.div>
          ))}

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

export default Project;