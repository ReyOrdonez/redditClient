import React from "react";
import "./searchBar.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchData } from "../../features/searchSlice";
import iconSearch from "../../resources/iconSearch.png";

const SearchBar = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const scrollTopFunction = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    scrollTopFunction();
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
        <img style={{ height: "20px", margin: "0px 5px" }} src={iconSearch} alt="searchIcon"/>
      </form>
    </div>
  );
};

export default SearchBar;
