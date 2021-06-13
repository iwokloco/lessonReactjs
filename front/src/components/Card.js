import React from "react";

const Card = (props) => {
  const { name, films, side, quote, img } = props;
  return (
    <div className={side === "Dark" ? "card dark" : "card light"}>
      <div className="cardPic">
        <img src={img} alt={name} />
      </div>
      <div className="cardInfo">
        <p className="text">
          <b>Name: </b>
          {name}
        </p>
        <hr />
        <p className="text">
          {films.length > 1 ? (
            <b>Star Wars Episodes: </b>
          ) : (
            <b>Star Wars Episode: </b>
          )}
          {films.map((film) => `${film} `)}
        </p>
        <hr />
        <p className="text">
          <b>Side: </b>
          {side}
        </p>
        <hr />
        <p className="text">
          <b>Quote:</b>
        </p>
        <p className="text quote">
          <q>
            <i>{quote}</i>
          </q>
        </p>
      </div>
    </div>
  );
};

export default Card;
