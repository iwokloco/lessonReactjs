import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardsBox = (props) => {
  const [cards, setCards] = useState([]);
  const { searchUrl } = props;

  useEffect(() => {
    async function fetchData() {
      await fetch(searchUrl)
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => setCards(json))
        .catch((err) => console.log(err.status, err.statusText));
    }
    fetchData();
  }, [searchUrl]);

  return <div className="cardsBox"></div>;
};

export default CardsBox;
