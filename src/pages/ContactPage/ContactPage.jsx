import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "../../components/utilities/SocialLinks/SocialLinks";
import image from "../../assets/icons/contact.png";
import Loading from "../../components/utilities/Loading/Loading";
const ContactPage = ({ loading }) => {
  return (
    <>
      {loading === false ? (
        <section className="m-auto w-[90%] sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:w-[1320px]">
          <div className="h-full my-12 flex items-center justify-center lg:h-screen lg:m-0">
            <div className="w-full flex flex-wrap justify-center">
              <div className="w-full pb-5 border-2 border-dashed flex flex-col justify-between items-center border-subColor order-2 lg:order-1 mt-5 lg:mt-0 lg:w-3/5">
                <div className=" bg-mainBgColor color-mainColor p-6 rounded-tr-md rounded-tl-md h-full">
                  <h2 className="text-2xl font-bold uppercase">
                    get in touch
                  </h2>
                  <h3 className="text-2xl font-bold mb-3 uppercase">
                    get real
                  </h3>
                  <p className="pl-3 mb-3 text-[14px] text-grayColor">
                    Whether you're looking for answers, need help, or want to
                    explore our services further, we're here to help. Contact us
                    today and experience the real difference we can make.
                  </p>
                  <p className="pl-3 mb-3 text-[14px] text-grayColor">
                    We are committed to ensuring your satisfaction, achieving
                    real value, and providing exceptional solutions for your
                    experience.
                  </p>
                </div>
                <SocialLinks />
              </div>
              <form className="w-3/4 lg:w-2/5 flex flex-col items-stretch justify-center gap-2 px-3 order-1">
                <input
                  className="py-2 px-1 rounded focus:outline-none placeholder:text-mainColor"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="py-2 px-1 rounded focus:outline-none placeholder:text-mainColor"
                  type="text"
                  placeholder="subject"
                />
                <input
                  className="py-2 px-1 rounded focus:outline-none placeholder:text-mainColor"
                  type="email"
                  placeholder="Your e-mail"
                />
                <textarea
                  className="py-2 px-1 rounded min-h-36 max-h-36 focus:outline-none placeholder:text-mainColor"
                  placeholder="Your message"
                ></textarea>
                <button className="border border-subColor text-mainColor bg-mainBgColor w-fit py-1 px-3 rounded hover:bg-subColor hover:text-mainBgColor transition-all duration-500 ease-in-out">send</button>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <Loading image={image} text="Contact" />
      )}
    </>
  );
};

export default ContactPage;
