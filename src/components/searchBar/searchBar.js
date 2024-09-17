import React from "react";
import "./searchBar.css";
import { useState } from "react";
import iconSearch from "../../resources/iconSearch.png";

const SearchBar = ({ search }) => {
  const [term, setTerm] = useState("");

  function handleSubmit() {}

  return (
    <div className="divBar">
      <form onSubmit={""} termino={term}>
        <input
          type="text"
          className="searchBar"
          onChange={(e) => setTerm(e.target.value)}
        ></input>
      </form>
      <img style={{ height: "1.5rem" }} src={iconSearch} />
    </div>
  );
};

export default SearchBar;
