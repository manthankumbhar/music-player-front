import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Home.scss";
import HocLink from "../hoc/HocLink";
import Sidebar from "./Sidebar";
import HocPlayer from "../hoc/HocPlayer";

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
              src="https://picsum.photos/201"
              link="/playlist/linkin-park"
              title="Linkin Park"
            />
            <HocLink
              src="https://picsum.photos/202"
              link="/playlist/one-direction"
              title="One Direction"
            />
            <HocLink
              src="https://picsum.photos/203"
              link="/playlist/ye-jawani-hai-deewani"
              title="Ye Jawani Hai Deewani"
            />
          </div>
          <div className="home__content--item">
            <HocLink
              src="https://picsum.photos/204"
              link="/playlist/chainsmokers"
              title="Chainsmokers"
            />
            <HocLink
              src="https://picsum.photos/205"
              link="/playlist/ac-dc"
              title="AC/DC"
            />
            <HocLink
              src="https://picsum.photos/206"
              link="/playlist/charlie-puth"
              title="Charlie Puth"
            />
          </div>
          <div className="home__content--item">
            <HocLink
              src="https://picsum.photos/207"
              link="/playlist/hoobastank"
              title="Hoobastank"
            />
            <HocLink
              src="https://picsum.photos/208"
              link="/playlist/avicii"
              title="Avicii"
            />
            <HocLink
              src="https://picsum.photos/209"
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
        <HocPlayer />
        {this.state.exit ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default Home;
