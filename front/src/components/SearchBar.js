import React from "react";

const SearchBar = (props) => {
  const { inputSearch, changeFilter } = props;
  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      changeFilter();
    } else {
      inputSearch(e.target.value);
    }
  };

  return (
    <>
      <input
        className="searchBar"
        type="search"
        name="seacrh"
        placeholder="Search..."
        autoComplete="off"
        onKeyUp={(e) => handleKeyUp(e)}
      />
    </>
  );
};

export default SearchBar;
