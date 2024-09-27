import React from "react";

//COMPONENTS
import SearchBar from "../components/searchBar/searchBar";
import PostComponent from "../components/postComponent/postComponent";

//SELECTORS
import { resultsSelector } from "../features/searchSlice";
import { useSelector } from "react-redux";

//RESOURCES
import "./App.css";
import AlienBlue from "../resources/reditLogo.png";

import { useState } from "react";

function App() {
  const results = useSelector(resultsSelector);
  return (
    <div className="App">
      <div className="grid-container">
        <nav>
          <div
            className="title"
            style={{ display: "flex", alignItems: "center" }}
          >
            <img src={AlienBlue} alt="reddit-logo" className="logo" />
            <h1>
              <label>Reddit</label>
              Minimal
            </h1>
          </div>
          <SearchBar/>
        </nav>
        <div className="posts">
          {
            results.map((post, number) => <PostComponent key={number} postInfo={post}/>)
          }
        </div>
        <div className="subReddits">
          <h2>subReddits</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
