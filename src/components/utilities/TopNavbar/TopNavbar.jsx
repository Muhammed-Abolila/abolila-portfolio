const TopNavbar = ({text}) => {
  return (
    <nav>
        <div className="top-nav-bar">
            <div className="icon-resize nav-icon"></div>
            <div className="text">{text}</div>
            <div className="icon-close-outline nav-icon"></div>
        </div>
    </nav>
  );
};

export default TopNavbar;
