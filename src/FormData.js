
import React, { useContext } from "react";
import './App.css';
import { MyContext } from "./MyContext";
import { Container , Row , Col, Card, Form } from "react-bootstrap";



function FormData(){
    const {toggle} = useContext(MyContext);
    return(
        toggle?(
            <>
            <Container>
            <div className="mt-5">
    <div className="background-light-borderRadius-padding">
        <h1 className="text-center fw-bold">
            Connect Me
        </h1>
        <Row className="mt-3 mb-3">
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (4).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Full Name*" className="BorderNone"/>
               

            </Form.Group>
</Col>
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (5).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Email*" className="BorderNone"/>
                

            </Form.Group>
</Col>
       
            
            </Row>
        
        <Row className="mt-2 mb-3">
       
            <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (6).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Mobile No." className="BorderNone"/>
                

            </Form.Group>
</Col>
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
               
                
                <Form.Control type="text" placeholder="Subject*" className="BorderNone-one"/>
                

            </Form.Group>
</Col>
       

        </Row>
        <Row>
        <Form.Group className="mt-3 mb-3 image-inputField-flex">
               <textarea placeholder="Message*" className="BorderNone-one height-width-setup">

               </textarea>
                
               

           </Form.Group>
           <div>
           
            <button className="imageAndtextButton-one">
            Send <img src="/Livello_2 (1).png" alt="livello" className="inner-image-button-one"/>
        </button>
           </div>
        </Row>
        <div className="posabsolute">
        <img src="/developer 1.png" alt="banner-image" style={{width:"250px"}} className="form-under-image"/>
        </div>
    </div>
    <hr className="horizontaline-one"/>
</div>
            </Container>
            </>):(
             <>
             <Container>
             <div className="mt-5">
    <div className="background-light-borderRadius-padding-dark">
        <h1 className="text-center fw-bold">
            Connect Me
        </h1>
        <Row className="mt-3 mb-3">
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (4).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Full Name*" className="BorderNone"/>
               

            </Form.Group>
</Col>
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (5).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Email*" className="BorderNone"/>
                

            </Form.Group>
</Col>
       
            
            </Row>
        
        <Row className="mt-2 mb-3">
       
            <Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
            <Form.Group className="mt-3 mb-3 image-inputField-flex">
                <div className="backgroundColorDifferent">
                <img src="/Frame (6).png" alt="user-profile" style={{width:"20px"}}/>
                </div>
                
                <Form.Control type="text" placeholder="Mobile No." className="BorderNone"/>
                

            </Form.Group>
</Col>
<Col xs={12} sm={6} md={6} lg={6} xl={6} xxl={6}>
<Form.Group className="mt-3 mb-3 image-inputField-flex">
               
                
                <Form.Control type="text" placeholder="Subject*" className="BorderNone-one"/>
                

            </Form.Group>
</Col>
       

        </Row>
        <Row>
        <Form.Group className="mt-3 mb-3 image-inputField-flex">
               <textarea placeholder="Message*" className="BorderNone-one height-width-setup">

               </textarea>
                
               

           </Form.Group>
           <div>
           
            <button className="imageAndtextButton-one">
            Send <img src="/Livello_2 (1).png" alt="livello" className="inner-image-button-one"/>
        </button>
           </div>
        </Row>
        <div className="posabsolute">
        <img src="/developer 1.png" alt="banner-image" style={{width:"250px"}}/>
        </div>
    </div>
    <hr className="horizontaline-one"/>
</div>
             </Container>
             </>
            )
    )
}
export default FormData;
