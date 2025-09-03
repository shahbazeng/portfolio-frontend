import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import statsData from "./data/statsData.json"; // 👈 json file import
import { Container } from "react-bootstrap";

/**
 * Counter Component
 */
function Counter({ to, label, suffix, prefix, duration }) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            start();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();

    function start() {
      const startTime = performance.now();
      const from = 0;
      const toVal = Number(to) || 0;

      const easeOutQuad = (t) => 1 - (1 - t) * (1 - t);

      function tick(now) {
        const elapsed = now - startTime;
        const t = Math.min(1, elapsed / duration);
        const eased = easeOutQuad(t);
        const current = Math.round(from + (toVal - from) * eased);
        setValue(current);
        if (t < 1) requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    }
  }, [to, duration]);

  return (
    <div ref={ref} className="text-center p-3">
      <div className="display-5 fw-bold" style={{ color: "#feb20f" }}>
        {prefix}
        {value}
        {suffix}
      </div>
      {label && <div className="mt-2 text-secondary fw-semibold">{label}</div>}
    </div>
  );
}

/**
 * Stats Section
 */
export default function StatsSection() {
  // 👉 horizontal line ke liye alag ref & inView
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });

  return (
    <>
      <section className="py-5 bg-dark text-white">
        <div className="container">
          {/* Heading from JSON */}
          <div className="text-center mb-4">
            <h2 className="fw-bold mb-1">{statsData.heading.title}</h2>
            <p className="text-secondary mb-0">{statsData.heading.subtitle}</p>
          </div>

          {/* Stats from JSON */}
          <div className="row row-cols-2 row-cols-md-4 g-3 g-md-4">
            {statsData.stats.map((stat, index) => (
              <div className="col" key={index}>
                <div className="border rounded-4 h-100 d-flex align-items-center justify-content-center p-3 bg-black bg-opacity-25">
                  <Counter {...stat} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal line animation (apna ref use kar raha hai) */}
      </section>
      <Container>
        <motion.hr
          ref={lineRef}
          className="horizontaline"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        />
      </Container>
    </>
  );
}
