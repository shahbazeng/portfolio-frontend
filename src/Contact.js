import React, { useContext } from "react";
import "./App.css";
import { MyContext } from "./MyContext";
import { Container, Row, Col, Card, Form } from "react-bootstrap";

function Contact() {
  const { toggle } = useContext(MyContext);
  return toggle ? (
    <>
      <Container>
        <div>
          <div className="experience-text-design mt-5 mb-3">
            Connect With Me
          </div>

          <div className="image-middle-align-one mt-4">
            <button className="imageAndtextButton">
              <img
                src="/linkedin.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Linkedin
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (15) 5.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Instagram
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (16) 2.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Facebook
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (17) 2.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Telegram
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (18) 2.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Twitter
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (29) 1.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Skype
            </button>
          </div>
          <div className="image-middle-align-one">
            <button className="imageAndtextButton mt-2">
              <img
                src="/download (30) 1.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              nikunjthesiya.js@gmail.com
            </button>
          </div>
          <div className="image-middle-align mt-3">
            <img
              src="/developer 1.png"
              alt="banner-image"
              style={{ width: "250px" }}
            />
          </div>
          <hr className="horizontaline" />
        </div>
      </Container>
    </>
  ) : (
    <>
      <Container>
        <div>
          <div className="experience-text-design mt-5 mb-3">
            Connect With Me
          </div>

          <div className="image-middle-align-one mt-4">
            <button className="imageAndtextButton">
              <img
                src="/linkedin.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Linkedin
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (15) 5.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Instagram
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (16) 2.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Facebook
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (17) 2.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Telegram
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (18) 2.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Twitter
            </button>
            <button className="imageAndtextButton">
              <img
                src="/download (29) 1.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              Skype
            </button>
          </div>
          <div className="image-middle-align-one">
            <button className="imageAndtextButton mt-2">
              <img
                src="/download (30) 1.png"
                alt="linkedin-image"
                className="inner-image-button"
              />
              nikunjthesiya.js@gmail.com
            </button>
          </div>
          <div className="image-middle-align mt-3">
            <img
              src="/developer 1.png"
              alt="banner-image"
              style={{ width: "250px" }}
            />
          </div>
          <hr className="horizontaline" />
        </div>
      </Container>
    </>
  );
}
export default Contact;
