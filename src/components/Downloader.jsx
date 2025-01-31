import React, { useState } from 'react';
import './Downloader.css';

const Downloader = () => {
  const [videoUrl, setVideoUrl] = useState('');

  return (
    <div className="downloader-container">
      <input
        type="text"
        className="input-box"
        placeholder="Paste TikTok video link here..."
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button className="download-btn">Download</button>
    </div>
  );
};

export default Downloader;