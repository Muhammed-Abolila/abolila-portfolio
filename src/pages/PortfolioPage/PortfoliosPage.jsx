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
import { useEffect, useState } from "react";
const PortfoliosPage = ({ loading }) => {
  const [slidesToShow,setSlideToShow]=useState(0);
  const [numberOfRows,setNumberOfRows]=useState(1);
  useEffect(()=>{
    if(window.innerWidth>=1024){
      setSlideToShow(3);
      setNumberOfRows(2)
    }else if(window.innerWidth>576){
      setSlideToShow(2);
    }
    else if(window.innerWidth<=576){
      setSlideToShow(1);
    }
  },[window.innerWidth])
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    rows: numberOfRows,
    slidesPerRow: 1,
  };
  return (
    <>
      {loading === false ? (
        <section className="portfolio container flex justify-center items-center h-screen">
          <div className="portfolio-content w-full border min-h-[400px] border-subColor overflow-hidden rounded-lg flex flex-col justify-center items-stretch lg:flex-row">
            <div className="caption relative w-full bg-mainBgColor min-h-[250px] flex justify-center items-center p-0 lg:w-1/4 lg:min-h-[500px]">
              <h2 className="text-mainColor text-[1.3rem] font-semibold relative h-12 before:content-['|'] before:text-emerald-400 before:absolute before:top-2 before:left-6 before:animate-title w-full"></h2>
              <div className="social-links-container absolute bottom-2 right-0 left-4">
                <SocialLinks />
              </div>
            </div>
            <Slider {...settings} className="w-full lg:w-3/4 p-0 m-0 h-[400px]">
              <div className=" content min-h-[500px] border border-subColor relative cursor-pointer overflow-hidden group lg:min-h-[255px]">
                  <img
                    src={image1}
                    alt="Muhammed Abo Lila"
                    className="w-full h-[400px] group-hover:scale-125 transition-transform duration-500  lg:h-[255px]"
                  />
                <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-mainBgColor opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="content-caption absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-mainColor">
                  <h3 className="text-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                    Shop Cart
                  </h3>
                  <p className="text-xl opacity-85  scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                    Ecommerce App
                  </p>
                </div>
                <div className="project-links absolute -top-full left-1 w-full flex gap-3 cursor-pointer group-hover:top-2 transition-top duration-500">
                  <a
                    href="https://abolila-shopcart.netlify.app/"
                    target="_blank"
                  >
                    <div className="icon-link bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                  <a
                    href="https://github.com/Muhammed-Abolila/Shop-Cart"
                    target="_blank"
                  >
                    <div className="icon-github bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                </div>
                <div className="utilities absolute -bottom-full left-0 right-0 text-center py-2 px-4 bg-mainBgColor border-t border-subColor group-hover:bottom-0 transition-bottom duration-700">
                  <p className="text-[.9rem]">
                    <span className="text-[1.1rem] capitalize">utilities:</span>
                    <br />
                    HTML5 , Css3 , Js
                  </p>
                </div>
              </div>

              <div className=" content min-h-[500px] border border-subColor relative cursor-pointer overflow-hidden group lg:min-h-[255px]">
                  <img
                    src={image1}
                    alt="Muhammed Abo Lila"
                    className="w-full h-[400px] group-hover:scale-125 transition-transform duration-500  lg:h-[255px]"
                  />
                <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-mainBgColor opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="content-caption absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-mainColor">
                  <h3 className="text-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                    Shop Cart
                  </h3>
                  <p className="text-xl opacity-85  scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                    Ecommerce App
                  </p>
                </div>
                <div className="project-links absolute -top-full left-1 w-full flex gap-3 cursor-pointer group-hover:top-2 transition-top duration-500">
                  <a
                    href="https://abolila-shopcart.netlify.app/"
                    target="_blank"
                  >
                    <div className="icon-link bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                  <a
                    href="https://github.com/Muhammed-Abolila/Shop-Cart"
                    target="_blank"
                  >
                    <div className="icon-github bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                </div>
                <div className="utilities absolute -bottom-full left-0 right-0 text-center py-2 px-4 bg-mainBgColor border-t border-subColor group-hover:bottom-0 transition-bottom duration-700">
                  <p className="text-[.9rem]">
                    <span className="text-[1.1rem] capitalize">utilities:</span>
                    <br />
                    HTML5 , Css3 , Js
                  </p>
                </div>
              </div>
              <div className=" content min-h-[500px] border border-subColor relative cursor-pointer overflow-hidden group lg:min-h-[255px]">
                  <img
                    src={image1}
                    alt="Muhammed Abo Lila"
                    className="w-full h-[400px] group-hover:scale-125 transition-transform duration-500  lg:h-[255px]"
                  />
                <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-mainBgColor opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="content-caption absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-mainColor">
                  <h3 className="text-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                    Shop Cart
                  </h3>
                  <p className="text-xl opacity-85  scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                    Ecommerce App
                  </p>
                </div>
                <div className="project-links absolute -top-full left-1 w-full flex gap-3 cursor-pointer group-hover:top-2 transition-top duration-500">
                  <a
                    href="https://abolila-shopcart.netlify.app/"
                    target="_blank"
                  >
                    <div className="icon-link bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                  <a
                    href="https://github.com/Muhammed-Abolila/Shop-Cart"
                    target="_blank"
                  >
                    <div className="icon-github bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                </div>
                <div className="utilities absolute -bottom-full left-0 right-0 text-center py-2 px-4 bg-mainBgColor border-t border-subColor group-hover:bottom-0 transition-bottom duration-700">
                  <p className="text-[.9rem]">
                    <span className="text-[1.1rem] capitalize">utilities:</span>
                    <br />
                    HTML5 , Css3 , Js
                  </p>
                </div>
              </div>
              <div className=" content min-h-[500px] border border-subColor relative cursor-pointer overflow-hidden group lg:min-h-[255px]">
                  <img
                    src={image1}
                    alt="Muhammed Abo Lila"
                    className="w-full h-[400px] group-hover:scale-125 transition-transform duration-500  lg:h-[255px]"
                  />
                <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-mainBgColor opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="content-caption absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-mainColor">
                  <h3 className="text-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                    Shop Cart
                  </h3>
                  <p className="text-xl opacity-85  scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                    Ecommerce App
                  </p>
                </div>
                <div className="project-links absolute -top-full left-1 w-full flex gap-3 cursor-pointer group-hover:top-2 transition-top duration-500">
                  <a
                    href="https://abolila-shopcart.netlify.app/"
                    target="_blank"
                  >
                    <div className="icon-link bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                  <a
                    href="https://github.com/Muhammed-Abolila/Shop-Cart"
                    target="_blank"
                  >
                    <div className="icon-github bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                </div>
                <div className="utilities absolute -bottom-full left-0 right-0 text-center py-2 px-4 bg-mainBgColor border-t border-subColor group-hover:bottom-0 transition-bottom duration-700">
                  <p className="text-[.9rem]">
                    <span className="text-[1.1rem] capitalize">utilities:</span>
                    <br />
                    HTML5 , Css3 , Js
                  </p>
                </div>
              </div>
              <div className=" content min-h-[500px] border border-subColor relative cursor-pointer overflow-hidden group lg:min-h-[255px]">
                  <img
                    src={image1}
                    alt="Muhammed Abo Lila"
                    className="w-full h-[400px] group-hover:scale-125 transition-transform duration-500  lg:h-[255px]"
                  />
                <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-mainBgColor opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="content-caption absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-mainColor">
                  <h3 className="text-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                    Shop Cart
                  </h3>
                  <p className="text-xl opacity-85  scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                    Ecommerce App
                  </p>
                </div>
                <div className="project-links absolute -top-full left-1 w-full flex gap-3 cursor-pointer group-hover:top-2 transition-top duration-500">
                  <a
                    href="https://abolila-shopcart.netlify.app/"
                    target="_blank"
                  >
                    <div className="icon-link bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                  <a
                    href="https://github.com/Muhammed-Abolila/Shop-Cart"
                    target="_blank"
                  >
                    <div className="icon-github bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                </div>
                <div className="utilities absolute -bottom-full left-0 right-0 text-center py-2 px-4 bg-mainBgColor border-t border-subColor group-hover:bottom-0 transition-bottom duration-700">
                  <p className="text-[.9rem]">
                    <span className="text-[1.1rem] capitalize">utilities:</span>
                    <br />
                    HTML5 , Css3 , Js
                  </p>
                </div>
              </div>
              <div className=" content min-h-[500px] border border-subColor relative cursor-pointer overflow-hidden group lg:min-h-[255px]">
                  <img
                    src={image1}
                    alt="Muhammed Abo Lila"
                    className="w-full h-[400px] group-hover:scale-125 transition-transform duration-500  lg:h-[255px]"
                  />
                <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-mainBgColor opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="content-caption absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-mainColor">
                  <h3 className="text-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                    Shop Cart
                  </h3>
                  <p className="text-xl opacity-85  scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                    Ecommerce App
                  </p>
                </div>
                <div className="project-links absolute -top-full left-1 w-full flex gap-3 cursor-pointer group-hover:top-2 transition-top duration-500">
                  <a
                    href="https://abolila-shopcart.netlify.app/"
                    target="_blank"
                  >
                    <div className="icon-link bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                  <a
                    href="https://github.com/Muhammed-Abolila/Shop-Cart"
                    target="_blank"
                  >
                    <div className="icon-github bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                </div>
                <div className="utilities absolute -bottom-full left-0 right-0 text-center py-2 px-4 bg-mainBgColor border-t border-subColor group-hover:bottom-0 transition-bottom duration-700">
                  <p className="text-[.9rem]">
                    <span className="text-[1.1rem] capitalize">utilities:</span>
                    <br />
                    HTML5 , Css3 , Js
                  </p>
                </div>
              </div>
              <div className=" content min-h-[500px] border border-subColor relative cursor-pointer overflow-hidden group lg:min-h-[255px]">
                  <img
                    src={image1}
                    alt="Muhammed Abo Lila"
                    className="w-full h-[400px] group-hover:scale-125 transition-transform duration-500  lg:h-[255px]"
                  />
                <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-mainBgColor opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="content-caption absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-mainColor">
                  <h3 className="text-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                    Shop Cart
                  </h3>
                  <p className="text-xl opacity-85  scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                    Ecommerce App
                  </p>
                </div>
                <div className="project-links absolute -top-full left-1 w-full flex gap-3 cursor-pointer group-hover:top-2 transition-top duration-500">
                  <a
                    href="https://abolila-shopcart.netlify.app/"
                    target="_blank"
                  >
                    <div className="icon-link bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                  <a
                    href="https://github.com/Muhammed-Abolila/Shop-Cart"
                    target="_blank"
                  >
                    <div className="icon-github bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                </div>
                <div className="utilities absolute -bottom-full left-0 right-0 text-center py-2 px-4 bg-mainBgColor border-t border-subColor group-hover:bottom-0 transition-bottom duration-700">
                  <p className="text-[.9rem]">
                    <span className="text-[1.1rem] capitalize">utilities:</span>
                    <br />
                    HTML5 , Css3 , Js
                  </p>
                </div>
              </div>
              <div className=" content min-h-[500px] border border-subColor relative cursor-pointer overflow-hidden group lg:min-h-[255px]">
                  <img
                    src={image1}
                    alt="Muhammed Abo Lila"
                    className="w-full h-[400px] group-hover:scale-125 transition-transform duration-500  lg:h-[255px]"
                  />
                <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-mainBgColor opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="content-caption absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-mainColor">
                  <h3 className="text-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                    Shop Cart
                  </h3>
                  <p className="text-xl opacity-85  scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                    Ecommerce App
                  </p>
                </div>
                <div className="project-links absolute -top-full left-1 w-full flex gap-3 cursor-pointer group-hover:top-2 transition-top duration-500">
                  <a
                    href="https://abolila-shopcart.netlify.app/"
                    target="_blank"
                  >
                    <div className="icon-link bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                  <a
                    href="https://github.com/Muhammed-Abolila/Shop-Cart"
                    target="_blank"
                  >
                    <div className="icon-github bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                </div>
                <div className="utilities absolute -bottom-full left-0 right-0 text-center py-2 px-4 bg-mainBgColor border-t border-subColor group-hover:bottom-0 transition-bottom duration-700">
                  <p className="text-[.9rem]">
                    <span className="text-[1.1rem] capitalize">utilities:</span>
                    <br />
                    HTML5 , Css3 , Js
                  </p>
                </div>
              </div>
              <div className=" content min-h-[500px] border border-subColor relative cursor-pointer overflow-hidden group lg:min-h-[255px]">
                  <img
                    src={image1}
                    alt="Muhammed Abo Lila"
                    className="w-full h-[400px] group-hover:scale-125 transition-transform duration-500  lg:h-[255px]"
                  />
                <div className="layer absolute top-0 bottom-0 left-0 right-0 bg-mainBgColor opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
                <div className="content-caption absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center text-mainColor">
                  <h3 className="text-2xl scale-0 group-hover:scale-100 transition-transform duration-700">
                    Shop Cart
                  </h3>
                  <p className="text-xl opacity-85  scale-0 group-hover:scale-100 transition-transform duration-700 delay-200">
                    Ecommerce App
                  </p>
                </div>
                <div className="project-links absolute -top-full left-1 w-full flex gap-3 cursor-pointer group-hover:top-2 transition-top duration-500">
                  <a
                    href="https://abolila-shopcart.netlify.app/"
                    target="_blank"
                  >
                    <div className="icon-link bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                  <a
                    href="https://github.com/Muhammed-Abolila/Shop-Cart"
                    target="_blank"
                  >
                    <div className="icon-github bg-mainBgColor py-2 px-4 border border-subColor rounded text-[1.2rem] transition-all duration-500 hover:bg-subColor hover:text-subBgColor hover:animate-linksAnimation hover:animate-fourth"></div>
                  </a>
                </div>
                <div className="utilities absolute -bottom-full left-0 right-0 text-center py-2 px-4 bg-mainBgColor border-t border-subColor group-hover:bottom-0 transition-bottom duration-700">
                  <p className="text-[.9rem]">
                    <span className="text-[1.1rem] capitalize">utilities:</span>
                    <br />
                    HTML5 , Css3 , Js
                  </p>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      ) : (
        <Loading image={image} text="Portfolios" />
      )}
    </>
  );
};
export default PortfoliosPage;
