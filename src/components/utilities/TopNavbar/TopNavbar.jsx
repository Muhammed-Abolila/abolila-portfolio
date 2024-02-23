import { useState, useEffect } from "react";
const TopNavbar = ({ text, loading}) => {
  const [theme, setTheme] = useState("");
  let [top,setTop]=useState("");
  let [resize,setResize]=useState(false)
// Dark Mood And Light Mood
  const storedTheme = localStorage.getItem("theme");
  const changeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(newTheme);
  };
  // Save Mood In localStorage
  useEffect(() => {
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);
// Change NavBar Position
  useEffect(() => {
    if (loading === false) {
      setTop("0");
    } else if (loading === true) {
      setTop("-100px");
      setTimeout(() => {
        setTop("0");
      },3000);
    }
  }, [loading]);

  // Resize Screen
  const toggleFullScreen=()=>{
    let isFullScreen=document.fullscreenElement
    if(isFullScreen){
      document.exitFullscreen();
      setResize(false)
    }else{
      document.body.requestFullscreen()
      setResize(true)
    }
  }
  return (
    <nav style={{top:top}}>
      <div className="top-nav-bar">
        <div className={`${resize===false||''?"icon-resize-full-screen":"icon-resize-100"} nav-icon`} onClick={toggleFullScreen}></div>
        <div className="text">{text}</div>
        <div className={`${storedTheme==="dark"?"icon-IcoMoon":"icon-sun"} nav-icon`} onClick={changeTheme}></div>
      </div>
    </nav>
  );
};
export default TopNavbar;
