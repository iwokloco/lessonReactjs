import React from "react";

const SearchBtn = (props) => {
  return (
    <>
      <button className="searchBtn" onClick={() => props.changeFilter()}>
        <img src="/assetsPublic/search.svg" alt="search" />
      </button>
    </>
  );
};

export default SearchBtn;
