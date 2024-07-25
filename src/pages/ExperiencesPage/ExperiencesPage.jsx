import Slider from "react-slick";
import image from "../../assets/icons/experiences.png";
import Loading from "../../components/utilities/Loading/Loading";
import myCv from "../../assets/Muhammed Abo Lila Front End Developer.pdf";
const ExperiencesPage = ({ loading }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <>
      {loading === false ? (
        <section className="container h-full mb-20 mt-12 flex items-center justify-center md:h-screen md:my-0 bg-yellow-400">
          <div className="flex flex-wrap justify-center items-stretch w-full bg-mainBgColor border border-subColor rounded-lg overflow-hidden">
            <div className="experience-image bg-no-repeat bg-cover bg-center bg-green-400 w-1/3 relative">
              <a
                href={myCv}
                download="Muhammed Abo Lila Front End Developer"
                className="absolute bottom-0 w-full text-center bg-subBgColor
                text-subColor py-2 text-2xl hover:bg-subColor hover:text-subBgColor transition-all duration-500 ease-in-out"
              >
                Download CV
              </a>
            </div>

            <div className="slider bg-red-400 w-2/3">
              <div className="slider-container">
                <Slider {...settings}>
                  <div>
                    <div className="bg-blue-900 text-right">
                      <h3 className="pt-5 text-[1.5rem] font-semibold text-mainColor">
                        Freelancer
                        <br />
                        <span style={{ opacity: "0" }}>k</span>
                      </h3>
                      <div className="date">11/2022 - 6/2023</div>
                      <div className="brdr"></div>
                    </div>
                    <ul>
                      <li>
                        Collaborated closely with UX/UI designers to translate
                        their creative vision into reality by designing and
                        developing three engaging and visually appealing landing
                        pages.
                      </li>
                      <li>
                        Dedicated effort to enhance website performance,
                        guaranteeing swift load times and seamless operation,
                        thereby delivering an improved user experience
                      </li>
                    </ul>
                  </div>
                  <div>
                    <div className="bg-blue-900">
                      <h3>
                        Freelancer
                        <br />
                        <span style={{ opacity: "0" }}>k</span>
                      </h3>
                      <div className="date">11/2022 - 6/2023</div>
                      <div className="brdr"></div>
                    </div>
                    <ul>
                      <li>
                        Collaborated closely with UX/UI designers to translate
                        their creative vision into reality by designing and
                        developing three engaging and visually appealing landing
                        pages.
                      </li>
                      <li>
                        Dedicated effort to enhance website performance,
                        guaranteeing swift load times and seamless operation,
                        thereby delivering an improved user experience
                      </li>
                    </ul>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <Loading image={image} text="Experiences" />
      )}
    </>
  );
};

export default ExperiencesPage;

{
  /* <Container>
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
          </Container> */
}
