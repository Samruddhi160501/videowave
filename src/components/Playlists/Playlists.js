// import { useState} from "react";
// const Playlist = ({ videos }) => {
//     const [playlist, setPlaylist] = useState(videos);
  
//     const handleVideoClick = (video) => {
//       setPlaylist((prevPlaylist) => [
//         video,
//         ...prevPlaylist.filter((item) => item.id !== video.id),
//       ]);
//     };
  
//     return (
//       <div>
//         <h2>Playlist</h2>
//         <ul>
//           {playlist.map((video) => (
//             <li key={video.id} onClick={() => handleVideoClick(video)}>
//               {video.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   };
//   export default Playlist
