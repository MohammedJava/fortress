/* eslint-disable react/button-has-type */
import React from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import SignInForm from "../SignForm/SignInForm";
import SignUpForm from "../SignForm/SignUpForm";

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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const [currentUser, setCurrentUser] = React.useState({
    userId: 0,
    firstName: "Alice",
    lastName: "Bob",
    email: "AB@Gmail.com",
    isLoggedIn: false,
  });

  const updateCurrentUser = (newUser) => {
    setCurrentUser(newUser);
  };

  const logOut = () => {
    setCurrentUser({ ...currentUser, isLoggedIn: false });
  };

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
        <button onClick={currentUser.isLoggedIn ? logOut : handleClickOpen}>
          {currentUser.isLoggedIn ? "Log Out" : "Log In"}
        </button>
      </div>
      <div id="glass-btn">
        {currentUser.isLoggedIn ? (
          <Typography component="h3" variant="h5">
            Hello {currentUser.firstName}
          </Typography>
        ) : (
          <button onClick={handleClickOpen2}>Become Member</button>
        )}
      </div>
      <Dialog open={open} onClose={handleClose}>
        <SignInForm onClick={handleClose} />
      </Dialog>
      <Dialog open={open2} onClose={handleClose2}>
        <SignUpForm
          onClick={handleClose2}
          updateCurrentUser={updateCurrentUser}
        />
      </Dialog>
    </div>
  );
};

export default Navbar;
