import { React, forwardRef } from "react";
import "./Video.css";
import Trailers from "../../Request/Trailer";
import useYouTubeModal from "../../Request/Youtube";
import TextTruncate from "react-text-truncate";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import CloseIcon from "@mui/icons-material/Close";

const baseUrl = "https://image.tmdb.org/t/p/original";

const Video = forwardRef(({ movie }, ref) => {
  const {
    showTrailer,
    trailerVideoId,
    openYouTubeTrailer,
    closeYouTubeTrailer,
  } = useYouTubeModal(); // Use the custom hook

  // Find the trailer URL based on the movie title

  const movieInfo = Trailers.find(
    (data) => movie.title === data.name || movie.original_name === data.name
  );

  console.log("Movie Title:", movie.title);
  console.log("Movie Original Name:", movie.original_name);
  console.log("Movie Info:", movieInfo);

  const handleClickImage = () => {
    console.log("Image Clicked"); // Debugging
    console.log("Opening YouTube Trailer for:", movieInfo?.name);
    openYouTubeTrailer(movieInfo?.url);
  };

  return (
    <div ref={ref} className="Video">
      <div onClick={handleClickImage} style={{ cursor: "pointer" }}>
        <img
          src={`${baseUrl}${movie.backdrop_path || movie.poster_path} `}
          alt=""
        />
      </div>
      <div className="details">
        <TextTruncate
          line={1}
          element="p"
          truncateText="..."
          text={movie.overview}
        />
        <h2> {movie.title || movie.original_name}</h2>
        <p className="states">
          {movie.media_type && `${movie.media_type} • `}
          {movie.release_date || movie.first_air_date} •
          <ThumbUpSharpIcon /> {movie.vote_count}
        </p>
      </div>

      {showTrailer && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeYouTubeTrailer}>
              <CloseIcon />
            </span>
            <iframe
              title="YouTube Trailer"
              width="640"
              height="390"
              src={`https://www.youtube.com/embed/${trailerVideoId}?autoplay=1`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
});

export default Video;
