import React from "react";

const SearchBar = () => {
  return (
    <>
      <input
        className="searchBar"
        type="search"
        name="seacrh"
        placeholder="Search..."
        autoComplete="off"
      />
    </>
  );
};

export default SearchBar;
