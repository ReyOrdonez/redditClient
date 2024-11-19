import React from "react";

//IMPORT CSS
import "./postComponent.css";

//COMPONENTS
import CommentComponent from "../commentComponent/commentComponent";

//RESOURCES
import shareLogo from "../../resources/share.png";
import likeIcon from "../../resources/like.png";
import commentsIcon from "../../resources/comment.png";

//HOOKS
import { useState, useEffect } from "react";

const PostComponent = ({ postInfo }) => {
  const [comments, setComments] = useState();
  const [error, setError] = useState();
  console.log(error);

  useEffect(() => {
    //CLEAN UP OUR COMMENTS LIST BEFORE RENDERING NEW POSTS
    setComments([]);
  }, [postInfo]);

  const fetchComments = async () => {
    const url = `https://www.reddit.com/comments/${postInfo.postId}/.json?limit=20`;
    const response = await fetch(url);
    if (!response.ok) {
      setError(response.status);
      return;
    }
    const json = await response.json();
    const comments = [];
    json.forEach((data) => {
      const commentsByType = data.data.children;
      commentsByType.forEach((comment) => {
        if (comment.kind !== "more" && comment.data.body) {
          comments.push(comment.data);
        }
      });
    });
    setComments(comments);
  };

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
        {postInfo.image && (
          <img className="post-image" src={postInfo.image} alt="postImage" />
        )}
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
        <button className="comment-button" onClick={fetchComments}>
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
      <section className="comments-section">
        {comments?.map((comment, key) => (
          <CommentComponent
            userName={comment.author}
            body={comment.body}
            key={key}
          />
        ))}
      </section>
      <div className="line"></div>
    </div>
  );
};

export default PostComponent;
