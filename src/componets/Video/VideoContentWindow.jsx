import React from 'react';

const VideoContentWindow = ({ src, setShowVideo }) => {
  return (
    <div className="video-popup">

      <div className="video-content">
        <iframe 
          src={ src } 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        >

        </iframe>

        <div className="video-content__preload">
          <img src="https://i.ytimg.com/vi_webp/TmmppbnrLvs/sddefault.webp" alt="youtube preload" />
        </div>

        <button className="video-content__close-btn btn btn_close" onClick={ () => setShowVideo(false) }>X</button>
      </div>
      
    </div>
  );
};

export default VideoContentWindow;