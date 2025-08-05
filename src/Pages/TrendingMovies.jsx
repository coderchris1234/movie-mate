import "./TrendingMovies.css";
import { FaStar } from "react-icons/fa";
import moviesData from "./movies.json";
const TrendingMovies = () => {
  return (
    <div className="movie-list-container">
      <h2 className="headingH2">Top Trending</h2>
      <div className="movie-list">
        {moviesData.topTrending.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <div className="data">
              <div className="dta">
                <h2>{movie.title}</h2>
                <div className="u">
                  <p>{movie.year}</p>
                  <p className="d"><FaStar size={18} color="#ffffff" />{movie.rating}</p>
                </div>
              </div>
              <p className="genre">{movie.genre}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TrendingMovies;
