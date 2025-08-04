import "./HeaderStyle.css";
// import { FaSearch } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";

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
            {/* <FaSearch size={20} color="#b0b0b0" className="Header_icon"/> */}
            <HiOutlineSearch size={20} color="#fff7f7ff" />
          </div>
        </div>
      </div>

    </>
  );
};
export default Header;
