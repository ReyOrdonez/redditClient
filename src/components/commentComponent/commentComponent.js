import React from "react";

const CommentComponent = ({ userName, body }) => {
  return (
    <div>
      <img alt="userImage" />
      <h1>{userName}</h1>
      <p>{body}</p>
    </div>
  );
};

export default CommentComponent;
