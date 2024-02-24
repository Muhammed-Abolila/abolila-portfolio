import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "../../components/utilities/SocialLinks/SocialLinks";
import image from "../../assets/icons/contact.png";
import Loading from "../../components/utilities/Loading/Loading";
const ContactPage = ({ loading }) => {
  return (
    <>
      {loading === false ? (
        <section className="contact-me">
          <Container>
            <Row>
              <Col xs={{ span: 12 }} lg={{ span: 7 }}>
                <div className="content">
                  <div className="caption">
                    <h3>get in touch</h3>
                    <h4>get real</h4>
                    <p>
                      Whether you're looking for answers, need help, or want to
                      explore our services further, we're here to help. Contact
                      us today and experience the real difference we can make.
                      <br />
                      We are committed to ensuring your satisfaction, achieving
                      real value, and providing exceptional solutions for your
                      experience.
                    </p>
                  </div>
                  <SocialLinks />
                </div>
              </Col>
              <Col xs={{ span: 12 }} lg={{ span: 5 }}>
                <div className="form">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Your name"
                  />
                  <input
                    className="form-control"
                    type="text"
                    placeholder="subject"
                  />
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Your e-mail"
                  />
                  <textarea
                    className="form-control"
                    placeholder="Your message"
                  ></textarea>
                  <button className="btn">send</button>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      ) : (
        <Loading image={image} text="Contact" />
      )}
    </>
  );
};

export default ContactPage;
