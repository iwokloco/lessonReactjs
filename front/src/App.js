import React, { useState } from "react";
import CardsBox from "./components/CardsBox";
import SearchBox from "./components/SearchBox";

function App() {
  const [searchUrl, setSearchUrl] = useState("");
  console.log(searchUrl);
  return (
    <div className="App">
      <SearchBox changeUrl={(searchUrl) => setSearchUrl(searchUrl)} />
      <CardsBox searchUrl={searchUrl} />
    </div>
  );
}

export default App;
