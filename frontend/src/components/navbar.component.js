import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { NavBarStyle } from "../components/styles/NavBar.styles";

const UserItem = ({ info }) => {
  return (
    <p className="user border-l border-white pl-2">
      Hi, {info.user[0].username}
    </p>
  );
};

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = { user: [], init: false };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/users/")
      .then((response) => {
        this.setState({ user: response.data, init: true });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <NavBarStyle>
        <header className="shadow-lg">
          <div className="navbar">
            <nav className="nav flex">
              <ul>
                <li>
                  <Link to="/">Workout</Link>
                </li>
                {/* <li>
                  <Link to="/warmup">Warmup</Link>
                </li> */}
                <li>
                  <Link to="/history">History</Link>
                </li>
              </ul>
              {this.state.init ? <UserItem info={this.state} /> : "Loading ..."}
            </nav>
          </div>
        </header>
      </NavBarStyle>
    );
  }
}
