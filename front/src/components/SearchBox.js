import React from "react";
import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";

const SearchBox = (props) => {
  const { inputSearch, changeFilter } = props;
  return (
    <div className="searchBox">
      <SearchBar inputSearch={inputSearch} changeFilter={changeFilter} />
      <SearchBtn changeFilter={changeFilter} />
    </div>
  );
};

export default SearchBox;
