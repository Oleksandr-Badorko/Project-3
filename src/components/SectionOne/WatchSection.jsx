import React from "react";
import "./WatchSection.scss";

import MarvelLogo from "../../images/marvel-logo/Marvel_Logo.svg.png";
import InfinityTrailer from "../../images/trailer/infinity-wars-trailer.mp4";

const WatchSection = () => {
  return (
    <section className="watch-section" id="main">
      <header className="header">
        <a href="/">
          <img
            src={MarvelLogo}
            className="logo"
            alt="logo"
          />
        </a>
      </header>
      <video
        src={InfinityTrailer}
        muted
        loop
        autoPlay
      ></video>
      <div className="content">
        <div className="textBox">
          <h2 className="textBox__title">
            <span className="avengers-span">Avengers</span> Infinity War
          </h2>
          <p className="textBox__paragraph">
            As the Avengers and their allies have continued to protect the world
            from threats too large for any one hero to handle, a new danger has
            emerged from the cosmic shadows: Thanos. A despot of intergalactic
            infamy, his goal is to collect all six Infinity Stones, artifacts of
            unimaginable power, and use them to inflict his twisted will on all
            of reality. Everything the Avengers have fought for has led up to
            this moment, the fate of Earth and existence has never been more
            uncertain.
          </p>
          <a
            href="https://www.youtube.com/watch?v=6ZfuNTqbHE8&t=1s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch the official trailer now
          </a>
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
