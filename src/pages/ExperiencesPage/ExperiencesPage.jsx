import Slider from "react-slick";
import image from "../../assets/icons/experiences.png";
import Loading from "../../components/utilities/Loading/Loading";
import myCv from "../../assets/Muhammed Abo Lila Front End Developer.pdf";
const ExperiencesPage = ({ loading }) => {
  const settings = {
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    // speed: 15000,
    // autoplaySpeed: 1000,
    // pauseOnHover: true
  };
  return (
    <>
      {loading === false ? (
        <section className="experience-container container h-screen mb-20 mt-12 flex flex-col items-center justify-center ">
          <div className="min-h-[400px] flex flex-wrap justify-center items-stretch w-full bg-mainBgColor border border-subColor rounded-lg overflow-hidden">
            <div className="experience-image bg-no-repeat bg-cover bg-center w-1/3 relative min-h-[inherit]">
              <a
                href={myCv}
                download="Muhammed Abo Lila Front End Developer"
                className="absolute bottom-0 w-full text-center bg-subBgColor
                text-subColor py-2 text-2xl hover:bg-subColor hover:text-subBgColor transition-all duration-500 ease-in-out"
              >
                Download CV
              </a>
            </div>
            <Slider {...settings} className="w-2/3">
              <div className="h-full relative pt-1 px-2 before:content-[ ] before:w-[1px] before:bg-subColor before:absolute before:top-0 before:bottom-0 before:left-0">
                <div className="text-right font-medium flex flex-col items-end justify-center gap-1">
                  <h3 className="text-[1.5rem] text-mainColor">
                    Front-End Developer
                  </h3>
                  <p>OnsetVr</p>
                  <div className="mt-2">11/2022 - 6/2023</div>
                  <div className="h-[1px] w-full bg-subColor mt-2"></div>
                </div>
                <ul className="pt-3 px-[20px] list-disc flex flex-col gap-3">
                  <li>
                    Collaborated closely with UX/UI designers to translate their
                    creative vision into reality by designing and developing
                    three engaging and visually appealing landing pages.
                  </li>
                  <li>
                    Dedicated effort to enhance website performance,
                    guaranteeing swift load times and seamless operation,
                    thereby delivering an improved user experience
                  </li>
                </ul>
              </div>
              <div className="h-full relative pt-1 px-2 before:content-[ ] before:w-[1px] before:bg-subColor before:absolute before:top-0 before:bottom-0 before:left-0">
                <div className="text-right font-medium flex flex-col items-end justify-center gap-1">
                  <h3 className="text-[1.5rem] text-mainColor">
                    Front-End Developer
                  </h3>
                  <p>Envaglo</p>
                  <div className="mt-2">11/2022 - 6/2023</div>
                  <div className="h-[1px] w-full bg-subColor mt-2"></div>
                </div>
                <ul className="pt-3 px-[20px] list-disc flex flex-col gap-3">
                  <li>
                    Collaborated closely with UX/UI designers to translate their
                    creative vision into reality by designing and developing
                    three engaging and visually appealing landing pages.
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
        </section>
      ) : (
        <Loading image={image} text="Experiences" />
      )}
    </>
  );
};
export default ExperiencesPage;
