import React, { useState, useEffect } from "react";
import CardsBox from "./components/CardsBox";
import SearchBox from "./components/SearchBox";

function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/data.json")
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          setItems(json);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.warn("S'ha produït l'error: ", err.status, err.statusText);
        });
    };
    fetchData();
  }, []);

  const inputSearch = (input) => {
    setSearch(input);
  };

  const searchFilter = () => {
    const filteredItems = items.filter((el) => {
      let rx = new RegExp(filter, "i");
      return rx.test(el.name);
    });
    return filteredItems;
  };

  const changeFilter = () => {
    setFilter(search);
  };

  return (
    <div className="App">
      <SearchBox inputSearch={inputSearch} changeFilter={changeFilter} />
      {loading === false && <CardsBox items={searchFilter()} />}
    </div>
  );
}

export default App;
