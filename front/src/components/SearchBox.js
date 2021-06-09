import React from "react";
import SearchBar from "./SearchBar";
import SearchBtn from "./SearchBtn";

const SearchBox = (props) => {
  return (
    <div className="searchBox">
      <SearchBar />
      <SearchBtn changeUrl={props.changeUrl} />
    </div>
  );
};

export default SearchBox;
