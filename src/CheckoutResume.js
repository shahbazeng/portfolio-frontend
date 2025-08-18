// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Card, Form } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";

// function CheckoutResume() {
//   const { toggle } = useContext(MyContext);
//   return toggle ? (
//     <>
//       <Container>
//         <div>
//           <div className="experience-text-design mt-5 mb-5">
//             Checkout my Resume
//           </div>
//           <div className="image-align-center">
//             <img
//               src="/boy (1).png"
//               alt="image"
//               style={{ width: "50px" }}
//               className="image-border"
//             />
//           </div>
//           <div className="textColorFont">Shahbaz Ali</div>
//           <div className="text-center text-light" style={{ fontSize: "13px" }}>
//             Frontend Developer | Web Developer | UI Developer
//           </div>
//           <div className="textCenterWithButton">
//             <button className="btn-one">
//               <MdOutlineFileDownload className="svgIcon" /> Resume
//             </button>
//             <button className="btn-two">Discuss Project</button>
//           </div>
//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   ) : (
//     <>
//       <Container>
//         <div>
//           <div className="experience-text-design mt-5 mb-5">
//             Checkout my Resume
//           </div>
//           <div className="image-align-center">
//             <img
//               src="/boy (1).png"
//               alt="image"
//               style={{ width: "50px" }}
//               className="image-border"
//             />
//           </div>
//           <div className="textColorFont">NIKUNJ THESIYA</div>
//           <div className="text-center text-dark" style={{ fontSize: "13px" }}>
//             Frontend Developer | Web Developer | UI Developer
//           </div>
//           <div className="textCenterWithButton">
//             <button className="btn-one">
//               <MdOutlineFileDownload className="svgIcon" /> Resume
//             </button>
//             <button className="btn-two">Discuss Project</button>
//           </div>
//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   );
// }
// export default CheckoutResume;
// ---------------------------------------------------------------------------------------------------------------------
// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import checkoutData from "./data/Checkout.json";

// function CheckoutResume() {
//   const { toggle } = useContext(MyContext);

//   const name = toggle ? checkoutData.names.light : checkoutData.names.dark;
//   const taglineClass = toggle
//     ? checkoutData.classes.taglineLight
//     : checkoutData.classes.taglineDark;

//   return (
//     <Container>
//       <div>
//         <div className="experience-text-design mt-5 mb-5">
//           {checkoutData.title}
//         </div>

//         <div className="image-align-center">
//           <img
//             src={checkoutData.avatar.src}
//             alt={checkoutData.avatar.alt}
//             style={{ width: `${checkoutData.avatar.widthPx}px` }}
//             className={checkoutData.avatar.className}
//           />
//         </div>

//         <div className="textColorFont">{name}</div>

//         <div
//           className={`text-center ${taglineClass}`}
//           style={{ fontSize: "13px" }}
//         >
//           {checkoutData.tagline}
//         </div>

//         <div className="textCenterWithButton">
//           <a
//             href={checkoutData.buttons.resume.file}
//             download
//             className={checkoutData.buttons.resume.className}
//             style={{ textDecoration: "none" }}
//           >
//             <MdOutlineFileDownload className="svgIcon" />{" "}
//             {checkoutData.buttons.resume.label}
//           </a>

//           <a
//             href={checkoutData.buttons.discuss.href}
//             className={checkoutData.buttons.discuss.className}
//             style={{ textDecoration: "none" }}
//           >
//             {checkoutData.buttons.discuss.label}
//           </a>
//         </div>

//         <hr className="horizontaline" />
//       </div>
//     </Container>
//   );
// }

// export default CheckoutResume;
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

  const name = toggle ? checkoutData.names.light : checkoutData.names.dark;
  const taglineClass = toggle
    ? checkoutData.classes.taglineLight
    : checkoutData.classes.taglineDark;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing after animation triggers
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of component is visible
        rootMargin: "0px 0px -50px 0px", // Adjust this to trigger earlier/later
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
        <div
          className="experience-text-design mt-5 mb-5"
          style={{
            animation: isVisible
              ? "slideFromLeft 0.8s ease-out forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {checkoutData.title}
        </div>

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
            src={checkoutData.avatar.src}
            alt={checkoutData.avatar.alt}
            style={{ width: `${checkoutData.avatar.widthPx}px` }}
            className={checkoutData.avatar.className}
          />
        </div>

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

        <div
          className={`text-center ${taglineClass}`}
          style={{
            fontSize: "13px",
            animation: isVisible
              ? "slideFromTop 0.8s ease-out 0.6s forwards"
              : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          {checkoutData.tagline}
        </div>

        <div
          className="textCenterWithButton"
          style={{
            animation: isVisible ? "fadeIn 1s ease-out 0.8s forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <a
            href={checkoutData.buttons.resume.file}
            download
            className={checkoutData.buttons.resume.className}
            style={{ textDecoration: "none" }}
          >
            <MdOutlineFileDownload className="svgIcon" />{" "}
            {checkoutData.buttons.resume.label}
          </a>

          <a
            href={checkoutData.buttons.discuss.href}
            className={checkoutData.buttons.discuss.className}
            style={{ textDecoration: "none" }}
          >
            {checkoutData.buttons.discuss.label}
          </a>
        </div>

        <hr
          className="horizontaline"
          style={{
            animation: isVisible ? "scaleIn 0.8s ease-out 1s forwards" : "none",
            opacity: isVisible ? 1 : 0,
          }}
        />
      </div>
    </Container>
  );
}

export default CheckoutResume;
