import React from "react";
import "./Header.css";
import Help from "../../Request/Help";
import logo from "./images/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Header = ({ setSelectedOption }) => {
  const iconData = [
    { icon: <HomeIcon />, text: "Home" },
    { icon: <FlashOnIcon />, text: "Trending" },
    { icon: <LiveTvIcon />, text: "Verified" },
    { icon: <VideoLibraryIcon />, text: "Collection" },
    { icon: <PersonOutlineIcon />, text: "Account" },
    { icon: <SearchIcon />, text: "Search" },
  ];

  return (
    <div className="Header">
      <div className="Header_Icons">
        {iconData.map((item, index) => (
          <div
            key={index}
            className={`Header_Icon ${index === 0 ? "Header_Active" : ""}`}
            onClick={() => {
              if (index === 0) {
                setSelectedOption(Help.fetchTrending);
              } else if (index === 1) {
                setSelectedOption(Help.fetchTopRated);
              } else if (index === 2) {
                setSelectedOption(Help.fetchAnimation);
              } else if (index === 3) {
                setSelectedOption(Help.fetchTv);
              }
            }}
          >
            {item.icon}
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <img src={logo} alt="" />
    </div>
  );
};

export default Header;
