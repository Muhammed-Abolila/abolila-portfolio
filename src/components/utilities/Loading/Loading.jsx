const Loading = ({ image, text }) => {
  return (
    <section className="loading">
      <div className="layer"></div>
      <div className="caption">
        <div className="image-container">
          <img src={image} alt="" />
        </div>
        <h5>{text}</h5>
      </div>
    </section>
  );
};
export default Loading;
