import React from "react";
import "./subRedditComponent.css";
import { useDispatch } from "react-redux";
import { searchData } from "../../features/searchSlice";

const SubRedditComponent = ({ subRedditData }) => {
  const dispatch = useDispatch();
  function handleOnClick() {
    dispatch(searchData({ term: subRedditData.url, type: "subReddit" }));
  }

  return (
    <div className="subReddit">
      <button className="subReddit-button" onClick={handleOnClick}>
        <p className="subReddit-title">{subRedditData.title}</p>
      </button>
    </div>
  );
};

export default SubRedditComponent;
