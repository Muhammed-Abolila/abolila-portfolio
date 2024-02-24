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
                  </div>
                </Col>
                <Col sm={{ span: 12 }} lg={{ span: 8 }} className="p-md-0">
                  <Slider {...settings}>
                    <div className="education-container">
                      <Row>
                        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
                          <div className="content">
                            <h3>
                              Front-End Diploma <br />
                              <span>Provider : Route Academy</span>
                            </h3>
                            <div className="date">9/2022 - 12/2022</div>
                            <div className="brdr"></div>
                            <ul>
                              <li>
                                Attained excellent skills developing frontend
                                interfaces using HTML5, CSS3, Bootstrap5,
                                Js(ES6,OOP), Sass, React.js and Redux.js
                              </li>
                              <li>
                                Demonstrated practical abilities through the
                                implementation of a variety of innovative and
                                realistic projects in frontend development.
                              </li>
                            </ul>
                          </div>
                        </Col>

                        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
                          <div className="content">
                            <h3>
                              React.js with Redux <br />
                              <span>Provider : Index Academy</span>
                            </h3>
                            <div className="date">8/2023 - 12/2023</div>
                            <div className="brdr"></div>
                            <ul>
                              <li>
                                learning redux.js in deepth with react.js
                              </li>
                              <li>
                                Building a full e-commerce website from scratch
                                with React.js and Redux involves creating a
                                complete online store with features like product
                                listing, product details, shopping cart, user
                                authentication and more..
                              </li>
                            </ul>
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
