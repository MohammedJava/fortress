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
      <Link className="link" to="Introduction" spy smooth>
        Request Shelter
      </Link>
    </li>
    <li>
      <Link className="link" to="ProblemStatement" spy smooth>
        Volunteering
      </Link>
    </li>
    <li>
      <Link className="link" to="TheoreticalContribution" spy smooth>
        Activities
      </Link>
    </li>
    <li>
      <Link className="link" to="BackgroundResearch" spy smooth>
        Newsletter
      </Link>
    </li>
    <li>
      <Link className="link" to="Methods" spy smooth>
        Login
      </Link>
    </li>
    <li>
      <Link className="link" to="Evaluation" spy smooth>
        Sign Up
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
    </div>
  );
};

export default Navbar;
