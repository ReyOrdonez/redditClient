import React from "react";

//IMPORT CSS
import "./postComponent.css";

//RESOURCES
import watchLogo from "../../resources/time.png";
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
        <p className="time">
          <img src={watchLogo} className="watch-logo" />
          Hace 4 horas
        </p>
      </div>
      <div className="image-container">
        <img
          className="post-image"
          src="https://pbs.twimg.com/media/ETgg_UvX0AEimWQ.jpg"
        />
      </div>
      <div className="options">
        <div className="likes">
          <button className="reaction-button">
            <img src={likeIcon} />
          </button>
          <p className="likes-number">1.5k</p>
          <button className="reaction-button">
            <img src={likeIcon} />
          </button>
        </div>
        <button className="comments-button">
          <img src={commentsIcon} />
          <p className="likes-number">5.3k</p>
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
