import React from 'react';

const VideoDisplay = ({video}) => {
  if(!video){
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return(
    <div className="video-detail">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} title={videoId}></iframe>
      </div>
    </div>
  );
};

export default VideoDisplay;
