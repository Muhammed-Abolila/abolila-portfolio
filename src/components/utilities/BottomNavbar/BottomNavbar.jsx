import { useEffect, useState } from "react";
import education from "../../../assets/icons/education.png";
import skills from "../../../assets/icons/skills.png";
import portfolio from "../../../assets/icons/portfolios.png";
import home from "../../../assets/icons/home.png";
import contact from "../../../assets/icons/contact.png";
import experiences from "../../../assets/icons/experiences.png";
import { Link } from "react-router-dom";
const BottomNavbar = ({ loading, setLoading }) => {
  const [bottom, setBottom] = useState('');
  const creatLoading = () => {
    setLoading(true);
  };
  // Change NavBar Position
  useEffect(() => {
    if (loading === false) {
      setBottom("0");
    } else if (loading === true) {
      setBottom("-20%");
      setTimeout(() => {
        setBottom("0");
        setLoading(false);
      },2000);
    }
  }, [loading]);

  return (
    <div className="navbar" style={{bottom:bottom}}>
      <ul>
        <li onClick={creatLoading}>
          <div className="my-tooltip">education</div>
          <Link to="/education">
            <img src={education} alt="education" />
          </Link>
        </li>
        <li onClick={creatLoading}>
          <div className="my-tooltip">skills</div>
          <Link to="/skills">
            <img src={skills} alt="skills" />
          </Link>
        </li>
        <li onClick={creatLoading}>
          <div className="my-tooltip">portfolio</div>
          <Link to="/portfolio">
            <img src={portfolio} alt="portfolio" />
          </Link>
        </li>
        <li onClick={creatLoading}>
          <div className="my-tooltip">home</div>
          <Link to="/home">
            <img src={home} alt="home" />
          </Link>
        </li>
        <li onClick={creatLoading}>
          <div className="my-tooltip">contact</div>
          <Link to="/contact">
            <img src={contact} alt="contact" />
          </Link>
        </li>
        {/* <li onClick={creatLoading}>
        <div className="my-tooltip">testimonials</div>
          <Link to="/testimonials">
            <img src={me} alt="testimonials" />
          </Link>
        </li> */}
        <li onClick={creatLoading}>
          <div className="my-tooltip">experiences</div>
          <Link to="/experiences">
            <img src={experiences} alt="experiences" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavbar;
