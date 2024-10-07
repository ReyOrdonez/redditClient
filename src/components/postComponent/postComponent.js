import React from "react";

//IMPORT CSS
import "./postComponent.css";

//RESOURCES
import shareLogo from "../../resources/share.png";
import likeIcon from "../../resources/like.png";
import commentsIcon from "../../resources/comment.png";

const PostComponent = ({ postInfo }) => {
  return (
    <div className="post">
      <div
        className="title"
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
        <img className="post-image" src={postInfo.image} alt="postImage" />
      </div>
      <div className="options">
        <div className="reactions-container">
          <button className="reaction-button">
            <img
              className="button-icon reaction"
              src={likeIcon}
              alt="buttonIcon"
            />
          </button>
          <p className="button-text reactions-number">
            {postInfo.score > 999
              ? (postInfo.score / 1000).toFixed(1) + "k"
              : postInfo.score}
          </p>
          <button className="reaction-button">
            <img
              className="button-icon reaction"
              src={likeIcon}
              alt="buttonIcon"
            />
          </button>
        </div>
        <button className="comment-button">
          <img
            className="button-icon comments"
            src={commentsIcon}
            alt="buttonIcon"
          />
          <p className="button-text">{postInfo.numComments}</p>
        </button>
        <button className="user-button">
          <img className="button-icon" src={shareLogo} alt="buttonIcon" />
          <p className="button-text">Compartir</p>
        </button>
      </div>
      <section className="comments-section"></section>
      <div className="line"></div>
    </div>
  );
};

export default PostComponent;
