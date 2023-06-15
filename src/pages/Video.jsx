import React, { useRef, useState } from "react";

import "./video.css";

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
        src="https://webapp-va.tiktok.com/184e3cda69ae8ed06b86eed781857e9c/648bbc7e/kmoat/tos-useast2a-pve-0068/ocdhmVWcI2ACkJJA0MCztg8IoQAfCJio2k9yU4?a=1988&ch=0&cr=0&dr=0&lr=unwatermarked&cd=0%7C0%7C0%7C0&br=292&bt=146&cs=0&ds=6&ft=Ap6JtBiTq8ZmoTlzUc_vj_N_8AhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKXVmZXpud2xAKWQ3NGc5PDg8ODc4ZTVpaDhnKXhnN3V4OmU7OWYzM2o3PHl5U2xrdmlxRDpqYmwrYitsaHFgMS5iNTAtMGExMV9jYWIyYjpjLWhtYi00YDUyZS0tMTEtLTo%3D&btag=200080000&dpk=%2FS68%2F8jKuB3JMLAUZRbkLxzmCm4rfO4LHA3VdQLsk9VQy%2Bgg0CoGPNR1AC0cSWZmpi08zZiha3%2B8B%2Fa%2FQnM3F9nTcQ%2BUKhGQPmdR1Q%3D%3D&dpm=cenc-aes-ctr&l=202306151935483F16FC155D183F301308&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNzAzMjQ5NzkyNDAyNzI4NjUzNCJ9"
        ref={videoRef}
        // onClick={handleStartVideo}
        controls
        loop
        className="video-player"
      ></video>
    </div>
  );
}

export default Video;
