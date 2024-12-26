import React from "react";
import "./style.css"; // Ensure this contains the styles for your component.

const MoviePosterLoading: React.FC = () => {
  return (
    <div className="movie-poster-loading">
      <div className="loading-placeholder">
        <div className="loading-image"></div>
        <div className="loading-text"></div>
      </div>
    </div>
  );
};

export default MoviePosterLoading;
