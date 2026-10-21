import React, { useContext, useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import { FaRegEye } from "react-icons/fa";
import certificateFallback from "./data/Certificate.json";

function Certificate() {
  const { toggle } = useContext(MyContext);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  // ---------- API state & Local Backend URL ----------
  const [certs, setCerts] = useState([]);
  const API_BASE = "http://localhost:5000";

  useEffect(() => {
    const ac = new AbortController();

    (async () => {
      try {
        const url = `${API_BASE}/api/certificates?t=${Date.now()}`;
        const res = await fetch(url, {
          signal: ac.signal,
          cache: "no-store",
        });
        const json = await res.json();

        if (Array.isArray(json)) {
          setCerts(json);
        } else if (Array.isArray(json?.data)) {
          setCerts(json.data);
        } else {
          setCerts(certificateFallback.certificates);
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          console.warn("Certificates: using fallback.", e);
        }
        setCerts(certificateFallback.certificates);
      }
    })();

    return () => ac.abort();
  }, [API_BASE]);

  // Animation variants
  const cardVariants = (index) => {
    const dirs = [
      { x: -100, y: 0 },
      { x: 100, y: 0 },
      { x: 0, y: -50 },
      { x: 0, y: 50 },
    ];
    const dir = dirs[index % dirs.length];
    return {
      hidden: { ...dir, opacity: 0 },
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

  const getContainerClass = (base) => {
    if (!base) return toggle ? "parent-div-in-cards" : "parent-div-in-cards-dark";
    return toggle ? base : base.includes("container-second") ? base : `${base}-dark`;
  };

  // Use API list if available, otherwise fallback
  const list = certs.length > 0 ? certs : certificateFallback.certificates;
  const browserIcon = certificateFallback.browserIcon || "/browser 1.png";

  // 2 cards per row
  const rows = list.reduce((acc, item, i) => {
    if (i % 2 === 0) acc.push([item]);
    else acc[acc.length - 1].push(item);
    return acc;
  }, []);

  return (
    <Container ref={ref}>
      <div>
        <motion.div
          className="experience-text-design mb-5"
          initial={{ y: -50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {certificateFallback.title || "Certificate"}
        </motion.div>

        {rows.map((pair, rowIdx) => (
          <Row className="mt-3 container-space-yaxis" key={`row-${rowIdx}`}>
            {pair.map((cert, idx) => {
              const globalIndex = rowIdx * 2 + idx;
              return (
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                  xxl={6}
                  key={cert._id || cert.title || globalIndex}
                >
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
                          className={cert.buttonClass || "buttonTypediv"}
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
                            alt={`${cert.provider || "provider"} logo`}
                            style={{ width: "40px" }}
                          />
                        </motion.div>
                      </div>
                      <div>
                        <motion.img
                          src={cert.browserIcon || browserIcon}
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
                        className={cert.viewBtnClass || "btn-design"}
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