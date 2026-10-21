import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import experienceFallback from "./data/Experience.json";

function Experiance() {
  const { toggle } = useContext(MyContext);

  // API state & Local Backend URL
  const [res, setRes] = useState(null);
  const API_BASE = "http://localhost:5000";

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        const r = await fetch(`${API_BASE}/api/experiences`, {
          signal: ac.signal,
        });
        const json = await r.json();
        setRes(json);
      } catch (e) {
        if (e.name !== "AbortError")
          console.warn("Experience: using fallback", e);
      }
    })();
    return () => ac.abort();
  }, [API_BASE]);

  // Normalize and map database schema fields
  const apiList = Array.isArray(res)
    ? res
    : Array.isArray(res?.data)
    ? res.data
    : null;

  const rawList = apiList ?? experienceFallback.jobs;

  const jobs = rawList.map((job) => ({
    company: job.company || "Company Name",
    location: job.location || "Location",
    logo: job.logo || "/cap (2).png",
    dateRange: job.dateRange || "Present",
    role: job.role || "Developer",
    highlights: job.highlights || [],
  }));

  return (
    <Container>
      <div>
        <div className="experience-text-design mb-5">
          {experienceFallback.title || "Experience"}
        </div>

        {jobs.map((job, index) => {
          const cardClass = toggle
            ? index === 1
              ? "bgLightTextBlack-second-container"
              : "bgLightTextBlack"
            : index === 1
            ? "bgLightTextBlack-second-container"
            : "bgLightTextBlack-dark";

          return (
            <div key={job._id || index} className={cardClass}>
              <Row className="dispaly-flex-direction-column">
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <div className="display-left-alignment backgroundBlack">
                    <div className="colorSize">{job.company}</div>
                    <div className="Size">
                      <img
                        src={experienceFallback.icons?.location || "/Vector.png"}
                        alt="location"
                        style={{ width: "10px" }}
                      />{" "}
                      {job.location}
                    </div>
                  </div>
                  <div className="imageAbsolute">
                    <img
                      src={job.logo}
                      alt="company-logo"
                      style={{ width: "60px" }}
                    />
                  </div>
                </Col>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  xl={6}
                  xxl={6}
                  className="position-absolute-simple"
                >
                  <div className="alignEnd">
                    <button
                      className={
                        index === 1
                          ? "clandarButton-second-container"
                          : "clandarButton"
                      }
                    >
                      <img
                        src={experienceFallback.icons?.calendar || "/Frame (1).png"}
                        alt="calendar"
                        style={{ width: "20px" }}
                      />{" "}
                      {job.dateRange}
                    </button>
                  </div>
                </Col>
              </Row>

              <div className="dflexTextImage">
                <div>
                  <img src="/boy.png" alt="role-icon" style={{ width: "40px" }} />
                </div>
                <div className="fw-bold">{job.role}</div>
              </div>

              {/* Render Highlights Dynamically */}
              {(job.highlights || []).map((highlight, idx) => {
                const text = typeof highlight === "string" ? highlight : highlight?.text;
                return (
                  <div className="dflexTextImage" key={idx}>
                    <div>
                      <img
                        src="/Livello_2.png"
                        alt="bullet"
                        style={{ width: "13px" }}
                      />
                    </div>
                    <div>{text}</div>
                  </div>
                );
              })}
            </div>
          );
        })}

        <hr className="horizontaline" />
      </div>
    </Container>
  );
}

export default Experiance;