import React from "react";
import "./styles/NavBarView.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import SearchBarContainer from "../containers/SearchBarContainer";

const NavBarView = (props) => {
  console.log(props.loggedInUser);
  let buttons;
  if (props.isLoggedIn) {
    buttons = (
      <>
        <li className="nav-item">
          <Link className="nav-link" onClick={props.handleLogout}>
            Logout
          </Link>
        </li>
        {/* <Link to={`/profile`}> */}
          <li className="nav-item">
            <Link to={`/profile`} className="nav-link">
              Profile
            </Link>
          </li>
        {/* </Link> */}
      </>
    );
  } else {
    buttons = (
      <>
        {" "}
        {/* <Link to={`/login`}> */}
          <li className="nav-item">
            <Link to={`/login`} className="nav-link">
              Login
            </Link>
          </li>
        {/* </Link> */}
        {/* <Link to={`/signup`}> */}
          <li className="nav-item">
            <Link to={`/signup`} className="nav-link">
              Sign Up
            </Link>
          </li>
        {/* </Link> */}
      </>
    );
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav mr-auto">
        {/* <Link to={`/`}> */}
          <li className="nav-item active">
            <Link to={`/`} className="nav-link" onClick={props.homeClicked}>
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
        {/* </Link> */}
        {buttons}
      </ul>
      <div className="form-inline my-2 my-lg-0 float-right">
        <SearchBarContainer />
      </div>
    </nav>
  );
};

export default NavBarView;
