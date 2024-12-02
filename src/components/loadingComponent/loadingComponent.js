import React from "react";
import "./loadingComponent.css";

const LoadingComponent = () => {
  return (
    <div className="skeleton">
      <div className="skeleton-title skeleton-color"></div>
      <div className="skeleton-user skeleton-color"></div>
      <div className="skeleton-image skeleton-color"></div>
      <div className="skeleton-options skeleton-color"></div>
      <div className="line"></div>
    </div>
  );
};

export default LoadingComponent;
