import React from "react";

//IMPORT CSS
import "./postComponent.css";

//COMPONENTS
import CommentComponent from "../commentComponent/commentComponent";

//RESOURCES
import shareLogo from "../../resources/share.png";
import likeIcon from "../../resources/like.png";
import commentsIcon from "../../resources/comment.png";

//THUNK
import { loadComments } from "../../features/commentsSlice";

//REDUX HOOKS
import { useDispatch, useSelector } from "react-redux";

//SELECTORS
import { selectCommentsByPost } from "../../features/commentsSlice";

const PostComponent = ({ postInfo }) => {
  const dispatch = useDispatch();
  const commentsList = useSelector((state) =>
    selectCommentsByPost(state, postInfo.postId)
  );
  if (commentsList[0]) {
    console.log(commentsList[0].comments);
  } else {
    console.log("no se pudo");
  }

  function handleOnClickRequestComments() {
    dispatch(loadComments(postInfo.postId));
  }

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
        {postInfo.image ? (
          <img className="post-image" src={postInfo.image} alt="postImage" />
        ) : (
          false
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
        <button
          className="comment-button"
          onClick={handleOnClickRequestComments}
        >
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
        {commentsList[0] &&
          commentsList[0].comments.map((comment, key) => (
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
