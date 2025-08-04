import React, { useContext, useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

function BannerCode() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [open_close, setOpen_Close] = useState(false);

  const { toggle } = useContext(MyContext);

  // 🔹 Real-time email validation
  const handleEmailChange = (value) => {
    setEmail(value);
    if (value && !value.includes("@")) {
      setEmailError("Please enter a valid email with '@'");
    } else {
      setEmailError("");
    }
  };

  // 🔹 Real-time mobile validation
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
      const response = await axios.post("http://localhost:5000/signup", {
        name,
        email,
        mobile,
        subject,
        message,
      });

      if (response.status === 200) {
        console.log(response.data, "data submitted successfully");
        // Reset form
        setName("");
        setEmail("");
        setMobile("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      console.log("data submitted rejected", error);
    }
  };

  const hireSetup = () => {
    setOpen_Close(true);
  };
  const togglecloseIcon = () => {
    setOpen_Close(false);
  };

  return toggle ? (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Container>
          <div className="textLight">
            Hello! I'm <span className="change-color">Shahbaz Ali</span>
          </div>
          <div className="fontweight">A Front End Developer | Web Designer</div>
          <div className="textbtncenter">
            with
            <button>3.9 + year</button>
            Experiance
          </div>
          <div className="textCenterWithButton">
            <a
              href="./canvashabir1.pdf"
              download
              className="btn-one"
              style={{ textDecoration: "none" }}
            >
              <MdOutlineFileDownload className="svgIcon" /> Resume
            </a>
            <button className="btn-two" onClick={() => hireSetup()}>
              Hire Me
            </button>
          </div>
          <div className="posrel">
            <div className="positionZindex">
              <img
                src="/banner_img.png"
                alt="banner-img"
                className="img-fluid manage-Img"
              />
            </div>

            <div className="backgroundColor"></div>
            <div className="nextjsButton">
              <button className="fontSize">
                <img src="/download (4) 1.png" className="images" /> NextJS
              </button>
            </div>
            <div className="nextjsButtonTwo">
              <button className="fontSize">
                <img src="/react 1.png" className="images" /> ReactJs
              </button>
            </div>
            <div className="nextjsButtonThree">
              <button className="fontSize">
                <img src="/download (3) 1.png" className="images" /> GraphQl
              </button>
            </div>
            <div className="nextjsButtonFour">
              <button className="fontSize">
                <img src="/download (2) 1.png" className="images" /> Tailwind
                CSS
              </button>
            </div>
            <div className="nextjsButtonFive">
              <button className="fontSize">
                <img src="/js 3.png" className="images" /> JavaScript
              </button>
            </div>
            <div className="nextjsButtonSix">
              <button className="fontSize">
                <img src="/figma 1.png" className="images" /> Figma
              </button>
            </div>
          </div>
        </Container>
        {open_close ? (
          <div className="overlay-section">
            <div className="form-popup">
              <RxCross2
                className="popup-module-close"
                onClick={togglecloseIcon}
              />
              <Container className="bg-white p-5">
                <Row className="mt-3 mb-3">
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
                    {err && !name && (
                      <div className="text-danger">Name is required</div>
                    )}
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
                    {emailError && (
                      <div className="text-danger">{emailError}</div>
                    )}
                  </Col>
                </Row>

                <Row className="mt-2 mb-3">
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
                    {mobileError && (
                      <div className="text-danger">{mobileError}</div>
                    )}
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

                <Row>
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

                  <div>
                    <button
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
              </Container>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  ) : (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Container>
          <div className="textLight-dark">
            Hello! I'm <span className="change-color">Shahbaz Ali</span>
          </div>
          <div className="fontweight-dark">
            A Front End Developer | Web Designer
          </div>
          <div className="textbtncenter-dark">
            with
            <button>3.9 + year</button>
            Experiance
          </div>
          <div className="textCenterWithButton">
            <a
              href="./canvashabir1.pdf"
              download
              className="btn-one"
              style={{ textDecoration: "none" }}
            >
              <MdOutlineFileDownload className="svgIcon" /> Resume
            </a>
            <button className="btn-two" onClick={() => hireSetup()}>
              Hire Me
            </button>
          </div>
          <div className="posrel">
            <div className="positionZindex">
              <img
                src="/banner_img.png"
                alt="banner-img"
                style={{ width: "850px", height: "auto" }}
                className="img-fluid"
              />
            </div>

            <div className="backgroundColor"></div>
            <div className="nextjsButton">
              <button className="fontSize-dark">
                <img src="/download (4) 1.png" className="images" /> NextJS
              </button>
            </div>
            <div className="nextjsButtonTwo">
              <button className="fontSize-dark">
                <img src="/react 1.png" className="images" /> ReactJs
              </button>
            </div>
            <div className="nextjsButtonThree">
              <button className="fontSize-dark">
                <img src="/download (3) 1.png" className="images" /> GraphQl
              </button>
            </div>
            <div className="nextjsButtonFour">
              <button className="fontSize-dark">
                <img src="/download (2) 1.png" className="images" /> Tailwind
                CSS
              </button>
            </div>
            <div className="nextjsButtonFive">
              <button className="fontSize-dark">
                <img src="/js 3.png" className="images" /> JavaScript
              </button>
            </div>
            <div className="nextjsButtonSix">
              <button className="fontSize-dark">
                <img src="/figma 1.png" className="images" /> Figma
              </button>
            </div>
          </div>
        </Container>
        {open_close ? (
          <div className="overlay-section">
            <div className="form-popup">
              <RxCross2
                className="popup-module-close"
                onClick={togglecloseIcon}
              />
              <Container className="bg-white p-5">
                <Row className="mt-3 mb-3">
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
                    {err && !name && (
                      <div className="text-danger">Name is required</div>
                    )}
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
                    {emailError && (
                      <div className="text-danger">{emailError}</div>
                    )}
                  </Col>
                </Row>

                <Row className="mt-2 mb-3">
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
                    {mobileError && (
                      <div className="text-danger">{mobileError}</div>
                    )}
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

                <Row>
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

                  <div>
                    <button
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
              </Container>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default BannerCode;
