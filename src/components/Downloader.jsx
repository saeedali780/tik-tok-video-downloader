import React, { useState } from 'react';
import './Downloader.css';
import tiktokVideoDownloader from '../api';

const Downloader = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [data,setData] = useState('');
  const [error,setError] = useState('')
  const [success, setSuccess] = useState('');

  const submitHandler = async (e)=>{
    e.preventDefault();
    setError('');   // Reset error before making request
    setSuccess(''); // Reset success message before making request
    try {
      const response = await tiktokVideoDownloader(videoUrl)

      console.log("Api",response);
      
      setData(response.data.play);
      setVideoUrl('');
      setSuccess("Video is Ready to Download click three dot and download ✅");
    } catch (error) {
      setError(error.message || "Something went wrong! Please try again later");

    }
    
  }

  return (
    <div className="downloader-container">
      <form onSubmit={submitHandler}>
      <input
        type="text"
        className="input-box"
        placeholder="Paste TikTok video link here..."
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <button  type='submit' className="download-btn">Download</button>
      </form>
      {error &&  <p style={{color: 'red'}}>{error}</p> }
      {success && <p style={{color: 'green'}}>{success}</p>}
      {data &&   <div> <video controls width={640} height={360} style={{marginTop:"20px"}} >
      <source src={data} type='video/mp4' />
      Your Browser does not support the video tag.
    </video>
    </div>}
     
    </div>
  );
};

export default Downloader;