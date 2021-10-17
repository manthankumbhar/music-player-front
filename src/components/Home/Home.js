import React from "react";
import "./Home.scss";
import HocLink from "../../hoc/HocLink/HocLink";
import Sidebar from "../Sidebar/Sidebar";

export default function Home() {
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
        </div>
      </div>
    </div>
  );
}
