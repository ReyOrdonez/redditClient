import React from "react";

//IMPORT CSS
import "./postComponent.css";

//RESOURCES
import watchLogo from "../../resources/time.png";
import shareLogo from "../../resources/share.png";
import likeIcon from "../../resources/like.png";
import commentsIcon from "../../resources/comment.png";

const PostComponent = ({postInfo}) => {
  return (
    <div className="post">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div>
          <h2 className="post-title">{postInfo.title}</h2>
          <p className="user-name">@{postInfo.author}</p>
        </div>
      </div>
      <div className="image-container">
        {
          postInfo.image && <img src={postInfo.image} className="post-image"/>
        }
      </div>
      <div className="options">
        <div className="likes">
          {
            postInfo.score
          }
        </div>
        <button className="comments-button">
          {
            postInfo.numComments
          }
        </button>
        <button className="share-button">
          <img className="share-logo" src={shareLogo} />
          <p className="share-text">Compartir</p>
        </button>
      </div>
    </div>
  );
};

export default PostComponent;
