import react from "react";

let Card = ({ name, imgUrl, phone, email }) => {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{name}</h2>
        <img className="circle-img" src={imgUrl} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{phone}</p>
        <p className="info">{email}</p>
      </div>
    </div>
  );
};

export default Card;
