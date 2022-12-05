/* eslint-disable react/button-has-type */
import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <ul style={{ listStyleType: "none" }}>
    <li>
      <Link className="link" to="Home" spy smooth>
        Home
      </Link>
    </li>
    <li>
      <Link className="link" to="RequestShelter" spy smooth>
        Request Shelter
      </Link>
    </li>
    <li>
      <Link className="link" to="Volunteering" spy smooth>
        Volunteering
      </Link>
    </li>
    <li>
      <Link className="link" to="Activities" spy smooth>
        Activities
      </Link>
    </li>
    <li>
      <Link className="link" to="Newsletter" spy smooth>
        Newsletter
      </Link>
    </li>
  </ul>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="Navbar">
      <div className="content">
        <div className="linksContainer">
          <Menu />
        </div>
        <div className="navMenu">
          {toggleMenu ? (
            <RiCloseLine
              color="fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navMenuContainer scale-up-center">
              <Menu />
            </div>
          )}
        </div>
      </div>
      <div id="glass-btn">
        <button>Log In</button>
      </div>
      <div id="glass-btn">
        <button>SignUp</button>
      </div>
    </div>
  );
};

export default Navbar;
