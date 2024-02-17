import homeImage from "../../assets/img/profile/1.png";
import { Container, Row, Col } from "react-bootstrap";
import TopNavbar from "../../components/utilities/TopNavbar/TopNavbar";
import BottomNavbar from "../../components/utilities/BottomNavbar/BottomNavbar";
import SocialLinks from "../../components/utilities/SocialLinks/SocialLinks";
const HomePage = () => {
  return (
    <>
    <TopNavbar text="Muhammed Abo Lila"/>
    <Container>
      <section className="home">
        <div className="home-content">
          <Row>
            <Col className="caption-col" xs={{span:12}} lg={{span:7}}>
              <div className="home-caption">
                <div className="caption-top">
                  <span>HEY!</span>
                  <h1>
                    I'M <span>Muhammed Abo Lila</span>
                  </h1>
                  <p>
                    I'm a Front End Developer with expertise in React.js. My focus is on delivering modern and responsive
                    websites that are not only visually appealing but also
                    robust and efficient.
                  </p>
                  <p>
                    By working closely with your team, I ensure your brand's
                    identity is reflected in the website's design and
                    functionality. I can contribute to creating impactful
                    websites that help drive business outcomes. Let me help you
                    improve your digital presence.
                  </p>
                  <p>
                    Feel free to explore my portfolio to discover my latest
                    projects and learn more about my skills and experience in
                    the field.
                  </p>
                </div>
                <SocialLinks/>
              </div>
            </Col>
            <Col className="image-col" xs={{span:12}} lg={{span:5}}>
              <div className="home-image">
                <img src={homeImage} alt="Muhammed Abo Lila Portfolio" />
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

export default HomePage;
