import React, { useState } from 'react';
import VideoBtn from './VideoBtn';
import VideoContentWindow from './VideoContentWindow';

const Video = ({ src, vacancy }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className={`video${vacancy ? ' video_vacancy' : ''}`}>
      <VideoBtn onClick={ () => setShowVideo(!showVideo) }/>
      { showVideo && <VideoContentWindow src={ src } setShowVideo={ setShowVideo }/> }
    </div>
  );
};

export default Video;