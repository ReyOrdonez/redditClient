import React from "react";
import "./searchBar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchData } from "../../features/searchSlice";
import iconSearch from "../../resources/iconSearch.png";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(searchData(term));
    setTerm("");
  }

  return (
    <div className="divBar">
      <form onSubmit={handleSubmit} termino={term}>
        <input
          type="text"
          className="searchBar"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        ></input>
      </form>
      <img style={{ height: "1.5rem" }} src={iconSearch} />
    </div>
  );
};

export default SearchBar;
