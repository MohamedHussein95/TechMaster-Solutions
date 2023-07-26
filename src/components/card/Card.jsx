import "./card.css";

const Card = ({ body, image, fullName, occupation, i }) => {
  return (
    <div className="card ">
      <div className="card__image" style={{ "--x": i }}>
        <img src={image} alt="Profile image" />
      </div>
      <div className="card__body">
        <p>{body}</p>
      </div>
      <div className="card__footer">
        <h3>{fullName}</h3>
        <p>{occupation}</p>
      </div>
    </div>
  );
};

export default Card;
