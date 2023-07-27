import React from 'react';

const VideoBtn = ({...props}) => {
  return (
    <button className="video-btn" title="show video content" area-label="Show video content" {...props}>
      <img src="img/icons/youtube.png" alt="show video content" />
    </button>
  );
};

export default VideoBtn;