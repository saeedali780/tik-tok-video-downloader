import React from 'react';
import Navbar from './components/Navbar';
import Downloader from './components/Downloader';
import VideoFrame from './components/VideoFrame';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Downloader />
        <VideoFrame />
      </main>
      <Footer />
    </div>
  );
}

export default App;