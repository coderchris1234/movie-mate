import "./TopRating.css";
import { MdTv } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import moviesData2 from "./movies.json";
const TopRating = () => {
  return (
    <div className="movie-list-container2">
      <div className="small">
        <h2 className="headingH2">Top Rating</h2>
        <div className="i">
          <span style={{marginRight: "10px"}} className="play"><FaPlay size={15}/>Movies</span>
          <span className="series"><MdTv size={17} color="#000"/>TV-Series</span>
        </div>
      </div>
      <div className="movie-list">
        {moviesData2.topRating.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <div className="data">
              <div className="movie-data">
                <h2 className="v">{movie.title}</h2>
                <div className="movie-data2">
                  <p>{movie.year}</p>
                  <p className="d">
                    <FaStar size={18} color="#ffffff" />
                    {movie.rating}
                  </p>
                  <p className="genre">{movie.genre}</p>
                </div>
              </div>
              {/* <p className="genre">{movie.genre}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopRating;
