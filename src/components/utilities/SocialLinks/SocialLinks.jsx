const SocialLinks = () => {
  const linksArray = [
    {
      link: "https://github.com/Muhammed-Abolila",
      icon: "icon-github",
    },
    {
      link: "https://www.linkedin.com/in/mabolila638/",
      icon: "icon-linkedin",
    },
    {
      link: "mailto:mabolila638@gmail.com",
      icon: "icon-gmail",
    },
    {
      link: "https://wa.me/201027251994",
      icon: "icon-whatsapp",
    },
  ];
  return (
    <ul className="social-links mt-5 list-none flex items-center justify-center p-0 gap-8">
      {linksArray.length > 0
        ? linksArray.map((link, index) => (
            <li
              key={index}
              className={`${link.icon} bg-white border border-subColor p-2 text-[2rem] rounded-lg relative overflow-hidden`}
            >
              <a
                className="absolute top-0 bottom-0 left-0 right-0"
                href={`${link.link}`}
                target="_blank"
              ></a>
            </li>
          ))
        : null}
    </ul>
  );
};
export default SocialLinks;
