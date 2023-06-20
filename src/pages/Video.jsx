import React, { useRef, useState } from "react";

import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";

function Video({ likes, comments, shares, username, description, song, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const handleStartVideo = () => {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  };

  return (
    <div className="video-container">
      <video
        src={url}
        ref={videoRef}
        onClick={handleStartVideo}
        // controls
        loop
        className="video-player"
      ></video>
      <VideoSidebar likes={likes} comments={comments} shares={shares} />
      <VideoFooter username={username} description={description} song={song} />
    </div>
  );
}

export default Video;
