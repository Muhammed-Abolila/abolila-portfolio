import { useEffect, useState } from "react";
import education from "../../../assets/icons/education.png";
import skills from "../../../assets/icons/skills.png";
import portfolio from "../../../assets/icons/portfolios.png";
import home from "../../../assets/icons/home.png";
import contact from "../../../assets/icons/contact.png";
import experiences from "../../../assets/icons/experiences.png";
import { Link } from "react-router-dom";
const BottomNavbar = ({ loading, setLoading }) => {
  const bottomNavContent = [
    {
      link: "education",
      imgSrc: education,
    },
    {
      link: "skills",
      imgSrc: skills,
    },
    {
      link: "portfolio",
      imgSrc: portfolio,
    },
    {
      link: "home",
      imgSrc: home,
    },
    {
      link: "contact",
      imgSrc: contact,
    },
    {
      link: "experiences",
      imgSrc: experiences,
    },
  ];
  const [bottom, setBottom] = useState(0);
  // Change NavBar Position
  useEffect(() => {
    if (loading === false) {
      setBottom(0);
    } else if (loading === true) {
      setBottom("-20%");
      setTimeout(() => {
        setBottom(0);
        setLoading(false);
      }, 2000);
    }
  }, [loading]);
  return (
    <div
      style={{ bottom: bottom }}
      className="flex justify-center items-center p-0 fixed w-full z-50 transition-[bottom] duration-1000 ease-in-out"
    >
      <ul className="list-none bg-mainBgColor border-[1px] border-subColor p-[7px] rounded-md w-[450px] flex justify-between items-center gap-2">
        {bottomNavContent.length > 0 &&
          bottomNavContent.map((content, index) => (
            <li
              key={index}
              onClick={() => setLoading(true)}
              className="relative group/opacity"
            >
              <div className="opacity-0 group-hover/opacity:opacity-100 bg-subColor py-[2px] transition-[opacity] duration-500 ease-in-out uppercase w-[90px] text-[11px] text-center rounded-md absolute top-[-30px] right-[-65%] z-10 before:content-[''] before:p-[5px] before:bg-subColor before:absolute before:top-[65%] before:left-[42%] before:rotate-[137deg] before:z-[-1]">
                {content.link}
              </div>
              <Link to={`/${content.link}`}>
                <img
                  className="w-10 h-10 p-[3px] border-[1px] border-subColor rounded-[10px] hover:animate-iconMove"
                  src={content.imgSrc}
                  alt={`${content.link}`}
                />
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BottomNavbar;
