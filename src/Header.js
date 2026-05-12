// import React, { useContext } from "react";
// import "./App.css";
// import { Container, Nav, Navbar } from "react-bootstrap";

// import { MdOutlineMenu } from "react-icons/md";
// import { FiSun } from "react-icons/fi";
// import { IoMoonOutline } from "react-icons/io5";
// import { MyContext } from "./MyContext";

// function Header() {
//   const { toggle, toggleHandler } = useContext(MyContext);

//   return toggle ? (
//     <div>
//       <Container>
//         <Navbar className="bg-light  borderRounded p-0" expand="lg">
//           <Navbar.Brand className="bg-dark borderradius">
//             <img src="/NJ.png" alt="nj.png" className="img" />
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="my-nav" className="marginRight" />
//           <Navbar.Collapse id="my-nav">
//             <Nav className="w-100 displayflex">
//               <span className="disflex">
//                 <div>
//                   <Nav.Link href="#">
//                     Shahbaz<span className="fw-bold">Ali</span>
//                   </Nav.Link>
//                 </div>

//                 {/* <div className='fontWeight'>
//                     <Nav.Link href='#'>
//                     THESIYA
//                     </Nav.Link>
//                     </div> */}
//               </span>

//               <div className="disflex">
//                 <Nav.Link href="/">
//                   <div
//                     className="backgroundColor-radius-one"
//                     onClick={toggleHandler}
//                   >
//                     {toggle ? (
//                       <IoMoonOutline className="img-one" />
//                     ) : (
//                       <FiSun className="img-one" />
//                     )}
//                   </div>
//                 </Nav.Link>
//                 <Nav.Link href="#">
//                   <div className="color-dark">menu</div>
//                 </Nav.Link>
//                 <Nav.Link href="#">
//                   <div className="backgroundYellow">
//                     <MdOutlineMenu style={{ fontSize: "25px" }} />
//                   </div>
//                 </Nav.Link>
//               </div>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </Container>
//     </div>
//   ) : (
//     <div>
//       <Container>
//         <Navbar className="borderRounded bg-dark" variant="dark" expand="lg">
//           <Navbar.Brand className="bg-dark borderradius">
//             <img src="/NJ.png" alt="nj.png" className="img" />
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="my-nav" className="marginRight" />
//           <Navbar.Collapse id="my-nav">
//             <Nav className="w-100 displayflex">
//               <span className="disflex">
//                 <div>
//                   <Nav.Link href="#">
//                     Shahbaz<span className="fw-bold">Ali</span>
//                   </Nav.Link>
//                 </div>

//                 {/* <div className='fontWeight'>
//                     <Nav.Link href='#'>
//                     THESIYA
//                     </Nav.Link>
//                     </div> */}
//               </span>

//               <div className="disflex">
//                 <Nav.Link href="/">
//                   <div
//                     className="backgroundColor-radius-one-dark"
//                     onClick={toggleHandler}
//                   >
//                     {toggle ? (
//                       <IoMoonOutline className="img-one" />
//                     ) : (
//                       <FiSun className="img-one text-dark" />
//                     )}
//                   </div>
//                 </Nav.Link>
//                 <Nav.Link href="#">
//                   <div className="color-dark-light">menu</div>
//                 </Nav.Link>
//                 <Nav.Link href="#">
//                   <div className="backgroundYellow">
//                     <MdOutlineMenu style={{ fontSize: "25px" }} />
//                   </div>
//                 </Nav.Link>
//               </div>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </Container>
//     </div>
//   );
// }
// export default Header;
// -------------------------------------------------------------------------------------
//without integration api

// import React, { useContext, useEffect } from "react";
// import "./App.css";
// import ParticleField from "./ParticleField";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import { MdOutlineMenu } from "react-icons/md";
// import { FiSun } from "react-icons/fi";
// import { IoMoonOutline } from "react-icons/io5";
// import { MyContext } from "./MyContext";
// import headerData from "./data/Header.json";

// function Header() {
//   const { toggle, toggleHandler } = useContext(MyContext);
//   const theme = toggle ? "light" : "dark";
//   const cls = headerData.classes[theme];
//   useEffect(() => {
//     async function fetchData() {
//       let response = await fetch(
//         `${process.env.REACT_APP_API_BASE}/api/headers`
//       );
//       let data = await response.json();
//       console.log(data, "header data");
//     }
//     fetchData();
//   }, []);
//   return (
//     <div>
//       <ParticleField
//         dotColor="rgba(255,255,255,0.9)"
//         lineColor="rgba(255,255,255,0.45)"
//         density={0.001}
//         linkRadius={150}
//         fadeOutMs={600}
//       />
//       <Container>
//         <Navbar className={cls.navbar} variant={cls.variant} expand="lg">
//           <Navbar.Brand className={headerData.brand.wrapperClass}>
//             <img
//               src={headerData.brand.logo.src}
//               alt={headerData.brand.logo.alt}
//               className={headerData.brand.logo.className}
//             />
//           </Navbar.Brand>

//           <Navbar.Toggle aria-controls="my-nav" className="marginRight" />
//           <Navbar.Collapse id="my-nav">
//             <Nav className="w-100 displayflex">
//               {/* Left: Name */}
//               <span className="disflex">
//                 <div>
//                   <Nav.Link href={headerData.user.profileHref}>
//                     {headerData.user.firstName}
//                     <span className="fw-bold">{headerData.user.lastName}</span>
//                   </Nav.Link>
//                 </div>
//               </span>

//               {/* Right: Theme toggle + menu */}
//               <div className="disflex">
//                 <Nav.Link href={headerData.toggleLinkHref}>
//                   <div className={cls.moonSunWrapper} onClick={toggleHandler}>
//                     {toggle ? (
//                       <IoMoonOutline className="img-one" />
//                     ) : (
//                       <FiSun className="img-one text-dark" />
//                     )}
//                   </div>
//                 </Nav.Link>

//                 <Nav.Link href={headerData.menu.menuHref}>
//                   <div className={cls.menuText}>{headerData.menu.label}</div>
//                 </Nav.Link>

//                 <Nav.Link href={headerData.menu.menuHref}>
//                   <div className={headerData.menu.iconWrapperClass}>
//                     <MdOutlineMenu
//                       style={{ fontSize: headerData.menu.burgerIconSize }}
//                     />
//                   </div>
//                 </Nav.Link>
//               </div>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </Container>
//     </div>
//   );
// }
// export default Header;

import React, { useContext, useEffect, useMemo, useState } from "react";
import "./App.css";
// import ParticleField from "./ParticleField";
import { Container, Nav, Navbar } from "react-bootstrap";
import { MdOutlineMenu } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { MyContext } from "./MyContext";
import headerDataFallback from "./data/Header.json";

function Header() {
  const { toggle, toggleHandler } = useContext(MyContext);
  const [items, setItems] = useState(null);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  // fetch headers (array)
  useEffect(() => {
    let ignore = false;
    (async () => {
      try {
        setLoading(true);
        setErr("");
        const res = await fetch(
          `${process.env.REACT_APP_API_BASE}/api/headers`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json(); // expects []
        if (!ignore) setItems(Array.isArray(data) ? data : []);
        console.log(data, "header data");
      } catch (e) {
        console.error("Header API error:", e);
        if (!ignore) setErr(String(e.message || e));
      } finally {
        if (!ignore) setLoading(false);
      }
    })();
    return () => {
      ignore = true;
    };
  }, []);

  // pick first header or fallback
  const headerData = useMemo(() => {
    if (items && items.length > 0) return items[0];
    return headerDataFallback;
  }, [items]);

  const theme = toggle ? "light" : "dark";
  const cls = headerData?.classes?.[theme] ?? headerDataFallback.classes[theme];

  return (
    <div>
      {/* <ParticleField
        dotColor="rgba(255,255,255,0.9)"
        lineColor="rgba(255,255,255,0.45)"
        density={0.001}
        linkRadius={150}
        fadeOutMs={600}
      /> */}

      <Container>
        <Navbar className={cls?.navbar} variant={cls?.variant} expand="lg">
          <Navbar.Brand className={headerData?.brand?.wrapperClass}>
            <img
              src={headerData?.brand?.logo?.src}
              alt={headerData?.brand?.logo?.alt || "logo"}
              className={headerData?.brand?.logo?.className}
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="my-nav" className="marginRight" />
          <Navbar.Collapse id="my-nav">
            <Nav className="w-100 displayflex">
              {/* Left: Name */}
              <span className="disflex">
                <div>
                  <Nav.Link href={headerData?.user?.profileHref || "#"}>
                    {headerData?.user?.firstName}{" "}
                    <span className="fw-bold">
                      {headerData?.user?.lastName}
                    </span>
                  </Nav.Link>
                </div>
              </span>

              {/* Right: Theme toggle + menu */}
              <div className="disflex">
                <Nav.Link href={headerData?.toggleLinkHref || "#"}>
                  <div className={cls?.moonSunWrapper} onClick={toggleHandler}>
                    {toggle ? (
                      <IoMoonOutline className="img-one" />
                    ) : (
                      <FiSun className="img-one text-dark" />
                    )}
                  </div>
                </Nav.Link>

                <Nav.Link href={headerData?.menu?.menuHref || "#"}>
                  <div className={cls?.menuText}>{headerData?.menu?.label}</div>
                </Nav.Link>

                <Nav.Link href={headerData?.menu?.menuHref || "#"}>
                  <div className={headerData?.menu?.iconWrapperClass}>
                    <MdOutlineMenu
                      style={{
                        fontSize: headerData?.menu?.burgerIconSize || 24,
                      }}
                    />
                  </div>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* optional small status */}
        {loading && (
          <div className="small text-muted mt-1">Loading header…</div>
        )}
        {err && <div className="small text-danger mt-1">Failed: {err}</div>}
      </Container>
    </div>
  );
}

export default Header;
