import SocialLinks from "../../components/utilities/SocialLinks/SocialLinks";
import image from "../../assets/icons/contact.png";
import Loading from "../../components/utilities/Loading/Loading";
const ContactPage = ({ loading }) => {
  return (
    <>
      {loading === false ? (
        <section className="container h-screen flex items-center justify-center lg:my-0">
          <div className="w-full flex flex-wrap justify-between">
            <div className="w-full pb-5 border-2 border-dashed flex flex-col justify-between items-center border-subColor my-5 order-1 lg:my-0 lg:w-[58%]">
              <div className="  bg-mainBgColor color-mainColor mb-10 p-6 pb-9 rounded-tr-md rounded-tl-md h-full">
                <h2 className="text-[2rem] font-bold uppercase">
                  get in touch
                </h2>
                <h2 className="text-[2rem] font-bold mb-3 uppercase">
                  get real
                </h2>
                <p className="pl-3 mb-3 text-[14px] text-grayColor">
                  Whether you're looking for answers, need help, or want to
                  explore our services further, we're here to help. Contact us
                  today and experience the real difference we can make.
                </p>
                <p className="pl-3 mb-3 text-[14px] text-grayColor">
                  We are committed to ensuring your satisfaction, achieving real
                  value, and providing exceptional solutions for your
                  experience.
                </p>
              </div>
              <SocialLinks />
            </div>

            <form className="w-full flex flex-col items-stretch justify-between gap-2 text-sm order-2 lg:w-2/5 lg:px-3">
              <input
                className="py-2 px-1 rounded border-b-2 border-white  transition-[border] duration-500 ease-in-out focus:outline-none focus:border-subColor placeholder:text-grayColor placeholder:uppercase"
                type="text"
                placeholder="Your name"
              />
              <input
                className="py-2 px-1 rounded border-b-2 border-white  transition-[border] duration-500 ease-in-out focus:outline-none focus:border-subColor placeholder:text-grayColor placeholder:uppercase"
                type="text"
                placeholder="subject"
              />
              <input
                className="py-2 px-1 rounded border-b-2 border-white  transition-[border] duration-500 ease-in-out focus:outline-none focus:border-subColor placeholder:text-grayColor placeholder:uppercase"
                type="email"
                placeholder="Your e-mail"
              />
              <textarea
                className="py-2 px-1 rounded min-h-36 max-h-36 border-b-2 border-white transition-[border] duration-500 ease-in-out focus:border-subColor focus:outline-none placeholder:text-grayColor placeholder:uppercase"
                placeholder="Your message"
              ></textarea>
              <button className="text-[18px] border border-subColor text-mainColor bg-mainBgColor min-w-32 w-fit  py-2 rounded hover:bg-subColor hover:text-mainBgColor transition-all duration-500 ease-in-out">
                send
              </button>
            </form>
          </div>
        </section>
      ) : (
        <Loading image={image} text="Contact" />
      )}
    </>
  );
};

export default ContactPage;
