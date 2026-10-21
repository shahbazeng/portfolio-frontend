import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import contactFallback from "./data/Contact.json";

function Contact() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // ---- API state with Safe Base URL Fallback ----
  const [contact, setContact] = useState(contactFallback);
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";
  const BASE = API_BASE.replace(/\/+$/, "");

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

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    const ac = new AbortController();
    (async () => {
      try {
        // Try fetching from /api/contacts
        let res = await fetch(`${BASE}/api/contacts?t=${Date.now()}`, {
          signal: ac.signal,
          cache: "no-store",
          headers: { Accept: "application/json" },
        });

        // If 404, try singular /api/contact endpoint as fallback
        if (!res.ok) {
          res = await fetch(`${BASE}/api/contact?t=${Date.now()}`, {
            signal: ac.signal,
            cache: "no-store",
            headers: { Accept: "application/json" },
          });
        }

        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        
        const json = await res.json();
        const doc = Array.isArray(json)
          ? json[0]
          : Array.isArray(json?.data)
          ? json.data[0]
          : json;

        if (doc && typeof doc === "object") {
          setContact(doc);
        }
      } catch (e) {
        if (e.name !== "AbortError") {
          console.warn("Contact: using fallback", e);
          setContact(contactFallback);
        }
      }
    })();
    return () => ac.abort();
  }, [BASE]);

  const socialButtons = contact?.socialButtons || contactFallback.socialButtons || [];
  const emailBtn = contact?.emailButton || contactFallback.emailButton || {};

  return (
    <Container>
      <div ref={containerRef}>
        {/* Title */}
        <div
          className="experience-text-design mt-5 mb-3"
          style={{
            animation: isVisible ? "fadeInDown 0.8s ease-out forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {contact?.title || contactFallback.title}
        </div>

        {/* Social Buttons */}
        <div
          className="image-middle-align-one mt-4"
          style={{
            animation: isVisible
              ? "fadeIn 0.8s ease-out 0.2s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {socialButtons.map((button, index) => (
            <button
              key={index}
              type="button"
              className="imageAndtextButton"
              style={{
                animation: isVisible
                  ? `fadeIn 0.5s ease-out ${0.3 + index * 0.1}s forwards`
                  : "none",
                opacity: isVisible ? 1 : 0,
              }}
            >
              <img
                src={button.icon}
                alt={`${button.name}-icon`}
                className="inner-image-button"
              />
              {button.name}
            </button>
          ))}
        </div>

        {/* Email Button */}
        <div
          className="image-middle-align-one"
          style={{
            animation: isVisible
              ? "fadeInUp 0.8s ease-out 0.4s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <button type="button" className="imageAndtextButton mt-2">
            <img
              src={emailBtn.icon || contactFallback.emailButton.icon}
              alt="email-icon"
              className="inner-image-button"
            />
            {emailBtn.email || contactFallback.emailButton.email}
          </button>
        </div>

        {/* Static Banner */}
        <div
          className="image-middle-align mt-3"
          style={{
            animation: isVisible
              ? "zoomIn 0.8s ease-out 0.6s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <img
            src="/developer 1.png"
            alt="banner-image"
            style={{ width: "250px" }}
          />
        </div>

        {/* Divider */}
        <hr
          className="horizontaline"
          style={{
            animation: isVisible
              ? "scaleXIn 0.8s ease-out 0.8s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
            transformOrigin: "center",
          }}
        />
      </div>
    </Container>
  );
}

export default Contact;