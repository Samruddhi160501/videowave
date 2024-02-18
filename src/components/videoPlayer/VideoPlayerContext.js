import React, { createContext, useContext, useState } from 'react';

const VideoPlayerContext = createContext();

export const useVideoPlayer = () => useContext(VideoPlayerContext);

export const VideoPlayerProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);

  const playVideo = (index) => {
    setCurrentVideoIndex(index);
    setIsPlaying(true);
  };

  const pauseVideo = () => {
    setIsPlaying(false);
  };

  const handleTimeUpdate = (time) => {
    setCurrentTime(time);
  };

  const handleLoadedMetadata = (duration) => {
    setDuration(duration);
  };

  const handleSeek = (seekTime) => {
    setCurrentTime(seekTime);
  };

  const handlePlaybackSpeedChange = (speed) => {
    setPlaybackSpeed(speed);
  };

  return (
    <VideoPlayerContext.Provider
      value={{
        playlist,
        currentVideoIndex,
        isPlaying,
        currentTime,
        duration,
        playbackSpeed,
        setPlaylist,
        playVideo,
        pauseVideo,
        handleTimeUpdate,
        handleLoadedMetadata,
        handleSeek,
        handlePlaybackSpeedChange,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
};
