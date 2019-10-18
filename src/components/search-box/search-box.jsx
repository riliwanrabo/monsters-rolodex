import React from "react";
import "../search-box/search-box.scss";

export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="search-box-wrapper">
      <input type="search" placeholder={placeholder} onChange={handleChange} />
    </div>
  );
};
