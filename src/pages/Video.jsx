import React, { useRef, useState } from "react";

import "./video.css";
import VideoFooter from "./components/footer/VideoFooter";

function Video() {
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
        src="https://firebasestorage.googleapis.com/v0/b/jornada-dev.appspot.com/o/brecker2.mp4?alt=media&token=b5399418-9276-4e53-a706-1e00290c2c74"
        ref={videoRef}
        onClick={handleStartVideo}
        // controls
        loop
        className="video-player"
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
