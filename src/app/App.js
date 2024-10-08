import React from "react";

//COMPONENTS
import SearchBar from "../components/searchBar/searchBar";
import PostComponent from "../components/postComponent/postComponent";

//RESOURCES
import "./App.css";
import AlienBlue from "../resources/reditLogo.png";

function App() {
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
          <SearchBar />
        </nav>
        <div className="posts">
          <PostComponent key={"1"} propiedad="pito" />
        </div>
        <div className="subReddits">
          <h2>subReddits</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
