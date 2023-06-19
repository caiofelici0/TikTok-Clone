import React, { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentIcon from "@mui/icons-material/Comment";
import ShareIcon from "@mui/icons-material/Share";

import "./videoSidebar.css";

function VideoSidebar() {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="video-sidebar">
      <div className="video-sidebar-options" onClick={handleLike}>
        {liked ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? 300 + 1 : 300}</p>
      </div>
      <div className="video-sidebar-options">
        <CommentIcon fontSize="large" />
        <p>300</p>
      </div>
      <div className="video-sidebar-options">
        <ShareIcon fontSize="large" />
        <p>300</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
