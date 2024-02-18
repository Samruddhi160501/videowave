import React, { useState, useRef } from 'react';

const VideoPlayer = ({ video }) => {
  console.log("vv",video)
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (event) => {
    const { duration } = videoRef.current;
    const seekTime = duration * (event.target.value / 100);
    setCurrentTime(seekTime);
    videoRef.current.currentTime = seekTime;
  };

  const handlePlaybackSpeedChange = (event) => {
    const speed = parseFloat(event.target.value);
    setPlaybackSpeed(speed);
    videoRef.current.playbackRate = speed;
  };

  return (
    <div>
      <video
        ref={videoRef}
        src={video.url}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ width: '100%' }}
        autoplay
      />
      <div>
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min={0}
          max={100}
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
        />
        <span>{currentTime.toFixed(2)} / {duration.toFixed(2)}</span>
        <select value={playbackSpeed} onChange={handlePlaybackSpeedChange}>
          <option value={0.5}>0.5x</option>
          <option value={1.0}>1.0x</option>
          <option value={1.5}>1.5x</option>
          <option value={2.0}>2.0x</option>
        </select>
      </div>
    </div>
  );
};
export default VideoPlayer