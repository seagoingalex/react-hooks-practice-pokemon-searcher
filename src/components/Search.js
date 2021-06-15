import React from "react";

function Search({ onSearchChange, searchTerm }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input 
          onChange={onSearchChange}
          value={searchTerm}
          className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
