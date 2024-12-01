import React from "react";

//COMPONENTS
import SearchBar from "../components/searchBar/searchBar";
import PostComponent from "../components/postComponent/postComponent";
import { SubRedditComponent } from "../components/subRedditComponent/subRedditComponent";

//SELECTORS
import { resultsSelector } from "../features/searchSlice";
import { useSelector } from "react-redux";

//RESOURCES
import "./App.css";
import AlienBlue from "../resources/reditLogo.png";
import menuIcon from "../resources/menu.png";

//HOOKS
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

//THUNK
import { searchData } from "../features/searchSlice";

function App() {
  const results = useSelector(resultsSelector);
  const [subReddits, setSubReddits] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function fetchSubReddits() {
      const request = await fetch(
        "https://www.reddit.com/subreddits/popular.json?limit=12"
      );
      const json = await request.json();
      setSubReddits(json.data.children);
      dispatch(searchData({ term: "r/Home/", type: "subReddit" }));
    })();
  }, [dispatch]);

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
          {results.map((post, index) => (
            <PostComponent key={index} postInfo={post} />
          ))}
        </div>
        <section id="subReddits-section">
          <p id="subReddits-title">subreddits</p>
          <div className="subReddits">
            {subReddits.map((subReddit, key) => {
              return (
                <SubRedditComponent subRedditData={subReddit.data} key={key} />
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
