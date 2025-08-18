// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Card, Form } from "react-bootstrap";

// function Contact() {
//   const { toggle } = useContext(MyContext);

//   return toggle ? (
//     <>
//       <Container>
//         <div>
//           <div className="experience-text-design mt-5 mb-3">
//             Connect With Me
//           </div>

//           <div className="image-middle-align-one mt-4">
//             <button className="imageAndtextButton">
//               <img
//                 src="/linkedin.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Linkedin
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (15) 5.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Instagram
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (16) 2.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Facebook
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (17) 2.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Telegram
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (18) 2.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Twitter
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (29) 1.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Skype
//             </button>
//           </div>
//           <div className="image-middle-align-one">
//             <button className="imageAndtextButton mt-2">
//               <img
//                 src="/download (30) 1.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               nikunjthesiya.js@gmail.com
//             </button>
//           </div>
//           <div className="image-middle-align mt-3">
//             <img
//               src="/developer 1.png"
//               alt="banner-image"
//               style={{ width: "250px" }}
//             />
//           </div>
//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   ) : (
//     <>
//       <Container>
//         <div>
//           <div className="experience-text-design mt-5 mb-3">
//             Connect With Me
//           </div>

//           <div className="image-middle-align-one mt-4">
//             <button className="imageAndtextButton">
//               <img
//                 src="/linkedin.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Linkedin
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (15) 5.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Instagram
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (16) 2.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Facebook
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (17) 2.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Telegram
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (18) 2.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Twitter
//             </button>
//             <button className="imageAndtextButton">
//               <img
//                 src="/download (29) 1.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               Skype
//             </button>
//           </div>
//           <div className="image-middle-align-one">
//             <button className="imageAndtextButton mt-2">
//               <img
//                 src="/download (30) 1.png"
//                 alt="linkedin-image"
//                 className="inner-image-button"
//               />
//               nikunjthesiya.js@gmail.com
//             </button>
//           </div>
//           <div className="image-middle-align mt-3">
//             <img
//               src="/developer 1.png"
//               alt="banner-image"
//               style={{ width: "250px" }}
//             />
//           </div>
//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   );
// }
// export default Contact;

// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container } from "react-bootstrap";
// import contactData from "./data/Contact.json"; // ✅ Import JSON data

// function Contact() {
//   const { toggle } = useContext(MyContext);

//   return (
//     <Container>
//       <div>
//         <div className="experience-text-design mt-5 mb-3">
//           {contactData.title}
//         </div>

//         {/* Social Buttons */}
//         <div className="image-middle-align-one mt-4">
//           {contactData.socialButtons.map((button, index) => (
//             <button key={index} className="imageAndtextButton">
//               <img
//                 src={button.icon}
//                 alt={`${button.name}-icon`}
//                 className="inner-image-button"
//               />
//               {button.name}
//             </button>
//           ))}
//         </div>

//         {/* Email Button */}
//         <div className="image-middle-align-one">
//           <button className="imageAndtextButton mt-2">
//             <img
//               src={contactData.emailButton.icon}
//               alt="email-icon"
//               className="inner-image-button"
//             />
//             {contactData.emailButton.email}
//           </button>
//         </div>

//         {/* Static Banner */}
//         <div className="image-middle-align mt-3">
//           <img
//             src="/developer 1.png"
//             alt="banner-image"
//             style={{ width: "250px" }}
//           />
//         </div>

//         <hr className="horizontaline" />
//       </div>
//     </Container>
//   );
// }

// export default Contact;
import React, { useContext, useEffect, useRef, useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container } from "react-bootstrap";
import contactData from "./data/Contact.json";

function Contact() {
  const { toggle } = useContext(MyContext);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <Container>
      <div ref={containerRef}>
        {/* Title with fade-in and slide-down animation */}
        <div
          className="experience-text-design mt-5 mb-3"
          style={{
            animation: isVisible ? "fadeInDown 0.8s ease-out forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {contactData.title}
        </div>

        {/* Social Buttons - staggered fade-in */}
        <div
          className="image-middle-align-one mt-4"
          style={{
            animation: isVisible
              ? "fadeIn 0.8s ease-out 0.2s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {contactData.socialButtons.map((button, index) => (
            <button
              key={index}
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

        {/* Email Button - slide-up */}
        <div
          className="image-middle-align-one"
          style={{
            animation: isVisible
              ? "fadeInUp 0.8s ease-out 0.4s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <button className="imageAndtextButton mt-2">
            <img
              src={contactData.emailButton.icon}
              alt="email-icon"
              className="inner-image-button"
            />
            {contactData.emailButton.email}
          </button>
        </div>

        {/* Static Banner - zoom-in */}
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

        {/* Horizontal line - grow from center */}
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
