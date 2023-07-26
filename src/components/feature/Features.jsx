import "./features.css";

const Features = ({ title, text, style, bodyStyle }) => {
  return (
    <div className="features" style={style}>
      <div className="features__title-container">
        <div />
        <h1>{title}</h1>
      </div>
      <div className="features__body-container" style={bodyStyle}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Features;
