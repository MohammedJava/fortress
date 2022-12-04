import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Menu = () => (
  <ul style={{ listStyleType: "none" }}>
    <li>
      <Link className="link" to="Abstract" spy smooth>
        ABSTRACT
      </Link>
    </li>
    <li>
      <Link className="link" to="Introduction" spy smooth>
        INTRODUCTION
      </Link>
    </li>
    <li>
      <Link className="link" to="ProblemStatement" spy smooth>
        PROBLEM STATEMENT
      </Link>
    </li>
    <li>
      <Link className="link" to="TheoreticalContribution" spy smooth>
        THEORATICAL CONTRIBUTION
      </Link>
    </li>
    <li>
      <Link className="link" to="BackgroundResearch" spy smooth>
        BACKGROUND RESEARCH
      </Link>
    </li>
    <li>
      <Link className="link" to="Methods" spy smooth>
        METHODS
      </Link>
    </li>
    <li>
      <Link className="link" to="Evaluation" spy smooth>
        EVALUATION
      </Link>
    </li>
    <li>
      <Link className="link" to="Results" spy smooth>
        RESULTS
      </Link>
    </li>
    <li>
      <Link className="link" to="Discussion" spy smooth>
        DISCUSSION
      </Link>
    </li>
    <li>
      <Link className="link" to="Volunteer" spy smooth>
        VOLUNTEER
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
