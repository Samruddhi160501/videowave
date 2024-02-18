import React from "react";
import VideoPlayer from "../../components/videoPlayer/VideoPlayer";
import { data } from "../../utils/data";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  // Find the video with the matching ID
  const video = data.find((video) => video.id === id);
  console.log(video)

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <div>
      {/* <VideoPlayer video={video} /> */}
      <video controls autoPlay>
        <source src={video.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>{video.title}</h2>
      <p>Author: {video.author}</p>
      <p>Views: {video.views}</p>
      <p>{video.description}</p>
    </div>
  );
}

export default Details;
