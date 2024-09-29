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
import menuIcon from "../resources/menu.png";

import { useState } from "react";

function App() {
  const results = useSelector(resultsSelector);
  return (
    <div className="App">
      <div className="grid-container">
        <nav className="navBar-pc">
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
          <SearchBar />
        </nav>
        <nav className="navBar-mobile">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={menuIcon} alt="menu-icon" className="menu-icon" />
            <h1>reddit</h1>
          </div>
          <SearchBar />
          <img
            src={AlienBlue}
            alt="alien-icon"
            className="reddit-logo-mobile"
          />
        </nav>
        <div className="posts">
          {results.map((post, number) => (
            <PostComponent key={number} postInfo={post} />
          ))}
        </div>
        <div className="subReddits">
          <h2>subReddits</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
