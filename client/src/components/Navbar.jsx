import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import {logoutUser} from '../../actions/authActions.js'

class Navbar extends Component {
  state = {
    isAuthenticated: false,
    user: "Madhav"
  };

  logout = () => {
    this.props.logoutUser();
  };

  render() {
    // const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <a href="#" style={{ textDecoration: "none" }} onClick={this.logout}>
            Logout
          </a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/register">
            Sign Up
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            &nbsp; &nbsp; &nbsp; &nbsp;CodingSetup
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#mobile-nav"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            {/* {isAuthenticated ? authLinks : guestLinks} */}
          </div>
        </div>
      </nav>
    );
  }
}

// Navbar.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };

// const mapStatetoProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });

export default Navbar;

// connect(
//   mapStatetoProps
//   // { logoutUser }
// )
