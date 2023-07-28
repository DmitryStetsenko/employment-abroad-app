import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { getShortYoutubeUrl } from '../../store/functions';

const VideoContentWindow = ({ src, setShowVideo }) => {
  const { res, url } = getShortYoutubeUrl(src);

  const portal = document.getElementById('portal');
  const component = ReactDOM.createPortal((
    <div className="video-popup">

      <div className="video-content">
        <iframe 
          src={ url } 
          title="YouTube video player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        >

        </iframe>

        <div className="video-content__preload">
          <img src={`https://i.ytimg.com/vi_webp/${res}/sddefault.webp`} alt="youtube preload" />
        </div>

        <button className="video-content__close-btn btn btn_close" onClick={ () => setShowVideo(false) }>X</button>
      </div>

    </div>
  ), portal);

  useEffect(()  => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.removeAttribute('style');
    };
  });

  return component;
};

export default VideoContentWindow;