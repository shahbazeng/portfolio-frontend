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

  // Safe API Base URL with Fallback to prevent /undefined/ error
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  // ---------- API state ----------
  const [cardsDoc, setCardsDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/coffee`, {
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        // API returns an array with one object or direct object
        setCardsDoc(Array.isArray(json) ? json[0] : json);
      } catch (e) {
        setErr(e.message || "Failed to load cards");
        setCardsDoc(cardsFallback); // Fallback to local JSON on error
      } finally {
        setLoading(false);
      }
    })();
  }, [API_BASE]);

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