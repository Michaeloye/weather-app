import React from "react";

function BackgroundVideo({ videoURL }) {
  return (
    <video
      autoPlay
      muted
      loop
      id="myVideo"
      className="App fixed right-0 bottom-0 min-w-full min-h-screen object-cover -z-10"
    >
      <source src={videoURL} type="video/mp4" />
    </video>
  );
}

export default BackgroundVideo;
