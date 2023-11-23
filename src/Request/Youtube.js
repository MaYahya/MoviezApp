import { useState } from "react";

const useYouTubeModal = () => {
  const [showTrailer, setShowTrailer] = useState(false);
  const [trailerVideoId, setTrailerVideoId] = useState("");

  const openYouTubeTrailer = (trailerUrl) => {
    if (trailerUrl) {
      setShowTrailer(true);
      setTrailerVideoId(getYouTubeVideoId(trailerUrl));
    }
  };

  const closeYouTubeTrailer = () => {
    setShowTrailer(false);
    setTrailerVideoId("");
  };

  const getYouTubeVideoId = (url) => {
    const videoIdMatch = url.match(/[?&]v=([^&]+)/);
    return videoIdMatch ? videoIdMatch[1] : null;
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1, // Autoplay the video
    },
  };

  return {
    showTrailer,
    trailerVideoId,
    openYouTubeTrailer,
    closeYouTubeTrailer,
    opts,
  };
};

export default useYouTubeModal;
