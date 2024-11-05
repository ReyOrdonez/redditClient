import React from "react";
import "./commentComponent.css";

import alienBlue from "../../resources/reditLogo.png";

const CommentComponent = ({ userName, body }) => {
  return (
    <div className="comment-component">
      <div className="line"></div>
      <div className="user-container">
        <img src={alienBlue} className="user-image" alt="userImage" />
        <h3 className="user-name-comment">{userName}</h3>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default CommentComponent;
