import React, { useContext } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col } from "react-bootstrap";
import { MdOutlineFileDownload } from "react-icons/md";
import aboutData from "./data/About.json";

function About() {
  const { toggle } = useContext(MyContext);

  return (
    <Container>
      <div>
        <div className="second-conatiner">{aboutData.sectionTitle}</div>
        <div className="fzImageText">
          <img
            src={aboutData.user.avatar}
            style={{ width: toggle ? "80px" : "50px" }}
            alt="profile"
          />
          {toggle ? aboutData.user.name : "I Love"}
        </div>

        <Row className="mt-5">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            xxl={6}
            className="fourButtonsWrapIndiv"
          >
            {toggle ? (
              // Light theme: grid layout for buttons
              <div className="buttonsGrid">
                {aboutData.hobbies.slice(0, 4).map((item, index) => (
                  <button key={index} className="fontSizeTwo">
                    <img src={item.icon} alt="icon" style={{ width: "30px" }} />
                    {item.title}
                  </button>
                ))}
              </div>
            ) : (
              // Dark theme: two rows layout
              <>
                <div className="display-flex-gap">
                  {aboutData.hobbies.slice(0, 2).map((item, idx) => (
                    <button key={idx} className="fontSizeOne bg-light-button">
                      <img src={item.icon} style={{ width: "30px" }} />
                      {item.title}
                    </button>
                  ))}
                </div>
                <div className="display-flex-gap">
                  {aboutData.hobbies.slice(2, 4).map((item, idx) => (
                    <button key={idx} className="fontSizeTwo bg-light-button">
                      <img src={item.icon} style={{ width: "30px" }} />
                      {item.title}
                    </button>
                  ))}
                </div>
              </>
            )}
          </Col>

          <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>

          <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
            <div className="twoContainerdisplayFlex">
              {aboutData.stats.map((stat, idx) => (
                <div className="width-height-div" key={idx}>
                  <div className="textManageColor">{stat.value}</div>
                  <div className="year">{stat.top}</div>
                  <div className="experience">{stat.bottom}</div>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <div className="background-setup">{aboutData.user.description}</div>

        <div className="align-center">
          <button className="imageText">
            <MdOutlineFileDownload className="svgIconOne" />{" "}
            {aboutData.cta.label}
          </button>
        </div>

        <hr className="horizontaline" />
      </div>
    </Container>
  );
}

export default About;

// import React, { useContext } from "react";
// import "./App.css";
// import { MyContext } from "./MyContext";
// import { Container, Row, Col, Card, Form } from "react-bootstrap";
// import { MdOutlineFileDownload } from "react-icons/md";
// import { useEffect } from "react";
// import { useState } from "react";
// import axios from "axios";

// function About() {
//   const [result2, setResult2] = useState([]);
//   const [userData, setUserData] = useState([]);

//   const { toggle } = useContext(MyContext);

//   useEffect(() => {
//     axios.get("http://localhost:5000/about_section").then((res) => {
//       setResult2(res.data.result2);
//       setUserData(res.data.user);
//       console.log("res resul 2", res.data.result2);
//       console.log("res user data", res.data.user);
//     });
//   }, []);
//   return toggle ? (
//     <>
//       <Container>
//         <div>
//           <div className="second-conatiner">About Me</div>
//           <div className="fzImageText">
//             <img
//               src={`http://localhost:5000/${userData.profile_image}`}
//               style={{ width: "80px" }}
//             />
//             {userData.name}
//           </div>
//           <Row className="mt-5">
//             <Col
//               xs={12}
//               sm={12}
//               md={12}
//               lg={6}
//               xl={6}
//               xxl={6}
//               className="fourButtonsWrapIndiv"
//             >
//               <div className="buttonsGrid">
//                 {result2.slice(0, 4).map((item, index) => (
//                   <button key={index} className="fontSizeTwo">
//                     <img
//                       src={`http://localhost:5000/${item.icon}`}
//                       alt="icon"
//                       style={{ width: "30px" }}
//                     />
//                     {item.title}
//                   </button>
//                 ))}
//               </div>
//             </Col>

//             <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>
//             <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
//               <div className="twoContainerdisplayFlex">
//                 <div className="width-height-div">
//                   <div className="textManageColor">{userData.experience}+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//                 <div className="width-height-div">
//                   <div className="textManageColor">{userData.experience}+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//           {/* <Row className="mt-5">
//             <Col
//               xs={12}
//               sm={12}
//               md={12}
//               lg={6}
//               xl={6}
//               xxl={6}
//               className="fourButtonsWrapIndiv"
//             >
//               <div className="display-flex-gap">
//                 <button className="fontSizeOne">
//                   <img src="/headphones 1.png" style={{ width: "30px" }} />
//                   Listeing to Music
//                 </button>
//                 <button className="fontSizeOne">
//                   <img src="/travel 1.png" style={{ width: "30px" }} />
//                   Travelling
//                 </button>
//               </div>
//               <div className="display-flex-gap">
//                 <button className="fontSizeTwo">
//                   <img src="/mountain 1.png" style={{ width: "30px" }} />
//                   Mountains
//                 </button>
//                 <button className="fontSizeTwo">
//                   <img src="/flying-money 1.png" style={{ width: "30px" }} />
//                   Money
//                 </button>
//               </div>
//             </Col>
//             <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>
//             <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
//               <div className="twoContainerdisplayFlex">
//                 <div className="width-height-div">
//                   <div className="textManageColor">{userData.experience}+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//                 <div className="width-height-div">
//                   <div className="textManageColor">{userData.experience}+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//               </div>
//             </Col>
//           </Row> */}
//           <div className="background-setup">
//             {/* A Passionate Front End Developer with a Master's and Computer
//             Application and over 3.9 Years of experience in crafting captivating
//             digital experience. My expertise lies in leveraging cutting-edge
//             technologies such a ReactJS, NextJS,Apollo GraphQL, Redux, React
//             Query and various UI frameworksincluding Material UI, NextUI, SCSS,
//             Tailwind CSS, Chakra and Bootstrap. I take pride in my ability to
//             design seamless users interfaces and components that align perfectly
//             with the intended aesthetic,creating responsive website that adapt
//             gracefully to any device. My skill set also extends to proficientAPI
//             integration, ensuring the seamless flow of data between front end
//             and back end. In addition, I am known for writting clean
//             well-structured code that not only functions flawlessly but also
//             enchances the overall maintainabillity of projects. With a track
//             record of contributing to well-known products
//             likeCricTracker,Sportsbuzz, and epiko market, I am commited to
//             pushing the boundries of web develp to deliver the exceptional
//             digital solution. */}
//             {userData.description}
//           </div>
//           <div className="align-center">
//             <button className="imageText">
//               <MdOutlineFileDownload className="svgIconOne" /> Contact Me
//             </button>
//           </div>

//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   ) : (
//     <>
//       <Container>
//         <div>
//           <div className="second-conatiner">About Me</div>
//           <div className="fzImageText">
//             <img src="/Ellipse 9.png" style={{ width: "50px" }} /> I Love
//           </div>
//           <Row className="mt-5">
//             <Col
//               xs={12}
//               sm={12}
//               md={12}
//               lg={6}
//               xl={6}
//               xxl={6}
//               className="fourButtonsWrapIndiv"
//             >
//               <div className="display-flex-gap">
//                 <button className="fontSizeOne bg-light-button">
//                   <img src="/headphones 1.png" style={{ width: "30px" }} />
//                   Listeing to Music
//                 </button>
//                 <button className="fontSizeOne bg-light-button">
//                   <img src="/travel 1.png" style={{ width: "30px" }} />
//                   Travelling
//                 </button>
//               </div>
//               <div className="display-flex-gap">
//                 <button className="fontSizeTwo bg-light-button">
//                   <img src="/mountain 1.png" style={{ width: "30px" }} />
//                   Mountains
//                 </button>
//                 <button className="fontSizeTwo bg-light-button">
//                   <img src="/flying-money 1.png" style={{ width: "30px" }} />
//                   Money
//                 </button>
//               </div>
//             </Col>
//             <Col xs={0} sm={0} md={1} lg={1} xl={1} xxl={1}></Col>
//             <Col xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
//               <div className="twoContainerdisplayFlex">
//                 <div className="width-height-div">
//                   <div className="textManageColor">3.9+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//                 <div className="width-height-div">
//                   <div className="textManageColor">3.9+</div>
//                   <div className="year">Years</div>
//                   <div className="experience">Experience</div>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//           <div className="background-setup">
//             A Passionate Front End Developer with a Master's and Computer
//             Application and over 3.9 Years of experience in crafting captivating
//             digital experience. My expertise lies in leveraging cutting-edge
//             technologies such a ReactJS, NextJS,Apollo GraphQL, Redux, React
//             Query and various UI frameworksincluding Material UI, NextUI, SCSS,
//             Tailwind CSS, Chakra and Bootstrap. I take pride in my ability to
//             design seamless users interfaces and components that align perfectly
//             with the intended aesthetic,creating responsive website that adapt
//             gracefully to any device. My skill set also extends to proficientAPI
//             integration, ensuring the seamless flow of data between front end
//             and back end. In addition, I am known for writting clean
//             well-structured code that not only functions flawlessly but also
//             enchances the overall maintainabillity of projects. With a track
//             record of contributing to well-known products
//             likeCricTracker,Sportsbuzz, and epiko market, I am commited to
//             pushing the boundries of web develp to deliver the exceptional
//             digital solution.
//           </div>
//           <div className="align-center">
//             <button className="imageText">
//               <MdOutlineFileDownload className="svgIconOne" /> Contact Me
//             </button>
//           </div>

//           <hr className="horizontaline" />
//         </div>
//       </Container>
//     </>
//   );
// }
// export default About;
