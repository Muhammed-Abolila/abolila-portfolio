import Slider from "react-slick";
import image from "../../assets/icons/experiences.png";
import Loading from "../../components/utilities/Loading/Loading";
import myCv from "../../assets/Muhammed Abo Lila Front End Developer.pdf";
import { useEffect } from "react";
import { useState } from "react";
const ExperiencesPage = ({ loading }) => {
  const [sliderSetting, setSliderSetting] = useState(false);
  useEffect(() => {
    if (window.innerWidth > 1023) {
      setSliderSetting(true);
    }
  }, [window.innerWidth]);
  const settings = {
    dots: true,
    slidesToShow: sliderSetting ? 2 : 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4500,
    vertical: sliderSetting ? false : true,
    verticalSwiping: sliderSetting ? false : true,
    pauseOnHover: true,
  };
  return (
    <>
      {loading === false ? (
        <section className="experience-container container h-full mb-20 mt-12 flex items-center justify-center md:h-screen md:my-0">
          <div
            className=" flex flex-col flex-wrap  justify-center items-center bg-mainBgColor border
           border-subColor rounded-lg overflow-hidden
           lg:flex-row lg:items-stretch lg:h-[450px] lg:justify-center"
          >
            <div className="experience-image bg-no-repeat bg-cover bg-center w-full relative h-[450px] lg:w-1/3 lg:h-[inherit]">
              <a
                href={myCv}
                download="Muhammed Abo Lila Front End Developer"
                className="absolute bottom-0 w-full text-center bg-subBgColor
                text-subColor py-2 text-2xl hover:bg-subColor hover:text-subBgColor transition-all duration-500 ease-in-out"
              >
                Download CV
              </a>
            </div>
            <Slider {...settings} className="w-full lg:w-2/3">
              <div
                className="h-full relative pt-1 px-2 lg:before:content-[ ] before:bg-subColor before:absolute lg:before:top-0 lg:before:w-[1px] lg:before:h-full"
              >
                <div className="bg-subColor text-subBgColor absolute top-0 left-2 py-1 px-2 text-2xl font-medium">
                  1
                </div>
                <div className="text-right font-medium flex flex-col items-end justify-center gap-1">
                  <h3 className="text-[1.5rem] text-mainColor">
                    Front-End Developer
                  </h3>
                  <p>Freelancer</p>
                  <div className="mt-2">11/2022 - 6/2023</div>
                  <div className="h-[1px] w-full bg-subColor mt-2"></div>
                </div>
                <ul className="pt-3 pb-10 px-[20px] list-disc flex flex-col gap-1 lg:pb-0">
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
              <div
                className="h-full relative pt-1 px-2 lg:before:content-[ ] before:bg-subColor before:absolute lg:before:top-0 lg:before:w-[1px] lg:before:h-full"
              >
                <div className="bg-subColor text-subBgColor absolute top-0 left-2 py-1 px-2 text-2xl font-medium">
                  2
                </div>
                <div className="text-right font-medium flex flex-col items-end justify-center gap-1">
                  <h3 className="text-[1.5rem] text-mainColor">
                    Front-End Developer
                  </h3>
                  <p>OnsetVr</p>
                  <div className="mt-2">6/2023 - 1/2024</div>
                  <div className="h-[1px] w-full bg-subColor mt-2"></div>
                </div>
                <ul className="pt-3 pb-10 px-[20px] list-disc flex flex-col gap-1 lg:pb-0">
                  <li>
                    Collaborated across teams to create a feature-rich eCommerce
                    site using React.js and Redux.js for a state managment and
                    responsive cart system.
                  </li>
                  <li>
                    Managed key React contexts: user wishlist, shopping cart,
                    and user login, enhancing site functionality.
                  </li>
                  <li>
                    Focused on optimizing site speed for an improved user
                    experience.
                  </li>
                </ul>
              </div>
              <div
                className="h-full relative pt-1 px-2 lg:before:content-[ ] before:bg-subColor before:absolute lg:before:top-0 lg:before:w-[1px] lg:before:h-full"
              >
                <div className="bg-subColor text-subBgColor absolute top-0 left-2 py-1 px-2 text-2xl font-medium">
                  3
                </div>
                <div className="text-right font-medium flex flex-col items-end justify-center gap-1">
                  <h3 className="text-[1.5rem] text-mainColor">
                    Front-End Developer
                  </h3>
                  <p>Envaglo</p>
                  <div className="mt-2">2/2024 - Present</div>
                  <div className="h-[1px] w-full bg-subColor mt-2"></div>
                </div>
                <ul className="pt-3 pb-10 px-[20px] list-disc flex flex-col gap-1 lg:pb-0">
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
