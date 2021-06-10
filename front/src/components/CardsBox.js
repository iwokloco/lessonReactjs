import React from "react";
import Card from "./Card";

const CardsBox = (props) => {
  const { items } = props;

  const showCards = () => {
    if (items.length === 0) {
      return <h2 className="noResults">No s'han trobat resultats</h2>;
    } else {
      const cards = items.map((card, index) => {
        const { name, films, side, quote, img } = card;
        return (
          <Card
            key={index}
            name={name}
            films={films}
            side={side}
            quote={quote}
            img={img}
          />
        );
      });
      return cards;
    }
  };

  return <div className="cardsBox">{showCards()}</div>;
};

export default CardsBox;
