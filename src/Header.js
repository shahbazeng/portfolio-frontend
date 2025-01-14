import React, { useContext } from 'react';
import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap'

import { MdOutlineMenu } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { IoMoonOutline } from "react-icons/io5";
import { MyContext } from './MyContext';






function Header(){
const {toggle , toggleHandler} = useContext(MyContext);
   
    
    return(
        toggle?(
        <div>
         <Container>
            <Navbar className='bg-light  borderRounded' expand="lg">
              
                <Navbar.Brand className='bg-dark borderradius'>
                    <img src='/NJ.png' alt='nj.png' className='img'/>
                </Navbar.Brand>
               
               

           <Navbar.Toggle aria-controls='my-nav' className='marginRight'/>
           <Navbar.Collapse id='my-nav'>
            <Nav  className='w-100 displayflex'>
                

               
                    <span className='disflex'>
                        <div>
                        <Nav.Link href='#'>
                    
                    NIKUNJ<span className='fw-bold'>THESIYA</span>
                    </Nav.Link>
                        </div>
                  
                    {/* <div className='fontWeight'>
                    <Nav.Link href='#'>
                    THESIYA
                    </Nav.Link>
                    </div> */}
                    
</span>


           <div className='disflex'>
            <Nav.Link href='/'>
           
            <div className="backgroundColor-radius-one" onClick={toggleHandler}>
           {
            toggle? <IoMoonOutline className='img-one'/>: <FiSun className='img-one'/>
           }
           
           
          
       </div>
           
           
            </Nav.Link>
            <Nav.Link href='#'>
                <div className='color-dark'>
                    menu
                </div>
            </Nav.Link>
            <Nav.Link href='#'>
                <div className='backgroundYellow'>
                    <MdOutlineMenu style={{fontSize:"25px"}}/>
                   
                </div>

            </Nav.Link>

           
            </div>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </Container> 

        </div>):(<div>
         <Container>
            <Navbar className='borderRounded bg-dark' variant='dark' expand="lg">
              
                <Navbar.Brand className='bg-dark borderradius'>
                    <img src='/NJ.png' alt='nj.png' className='img'/>
                </Navbar.Brand>
               
               

           <Navbar.Toggle aria-controls='my-nav' className='marginRight'/>
           <Navbar.Collapse id='my-nav'>
            <Nav  className='w-100 displayflex'>
                

               
                    <span className='disflex'>
                        <div>
                        <Nav.Link href='#'>
                    
                    NIKUNJ<span className='fw-bold'>THESIYA</span>
                    </Nav.Link>
                        </div>
                  
                    {/* <div className='fontWeight'>
                    <Nav.Link href='#'>
                    THESIYA
                    </Nav.Link>
                    </div> */}
                    
</span>


           <div className='disflex'>
            <Nav.Link href='/'>
           
            <div className="backgroundColor-radius-one-dark" onClick={toggleHandler}>
           {
            toggle? <IoMoonOutline className='img-one'/>: <FiSun className='img-one text-dark'/>
           }
           
           
          
       </div>
           
           
            </Nav.Link>
            <Nav.Link href='#'>
                <div className='color-dark-light'>
                    menu
                </div>
            </Nav.Link>
            <Nav.Link href='#'>
                <div className='backgroundYellow'>
                    <MdOutlineMenu style={{fontSize:"25px"}}/>
                   
                </div>

            </Nav.Link>

           
            </div>
            </Nav>
            </Navbar.Collapse>
            </Navbar>
            </Container> 

        </div>)
    )
}
export default Header;


























