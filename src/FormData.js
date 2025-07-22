import React, { useContext, useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import axios from "axios";

function FormData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);

  const { toggle } = useContext(MyContext);

  const submitHandler = async () => {
    if (!name || !email || !mobile || !subject || !message) {
      setErr(true);
    }

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
      }
    } catch (error) {
      console.log("data sumitted rejected", error);
    }
  };

  // const submitHandler = async () => {
  //     try {
  //       // Await the axios response
  //       const response = await axios.post("http://localhost:5000/signup", {
  //         name,
  //         email,
  //         mobile,
  //         subject,
  //         message,
  //       });

  //       // Check for success status
  //       if (response.status === 200) {
  //         console.log(response.data, "Data submitted successfully");
  //       }
  //     } catch (error) {
  //       // Log meaningful error details
  //       if (error.response) {
  //         console.log("Submission failed:", error.response.data); // Backend error
  //       } else if (error.request) {
  //         console.log("No response received from server:", error.request); // Network error
  //       } else {
  //         console.log("Unexpected error occurred:", error.message); // Other errors
  //       }
  //     }
  //   };

  return toggle ? (
    <>
      <Container>
        <div className="mt-5">
          <div className="background-light-borderRadius-padding">
            <h1 className="text-center fw-bold">Connect Me</h1>
            <Row className="mt-3 mb-3">
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
                {err && !name && (
                  <div className="text-danger">Name is require</div>
                )}
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                {err && !email && (
                  <div className="text-danger">Email is require</div>
                )}
              </Col>
            </Row>

            <Row className="mt-2 mb-3">
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </Form.Group>
                {err && !mobile && (
                  <div className="text-danger">Mobile is require</div>
                )}
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="mt-3 mb-3 image-inputField-flex">
                  <Form.Control
                    type="text"
                    placeholder="Subject*"
                    className="BorderNone-one"
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </Form.Group>
                {err && !subject && (
                  <div className="text-danger">Subject is require</div>
                )}
              </Col>
            </Row>
            <Row>
              <Form.Group className="mt-3 mb-3 image-inputField-flex">
                <textarea
                  placeholder="Message*"
                  className="BorderNone-one height-width-setup"
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </Form.Group>
              {err && !message && (
                <div className="text-danger">Message is require</div>
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
            {/* <div className="posabsolute">
              <img
                src="/developer 1.png"
                alt="banner-image"
                className="developer-image"
              />
            </div> */}
          </div>
          <hr className="horizontaline-one" />
        </div>
      </Container>
    </>
  ) : (
    <>
      <Container>
        <div className="mt-5">
          <div className="background-light-borderRadius-padding-dark">
            <h1 className="text-center fw-bold">Connect Me</h1>
            <Row className="mt-3 mb-3">
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mt-2 mb-3">
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
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
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
                <Form.Group className="mt-3 mb-3 image-inputField-flex">
                  <Form.Control
                    type="text"
                    placeholder="Subject*"
                    className="BorderNone-one"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Form.Group className="mt-3 mb-3 image-inputField-flex">
                <textarea
                  placeholder="Message*"
                  className="BorderNone-one height-width-setup"
                ></textarea>
              </Form.Group>
              <div>
                <button className="imageAndtextButton-one">
                  Send{" "}
                  <img
                    src="/Livello_2 (1).png"
                    alt="livello"
                    className="inner-image-button-one"
                  />
                </button>
              </div>
            </Row>
            {/* <div className="posabsolute">
        <img src="/developer 1.png" alt="banner-image" className="developer-image"/>
        </div> */}
          </div>
          <hr className="horizontaline-one" />
        </div>
      </Container>
    </>
  );
}
export default FormData;
