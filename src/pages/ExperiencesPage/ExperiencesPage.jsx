import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import image from "../../assets/icons/experiences.png";
import Loading from "../../components/utilities/Loading/Loading";
import myCv from "../../assets/Muhammed Abo Lila Front End Developer.pdf";
const ExperiencesPage = ({ loading }) => {
  console.log(loading + "experiences");
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
        <section className="experiences">
          <Container>
            <div className="experiences-content">
              <Row>
                <Col sm={{ span: 12 }} lg={{ span: 4 }} className="p-md-0">
                  <div className="image">
                    <a
                      href={myCv}
                      download="Muhammed Abo Lila Front End Developer"
                    >
                      Download CV
                    </a>
                  </div>
                </Col>
                <Col sm={{ span: 12 }} lg={{ span: 8 }} className="p-md-0">
                  <Slider {...settings}>
                    <div className="experiences-container">
                      <Row>
                        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
                          <div className="content">
                            <h3>
                              Freelancer
                              <br />
                              <span style={{opacity:"0"}}>k</span>
                            </h3>
                            <div className="date">11/2022 - 6/2023</div>
                            <div className="brdr"></div>
                            <ul>
                              <li>
                                Collaborated closely with UX/UI designers to
                                translate their creative vision into reality by
                                designing and developing three engaging and
                                visually appealing landing pages.
                              </li>
                              <li>
                                Dedicated effort to enhance website performance,
                                guaranteeing swift load times and seamless
                                operation, thereby delivering an improved user
                                experience
                              </li>
                            </ul>
                          </div>
                        </Col>

                        <Col sm={{ span: 12 }} lg={{ span: 6 }}>
                          <div className="content">
                            <h3>
                              Front-End Developer
                              <br />
                              <span>OnsetVr</span>
                            </h3>
                            <div className="date">6/2023 - 1/2024</div>
                            <div className="brdr"></div>
                            <ul>
                              <li>
                                Collaborated across teams to create a
                                feature-rich eCommerce site using React.js and
                                Redux.js for a state managment and responsive cart system.
                              </li>
                              <li>
                                Managed key React contexts: user wishlist,
                                shopping cart, and user login, enhancing site
                                functionality.
                              </li>
                              <li>
                                Focused on optimizing site speed for an improved
                                user experience.
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
        <Loading image={image} text="Experiences" />
      )}
    </>
  );
};

export default ExperiencesPage;
