// import React, { useContext, useState } from "react";
// import ParticleField from "./ParticleField";

// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Card, Form } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import axios from "axios";
// import bannerData from "./data/Banner.json";

// function BannerCode() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [err, setErr] = useState(false);
//   const [emailError, setEmailError] = useState("");
//   const [mobileError, setMobileError] = useState("");
//   const [open_close, setOpen_Close] = useState(false);

//   const { toggle } = useContext(MyContext);
//   const classNames = ["One", "Two", "Three", "Four", "Five", "Six"];

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

//   const hireSetup = () => {
//     setOpen_Close(true);
//   };
//   const togglecloseIcon = () => {
//     setOpen_Close(false);
//   };
//   const positionClasses = [
//     "nextjsButton", // 0 => NextJS
//     "nextjsButtonTwo", // 1 => ReactJs
//     "nextjsButtonThree", // 2 => GraphQl
//     "nextjsButtonFour", // 3 => Tailwind CSS
//     "nextjsButtonFive", // 4 => JavaScript
//     "nextjsButtonSix", // 5 => Figma
//   ];

//   return toggle ? (
//     <>
//       {/* <div style={{ position: "relative", zIndex: 1 }}> */}
//       <div className="hero">
//         <ParticleField
//           dotColor="rgba(255,255,255,0.9)" // static dots color
//           lineColor="rgba(255,255,255,0.45)" // hover line color
//           density={0.001} // stars count
//           linkRadius={150}
//           fadeOutMs={600}
//         />
//         <Container>
//           {/* <div className="textLight">
//             Hello! I'm <span className="change-color">Shahbaz Ali</span>
//           </div>
//           <div className="fontweight">A Front End Developer | Web Designer</div>
//           <div className="textbtncenter">
//             with
//             <button>3.9 + year</button>
//             Experiance
//           </div>
//           <div className="textCenterWithButton">
//             <a
//               href="./canvashabir1.pdf"
//               download
//               className="btn-one"
//               style={{ textDecoration: "none" }}
//             >
//               <MdOutlineFileDownload className="svgIcon" /> Resume
//             </a>
//             <button className="btn-two" onClick={() => hireSetup()}>
//               Hire Me
//             </button>
//           </div> */}
//           <div className="textLight">
//             {bannerData.intro.greeting}{" "}
//             <span className="change-color">{bannerData.intro.name}</span>
//           </div>
//           <div className="fontweight">{bannerData.intro.title}</div>
//           <div className="textbtncenter">
//             with
//             <button>{bannerData.intro.experience}</button>
//             Experience
//           </div>

//           <div className="textCenterWithButton">
//             <a
//               href={bannerData.buttons.resume.file}
//               download
//               className="btn-one"
//               style={{ textDecoration: "none" }}
//             >
//               <MdOutlineFileDownload className="svgIcon" />{" "}
//               {bannerData.buttons.resume.label}
//             </a>
//             <button className="btn-two" onClick={() => hireSetup()}>
//               {bannerData.buttons.hire.label}
//             </button>
//           </div>

//           <div className="posrel">
//             <div className="positionZindex">
//               <img
//                 src="/portfolioImg.png"
//                 alt="banner-img"
//                 className="img-fluid manage-Img"
//               />
//             </div>

//             <div className="backgroundColor"></div>
//             {/* <div className="nextjsButton">
//               <button className="fontSize">
//                 <img src="/download (4) 1.png" className="images" /> NextJS
//               </button>
//             </div>
//             <div className="nextjsButtonTwo">
//               <button className="fontSize">
//                 <img src="/react 1.png" className="images" /> ReactJs
//               </button>
//             </div>
//             <div className="nextjsButtonThree">
//               <button className="fontSize">
//                 <img src="/download (3) 1.png" className="images" /> GraphQl
//               </button>
//             </div>
//             <div className="nextjsButtonFour">
//               <button className="fontSize">
//                 <img src="/download (2) 1.png" className="images" /> Tailwind
//                 CSS
//               </button>
//             </div>
//             <div className="nextjsButtonFive">
//               <button className="fontSize">
//                 <img src="/js 3.png" className="images" /> JavaScript
//               </button>
//             </div>
//             <div className="nextjsButtonSix">
//               <button className="fontSize">
//                 <img src="/figma 1.png" className="images" /> Figma
//               </button>
//             </div> */}
//             {bannerData.technologies.slice(0, 6).map((tech, index) => (
//               <div key={tech.name} className={positionClasses[index]}>
//                 <button className="fontSize">
//                   <img src={tech.icon} className="images" alt={tech.name} />{" "}
//                   {tech.name}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </Container>
// {open_close ? (
//   <div className="overlay-section">
//     <div className="form-popup">
//       <RxCross2
//         className="popup-module-close"
//         onClick={togglecloseIcon}
//       />
//       <Container className="bg-white p-5">
//         <Row className="mt-3 mb-3">
//           <Col xs={12} sm={6}>
//             <Form.Group className="mt-3 mb-3 image-inputField-flex">
//               <div className="backgroundColorDifferent">
//                 <img
//                   src="/Frame (4).png"
//                   alt="user-profile"
//                   style={{ width: "20px" }}
//                 />
//               </div>
//               <Form.Control
//                 type="text"
//                 placeholder="Full Name*"
//                 className="BorderNone"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>
//             {err && !name && (
//               <div className="text-danger">Name is required</div>
//             )}
//           </Col>

//           <Col xs={12} sm={6}>
//             <Form.Group className="mt-3 mb-3 image-inputField-flex">
//               <div className="backgroundColorDifferent">
//                 <img
//                   src="/Frame (5).png"
//                   alt="user-profile"
//                   style={{ width: "20px" }}
//                 />
//               </div>
//               <Form.Control
//                 type="text"
//                 placeholder="Email*"
//                 className="BorderNone"
//                 value={email}
//                 onChange={(e) => handleEmailChange(e.target.value)}
//               />
//             </Form.Group>
//             {err && !email && (
//               <div className="text-danger">Email is required</div>
//             )}
//             {emailError && (
//               <div className="text-danger">{emailError}</div>
//             )}
//           </Col>
//         </Row>

//         <Row className="mt-2 mb-3">
//           <Col xs={12} sm={6}>
//             <Form.Group className="mt-3 mb-3 image-inputField-flex">
//               <div className="backgroundColorDifferent">
//                 <img
//                   src="/Frame (6).png"
//                   alt="user-profile"
//                   style={{ width: "20px" }}
//                 />
//               </div>
//               <Form.Control
//                 type="text"
//                 placeholder="Mobile No."
//                 className="BorderNone"
//                 value={mobile}
//                 onChange={(e) => handleMobileChange(e.target.value)}
//               />
//             </Form.Group>
//             {err && !mobile && (
//               <div className="text-danger">Mobile is required</div>
//             )}
//             {mobileError && (
//               <div className="text-danger">{mobileError}</div>
//             )}
//           </Col>

//           <Col xs={12} sm={6}>
//             <Form.Group className="mt-3 mb-3 image-inputField-flex">
//               <Form.Control
//                 type="text"
//                 placeholder="Subject*"
//                 className="BorderNone-one"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//               />
//             </Form.Group>
//             {err && !subject && (
//               <div className="text-danger">Subject is required</div>
//             )}
//           </Col>
//         </Row>

//         <Row>
//           <Form.Group className="mt-3 mb-3 image-inputField-flex">
//             <textarea
//               placeholder="Message*"
//               className="BorderNone-one height-width-setup"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//           </Form.Group>
//           {err && !message && (
//             <div className="text-danger">Message is required</div>
//           )}

//           <div>
//             <button
//               className="imageAndtextButton-one"
//               onClick={submitHandler}
//             >
//               Send{" "}
//               <img
//                 src="/Livello_2 (1).png"
//                 alt="livello"
//                 className="inner-image-button-one"
//               />
//             </button>
//           </div>
//         </Row>
//       </Container>
//     </div>
//   </div>
// ) : (
//   ""
// )}
//       </div>
//     </>
//   ) : (
//     <>
//       <div style={{ position: "relative", zIndex: 1 }}>
//         {/* <Container>
//           <div className="textLight-dark">
//             Hello! I'm <span className="change-color">Shahbaz Ali</span>
//           </div>
//           <div className="fontweight-dark">
//             A Front End Developer | Web Designer
//           </div>
//           <div className="textbtncenter-dark">
//             with
//             <button>3.9 + year</button>
//             Experiance
//           </div>
//           <div className="textCenterWithButton">
//             <a
//               href="./canvashabir1.pdf"
//               download
//               className="btn-one"
//               style={{ textDecoration: "none" }}
//             >
//               <MdOutlineFileDownload className="svgIcon" /> Resume
//             </a>
//             <button className="btn-two" onClick={() => hireSetup()}>
//               Hire Me
//             </button>
//           </div>
//           <div className="posrel">
//             <div className="positionZindex">
//               <img
//                 src="/banner_img.png"
//                 alt="banner-img"
//                 style={{ width: "850px", height: "auto" }}
//                 className="img-fluid"
//               />
//             </div>

//             <div className="backgroundColor"></div>
//             <div className="nextjsButton">
//               <button className="fontSize-dark">
//                 <img src="/download (4) 1.png" className="images" /> NextJS
//               </button>
//             </div>
//             <div className="nextjsButtonTwo">
//               <button className="fontSize-dark">
//                 <img src="/react 1.png" className="images" /> ReactJs
//               </button>
//             </div>
//             <div className="nextjsButtonThree">
//               <button className="fontSize-dark">
//                 <img src="/download (3) 1.png" className="images" /> GraphQl
//               </button>
//             </div>
//             <div className="nextjsButtonFour">
//               <button className="fontSize-dark">
//                 <img src="/download (2) 1.png" className="images" /> Tailwind
//                 CSS
//               </button>
//             </div>
//             <div className="nextjsButtonFive">
//               <button className="fontSize-dark">
//                 <img src="/js 3.png" className="images" /> JavaScript
//               </button>
//             </div>
//             <div className="nextjsButtonSix">
//               <button className="fontSize-dark">
//                 <img src="/figma 1.png" className="images" /> Figma
//               </button>
//             </div>
//           </div>
//         </Container> */}
//         <Container>
//           {/* intro (dark) — JSON se */}
//           <div className="textLight-dark">
//             {bannerData.intro.greeting}{" "}
//             <span className="change-color">{bannerData.intro.name}</span>
//           </div>
//           <div className="fontweight-dark">{bannerData.intro.title}</div>
//           <div className="textbtncenter-dark">
//             with
//             <button>{bannerData.intro.experience}</button>
//             Experience
//           </div>

//           {/* buttons (dark) — JSON se */}
//           <div className="textCenterWithButton">
//             <a
//               href={bannerData.buttons.resume.file}
//               download
//               className="btn-one"
//               style={{ textDecoration: "none" }}
//             >
//               <MdOutlineFileDownload className="svgIcon" />{" "}
//               {bannerData.buttons.resume.label}
//             </a>
//             <button className="btn-two" onClick={hireSetup}>
//               {bannerData.buttons.hire.label}
//             </button>
//           </div>

//           <div className="posrel">
//             <div className="positionZindex">
//               <img
//                 src={bannerData.bannerImage.src}
//                 alt={bannerData.bannerImage.alt}
//                 className="img-fluid"
//                 style={bannerData.bannerImage.style}
//               />
//             </div>

//             <div className="backgroundColor"></div>

//             {/* tech badges (dark) — dynamic */}
//             {bannerData.technologies.slice(0, 6).map((tech, index) => (
//               <div key={tech.name} className={positionClasses[index]}>
//                 <button className="fontSize-dark">
//                   <img src={tech.icon} className="images" alt={tech.name} />{" "}
//                   {tech.name}
//                 </button>
//               </div>
//             ))}
//           </div>
//         </Container>
//         {open_close ? (
//           <div className="overlay-section">
//             <div className="form-popup">
//               <RxCross2
//                 className="popup-module-close"
//                 onClick={togglecloseIcon}
//               />
//               <Container className="bg-white p-5">
//                 <Row className="mt-3 mb-3">
//                   <Col xs={12} sm={6}>
//                     <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                       <div className="backgroundColorDifferent">
//                         <img
//                           src="/Frame (4).png"
//                           alt="user-profile"
//                           style={{ width: "20px" }}
//                         />
//                       </div>
//                       <Form.Control
//                         type="text"
//                         placeholder="Full Name*"
//                         className="BorderNone"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                     </Form.Group>
//                     {err && !name && (
//                       <div className="text-danger">Name is required</div>
//                     )}
//                   </Col>

//                   <Col xs={12} sm={6}>
//                     <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                       <div className="backgroundColorDifferent">
//                         <img
//                           src="/Frame (5).png"
//                           alt="user-profile"
//                           style={{ width: "20px" }}
//                         />
//                       </div>
//                       <Form.Control
//                         type="text"
//                         placeholder="Email*"
//                         className="BorderNone"
//                         value={email}
//                         onChange={(e) => handleEmailChange(e.target.value)}
//                       />
//                     </Form.Group>
//                     {err && !email && (
//                       <div className="text-danger">Email is required</div>
//                     )}
//                     {emailError && (
//                       <div className="text-danger">{emailError}</div>
//                     )}
//                   </Col>
//                 </Row>

//                 <Row className="mt-2 mb-3">
//                   <Col xs={12} sm={6}>
//                     <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                       <div className="backgroundColorDifferent">
//                         <img
//                           src="/Frame (6).png"
//                           alt="user-profile"
//                           style={{ width: "20px" }}
//                         />
//                       </div>
//                       <Form.Control
//                         type="text"
//                         placeholder="Mobile No."
//                         className="BorderNone"
//                         value={mobile}
//                         onChange={(e) => handleMobileChange(e.target.value)}
//                       />
//                     </Form.Group>
//                     {err && !mobile && (
//                       <div className="text-danger">Mobile is required</div>
//                     )}
//                     {mobileError && (
//                       <div className="text-danger">{mobileError}</div>
//                     )}
//                   </Col>

//                   <Col xs={12} sm={6}>
//                     <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                       <Form.Control
//                         type="text"
//                         placeholder="Subject*"
//                         className="BorderNone-one"
//                         value={subject}
//                         onChange={(e) => setSubject(e.target.value)}
//                       />
//                     </Form.Group>
//                     {err && !subject && (
//                       <div className="text-danger">Subject is required</div>
//                     )}
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                     <textarea
//                       placeholder="Message*"
//                       className="BorderNone-one height-width-setup"
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                     ></textarea>
//                   </Form.Group>
//                   {err && !message && (
//                     <div className="text-danger">Message is required</div>
//                   )}

//                   <div>
//                     <button
//                       className="imageAndtextButton-one"
//                       onClick={submitHandler}
//                     >
//                       Send
//                       <img
//                         src="/Livello_2 (1).png"
//                         alt="livello"
//                         className="inner-image-button-one"
//                       />
//                     </button>
//                   </div>
//                 </Row>
//               </Container>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </>
//   );
// }
// export default BannerCode;

// ------------------------------------------------------------------------------------------------------------------------------------------
// without integration of api
// import React, { useContext, useState, useEffect } from "react";
// import ParticleField from "./ParticleField";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Form } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { RxCross2 } from "react-icons/rx";
// import axios from "axios";
// import bannerData from "./data/Banner.json";
// import { motion, AnimatePresence } from "framer-motion";

// function BannerCode() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");
//   const [err, setErr] = useState(false);
//   const [emailError, setEmailError] = useState("");
//   const [mobileError, setMobileError] = useState("");
//   const [open_close, setOpen_Close] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [displayGreeting, setDisplayGreeting] = useState("");
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   const fullGreeting = `${bannerData.intro.greeting} ${bannerData.intro.name}`;

//   useEffect(() => {
//     let timer;

//     const handleTyping = () => {
//       setDisplayGreeting(
//         isDeleting
//           ? fullGreeting.substring(0, displayGreeting.length - 1)
//           : fullGreeting.substring(0, displayGreeting.length + 1)
//       );

//       if (!isDeleting && displayGreeting === fullGreeting) {
//         // Done typing, wait then start deleting
//         setTypingSpeed(1000); // pause at full text
//         setTimeout(() => {
//           setIsDeleting(true);
//           setTypingSpeed(50); // faster erase
//         }, 2000);
//       } else if (isDeleting && displayGreeting === "") {
//         // Done deleting, wait then start typing again
//         setIsDeleting(false);
//         setTypingSpeed(500); // pause when empty
//         setTimeout(() => setTypingSpeed(150), 1000);
//       }
//     };

//     timer = setTimeout(handleTyping, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [displayGreeting, isDeleting, typingSpeed, fullGreeting]);

//   // Split the displayed text to highlight the name
//   const renderGreeting = () => {
//     const greetingPart = bannerData.intro.greeting;
//     const namePart = bannerData.intro.name;

//     if (displayGreeting.length <= greetingPart.length) {
//       return (
//         <>
//           {displayGreeting}
//           <span className="change-color">|</span>
//         </>
//       );
//     } else {
//       return (
//         <>
//           {greetingPart}{" "}
//           <span className="change-color">
//             {displayGreeting.substring(greetingPart.length + 1)}
//             {!isDeleting && displayGreeting.length < fullGreeting.length && "|"}
//           </span>
//         </>
//       );
//     }
//   };

//   const { toggle } = useContext(MyContext);
//   const positionClasses = [
//     "nextjsButton", // 0 => NextJS
//     "nextjsButtonTwo", // 1 => ReactJs
//     "nextjsButtonThree", // 2 => GraphQl
//     "nextjsButtonFour", // 3 => Tailwind CSS
//     "nextjsButtonFive", // 4 => JavaScript
//     "nextjsButtonSix", // 5 => Figma
//   ];

//   useEffect(() => {
//     // Trigger animations after component mounts
//     setIsVisible(true);
//   }, []);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         when: "beforeChildren",
//       },
//     },
//   };

//   const textVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const imageVariants = {
//     hidden: { x: 100, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 50,
//         delay: 0.5,
//       },
//     },
//   };

//   const techBadgeVariants = {
//     hidden: { y: -50, opacity: 0 },
//     visible: (i) => ({
//       y: 0,
//       opacity: 1,
//       transition: {
//         delay: i * 0.1 + 0.8,
//         type: "spring",
//         stiffness: 100,
//       },
//     }),
//     hover: {
//       y: -10,
//       transition: { type: "spring", stiffness: 300 },
//     },
//   };

//   // 🔹 Real-time email validation
// const handleEmailChange = (value) => {
//   setEmail(value);
//   if (value && !value.includes("@")) {
//     setEmailError("Please enter a valid email with '@'");
//   } else {
//     setEmailError("");
//   }
// };

//   // 🔹 Real-time mobile validation
// const handleMobileChange = (value) => {
//   setMobile(value);
//   if (value && !/^\d+$/.test(value)) {
//     setMobileError("Mobile number must contain only digits");
//   } else {
//     setMobileError("");
//   }
// };

// const validateFields = () => {
//   let valid = true;
//   setErr(false);

//   if (!name || !email || !mobile || !subject || !message) {
//     setErr(true);
//     valid = false;
//   }

//   if (email && !email.includes("@")) {
//     setEmailError("Please enter a valid email with '@'");
//     valid = false;
//   }

//   if (mobile && !/^\d+$/.test(mobile)) {
//     setMobileError("Mobile number must contain only digits");
//     valid = false;
//   }

//   return valid;
// };

// const submitHandler = async () => {
//   if (!validateFields()) return;

//   try {
//     const response = await axios.post(
//       `${process.env.REACT_APP_API_BASE}/api/forms`,
//       {
//         name,
//         email,
//         mobile,
//         subject,
//         message,
//       }
//     );
//     console.log({
//       data: "data submitted successfully",
//       response: response.data,
//     });

//     if (response.status === 200) {
//       console.log(response.data, "data submitted successfully");
//       // Reset form
//       setName("");
//       setEmail("");
//       setMobile("");
//       setSubject("");
//       setMessage("");
//     }
//   } catch (error) {
//     console.log("data submitted rejected", error);
//   }
// };

//   const hireSetup = () => {
//     setOpen_Close(true);
//   };

// const togglecloseIcon = () => {
//   setOpen_Close(false);
// };

// useEffect(() => {
//   async function fetchData() {
//     try {
//       let response = await fetch(
//         `${process.env.REACT_APP_API_BASE}/api/banner`
//       );
//       let data = await response.json();
//       console.log(data, "banner data");
//     } catch (error) {
//       console.error("Error fetching banner data:", error.message);
//     }
//   }
//   fetchData();
// }, []);

//   return toggle ? (
//     <>
//       <div className="hero">
//         <ParticleField
//           dotColor="rgba(255,255,255,0.9)"
//           lineColor="rgba(255,255,255,0.45)"
//           density={0.001}
//           linkRadius={150}
//           fadeOutMs={600}
//         />
//         <Container>
//           <motion.div
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//             variants={containerVariants}
//           >
//             <motion.div variants={textVariants} className="textLight">
//               {renderGreeting()}
//             </motion.div>

//             <motion.div variants={textVariants} className="fontweight">
//               {bannerData.intro.title}
//             </motion.div>

//             <motion.div variants={textVariants} className="textbtncenter">
//               with
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {bannerData.intro.experience}
//               </motion.button>
//               Experience
//             </motion.div>

//             <motion.div
//               variants={textVariants}
//               className="textCenterWithButton"
//             >
//               <motion.a
//                 href={bannerData.buttons.resume.file}
//                 download
//                 className="btn-one"
//                 style={{ textDecoration: "none" }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <MdOutlineFileDownload className="svgIcon" />{" "}
//                 {bannerData.buttons.resume.label}
//               </motion.a>
//               <motion.button
//                 className="btn-two"
//                 onClick={() => hireSetup()}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {bannerData.buttons.hire.label}
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           <div className="posrel">
//             <div className="positionZindex">
//               <img
//                 src="/portfolioImg.png"
//                 alt="banner-img"
//                 className="img-fluid manage-Img"
//               />
//             </div>

//             <div className="backgroundColor"></div>

//             {bannerData.technologies.slice(0, 6).map((tech, index) => (
//               <motion.div
//                 key={tech.name}
//                 className={positionClasses[index]}
//                 custom={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={techBadgeVariants}
//                 whileHover="hover"
//               >
//                 <motion.button className="fontSize">
//                   <img src={tech.icon} className="images" alt={tech.name} />{" "}
//                   {tech.name}
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         </Container>

//         {open_close ? (
//           <div className="overlay-section">
//             <div className="form-popup">
//               <RxCross2
//                 className="popup-module-close"
//                 onClick={togglecloseIcon}
//               />
//               <Container className="bg-white p-5">
//                 <Row className="mt-3 mb-3">
//                   <Col xs={12} sm={6}>
//                     <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                       <div className="backgroundColorDifferent">
//                         <img
//                           src="/Frame (4).png"
//                           alt="user-profile"
//                           style={{ width: "20px" }}
//                         />
//                       </div>
//                       <Form.Control
//                         type="text"
//                         placeholder="Full Name*"
//                         className="BorderNone"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                     </Form.Group>
//                     {err && !name && (
//                       <div className="text-danger">Name is required</div>
//                     )}
//                   </Col>

//                   <Col xs={12} sm={6}>
//                     <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                       <div className="backgroundColorDifferent">
//                         <img
//                           src="/Frame (5).png"
//                           alt="user-profile"
//                           style={{ width: "20px" }}
//                         />
//                       </div>
//                       <Form.Control
//                         type="text"
//                         placeholder="Email*"
//                         className="BorderNone"
//                         value={email}
//                         onChange={(e) => handleEmailChange(e.target.value)}
//                       />
//                     </Form.Group>
//                     {err && !email && (
//                       <div className="text-danger">Email is required</div>
//                     )}
//                     {emailError && (
//                       <div className="text-danger">{emailError}</div>
//                     )}
//                   </Col>
//                 </Row>

//                 <Row className="mt-2 mb-3">
//                   <Col xs={12} sm={6}>
//                     <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                       <div className="backgroundColorDifferent">
//                         <img
//                           src="/Frame (6).png"
//                           alt="user-profile"
//                           style={{ width: "20px" }}
//                         />
//                       </div>
//                       <Form.Control
//                         type="text"
//                         placeholder="Mobile No."
//                         className="BorderNone"
//                         value={mobile}
//                         onChange={(e) => handleMobileChange(e.target.value)}
//                       />
//                     </Form.Group>
//                     {err && !mobile && (
//                       <div className="text-danger">Mobile is required</div>
//                     )}
//                     {mobileError && (
//                       <div className="text-danger">{mobileError}</div>
//                     )}
//                   </Col>

//                   <Col xs={12} sm={6}>
//                     <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                       <Form.Control
//                         type="text"
//                         placeholder="Subject*"
//                         className="BorderNone-one"
//                         value={subject}
//                         onChange={(e) => setSubject(e.target.value)}
//                       />
//                     </Form.Group>
//                     {err && !subject && (
//                       <div className="text-danger">Subject is required</div>
//                     )}
//                   </Col>
//                 </Row>

//                 <Row>
//                   <Form.Group className="mt-3 mb-3 image-inputField-flex">
//                     <textarea
//                       placeholder="Message*"
//                       className="BorderNone-one height-width-setup"
//                       value={message}
//                       onChange={(e) => setMessage(e.target.value)}
//                     ></textarea>
//                   </Form.Group>
//                   {err && !message && (
//                     <div className="text-danger">Message is required</div>
//                   )}

//                   <div>
//                     <button
//                       className="imageAndtextButton-one"
//                       onClick={submitHandler}
//                     >
//                       Send{" "}
//                       <img
//                         src="/Livello_2 (1).png"
//                         alt="livello"
//                         className="inner-image-button-one"
//                       />
//                     </button>
//                   </div>
//                 </Row>
//               </Container>
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </>
//   ) : (
//     <>
//       <div style={{ position: "relative", zIndex: 1 }}>
//         <Container>
//           <motion.div
//             initial="hidden"
//             animate={isVisible ? "visible" : "hidden"}
//             variants={containerVariants}
//           >
//             <motion.div variants={textVariants} className="textLight-dark">
//               {renderGreeting()}
//             </motion.div>

//             <motion.div variants={textVariants} className="fontweight-dark">
//               {bannerData.intro.title}
//             </motion.div>

//             <motion.div variants={textVariants} className="textbtncenter-dark">
//               with
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {bannerData.intro.experience}
//               </motion.button>
//               Experience
//             </motion.div>

//             <motion.div
//               variants={textVariants}
//               className="textCenterWithButton"
//             >
//               <motion.a
//                 href={bannerData.buttons.resume.file}
//                 download
//                 className="btn-one"
//                 style={{ textDecoration: "none" }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <MdOutlineFileDownload className="svgIcon" />
//                 {bannerData.buttons.resume.label}
//               </motion.a>
//               <motion.button
//                 className="btn-two"
//                 onClick={hireSetup}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {bannerData.buttons.hire.label}
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           <div className="posrel">
//             <div className="positionZindex">
//               <img
//                 src="/portfolioImg.png"
//                 alt="banner-img"
//                 className="img-fluid manage-Img"
//               />
//             </div>

//             <div className="backgroundColor"></div>

//             {bannerData.technologies.slice(0, 6).map((tech, index) => (
//               <motion.div
//                 key={tech.name}
//                 className={positionClasses[index]}
//                 custom={index}
//                 initial="hidden"
//                 animate="visible"
//                 variants={techBadgeVariants}
//                 whileHover="hover"
//               >
//                 <motion.button className="fontSize-dark">
//                   <img src={tech.icon} className="images" alt={tech.name} />{" "}
//                   {tech.name}
//                 </motion.button>
//               </motion.div>
//             ))}
//           </div>
//         </Container>

// {open_close ? (
//   <div className="overlay-section">
//     <div className="form-popup">
//       <RxCross2
//         className="popup-module-close"
//         onClick={togglecloseIcon}
//       />
//       <Container className="bg-white p-5">
//         <Row className="mt-3 mb-3">
//           <Col xs={12} sm={6}>
//             <Form.Group className="mt-3 mb-3 image-inputField-flex">
//               <div className="backgroundColorDifferent">
//                 <img
//                   src="/Frame (4).png"
//                   alt="user-profile"
//                   style={{ width: "20px" }}
//                 />
//               </div>
//               <Form.Control
//                 type="text"
//                 placeholder="Full Name*"
//                 className="BorderNone"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </Form.Group>
//             {err && !name && (
//               <div className="text-danger">Name is required</div>
//             )}
//           </Col>

//           <Col xs={12} sm={6}>
//             <Form.Group className="mt-3 mb-3 image-inputField-flex">
//               <div className="backgroundColorDifferent">
//                 <img
//                   src="/Frame (5).png"
//                   alt="user-profile"
//                   style={{ width: "20px" }}
//                 />
//               </div>
//               <Form.Control
//                 type="text"
//                 placeholder="Email*"
//                 className="BorderNone"
//                 value={email}
//                 onChange={(e) => handleEmailChange(e.target.value)}
//               />
//             </Form.Group>
//             {err && !email && (
//               <div className="text-danger">Email is required</div>
//             )}
//             {emailError && (
//               <div className="text-danger">{emailError}</div>
//             )}
//           </Col>
//         </Row>

//         <Row className="mt-2 mb-3">
//           <Col xs={12} sm={6}>
//             <Form.Group className="mt-3 mb-3 image-inputField-flex">
//               <div className="backgroundColorDifferent">
//                 <img
//                   src="/Frame (6).png"
//                   alt="user-profile"
//                   style={{ width: "20px" }}
//                 />
//               </div>
//               <Form.Control
//                 type="text"
//                 placeholder="Mobile No."
//                 className="BorderNone"
//                 value={mobile}
//                 onChange={(e) => handleMobileChange(e.target.value)}
//               />
//             </Form.Group>
//             {err && !mobile && (
//               <div className="text-danger">Mobile is required</div>
//             )}
//             {mobileError && (
//               <div className="text-danger">{mobileError}</div>
//             )}
//           </Col>

//           <Col xs={12} sm={6}>
//             <Form.Group className="mt-3 mb-3 image-inputField-flex">
//               <Form.Control
//                 type="text"
//                 placeholder="Subject*"
//                 className="BorderNone-one"
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//               />
//             </Form.Group>
//             {err && !subject && (
//               <div className="text-danger">Subject is required</div>
//             )}
//           </Col>
//         </Row>

//         <Row>
//           <Form.Group className="mt-3 mb-3 image-inputField-flex">
//             <textarea
//               placeholder="Message*"
//               className="BorderNone-one height-width-setup"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             ></textarea>
//           </Form.Group>
//           {err && !message && (
//             <div className="text-danger">Message is required</div>
//           )}

//           <div>
//             <button
//               className="imageAndtextButton-one"
//               onClick={submitHandler}
//             >
//               Send{" "}
//               <img
//                 src="/Livello_2 (1).png"
//                 alt="livello"
//                 className="inner-image-button-one"
//               />
//             </button>
//           </div>
//         </Row>
//       </Container>
//     </div>
//   </div>
// ) : (
//   ""
// )}
//       </div>
//     </>
//   );
// }

// export default BannerCode;

// src/BannerCode.jsx
import React, { useContext, useState, useEffect, useMemo } from "react";
// import ParticleField from "./ParticleField";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col, Form } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import bannerData from "./data/Banner.json";
import { motion } from "framer-motion";

function BannerCode() {
  // --- NEW: banner from API (fallback to local JSON) ---
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE}/api/banner`);
        const json = await res.json();
        // handle both shapes: [] or { ok:true, data:{} }
        const doc = Array.isArray(json) ? json[0] : json?.data ?? json;
        if (doc) setBanner(doc);
      } catch (e) {
        console.error("Error fetching banner data:", e?.message);
      }
    })();
  }, []);

  const togglecloseIcon = () => {
    setOpen_Close(false);
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
  const handleMobileChange = (value) => {
    setMobile(value);
    if (value && !/^\d+$/.test(value)) {
      setMobileError("Mobile number must contain only digits");
    } else {
      setMobileError("");
    }
  };
  const handleEmailChange = (value) => {
    setEmail(value);
    if (value && !value.includes("@")) {
      setEmailError("Please enter a valid email with '@'");
    } else {
      setEmailError("");
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
  const ui = banner || bannerData; // unified source for hero

  // ---------------- existing state below unchanged ----------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [open_close, setOpen_Close] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [displayGreeting, setDisplayGreeting] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // --- UPDATED: typing uses API/fallback values ---
  const fullGreeting = useMemo(() => {
    const g = ui?.intro?.greeting ?? "";
    const n = ui?.intro?.name ?? "";
    return `${g} ${n}`.trim();
  }, [ui?.intro?.greeting, ui?.intro?.name]);

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      setDisplayGreeting((prev) =>
        isDeleting
          ? fullGreeting.substring(0, prev.length - 1)
          : fullGreeting.substring(0, prev.length + 1)
      );
      const doneType = !isDeleting && displayGreeting === fullGreeting;
      const doneDelete = isDeleting && displayGreeting === "";
      if (doneType) {
        setTypingSpeed(1000);
        setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50);
        }, 2000);
      } else if (doneDelete) {
        setIsDeleting(false);
        setTypingSpeed(500);
        setTimeout(() => setTypingSpeed(150), 1000);
      }
    };
    if (fullGreeting) timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayGreeting, isDeleting, typingSpeed, fullGreeting]);

  // --- UPDATED: renderGreeting reads ui.intro ---
  const renderGreeting = () => {
    const greetingPart = ui?.intro?.greeting ?? "";
    if (displayGreeting.length <= greetingPart.length) {
      return (
        <>
          {displayGreeting}
          <span className="change-color">|</span>
        </>
      );
    }
    return (
      <>
        {greetingPart}{" "}
        <span className="change-color">
          {displayGreeting.substring(greetingPart.length + 1)}
          {!isDeleting && displayGreeting.length < fullGreeting.length && "|"}
        </span>
      </>
    );
  };

  const { toggle } = useContext(MyContext);
  const positionClasses = [
    "nextjsButton",
    "nextjsButtonTwo",
    "nextjsButtonThree",
    "nextjsButtonFour",
    "nextjsButtonFive",
    "nextjsButtonSix",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, when: "beforeChildren" },
    },
  };
  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };
  const techBadgeVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1 + 0.8, type: "spring", stiffness: 100 },
    }),
    hover: { y: -10, transition: { type: "spring", stiffness: 300 } },
  };

  // -------- form helpers remain unchanged (omitted for brevity) --------
  // ... handleEmailChange, handleMobileChange, validateFields, submitHandler, hireSetup, togglecloseIcon ...

  // --- helpers from API/fallback for hero ---
  const title = ui?.intro?.title ?? "";
  const experience = ui?.intro?.experience ?? "";
  const resumeLabel = ui?.buttons?.resume?.label ?? "Resume";
  const resumeFile = ui?.buttons?.resume?.file ?? "#";
  const hireLabel = ui?.buttons?.hire?.label ?? "Hire Me";
  const technologies = Array.isArray(ui?.technologies) ? ui.technologies : [];
  const bannerSrc = ui?.bannerImage?.src || "/portfolioImg.png";
  const bannerAlt = ui?.bannerImage?.alt || "banner-img";
  const imgStyle = ui?.bannerImage?.style || { width: "850px", height: "auto" };

  // -------------------- HERO (only this portion integrated) --------------------
  return toggle ? (
    <>
      <div className="hero">
        {/* <ParticleField
          dotColor="rgba(255,255,255,0.9)"
          lineColor="rgba(255,255,255,0.45)"
          density={0.001}
          linkRadius={150}
          fadeOutMs={600}
        /> */}
        <Container>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={textVariants} className="textLight">
              {renderGreeting()}
            </motion.div>

            <motion.div variants={textVariants} className="fontweight">
              {title}
            </motion.div>

            <motion.div variants={textVariants} className="textbtncenter">
              with
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {experience}
              </motion.button>
              Experience
            </motion.div>

            <motion.div
              variants={textVariants}
              className="textCenterWithButton"
            >
              <motion.a
                href={resumeFile}
                download
                className="btn-one"
                style={{ textDecoration: "none" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdOutlineFileDownload className="svgIcon" /> {resumeLabel}
              </motion.a>
              <motion.button
                className="btn-two"
                onClick={() => setOpen_Close(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {hireLabel}
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="posrel">
            <div className="positionZindex">
              <img
                src={bannerSrc}
                alt={bannerAlt}
                className="img-fluid manage-Img"
                style={{ width: imgStyle.width, height: imgStyle.height }}
              />
            </div>

            <div className="backgroundColor"></div>

            {technologies.slice(0, 6).map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className={`${positionClasses[index]} flex flex-col items-center`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={techBadgeVariants}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.button
                  className={`${toggle ? "fontSize" : "fontSize-dark"} 
                  flex flex-col items-center p-2 rounded-xl 
                  hover:bg-gray-800 hover:text-white transition-all`}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* ✅ icon with animation */}
                  <motion.img
                    src={tech.icon}
                    alt={tech.name}
                    className="images w-12 h-12 object-contain"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  />
                  <span className="mt-2 text-sm">{tech.name}</span>
                </motion.button>
              </motion.div>
            ))}
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
        {/* 🔴 form/modal code below remains as-is (ignore as requested) */}
        {/* ... your existing modal with form ... */}
      </div>
    </>
  ) : (
    <>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Container>
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={textVariants} className="textLight-dark">
              {renderGreeting()}
            </motion.div>

            <motion.div variants={textVariants} className="fontweight-dark">
              {title}
            </motion.div>

            <motion.div variants={textVariants} className="textbtncenter-dark">
              with{" "}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {experience}
              </motion.button>{" "}
              Experience
            </motion.div>

            <motion.div
              variants={textVariants}
              className="textCenterWithButton"
            >
              <motion.a
                href={resumeFile}
                download
                className="btn-one"
                style={{ textDecoration: "none" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MdOutlineFileDownload className="svgIcon" /> {resumeLabel}
              </motion.a>
              <motion.button
                className="btn-two"
                onClick={() => setOpen_Close(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {hireLabel}
              </motion.button>
            </motion.div>
          </motion.div>

          <div className="posrel">
            <div className="positionZindex">
              <img
                src={bannerSrc}
                alt={bannerAlt}
                className="img-fluid manage-Img"
                style={{ width: imgStyle.width, height: imgStyle.height }}
              />
            </div>

            <div className="backgroundColor"></div>
            {technologies.slice(0, 6).map((tech, index) => (
              <motion.div
                key={`${tech.name}-${index}`}
                className={`${positionClasses[index]} flex flex-col items-center`}
                custom={index}
                initial="hidden"
                animate="visible"
                variants={techBadgeVariants}
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.button
                  className={`${toggle ? "fontSize" : "fontSize-dark"} 
                  flex flex-col items-center p-2 rounded-xl 
                  hover:bg-gray-800 hover:text-white transition-all`}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* ✅ icon with animation */}
                  <motion.img
                    src={tech.icon}
                    alt={tech.name}
                    className="images w-12 h-12 object-contain"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 250 }}
                  />
                  <span className="mt-2 text-sm">{tech.name}</span>
                </motion.button>
              </motion.div>
            ))}
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

// import { FaReact, FaJsSquare } from "react-icons/fa";
// import { SiNextdotjs, SiTailwindcss, SiGraphql, SiFigma } from "react-icons/si";
// import { motion } from "framer-motion";

// const SkillsShowcase = () => {
//   const skills = [
//     { name: "NextJS", icon: <SiNextdotjs className="text-black text-3xl" /> },
//     {
//       name: "Tailwind CSS",
//       icon: <SiTailwindcss className="text-sky-500 text-3xl" />,
//     },
//     { name: "ReactJs", icon: <FaReact className="text-cyan-500 text-3xl" /> },
//     {
//       name: "JavaScript",
//       icon: <FaJsSquare className="text-yellow-400 text-3xl" />,
//     },
//     { name: "GraphQL", icon: <SiGraphql className="text-pink-500 text-3xl" /> },
//     { name: "Figma", icon: <SiFigma className="text-purple-500 text-3xl" /> },
//   ];

//   return (
//     <section className="relative bg-black py-16">
//       <div className="container mx-auto flex flex-col items-center">
//         {/* Person Image */}
//         <div className="relative z-10">
//           <img
//             src="/your-image.png"
//             alt="Profile"
//             className="w-[320px] rounded-full border-4 border-yellow-400 shadow-lg"
//           />
//         </div>

//         {/* Orange Arc Background */}
//         <div className="absolute bottom-0 left-0 right-0 h-[300px] bg-yellow-500 rounded-t-full"></div>

//         {/* Skills Badges */}
//         <div className="absolute top-10 w-full flex flex-wrap justify-center gap-6">
//           {skills.map((skill, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: -20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.15 }}
//               whileHover={{ scale: 1.15, rotate: 5 }} // ✅ Hover Animation
//               className="flex items-center gap-2 bg-white shadow-lg px-5 py-3 rounded-full cursor-pointer transition-all duration-300"
//             >
//               {skill.icon}
//               <span className="font-medium">{skill.name}</span>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default SkillsShowcase;
