import React from 'react';

const VideoContentWindow = ({ setShowVideo }) => {
  return (
    <div className="video-content">
      <iframe 
        src="https://www.youtube.com/embed/TmmppbnrLvs" 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen
      >

      </iframe>

      <div className="video-content__preload">
        <img src="https://i.ytimg.com/vi_webp/TmmppbnrLvs/sddefault.webp" alt="youtube preload" />
      </div>

      <button className="video-content__close-btn btn btn_close" onClick={ () => setShowVideo(false) }>X</button>
    </div>
  );
};

export default VideoContentWindow;