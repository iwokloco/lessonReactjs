import React from "react";

const Card = (props) => {
  const { name, films, side, quote } = props;
  return (
    <div className="card">
      <div className="cardPic">
        <img src="/assets/vader.jpg" alt="Anakin/Vader" />
      </div>
      <div className="cardInfo">
        <p className="title">Name</p>
        <p className="text">{name}</p>
        <hr />
        <p className="title">Films</p>
        <p className="text">Episode: {films}</p>
        <hr />
        <p className="title">Side</p>
        <p className="text">{side}</p>
        <hr />
        <p className="title">Quote</p>
        <p className="text quote">
          <q>{quote}</q>
        </p>
      </div>
    </div>
  );
};

export default Card;
