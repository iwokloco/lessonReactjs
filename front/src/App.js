import React, { useState, useEffect } from "react";
import CardsBox from "./components/CardsBox";
import SearchBox from "./components/SearchBox";

function App() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");

  //Fetch
  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:3000/data.json")
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          const compare = (a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
          };
          setItems(json.sort(compare));
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.warn("S'ha produït l'error: ", err.status, err.statusText);
        });
    };
    fetchData();
  }, []);

  //Search
  const inputSearch = (input) => {
    setSearch(input);
  };

  //Filtre
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

  //Render
  return (
    <div className="App">
      <SearchBox inputSearch={inputSearch} changeFilter={changeFilter} />
      {loading === false && <CardsBox items={searchFilter()} />}
    </div>
  );
}

export default App;
