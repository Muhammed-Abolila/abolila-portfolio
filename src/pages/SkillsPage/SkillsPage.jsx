import React from "react";
import TopNavbar from "../../components/utilities/TopNavbar/TopNavbar";
import { Container, Row, Col } from "react-bootstrap";
import BottomNavbar from "../../components/utilities/BottomNavbar/BottomNavbar";

const SkillsPage = () => {
  return (
    <>
      <TopNavbar text="SKILLS" />
      <Container>
        <section className="skills">
          <div className="skills-content">
            <Row>
              <Col
                xs={{ span: 12 }}
                md={{ span: 6 }}
                lg={{ span: 3 }}
                className="p-0"
              >
                <div className="one-skill">
                  <h3>programming</h3>
                  <div className="one-skill-content">
                    <div className="icon-html5"></div>
                    <div className="icon-css3"></div>
                    <div className="icon-javascript"></div>
                    <div className="icon-sass"></div>
                  </div>
                </div>
              </Col>
              <Col
                xs={{ span: 12 }}
                md={{ span: 6 }}
                lg={{ span: 3 }}
                className="p-0"
              >
                <div className="one-skill">
                  <h3>Libraries</h3>
                  <div className="one-skill-content">
                    <div className="icon-bootstrap"></div>
                    <div className="icon-react"></div>
                    <div className="icon-redux"></div>
                  </div>
                </div>
              </Col>
              <Col
                xs={{ span: 12 }}
                md={{ span: 6 }}
                lg={{ span: 3 }}
                className="p-0"
              >
                <div className="one-skill">
                  <h3>Tools</h3>
                  <div className="one-skill-content">
                    <div className="icon-visualstudiocode"></div>
                    <div className="icon-postman"></div>
                    <div className="icon-git"></div>
                    <div className="icon-github"></div>
                  </div>
                </div>
              </Col>
              <Col
                xs={{ span: 12 }}
                md={{ span: 6 }}
                lg={{ span: 3 }}
                className="p-0"
              >
                <div className="one-skill personal">
                  <h3>personal</h3>
                  <ol className="one-skill-content">
                    <li>Fast Learning Ability</li>
                    <li>Time Management</li>
                    <li>Communication Skills</li>
                  </ol>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Container>
      <BottomNavbar />
    </>
  );
};
export default SkillsPage;
