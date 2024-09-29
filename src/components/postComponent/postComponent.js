import React from "react";

//IMPORT CSS
import "./postComponent.css";

//RESOURCES
import shareLogo from "../../resources/share.png";
import likeIcon from "../../resources/like.png";
import commentsIcon from "../../resources/comment.png";

const PostComponent = () => {
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
          <h2 className="post-title">Trapitos invaden el desierto de Sonora</h2>
          <p className="user-name">@elMasturbaBurros</p>
        </div>
      </div>
      <div className="image-container">
        <img
          className="post-image"
          src="https://pbs.twimg.com/media/ETgg_UvX0AEimWQ.jpg"
          alt="postImage"
        />
      </div>
      <div className="options">
        <div className="reactions-container">
          <button className="user-button reaction">
            <img
              className="button-icon reaction"
              src={likeIcon}
              alt="buttonIcon"
            />
          </button>
          <p className="button-text reactions-number">1.5k</p>
          <button className="user-button reaction">
            <img
              className="button-icon reaction"
              src={likeIcon}
              alt="buttonIcon"
            />
          </button>
        </div>
        <button className="user-button">
          <img className="button-icon" src={commentsIcon} alt="buttonIcon" />
          <p className="button-text">1.5k</p>
        </button>
        <button className="user-button">
          <img className="button-icon" src={shareLogo} alt="buttonIcon" />
          <p className="button-text">Compartir</p>
        </button>
      </div>
    </div>
  );
};

export default PostComponent;
