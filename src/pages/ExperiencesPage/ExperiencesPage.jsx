import React from 'react'
import BottomNavbar from '../../components/utilities/BottomNavbar/BottomNavbar';
import TopNavbar from '../../components/utilities/TopNavbar/TopNavbar';
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";

const ExperiencesPage = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
    <TopNavbar text="EXPERIENCES" />
    <section className="experiences">
      <Container>
        <div className="experiences-content">
          <Row>
            <Col sm={{span:10,offset:1}} lg={{ span: 4 ,offset:0}} className="p-0">
              <div className="image">
                <h2>M</h2>
              </div>
            </Col>
            <Col sm={{span:10,offset:1}} lg={{ span: 8 ,offset:0}} className="p-0">
              <Slider {...settings}>
                <div className="experiences-container">
                  <Row>
                    <Col sm={{span:12}} lg={{span:6}}>
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

                    <Col sm={{span:12}} lg={{span:6}}>
                      <div className="content">
                        <h3>Cairo University , FOC</h3>
                        <div className="date">9/2012 - 5/2017</div>
                        <div className="brdr"></div>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Veniam ab assumenda quas in esse. Est.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
                <div className="experiences-container">
                  <Row>
                    <Col sm={{span:12}} lg={{span:6}}>
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

                    <Col sm={{span:12}} lg={{span:6}}>
                      <div className="content">

                        <h3>Cairo University , FOC</h3>
                        <div className="date">9/2012 - 5/2017</div>
                        <div className="brdr"></div>
                        <p>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Veniam ab assumenda quas in esse. Est.
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

    <BottomNavbar />
  </>
  )
}

export default ExperiencesPage
