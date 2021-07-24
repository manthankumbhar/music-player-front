import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Home.scss";
import HocLink from "../hoc/HocLink";
import Sidebar from "./Sidebar";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      exit: false,
    };
    this.logout = this.logout.bind(this);
  }

  logout(e) {
    e.preventDefault();
    localStorage.removeItem("accessTokenSecret");
    localStorage.removeItem("userEmail");
    this.setState({ exit: true });
  }

  render() {
    return (
      <div className="home">
        <Sidebar />
        <div className="home__content">
          <div className="home__content--item">
            <HocLink
              src="https://picsum.photos/250"
              link="/playlist/linkin-park"
              title="Linkin Park"
            />
            <HocLink
              src="https://picsum.photos/255"
              link="/playlist/one-sirection"
              title="One Direction"
            />
            <HocLink
              src="https://picsum.photos/252"
              link="/playlist/ye-jawani-hai-deewani"
              title="Ye Jawani Hai Deewani"
            />
          </div>
          <div className="home__content--item">
            <HocLink
              src="https://picsum.photos/253"
              link="/playlist/chainsmokers"
              title="Chainsmokers"
            />
            <HocLink
              src="https://picsum.photos/252"
              link="/playlist/ac-dc"
              title="AC/DC"
            />
            <HocLink
              src="https://picsum.photos/251"
              link="/playlist/charlie-puth"
              title="Charlie Puth"
            />
          </div>
          <div className="home__content--item">
            <HocLink
              src="https://picsum.photos/258"
              link="/playlist/hoobstank"
              title="Hoobstank"
            />
            <HocLink
              src="https://picsum.photos/256"
              link="/playlist/selena-gomez"
              title="Selena Gomez"
            />
            <HocLink
              src="https://picsum.photos/257"
              link="/playlist/hindi-songs"
              title="Hindi Songs"
            />

            <button
              className="btn btn-warning home__content--btn"
              onClick={this.logout}
            >
              Logout
            </button>
          </div>
        </div>
        {this.state.exit ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default Home;
