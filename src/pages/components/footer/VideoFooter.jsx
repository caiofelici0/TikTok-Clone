import React from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

import "./videoFooter.css";

function VideoFooter({ username, description, song }) {
  return (
    <div className="video-footer">
      <div className="video-footer-text">
        <h3>@{username}</h3>
        <p>{description}</p>
        <div className="video-music">
          <MusicNoteIcon className="video-music-icon" />
          <div className="video-music-title">
            <p>{song}</p>
          </div>
        </div>
      </div>
      <img
        className="video-record-img"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
        alt="Imagem vinil"
      />
    </div>
  );
}

export default VideoFooter;
