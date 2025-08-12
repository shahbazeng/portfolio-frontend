// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Card, Form } from "react-bootstrap";

// function Footer() {
//   const { toggle } = useContext(MyContext);
//   return toggle ? (
//     <>
//       <Container>
//         <div>
//           <div className="experience-text-design mt-5 mb-3">
//             Portfolio Made With
//           </div>
//           <div className="displayFlexTwoNumbers-second-Container mt-5 mb-5">
//             <button className="fontSize-four">
//               <img src="/download (4) 1.png" style={{ width: "30px" }} /> NextJS
//             </button>
//             <button className="fontSize-four">
//               <img src="/react 1.png" style={{ width: "30px" }} /> ReactJs
//             </button>
//             <button className="fontSize-four">
//               <img src="/download (3) 1.png" style={{ width: "40px" }} />{" "}
//               GraphQl
//             </button>
//             <button className="fontSize-four">
//               <img src="/download (2) 1.png" style={{ width: "30px" }} />{" "}
//               Tailwind CSS
//             </button>
//             <button className="fontSize-four">
//               <img src="/js 3.png" style={{ width: "20px" }} /> JavaScript
//             </button>
//             <button className="fontSize-four">
//               <img src="/figma 1.png" style={{ width: "30px" }} /> Figma
//             </button>
//           </div>
//         </div>

//         {/* Footer */}

//         <div>
//           <div className="backgroundColorYellow">
//             <div className="d-flex align-items-center gap-2">
//               <div className="backgroundColor-radius">
//                 <img src="/SA.png" alt="sa-img" style={{ width: "30px" }} />
//               </div>
//               <div className="font-size-manage">
//                 Shahbaz <span className="fw-bold">Ali</span>
//               </div>
//             </div>
//             <div className="font-size-manage">
//               Designed & Build by <span className="fw-bold">SHAHBAZ ALI </span>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   ) : (
//     <>
//       <Container>
//         <div>
//           <div className="experience-text-design mt-5 mb-3">
//             Portfolio Made With
//           </div>
//           <div className="displayFlexTwoNumbers-second-Container mt-5 mb-5">
//             <button className="fontSize-four">
//               <img src="/download (4) 1.png" style={{ width: "30px" }} /> NextJS
//             </button>
//             <button className="fontSize-four">
//               <img src="/react 1.png" style={{ width: "30px" }} /> ReactJs
//             </button>
//             <button className="fontSize-four">
//               <img src="/download (3) 1.png" style={{ width: "40px" }} />{" "}
//               GraphQl
//             </button>
//             <button className="fontSize-four">
//               <img src="/download (2) 1.png" style={{ width: "30px" }} />{" "}
//               Tailwind CSS
//             </button>
//             <button className="fontSize-four">
//               <img src="/js 3.png" style={{ width: "20px" }} /> JavaScript
//             </button>
//             <button className="fontSize-four">
//               <img src="/figma 1.png" style={{ width: "30px" }} /> Figma
//             </button>
//           </div>
//         </div>

//         {/* Footer */}

//         <div>
//           <div className="backgroundColorYellow ">
//             <div className="d-flex align-items-center gap-2">
//               <div className="backgroundColor-radius">
//                 <img src="/SA.png" alt="sa-img" style={{ width: "30px" }} />
//               </div>
//               <div className="font-size-manage">
//                 Shahbaz <span className="fw-bold">Ali</span>
//               </div>
//             </div>
//             <div className="font-size-manage">
//               Designed & Build by <span className="fw-bold">SHAHBAZ ALI </span>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </>
//   );
// }
// export default Footer;

import React, { useContext } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container } from "react-bootstrap";
import footerData from "./data/Footer.json";

function Footer() {
  const { toggle } = useContext(MyContext);

  return (
    <Container>
      <div>
        {/* Title */}
        <div className="experience-text-design mt-5 mb-3">
          {footerData.title}
        </div>

        {/* Tech Stack */}
        <div className="displayFlexTwoNumbers-second-Container mt-5 mb-5">
          {footerData.techStack.map((tech, idx) => (
            <button key={idx} className="fontSize-four">
              <img
                src={tech.icon}
                style={{ width: `${tech.widthPx}px` }}
                alt={tech.label}
              />{" "}
              {tech.label}
            </button>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <div className="backgroundColorYellow">
          <div className="d-flex align-items-center gap-2">
            <div className="backgroundColor-radius">
              <img
                src={footerData.footer.profileImage}
                alt="profile"
                style={{ width: `${footerData.footer.profileWidthPx}px` }}
              />
            </div>
            <div className="font-size-manage">
              {footerData.footer.firstName}{" "}
              <span className="fw-bold">{footerData.footer.lastName}</span>
            </div>
          </div>
          <div className="font-size-manage">
            {footerData.footer.designText}{" "}
            <span className="fw-bold">{footerData.footer.designerName}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
