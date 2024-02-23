import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image from "../../assets/icons/education.png";
import Loading from "../../components/utilities/Loading/Loading";
const EducationPage = ({ loading }) => {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      {loading === false ? (
        <section className="education">
          <Container>
            <div className="education-content">
              <Row>
                <Col sm={{ span: 12 }} lg={{ span: 4 }} className="p-md-0">
                  <div className="image">
                    <h2>Muhammed Abo Lila</h2>
                  </div>
                </Col>
                <Col sm={{ span: 12 }} lg={{ span: 8 }} className="p-md-0">
                  <Slider {...settings}>
                    <div className="education-container">
                      <Row>
                        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
                          <div className="content">
                            <h3>Cairo University , FOC</h3>
                            <div className="date">9/2012 - 5/2017</div>
                            <div className="brdr"></div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Officiis, esse?
                            </p>
                          </div>
                        </Col>

                        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
                          <div className="content">
                            <h3>Cairo University , FOC</h3>
                            <div className="date">9/2012 - 5/2017</div>
                            <div className="brdr"></div>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Veniam ab assumenda quas in
                              esse. Est.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="education-container">
                      <Row>
                        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
                          <div className="content">
                            <h3>Cairo University , FOC</h3>
                            <div className="date">9/2012 - 5/2017</div>
                            <div className="brdr"></div>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Officiis, esse?
                            </p>
                          </div>
                        </Col>

                        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
                          <div className="content">
                            <h3>Cairo University , FOC</h3>
                            <div className="date">9/2012 - 5/2017</div>
                            <div className="brdr"></div>
                            <p>
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Veniam ab assumenda quas in
                              esse. Est.
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Slider>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      ) : (
        <Loading image={image} text="Education" />
      )}
    </>
  );
};

export default EducationPage;
