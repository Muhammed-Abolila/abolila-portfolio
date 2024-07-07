import image from "../../assets/icons/skills.png";
import Loading from "../../components/utilities/Loading/Loading";
const SkillsPage = ({ loading }) => {
  const skillsArrey = [
    {
      skillTitle: "programming",
      skills: [
        {
          skillName: "html",
          skillIcone: "icon-html5",
        },
        {
          skillName: "css3",
          skillIcone: "icon-css3",
        },
        {
          skillName: "javascript",
          skillIcone: "icon-javascript",
        },
        {
          skillName: "sass",
          skillIcone: "icon-sass",
        },
      ],
    },
    {
      skillTitle: "libraries",
      skills: [
        {
          skillName: "bootstrap",
          skillIcone: "icon-bootstrap",
        },
        {
          skillName: "jquery",
          skillIcone: "icon-jquery",
        },
        {
          skillName: "react",
          skillIcone: "icon-react",
        },
        {
          skillName: "redux",
          skillIcone: "icon-redux",
        }
        
      ],
    },
    {
      skillTitle: "tools",
      skills: [
        {
          skillName: "vs code",
          skillIcone: "icon-visualstudiocode",
        },
        {
          skillName: "postman",
          skillIcone: "icon-postman",
        },
        {
          skillName: "git",
          skillIcone: "icon-git",
        },
        {
          skillName: "github",
          skillIcone: "icon-github",
        },
      ],
    },
    {
      skillTitle: "personal",
      personalSkills: [
        {
          skillName: " Fast Learning Ability",
        },
        {
          skillName: "Time Management",
        },
        {
          skillName: " Communication Skills",
        },
      ],
    },
  ];
  return (
    <>
      {loading === false ? (
        <section className="container h-full mb-20 mt-12 flex items-center justify-center md:h-screen md:my-0">
          <div className="flex flex-wrap justify-center items-stretch w-full bg-mainBgColor border border-subColor rounded-lg overflow-hidden">
            {skillsArrey.length > 0
              ? skillsArrey.map((skill, index) => (
                  <div
                    key={index}
                    className="w-full md:w-[50%] lg:w-[25%] py-4 text-center border-subColor border-b last:border-b-0 border-style md:border-l md:first:border-l-0 lg:border-b-0"
                  >
                    <h3 className="text-[1.6rem] pb-3 font-semibold relative text-grayColor capitalize after:content-[''] after:h-[1px] after:w-3/5 after:bg-subColor after:absolute after:top-full after:left-[20%] after:right-[20%]">
                      {skill.skillTitle}
                    </h3>
                    <div className="pt-3 flex flex-wrap justify-center items-center md:mt-5">
                      {skill?.skills?.length > 0
                        ? skill?.skills.map((singleSkill, index) => (
                            <div
                              key={index}
                              className={`${singleSkill.skillIcone} w-1/2 p-5 text-[2.9rem]`}
                            ></div>
                          ))
                        : null}
                    </div>
                    <ol className="block text-center text-grayColor">
                      {skill?.personalSkills?.length > 0
                        ? skill?.personalSkills.map((personalSkill, index) => (
                            <li key={index} className="text-[1rem] leading-4 pt-5 first:pt-0 lg:first:pt-5">
                              {personalSkill.skillName}
                            </li>
                          ))
                        : null}
                    </ol>
                  </div>
                ))
              : null}
          </div>
        </section>
      ) : (
        <Loading image={image} text="Skills" />
      )}
    </>
  );
};
export default SkillsPage;
