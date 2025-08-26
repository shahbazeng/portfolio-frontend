// import React, { useContext, useState } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Card, Form } from "react-bootstrap";
// import axios from "axios";

// function FormData() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [err, setErr] = useState(false);

//   const { toggle } = useContext(MyContext);

//   const submitHandler = async () => {
//     if (!name || !email || !mobile || !subject || !message) {
//       setErr(true);
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/signup", {
//         name,
//         email,
//         mobile,
//         subject,
//         message,
//       });

//       if (response.status === 200) {
//         console.log(response.data, "data submitted successfully");
//       }
//     } catch (error) {
//       console.log("data sumitted rejected", error);
//     }
//   };

//   // const submitHandler = async () => {
//   //     try {
//   //       // Await the axios response
//   //       const response = await axios.post("http://localhost:5000/signup", {
//   //         name,
//   //         email,
//   //         mobile,
//   //         subject,
//   //         message,
//   //       });

//   //       // Check for success status
//   //       if (response.status === 200) {
//   //         console.log(response.data, "Data submitted successfully");
//   //       }
//   //     } catch (error) {
//   //       // Log meaningful error details
//   //       if (error.response) {
//   //         console.log("Submission failed:", error.response.data); // Backend error
//   //       } else if (error.request) {
//   //         console.log("No response received from server:", error.request); // Network error
//   //       } else {
//   //         console.log("Unexpected error occurred:", error.message); // Other errors
//   //       }
//   //     }
//   //   };

//   return toggle ? (
//     <>
//       <Container>
//         <div className="mt-5">
//           <div className="background-light-borderRadius-padding">
//             <h1 className="text-center fw-bold">Connect Me</h1>
//             <Row className="mt-3 mb-3">
//               <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
//                 <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                   <div className="backgroundColorDifferent">
//                     <img
//                       src="/Frame (4).png"
//                       alt="user-profile"
//                       style={{ width: "20px" }}
//                     />
//                   </div>

//                   <Form.Control
//                     type="text"
//                     placeholder="Full Name*"
//                     className="BorderNone"
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </Form.Group>
//                 {err && !name && (
//                   <div className="text-danger">Name is require</div>
//                 )}
//               </Col>
//               <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
//                 <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                   <div className="backgroundColorDifferent">
//                     <img
//                       src="/Frame (5).png"
//                       alt="user-profile"
//                       style={{ width: "20px" }}
//                     />
//                   </div>

//                   <Form.Control
//                     type="text"
//                     placeholder="Email*"
//                     className="BorderNone"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </Form.Group>
//                 {err && !email && (
//                   <div className="text-danger">Email is require</div>
//                 )}
//               </Col>
//             </Row>

//             <Row className="mt-2 mb-3">
//               <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
//                 <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                   <div className="backgroundColorDifferent">
//                     <img
//                       src="/Frame (6).png"
//                       alt="user-profile"
//                       style={{ width: "20px" }}
//                     />
//                   </div>

//                   <Form.Control
//                     type="text"
//                     placeholder="Mobile No."
//                     className="BorderNone"
//                     onChange={(e) => setMobile(e.target.value)}
//                   />
//                 </Form.Group>
//                 {err && !mobile && (
//                   <div className="text-danger">Mobile is require</div>
//                 )}
//               </Col>
//               <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
//                 <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                   <Form.Control
//                     type="text"
//                     placeholder="Subject*"
//                     className="BorderNone-one"
//                     onChange={(e) => setSubject(e.target.value)}
//                   />
//                 </Form.Group>
//                 {err && !subject && (
//                   <div className="text-danger">Subject is require</div>
//                 )}
//               </Col>
//             </Row>
//             <Row>
//               <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                 <textarea
//                   placeholder="Message*"
//                   className="BorderNone-one height-width-setup"
//                   onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>
//               </Form.Group>
//               {err && !message && (
//                 <div className="text-danger">Message is require</div>
//               )}
//               <div>
//                 <button
//                   className="imageAndtextButton-one"
//                   onClick={submitHandler}
//                 >
//                   Send{" "}
//                   <img
//                     src="/Livello_2 (1).png"
//                     alt="livello"
//                     className="inner-image-button-one"
//                   />
//                 </button>
//               </div>
//             </Row>
//             {/* <div className="posabsolute">
//               <img
//                 src="/developer 1.png"
//                 alt="banner-image"
//                 className="developer-image"
//               />
//             </div> */}
//           </div>
//           <hr className="horizontaline-one" />
//         </div>
//       </Container>
//     </>
//   ) : (
//     <>
//       <Container>
//         <div className="mt-5">
//           <div className="background-light-borderRadius-padding-dark">
//             <h1 className="text-center fw-bold">Connect Me</h1>
//             <Row className="mt-3 mb-3">
//               <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
//                 <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                   <div className="backgroundColorDifferent">
//                     <img
//                       src="/Frame (4).png"
//                       alt="user-profile"
//                       style={{ width: "20px" }}
//                     />
//                   </div>

//                   <Form.Control
//                     type="text"
//                     placeholder="Full Name*"
//                     className="BorderNone"
//                     onChange={(e) => setName(e.target.value)}
//                   />
//                 </Form.Group>
//                 {err && !name && (
//                   <div className="text-danger">Name is require</div>
//                 )}
//               </Col>
//               <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
//                 <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                   <div className="backgroundColorDifferent">
//                     <img
//                       src="/Frame (5).png"
//                       alt="user-profile"
//                       style={{ width: "20px" }}
//                     />
//                   </div>

//                   <Form.Control
//                     type="text"
//                     placeholder="Email*"
//                     className="BorderNone"
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </Form.Group>
//                 {err && !email && (
//                   <div className="text-danger">Email is require</div>
//                 )}
//               </Col>
//             </Row>

//             <Row className="mt-2 mb-3">
//               <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
//                 <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                   <div className="backgroundColorDifferent">
//                     <img
//                       src="/Frame (6).png"
//                       alt="user-profile"
//                       style={{ width: "20px" }}
//                     />
//                   </div>

//                   <Form.Control
//                     type="text"
//                     placeholder="Mobile No."
//                     className="BorderNone"
//                     onChange={(e) => setMobile(e.target.value)}
//                   />
//                 </Form.Group>
//                 {err && !mobile && (
//                   <div className="text-danger">Mobile is require</div>
//                 )}
//               </Col>
//               <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
//                 <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                   <Form.Control
//                     type="text"
//                     placeholder="Subject*"
//                     className="BorderNone-one"
//                     onChange={(e) => setSubject(e.target.value)}
//                   />
//                 </Form.Group>
//                 {err && !subject && (
//                   <div className="text-danger">Subject is require</div>
//                 )}
//               </Col>
//             </Row>
//             <Row>
//               <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                 <textarea
//                   placeholder="Message*"
//                   className="BorderNone-one height-width-setup"
//                   onChange={(e) => setMessage(e.target.value)}
//                 ></textarea>
//               </Form.Group>
//               {err && !message && (
//                 <div className="text-danger">Message is require</div>
//               )}
//               <div>
//                 <button
//                   className="imageAndtextButton-one"
//                   onClick={submitHandler}
//                 >
//                   Send{" "}
//                   <img
//                     src="/Livello_2 (1).png"
//                     alt="livello"
//                     className="inner-image-button-one"
//                   />
//                 </button>
//               </div>
//             </Row>
//             {/* <div className="posabsolute">
//         <img src="/developer 1.png" alt="banner-image" className="developer-image"/>
//         </div> */}
//           </div>
//           <hr className="horizontaline-one" />
//         </div>
//       </Container>
//     </>
//   );
// }
// export default FormData;
// ------------------------------------------------------------------------
// import React, { useContext, useState } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Form } from "react-bootstrap";
// import axios from "axios";

// function FormData() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [err, setErr] = useState(false);
//   const [emailError, setEmailError] = useState("");
//   const [mobileError, setMobileError] = useState("");

//   const { toggle } = useContext(MyContext);

//   // 🔹 Real-time email validation
//   const handleEmailChange = (value) => {
//     setEmail(value);
//     if (value && !value.includes("@")) {
//       setEmailError("Please enter a valid email with '@'");
//     } else {
//       setEmailError("");
//     }
//   };

//   // 🔹 Real-time mobile validation
//   const handleMobileChange = (value) => {
//     setMobile(value);
//     if (value && !/^\d+$/.test(value)) {
//       setMobileError("Mobile number must contain only digits");
//     } else {
//       setMobileError("");
//     }
//   };

//   const validateFields = () => {
//     let valid = true;
//     setErr(false);

//     if (!name || !email || !mobile || !subject || !message) {
//       setErr(true);
//       valid = false;
//     }

//     if (email && !email.includes("@")) {
//       setEmailError("Please enter a valid email with '@'");
//       valid = false;
//     }

//     if (mobile && !/^\d+$/.test(mobile)) {
//       setMobileError("Mobile number must contain only digits");
//       valid = false;
//     }

//     return valid;
//   };

//   const submitHandler = async () => {
//     if (!validateFields()) return;

//     try {
//       const response = await axios.post("http://localhost:5000/signup", {
//         name,
//         email,
//         mobile,
//         subject,
//         message,
//       });

//       if (response.status === 200) {
//         console.log(response.data, "data submitted successfully");
//         // Reset form
//         setName("");
//         setEmail("");
//         setMobile("");
//         setSubject("");
//         setMessage("");
//       }
//     } catch (error) {
//       console.log("data submitted rejected", error);
//     }
//   };

//   const formContent = (
//     <>
//       <Row className="mt-3 mb-3">
//         <Col xs={12} sm={6}>
//           <Form.Group className="mt-3 mb-3 image-inputField-flex">
//             <div className="backgroundColorDifferent">
//               <img
//                 src="/Frame (4).png"
//                 alt="user-profile"
//                 style={{ width: "20px" }}
//               />
//             </div>
//             <Form.Control
//               type="text"
//               placeholder="Full Name*"
//               className="BorderNone"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>
//           {err && !name && <div className="text-danger">Name is required</div>}
//         </Col>

//         <Col xs={12} sm={6}>
//           <Form.Group className="mt-3 mb-3 image-inputField-flex">
//             <div className="backgroundColorDifferent">
//               <img
//                 src="/Frame (5).png"
//                 alt="user-profile"
//                 style={{ width: "20px" }}
//               />
//             </div>
//             <Form.Control
//               type="text"
//               placeholder="Email*"
//               className="BorderNone"
//               value={email}
//               onChange={(e) => handleEmailChange(e.target.value)}
//             />
//           </Form.Group>
//           {err && !email && (
//             <div className="text-danger">Email is required</div>
//           )}
//           {emailError && <div className="text-danger">{emailError}</div>}
//         </Col>
//       </Row>

//       <Row className="mt-2 mb-3">
//         <Col xs={12} sm={6}>
//           <Form.Group className="mt-3 mb-3 image-inputField-flex">
//             <div className="backgroundColorDifferent">
//               <img
//                 src="/Frame (6).png"
//                 alt="user-profile"
//                 style={{ width: "20px" }}
//               />
//             </div>
//             <Form.Control
//               type="text"
//               placeholder="Mobile No."
//               className="BorderNone"
//               value={mobile}
//               onChange={(e) => handleMobileChange(e.target.value)}
//             />
//           </Form.Group>
//           {err && !mobile && (
//             <div className="text-danger">Mobile is required</div>
//           )}
//           {mobileError && <div className="text-danger">{mobileError}</div>}
//         </Col>

//         <Col xs={12} sm={6}>
//           <Form.Group className="mt-3 mb-3 image-inputField-flex">
//             <Form.Control
//               type="text"
//               placeholder="Subject*"
//               className="BorderNone-one"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//             />
//           </Form.Group>
//           {err && !subject && (
//             <div className="text-danger">Subject is required</div>
//           )}
//         </Col>
//       </Row>

//       <Row>
//         <Form.Group className="mt-3 mb-3 image-inputField-flex">
//           <textarea
//             placeholder="Message*"
//             className="BorderNone-one height-width-setup"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           ></textarea>
//         </Form.Group>
//         {err && !message && (
//           <div className="text-danger">Message is required</div>
//         )}

//         <div>
//           <button className="imageAndtextButton-one" onClick={submitHandler}>
//             Send{" "}
//             <img
//               src="/Livello_2 (1).png"
//               alt="livello"
//               className="inner-image-button-one"
//             />
//           </button>
//         </div>
//       </Row>
//     </>
//   );

//   return (
//     <Container>
//       <div className="mt-5">
//         <div
//           className={
//             toggle
//               ? "background-light-borderRadius-padding"
//               : "background-light-borderRadius-padding-dark"
//           }
//         >
//           <h1 className="text-center fw-bold">Connect Me</h1>
//           {formContent}
//         </div>
//         <hr className="horizontaline-one" />
//       </div>
//     </Container>
//   );
// }

// export default FormData;

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

  useEffect(() => {
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

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
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
        `${process.env.REACT_APP_API_BASE}/api/forms`,
        {
          name,
          email,
          mobile,
          subject,
          message,
        }
      );
      console.log({
        data: "data submitted successfully",
        response: response.data,
      });

      if (response.status === 200) {
        console.log(response.data, "data submitted successfully");
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
          <button className="imageAndtextButton-one" onClick={submitHandler}>
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
            opacity: isVisible ? 1 : 0,
            transformOrigin: "center",
          }}
        />
      </div>
    </Container>
  );
}

export default FormData;
