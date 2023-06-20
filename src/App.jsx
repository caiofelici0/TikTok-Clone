import React, { useEffect, useState } from "react";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

import "./App.css";
import Video from "./pages/Video";

function App() {
  let maxHeight;
  if (window.innerHeight <= 800) maxHeight = window.innerHeight;

  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const videosCollection = collection(db, "videos");
    const videosSnapshot = await getDocs(videosCollection);
    const videosList = videosSnapshot.docs.map((doc) => doc.data());

    setVideos(videosList);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App" style={{ maxHeight: maxHeight + "px" }}>
      <div className="app-videos">
        {videos.map((video) => (
          <Video
            likes={video.likes}
            comments={video.comments}
            shares={video.shares}
            username={video.username}
            description={video.description}
            song={video.song}
            url={video.url}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
