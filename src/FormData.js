import React, { useContext, useState, useEffect, useRef } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from "axios";

function FormData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const { toggle } = useContext(MyContext);

  // Safe API Base URL with Fallback to prevent /undefined/ error
  const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

  useEffect(() => {
    const currentRef = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
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

  const handleEmailChange = (value) => {
    setEmail(value);
    if (value && !value.includes("@")) {
      setEmailError("Please enter a valid email with '@'");
    } else {
      setEmailError("");
    }
  };

  const handleMobileChange = (value) => {
    setMobile(value);
    if (value && !/^\d+$/.test(value)) {
      setMobileError("Mobile number must contain only digits");
    } else {
      setMobileError("");
    }
  };

  const validateFields = () => {
    let valid = true;
    setErr(false);

    if (!name || !email || !mobile || !subject || !message) {
      setErr(true);
      valid = false;
    }

    if (email && !email.includes("@")) {
      setEmailError("Please enter a valid email with '@'");
      valid = false;
    }

    if (mobile && !/^\d+$/.test(mobile)) {
      setMobileError("Mobile number must contain only digits");
      valid = false;
    }

    return valid;
  };

  const submitHandler = async () => {
    if (!validateFields()) return;

    try {
      const response = await axios.post(
        `${API_BASE}/api/forms`,
        {
          name,
          email,
          mobile,
          subject,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        console.log(response.data, "data submitted successfully");
        setName("");
        setEmail("");
        setMobile("");
        setSubject("");
        setMessage("");
        setErr(false);
      }
    } catch (error) {
      console.log("data submitted rejected", error);
    }
  };

  const formContent = (
    <>
      <Row
        className="mt-3 mb-3"
        style={{
          animation: isVisible ? "fadeInUp 0.6s ease-out forwards" : "none",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Col xs={12} sm={6}>
          <Form.Group className="mt-3 mb-3 image-inputField-flex">
            <div className="backgroundColorDifferent">
              <img
                src="/Frame (4).png"
                alt="user-profile"
                style={{ width: "20px" }}
              />
            </div>
            <Form.Control
              type="text"
              placeholder="Full Name*"
              className="BorderNone"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          {err && !name && <div className="text-danger">Name is required</div>}
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group className="mt-3 mb-3 image-inputField-flex">
            <div className="backgroundColorDifferent">
              <img
                src="/Frame (5).png"
                alt="user-profile"
                style={{ width: "20px" }}
              />
            </div>
            <Form.Control
              type="text"
              placeholder="Email*"
              className="BorderNone"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </Form.Group>
          {err && !email && (
            <div className="text-danger">Email is required</div>
          )}
          {emailError && <div className="text-danger">{emailError}</div>}
        </Col>
      </Row>

      <Row
        className="mt-2 mb-3"
        style={{
          animation: isVisible
            ? "fadeInUp 0.6s ease-out 0.2s forwards"
            : "none",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Col xs={12} sm={6}>
          <Form.Group className="mt-3 mb-3 image-inputField-flex">
            <div className="backgroundColorDifferent">
              <img
                src="/Frame (6).png"
                alt="user-profile"
                style={{ width: "20px" }}
              />
            </div>
            <Form.Control
              type="text"
              placeholder="Mobile No."
              className="BorderNone"
              value={mobile}
              onChange={(e) => handleMobileChange(e.target.value)}
            />
          </Form.Group>
          {err && !mobile && (
            <div className="text-danger">Mobile is required</div>
          )}
          {mobileError && <div className="text-danger">{mobileError}</div>}
        </Col>

        <Col xs={12} sm={6}>
          <Form.Group className="mt-3 mb-3 image-inputField-flex">
            <Form.Control
              type="text"
              placeholder="Subject*"
              className="BorderNone-one"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </Form.Group>
          {err && !subject && (
            <div className="text-danger">Subject is required</div>
          )}
        </Col>
      </Row>

      <Row
        style={{
          animation: isVisible
            ? "fadeInUp 0.6s ease-out 0.4s forwards"
            : "none",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Form.Group className="mt-3 mb-3 image-inputField-flex">
          <textarea
            placeholder="Message*"
            className="BorderNone-one height-width-setup"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </Form.Group>
        {err && !message && (
          <div className="text-danger">Message is required</div>
        )}

        <div
          style={{
            animation: isVisible
              ? "fadeIn 0.6s ease-out 0.6s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <button
            type="button"
            className="imageAndtextButton-one"
            onClick={submitHandler}
          >
            Send{" "}
            <img
              src="/Livello_2 (1).png"
              alt="livello"
              className="inner-image-button-one"
            />
          </button>
        </div>
      </Row>
    </>
  );

  return (
    <Container ref={containerRef}>
      <div className="mt-5">
        <div
          className={
            toggle
              ? "background-light-borderRadius-padding"
              : "background-light-borderRadius-padding-dark"
          }
          style={{
            animation: isVisible ? "fadeIn 0.6s ease-out forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <h1
            className="text-center fw-bold"
            style={{
              animation: isVisible
                ? "fadeInDown 0.6s ease-out forwards"
                : "none",
              opacity: isVisible ? 1 : 0,
            }}
          >
            Connect Me
          </h1>
          {formContent}
        </div>
        <hr
          className="horizontaline-one"
          style={{
            animation: isVisible
              ? "scaleXIn 0.6s ease-out 0.8s forwards"
              : "none",
            opacity: isVisible ? 1: 0,
            transformOrigin: "center",
          }}
        />
      </div>
    </Container>
  );
}

export default FormData;