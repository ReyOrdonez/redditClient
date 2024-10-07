import React from "react";
import "./searchBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../../features/searchSlice";
import iconSearch from "../../resources/iconSearch.png";

const SearchBar = ({ setResults }) => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchData(term));
    setTerm("");
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} termino={term}>
        <input
          type="text"
          className="searchBar"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        ></input>
        <img style={{ height: "20px", margin: "0px 5px" }} src={iconSearch} />
      </form>
    </div>
  );
};

export default SearchBar;
