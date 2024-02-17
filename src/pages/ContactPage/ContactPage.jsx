import React from "react";
import BottomNavbar from "../../components/utilities/BottomNavbar/BottomNavbar";
import TopNavbar from "../../components/utilities/TopNavbar/TopNavbar";
import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "../../components/utilities/SocialLinks/SocialLinks";

const ContactPage = () => {
  return (
    <>
      <TopNavbar text="Contact me"/>
      <section className="contact-me">
        <Container>
          <Row>
            <Col xs={{span:12}} lg={{span:7}}>
              <div className="content">
                <div className="caption">
                  <h3>get in touch</h3>
                  <h4>get real</h4>
                  <p>
                    Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit.
                    Accusamus Aperiam Architecto Asperiores At Beatae
                    Consequatur Distinctio Doloribus Ea, Eveniet Excepturi
                    Exercitationem Libero Magnam Mollitia.
                  </p>
                </div>
                <SocialLinks/>
              </div>
            </Col>
            <Col xs={{span:12}} lg={{span:5}}>
              <div className="form">
                <input className="form-control"  type="text" placeholder="Your name"/>
                <input className="form-control" type="text" placeholder="subject"/>
                <input className="form-control" type="email"  placeholder="Your e-mail"/>
                <textarea className="form-control" placeholder="Your message"></textarea>
                <button className="btn">send</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <BottomNavbar />
    </>
  );
};

export default ContactPage;