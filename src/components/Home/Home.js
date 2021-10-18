import React from "react";
import "./Home.scss";
import HocLink from "../../hoc/HocLink/HocLink";
import Sidebar from "../Sidebar/Sidebar";
import p1 from "../../Photos/albums/linkin-park.jpg";
import p2 from "../../Photos/albums/chainsmokers.jpg";
import p3 from "../../Photos/albums/hoobastank.jpg";
import p4 from "../../Photos/albums/one-direction.jpg";
import p5 from "../../Photos/albums/ac-dc.jpg";
import p6 from "../../Photos/albums/avicii.jpg";
import p7 from "../../Photos/albums/ye-jawaani-hai-deewani.jpg";
import p8 from "../../Photos/albums/charlie-puth.jpg";
import p9 from "../../Photos/albums/bollywood-songs.jpeg";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home__content">
        <div className="home__content--item">
          <HocLink src={p1} link="/playlist/linkin-park" title="Linkin Park" />
          <HocLink
            src={p4}
            link="/playlist/one-direction"
            title="One Direction"
          />
          <HocLink
            src={p7}
            link="/playlist/ye-jawani-hai-deewani"
            title="Ye Jawani Hai Deewani"
          />
        </div>
        <div className="home__content--item">
          <HocLink
            src={p2}
            link="/playlist/chainsmokers"
            title="Chainsmokers"
          />
          <HocLink src={p5} link="/playlist/ac-dc" title="AC/DC" />
          <HocLink
            src={p8}
            link="/playlist/charlie-puth"
            title="Charlie Puth"
          />
        </div>
        <div className="home__content--item">
          <HocLink src={p3} link="/playlist/hoobastank" title="Hoobastank" />
          <HocLink src={p6} link="/playlist/avicii" title="Avicii" />
          <HocLink
            src={p9}
            link="/playlist/bollywood-songs"
            title="Hindi Songs"
          />
        </div>
      </div>
    </div>
  );
}
