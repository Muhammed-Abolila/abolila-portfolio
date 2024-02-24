import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SocialLinks from "../../components/utilities/SocialLinks/SocialLinks";
import image1 from "../../assets/img/portfolios/1.jpg";
import image2 from "../../assets/img/portfolios/2.jpg";
import image3 from "../../assets/img/portfolios/3.jpg";
import image4 from "../../assets/img/portfolios/4.jpg";
import image5 from "../../assets/img/portfolios/5.jpg";
import image6 from "../../assets/img/portfolios/6.jpg";
import image7 from "../../assets/img/portfolios/7.jpg";
import image8 from "../../assets/img/portfolios/8.jpg";
import image9 from "../../assets/img/portfolios/9.jpg";
import image10 from "../../assets/img/portfolios/10.jpg";
import image11 from "../../assets/img/portfolios/11.jpg";
import image12 from "../../assets/img/portfolios/12.jpg";
import image from "../../assets/icons/portfolios.png";
import Loading from "../../components/utilities/Loading/Loading";
const PortfoliosPage = ({ loading }) => {
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
        <section className="portfolio">
          <Container>
            <div className="portfolio-content">
              <Row className="">
                <Col sm={{ span: 12 }} lg={{ span: 3 }} className="p-0">
                  <div className="caption">
                    <h2></h2>
                    <div className="social-links-container">
                      <SocialLinks />
                    </div>
                  </div>
                </Col>
                <Col sm={{ span: 12 }} lg={{ span: 9 }} className="p-0">
                  <Slider {...settings} className="">
                    <div className="portfolio-container">
                      <Row>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="pe-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image1} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="ps-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image2} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="pe-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image3} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="ps-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image4} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="pe-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image5} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="ps-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image6} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="portfolio-container">
                      <Row>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="pe-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image7} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="ps-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image8} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="pe-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image9} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="ps-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image10} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="pe-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image11} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
                          </div>
                        </Col>
                        <Col
                          sm={{ span: 12 }}
                          md={{ span: 6 }}
                          lg={{ span: 4 }}
                          className="ps-md-0 p-lg-0"
                        >
                          <div className="content">
                            <div className="image-container">
                              <img src={image12} alt="" />
                            </div>
                            <div className="layer"></div>
                            <div className="content-caption">
                              <h3>Shop Cart</h3>
                              <p>Ecommerce App</p>
                            </div>
                            <div className="project-links">
                              <a
                                href="https://abolila-shopcart.netlify.app/"
                                target="_blank"
                              >
                                <div className="icon-link"></div>
                              </a>
                              <a
                                href="https://github.com/Muhammed-Abolila/Shop-Cart"
                                target="_blank"
                              >
                                <div className="icon-github"></div>
                              </a>
                            </div>
                            <div className="utilities">
                              <p>
                                <span>utilities:</span> <br />
                                HTML5 , Css3 , Js
                              </p>
                            </div>
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
        <Loading image={image} text="Portfolios" />
      )}
    </>
  );
};
export default PortfoliosPage;
