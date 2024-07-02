import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/icons/skills.png";
import Loading from "../../components/utilities/Loading/Loading";
const SkillsPage = ({ loading }) => {
  return (
    <>
      {loading === false ? (
        <section className="w-[95%] sm:w-[90%] 2xl:w-[1320px] mx-auto h-full mb-20 mt-12 flex items-center justify-center lg:h-screen lg:my-0">
          <div className="flex flex-wrap justify-between items-start w-full bg-mainBgColor border border-subColor rounded-lg overflow-hidden">

            <div className="one-skill py-10 text-center border-l border-subColor">
              <h3 className="text-[1.6rem] font-semibold py-4 px-5 relative text-grayColor capitalize after:content-[''] after:h-[1px] after:w-3/5 after:bg-subColor after:absolute after:top-full after:left-[20%] after:right-[20%]">programming</h3>
              <div className="one-skill-content flex flex-wrap justify-center items-center mt-5">
                <div className="icon-html5 w-1/2 p-2 text-[2.9rem]"></div>
                <div className="icon-css3 w-1/2 p-2 text-[2.9rem]"></div>
                <div className="icon-javascript w-1/2 p-2 text-[2.9rem]"></div>
                <div className="icon-sass w-1/2 p-2 text-[2.9rem]"></div>
              </div>
            </div>

            <div className="one-skill py-10 text-center border-l border-subColor">
              <h3 className="text-[1.6rem] font-semibold py-4 px-5 relative text-grayColor capitalize after:content-[''] after:h-[1px] after:w-3/5 after:bg-subColor after:absolute after:top-full after:left-[20%] after:right-[20%]">Libraries</h3>
              <div className="one-skill-content flex flex-wrap justify-center items-center mt-5">
                <div className="icon-bootstrap w-1/2 p-2 text-[2.9rem]"></div>
                <div className="icon-jquery w-1/2 p-2 text-[2.9rem]"></div>
                <div className="icon-react w-1/2 p-2 text-[2.9rem]"></div>
                <div className="icon-redux w-1/2 p-2 text-[2.9rem]"></div>
              </div>
            </div>

            <div className="one-skill py-10 text-center border-l border-subColor">
              <h3 className="text-[1.6rem] font-semibold py-4 px-5 relative text-grayColor capitalize after:content-[''] after:h-[1px] after:w-3/5 after:bg-subColor after:absolute after:top-full after:left-[20%] after:right-[20%]">Tools</h3>
              <div className="one-skill-content flex flex-wrap justify-center items-center mt-5">
                <div className="icon-visualstudiocode w-1/2 p-2 text-[2.9rem]"></div>
                <div className="icon-postman w-1/2 p-2 text-[2.9rem]"></div>
                <div className="icon-git w-1/2 p-2 text-[2.9rem]"></div>
                <div className="icon-github w-1/2 p-2 text-[2.9rem]"></div>
              </div>
            </div>

            <div className="one-skill personal py-10 text-center border-l border-subColor h-full bg-yellow-500">
              <h3 className="text-[1.6rem] font-semibold py-4 px-5 relative text-grayColor capitalize after:content-[''] after:h-[1px] after:w-3/5 after:bg-subColor after:absolute after:top-full after:left-[20%] after:right-[20%]">personal</h3>
              <ol className="one-skill-content block mt-5 text-center text-grayColor">
                <li className="pt-2 text-[1rem] mt-2 leading-4">Fast Learning Ability</li>
                <li className="pt-2 text-[1rem] mt-2 leading-4">Time Management</li>
                <li className="pt-2 text-[1rem] mt-2 leading-4">Communication Skills</li>
              </ol>
            </div>
          </div>
        </section>
      ) : (
        <Loading image={image} text="Skills" />
      )}
    </>
  );
};
export default SkillsPage;
