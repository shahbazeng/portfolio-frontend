// src/CheckoutResume.jsx
import React, { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import checkoutData from "./data/Checkout.json";

function CheckoutResume() {
  const { toggle } = useContext(MyContext);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ---- API state & Safe Base URL ----
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  // prefix helper for files/images served by your API host
  const withBase = (pathOrUrl) => {
    if (!pathOrUrl) return "";
    if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
    if (API_BASE && pathOrUrl.startsWith("/")) return `${API_BASE}${pathOrUrl}`;
    if (API_BASE && !pathOrUrl.startsWith("/")) return `${API_BASE}/${pathOrUrl}`;
    return pathOrUrl;
  };

  // ---- Intersection observer (animations) ----
  useEffect(() => {
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  // ---- Fetch resume from API ----
  useEffect(() => {
    let isMounted = true;
    (async () => {
      try {
        const res = await fetch(`${API_BASE}/api/resume`, {
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (isMounted && Array.isArray(json) && json.length) {
          setResumeData(json[0]);
        } else if (isMounted && json) {
          setResumeData(json);
        }
      } catch (e) {
        console.error("Error fetching resume data:", e?.message || e);
        setResumeData(checkoutData); // Fallback to local JSON on error
      } finally {
        if (isMounted) setLoading(false);
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [API_BASE]);

  // ---- Use API data if available, else fallback file ----
  const data = resumeData || checkoutData;

  // theme-aware name/tagline classes
  const name = toggle ? data?.names?.light : data?.names?.dark;
  const taglineClass = toggle
    ? data?.classes?.taglineLight
    : data?.classes?.taglineDark;

  // resolved asset URLs
  const avatarSrc = withBase(data?.avatar?.src);
  const resumeFile = withBase(data?.buttons?.resume?.file);

  return (
    <Container>
      <div ref={containerRef}>
        {/* Title */}
        <div
          className="experience-text-design mt-5 mb-5"
          style={{
            animation: isVisible
              ? "slideFromLeft 0.8s ease-out forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {data?.title || "Checkout my Resume"}
        </div>

        {/* Avatar */}
        {!!data?.avatar?.src && (
          <div
            className="image-align-center"
            style={{
              animation: isVisible
                ? "slideFromRight 0.8s ease-out 0.2s forwards"
                : "none",
              opacity: isVisible ? 1 : 0,
            }}
          >
            <img
              src={avatarSrc}
              alt={data?.avatar?.alt || "image"}
              style={{ width: `${data?.avatar?.widthPx || 72}px` }}
              className={data?.avatar?.className || ""}
            />
          </div>
        )}

        {/* Name */}
        {!!name && (
          <div
            className="textColorFont"
            style={{
              animation: isVisible
                ? "slideFromBottom 0.8s ease-out 0.4s forwards"
                : "none",
              opacity: isVisible ? 1 : 0,
            }}
          >
            {name}
          </div>
        )}

        {/* Tagline */}
        {!!data?.tagline && (
          <div
            className={`text-center ${taglineClass || ""}`}
            style={{
              fontSize: "13px",
              animation: isVisible
                ? "slideFromTop 0.8s ease-out 0.6s forwards"
                : "none",
              opacity: isVisible ? 1 : 0,
            }}
          >
            {data.tagline}
          </div>
        )}

        {/* Buttons */}
        <div
          className="textCenterWithButton"
          style={{
            animation: isVisible ? "fadeIn 1s ease-out 0.8s forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {!!data?.buttons?.resume?.label && !!resumeFile && (
            <a
              href={resumeFile}
              download
              className={data?.buttons?.resume?.className || "btn-one"}
              style={{ textDecoration: "none" }}
            >
              <MdOutlineFileDownload className="svgIcon" />{" "}
              {data.buttons.resume.label}
            </a>
          )}

          {!!data?.buttons?.discuss?.label && (
            <a
              href={data?.buttons?.discuss?.href || "#"}
              className={data?.buttons?.discuss?.className || "btn-two"}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noreferrer"
            >
              {data.buttons.discuss.label}
            </a>
          )}
        </div>

        <hr
          className="horizontaline"
          style={{
            animation: isVisible ? "scaleIn 0.8s ease-out 1s forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        />

        {loading && (
          <p className="text-center" style={{ fontSize: 12, opacity: 0.6 }}>
            Loading latest resume…
          </p>
        )}
      </div>
    </Container>
  );
}

export default CheckoutResume;