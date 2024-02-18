import React from "react";
import logo from "../../assets/logo.png";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="menu-container">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Logo" />
        <h3 className="menu-title">VideoWave</h3>
      </div>
      <div className="menu-item">
        <i className="ri-user-line"></i> Profile
      </div>
      <div className="menu-item">
        <i className="ri-star-line"></i> Favorites
      </div>
      <div className="menu-item">
        <i className="ri-compass-3-line"></i> Explore
      </div>
      <div className="playlists-container">
        <div className="playlist-section">
          <i className="ri-play-list-line"></i>
          <h4 className="playlist-title">Playlists</h4>
        </div>
        <div className="playlist-item selected">Playlist 1</div>
        <div className="playlist-item">Playlist 2</div>
        <div className="playlist-item">Playlist 3</div>
      </div>
    </div>
  );
};

export default Menu;
