import homeImage from "../../assets/img/profile/1.png";
import SocialLinks from "../../components/utilities/SocialLinks/SocialLinks";
import image from "../../assets/icons/home.png";
import Loading from "../../components/utilities/Loading/Loading";
const HomePage = ({ loading }) => {
  return (
    <>
      {loading === false ? (
        <section className="container h-full mb-20 mt-12 flex items-center justify-center lg:h-screen lg:my-0">
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full pb-5 border-2 border-dashed flex flex-col justify-between items-center border-subColor order-2 lg:order-1 mt-5 lg:mt-0 lg:w-3/5">
              <div className=" bg-mainBgColor color-mainColor p-6 rounded-tr-md rounded-tl-md h-full">
                <span className="text-2xl font-bold mb-3 uppercase">hey!</span>
                <h1 className="text-2xl font-bold mb-3">
                  I'M <span className="text-subColor">Muhammed Abo Lila</span>
                </h1>
                <p className="pl-3 mb-3 text-[14px] text-grayColor">
                  I'm a Front End Developer with expertise in React.js. My
                  focus is on delivering modern and responsive websites that
                  are not only visually appealing but also robust and
                  efficient.
                </p>
                <p className="pl-3 mb-3 text-[14px] text-grayColor">
                  By working closely with your team, I ensure your brand's
                  identity is reflected in the website's design and
                  functionality. I can contribute to creating impactful
                  websites that help drive business outcomes. Let me help you
                  improve your digital presence.
                </p>
                <p className="pl-3 mb-3 text-[14px] text-grayColor">
                  Feel free to explore my portfolio to discover my latest
                  projects and learn more about my skills and experience in
                  the field.
                </p>
              </div>
              <SocialLinks />
            </div>
            <div className="w-3/4 lg:w-2/5 flex items-center justify-center order-1">
              <img className="block w-full h-auto rounded-[20%]" src={homeImage} alt="Muhammed Abo Lila Portfolio" />
            </div>
          </div>
        </section>
      ) : (
        <Loading image={image} text="Home" />
      )}
    </>
  );
};
export default HomePage;
