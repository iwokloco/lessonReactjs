import React from "react";

const SearchBtn = (props) => {
  return (
    <>
      <button
        className="searchBtn"
        onClick={() => {
          props.changeUrl("http://localhost:5000/charas");
        }}
      >
        🔍
      </button>
    </>
  );
};

export default SearchBtn;
