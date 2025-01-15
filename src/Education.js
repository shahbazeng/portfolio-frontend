
import React, { useContext } from "react";
import './App.css';
import { MyContext } from "./MyContext";
import { Container , Row , Col, Card, Form } from "react-bootstrap";


function Education(){
    const {toggle} = useContext(MyContext);
    return(
        toggle?(
       <>
       <Container>
       <div>
        <div className="font-size-setup">
        Education
        </div>

        <Row className="mt-5">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
     
            <div className="backgroundColorOnCard">
                <div className="dflexjustspaceBetween">
<div>
    <button className="image-design">
        <img src="/Frame.png" className="mt-2 buttonImg" />2017-2020
    </button>
</div>
<div>
    <button className="image-design-one">
        <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Graduation
    </button>
</div>
</div>
<div className="disgap">
<button className="degreeButton">
Bachelor's Degree
</button>
<div>
    <button className="BCAbutton">
    BCA
    </button>
</div>
</div>
<div>
    <div className="mt-3 card-text">Bachelor of Computer Applications</div>
</div>
<div className="twoitemsinOneLine">
    <div className="bgWhite">
        <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
    </div>
    <div className="alignitems">
    Veer Narmad South Gujarat University  
        </div>
</div>
<div className="twoitemsinOneLine">
    <div className="bgWhite">
        <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
    </div>
    <div className="alignitems">
    Surat, Gujrat, India 
        </div>
</div>


            </div>
           
           
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
     
     <div className="backgroundColorOnCard-secondContainer">
         <div className="dflexjustspaceBetween">
<div>
<button className="image-design">
 <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2020-2022
</button>
</div>
<div>
<button className="image-design-one-secondContainer">
 <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Post Graduation
</button>
</div>
</div>
<div className="disgap">
<button className="degreeButton-secondContainer">
Master's Degree
</button>
<div>
<button className="BCAbutton-secondContainer">
MCA
</button>
</div>
</div>
<div>
<div className="mt-3 card-text">Master of Computer Applications</div>
</div>
<div className="twoitemsinOneLine">
<div className="bgWhite-secodContainer">
 <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
</div>
<div className="alignitems">
Parul University 
 </div>
</div>
<div className="twoitemsinOneLine">
<div className="bgWhite-secodContainer">
 <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
</div>
<div className="alignitems">
Vadodara, Gujrat , India
 </div>
</div>


     </div>
    
    
     </Col>
        </Row>
        <hr className="horizontaline"/>
    </div>
       </Container>
       </>
        ):(<>
        <Container>
        <div>
        <div className="font-size-setup">
        Education
        </div>

        <Row className="mt-5">
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
     
            <div className="backgroundColorOnCard">
                <div className="dflexjustspaceBetween">
<div>
    <button className="image-design">
        <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2017-2020
    </button>
</div>
<div>
    <button className="image-design-one">
        <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Graduation
    </button>
</div>
</div>
<div className="disgap">
<button className="degreeButton">
Bachelor's Degree
</button>
<div>
    <button className="BCAbutton">
    BCA
    </button>
</div>
</div>
<div>
    <h3 className="mt-3">Bachelor of Computer Applications</h3>
</div>
<div className="twoitemsinOneLine">
    <div className="bgWhite">
        <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
    </div>
    <div className="alignitems">
    Veer Narmad South Gujarat University  
        </div>
</div>
<div className="twoitemsinOneLine">
    <div className="bgWhite">
        <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
    </div>
    <div className="alignitems">
    Surat, Gujrat, India 
        </div>
</div>


            </div>
           
           
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
     
     <div className="backgroundColorOnCard-secondContainer-dark">
         <div className="dflexjustspaceBetween">
<div>
<button className="image-design">
 <img src="/Frame.png" className="mt-2" style={{width:"30px"}}/>2020-2022
</button>
</div>
<div>
<button className="image-design-one-secondContainer">
 <img src="/education 1.png" className="mt-2" style={{width:"30px"}}/>Post Graduation
</button>
</div>
</div>
<div className="disgap">
<button className="degreeButton-secondContainer">
Master's Degree
</button>
<div>
<button className="BCAbutton-secondContainer">
MCA
</button>
</div>
</div>
<div>
<h3 className="mt-3">Master of Computer Applications</h3>
</div>
<div className="twoitemsinOneLine">
<div className="bgWhite-secodContainer">
 <img src="/Group.png" alt="group-img" style={{width:"20px"}}/>
</div>
<div className="alignitems">
Parul University 
 </div>
</div>
<div className="twoitemsinOneLine">
<div className="bgWhite-secodContainer">
 <img src="/Vector.png" alt="group-img" style={{width:"16px"}}/>
</div>
<div className="alignitems">
Vadodara, Gujrat , India
 </div>
</div>


     </div>
    
    
     </Col>
        </Row>
        <hr className="horizontaline"/>
    </div>
            </Container>
        </>)
    )
}
export default Education;