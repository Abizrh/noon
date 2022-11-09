import React from "react";

export const Live = () => {
  return (
    <>
      {/* <video width="750" height="500" controls >
      <embed src={"https://www.youtube.com/embed/x5DhuDSArTI"} type="video/mp4"/>
     </video> */}

      <iframe
        id="ytplayer"
        type="text/html"
        src={"https://www.youtube.com/embed/x5DhuDSArTI"}
        frameBorder="0"
        playsinline="1"
        allowFullScreen
        sandbox="allow-scripts allow-presentation allow-same-origin"
        allow="autoplay; fullscreen; picture-in-picture; xr-spatial-tracking; clipboard-write"
        title="video"
      />
    </>
  );
};
