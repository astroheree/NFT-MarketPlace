import React, { useRef } from "react";

import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");

  
  return (
    <>
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" className="m-auto text-center">
              <h2>Drop a Message</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus ipsum aperiam cumque fugit suscipit animi natus
                nostrum voluptatem iste quam!
              </p>
              <div className="contact mt-4">
                <form action="https://formsubmit.co/21e35dba02214dd642b6d7b599c69d1c" method="POST">
                  <div className="form__input">
                    <input
                      type="text"
                      name = "name"
                      placeholder="Enter your name"
                      
                    required/>
                  </div>
                  <div className="form__input">
                    <input
                      type="email"
                      name = "email"
                      placeholder="Enter your email"
                    
                    required/>
                  </div>
                  <div className="form__input">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Enter subject"
                    required/>
                  </div>
                  {/* <div className="form__input">
                    <input
                      type="hidden"
                      name= "_captcha"
                      value="false"                     
                    />
                  </div> */}
                  <div className="form__input">
                    <input
                      type="hidden"
                      name= "_template"
                      value="table"                     
                    />
                    </div>
                    <div className="form__input">
                    <input
                      type="hidden"
                      name= "_autoresponse"
                      value="Thankyou for Writing the mail we'll get back to you soon"                     
                    />
                  </div>
                  <div className="form__input">
                    <textarea
                      rows="7"
                      placeholder="Write message"
                      name="message"
                    ></textarea>
                  </div>

                  <button
                    className="send__btn"
                    style={{
                      border: "none",
                      padding: "7px 25px",
                      borderRadius: "5px",
                      marginTop: "20px",
                    }}
                  >
                    Send a Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
