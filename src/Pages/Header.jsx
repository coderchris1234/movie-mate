import "./HeaderStyle.css";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCameraMovie } from "react-icons/bi";
import { FaStar } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { TbMovie } from "react-icons/tb";
// import Button from "../Components/Button";

const Header = () => {
  return (
    <>
      <div className="header_background">
        <div className="overlay"></div>
        <div className="header_container">
          <div className="header_content">
            <h1>MovieMate2.0</h1>
            <ul className="listItems">
              <li>Home</li>
              <li>Movies</li>
              <li>TV-Series</li>
            </ul>
          </div>

          <div className="Header_icon">
            <HiOutlineSearch
              size={20}
              color="#fff7f7ff"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <section className="Hero_container">
          <h2 className="Hero_movie_name">The Fantastic 4: First Steps</h2>

          <div className="hero_rating">
            <div className="rating">
              <div className="BiCameraMovies">
                <BiCameraMovie
                  size={28}
                  color="#fff"
                  style={{
                    paddingLeft: "10px",
                  }}
                />
              </div>

              <span className="FaStar">
                <FaStar size={24} color="#ffffff" /> 7.3
              </span>
              <ul className="rating_list">
                <li>Adventure</li>
                <li>Science</li>
                <li>Fiction</li>
              </ul>
            </div>
            <p>
              Fantastic Four is a thrilling superhero movie about four
              scientists who gain extraordinary powers after a space mission
              goes wrong. With their new abilities—stretching, invisibility,
              fire control, and rock-like strength—they must come together as a
              team to stop a powerful enemy and save the world. It’s
              action-packed, fun, and shows how teamwork makes heroes.
            </p>
          </div>
          <div className="button_link">
            <span className="watch_now">
              <FaPlay size={20} className="faplay" />
              Watch Now
            </span>
            <span className="trailer">
              <TbMovie size={28}  />
              Trailer
            </span>
          </div>
        </section>
      </div>
    </>
  );
};
export default Header;
