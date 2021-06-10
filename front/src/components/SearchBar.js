import React from "react";

const SearchBar = (props) => {
  return (
    <>
      <input
        className="searchBar"
        type="search"
        name="seacrh"
        placeholder="Search..."
        autoComplete="off"
        onKeyUp={(e) => props.inputSearch(e.target.value)}
      />
    </>
  );
};

export default SearchBar;
