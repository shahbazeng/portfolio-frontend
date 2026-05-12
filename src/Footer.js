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
// -------------------------------------------------------------------------------------------------------------------------------------
//without api integrtaion
// import React, { useContext, useEffect } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container } from "react-bootstrap";
// import footerData from "./data/Footer.json";

// function Footer() {
//   const { toggle } = useContext(MyContext);
//   useEffect(() => {
//     async function fetchData() {
//       let response = await fetch(
//         `${process.env.REACT_APP_API_BASE}/api/portfolios`
//       );
//       let data = await response.json();
//       console.log(data, "Footer Data");
//     }
//     fetchData();
//   }, []);
//   return (
//     <Container>
//       <div>
//         {/* Title */}
//         <div className="experience-text-design mt-5 mb-3">
//           {footerData.title}
//         </div>

//         {/* Tech Stack */}
//         <div className="displayFlexTwoNumbers-second-Container mt-5 mb-5">
//           {footerData.techStack.map((tech, idx) => (
//             <button key={idx} className="fontSize-four">
//               <img
//                 src={tech.icon}
//                 style={{ width: `${tech.widthPx}px` }}
//                 alt={tech.label}
//               />{" "}
//               {tech.label}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Footer Section */}
//       <div>
//         <div className="backgroundColorYellow">
//           <div className="d-flex align-items-center gap-2">
//             <div className="backgroundColor-radius">
//               <img
//                 src={footerData.footer.profileImage}
//                 alt="profile"
//                 style={{ width: `${footerData.footer.profileWidthPx}px` }}
//               />
//             </div>
//             <div className="font-size-manage">
//               {footerData.footer.firstName}{" "}
//               <span className="fw-bold">{footerData.footer.lastName}</span>
//             </div>
//           </div>
//           <div className="font-size-manage">
//             {footerData.footer.designText}{" "}
//             <span className="fw-bold">{footerData.footer.designerName}</span>
//           </div>
//         </div>
//       </div>
//     </Container>
//   );
// }

// export default Footer;
import React, { useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container } from "react-bootstrap";
import footerData from "./data/Footer.json"; // fallback if API fails/empty

function Footer() {
  // const { toggle } = useContext(MyContext);

  const [apiItems, setApiItems] = useState(null); // will hold array from API
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    let ignore = false;

    async function fetchData() {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE}/api/portfolios`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();

        if (!ignore) setApiItems(Array.isArray(data) ? data : []);
        console.log(data, "Footer Data");
      } catch (e) {
        console.error("Footer API error:", e);
        if (!ignore) setErr(String(e.message || e));
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchData();
    return () => {
      ignore = true;
    };
  }, []);

  // currentData = API first item OR local fallback
  const currentData = useMemo(() => {
    if (apiItems && apiItems.length > 0) return apiItems[0];
    return footerData;
  }, [apiItems]);

  const title = currentData?.title || "Portfolio";
  const techStack = Array.isArray(currentData?.techStack)
    ? currentData.techStack
    : [];
  const footer = currentData?.footer || {};

  return (
    <Container>
      <div>
        {/* Title */}
        <div className="experience-text-design mt-5 mb-3">
          {title}
          {loading && (
            <span className="ms-2 small text-muted">(loading...)</span>
          )}
          {err && <span className="ms-2 small text-danger">({err})</span>}
        </div>

        {/* Tech Stack */}
        <div className="displayFlexTwoNumbers-second-Container mt-5 mb-5">
          {techStack.map((tech, idx) => (
            <button key={idx} className="fontSize-four">
              {tech?.icon && (
                <img
                  src={tech.icon}
                  style={{ width: `${Number(tech.widthPx || 30)}px` }}
                  alt={tech.label || `tech-${idx}`}
                />
              )}{" "}
              {tech?.label}
            </button>
          ))}
          {techStack.length === 0 && (
            <div className="text-muted">No tech stack added yet.</div>
          )}
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <div className="backgroundColorYellow">
          <div className="d-flex align-items-center gap-2">
            <div className="backgroundColor-radius">
              {footer?.profileImage && (
                <img
                  src={footer.profileImage}
                  alt="profile"
                  style={{ width: `${Number(footer.profileWidthPx || 30)}px` }}
                />
              )}
            </div>
            <div className="font-size-manage">
              {footer?.firstName}{" "}
              <span className="fw-bold">{footer?.lastName}</span>
            </div>
          </div>
          <div className="font-size-manage">
            {footer?.designText}{" "}
            <span className="fw-bold">{footer?.designerName}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Footer;
