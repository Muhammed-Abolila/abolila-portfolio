import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import clsx from 'clsx';
const TopNavbar = ({loading}) => {
  let [header,setHeader]=useState('');
  const [theme, setTheme] = useState("");
  let [top,setTop]=useState(0);
  let [resize,setResize]=useState(false);
  let location=useLocation();
 
  useEffect(()=>{
    if(location.pathname=="/"||location.pathname=="/home"){
      setHeader("Muhammed Abo Lila")
    }else if(location.pathname=="/education"){
      setHeader("education & courses");
    }else{
      setHeader(location.pathname.slice(1));
    }
  },[location.pathname])
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
      setTop(0);
    } else if (loading === true) {
      setTop(-100);
      setTimeout(() => {
        setTop(0);
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
    <nav style={{top:top}} className={`bg-mainBgColor text-mainColor py-1 fixed w-full z-50 border-b border-subColor transition-[top] duration-1000 ease-in-out`}>
      <div className="m-auto w-full px-5 flex justify-between items-center">
        <div className={`${resize===false||''?"icon-resize-full-screen":"icon-resize-100"} text-[23px] text-subColor p-[3px] cursor-pointer`} onClick={toggleFullScreen}></div>
        <div className="text uppercase text-[20px] font-medium relative before:content-[''] before:absolute before:top-[11px] before:left-[-14px] before:bg-subColor before:w-[10px] before:h-[10px] before:rounded-full">{header}</div>
        <div className={`${storedTheme==="dark"?"icon-IcoMoon":"icon-sun"}  text-[23px] text-subColor p-[3px] cursor-pointer`} onClick={changeTheme}></div>
      </div>
    </nav>
  );
};
export default TopNavbar;
