import { useState, useEffect } from "react";

const TopNavbar = ({text}) => {

  const [theme, setTheme] = useState('');
  const storedTheme = localStorage.getItem('theme');
  const changeTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.add(storedTheme);
    }
  }, []);

  return (
    <nav>
        <div className="top-nav-bar">
            <div className="icon-resize nav-icon"></div>
            <div className="text">{text}</div>
            {storedTheme==="dark"?<div className="icon-IcoMoon nav-icon" onClick={changeTheme}></div>:
            <div className="icon-sun nav-icon" onClick={changeTheme}></div>}
            
        </div>
    </nav>
  );
};

export default TopNavbar;
