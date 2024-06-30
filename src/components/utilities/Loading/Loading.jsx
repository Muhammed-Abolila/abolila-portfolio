const Loading = ({ image, text }) => {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="absolute h-full w-full bg-subColor opacity-80"></div>
      <div className="relative z-20 text-center py-4 px-6 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
          <div className="absolute top-0 h-[5px] w-full bg-mainBgColor rounded-[5px] animate-afterAnimation"></div>
          <div className="absolute bottom-0 h-[5px] w-full bg-mainBgColor rounded-[5px] animate-beforeAnimation"></div>
        </div>
        <div className="w-20 h-20 m-auto">
          <img className="w-full h-full" src={image} alt="Muhammed Abo Lila" />
        </div>
        <h5 className="mt-2 text-mainColor font-medium">{text}</h5>
      </div>
    </section>
  );
};
export default Loading;
