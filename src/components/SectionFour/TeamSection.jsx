import React, { useState } from "react";
import "./TeamSection.scss";
import GallerySection from "./Gallery/Gallery.jsx";

import StanLeeImg from "../../images/team/ezgif-5-d35be36e62.jpg";
import JackKirbyImg from "../../images/team/Jack_Kirby_Legacy.webp";
import SteveDitkoImg from "../../images/team/Steve_Ditko_Legacy.webp";

const TeamSection = () => {
    const [showGallery, setShowGallery] = useState(false);
  
    const toggleGallery = () => {
      setShowGallery(!showGallery);
    };
  return (
    <>
      <section className="animated-container" id="team">
        <h1 className="team-title">
          Pillars of our <span className="title-span">Universe</span>
        </h1>
        <div className="animated-cards">
          <div className="animated">
            <img className="animated__img" src={StanLeeImg} alt="Stan Lee" />
            <div className="intro">
              <h4 className="intro__title">Stan Lee</h4>
              <p className="intro__text">
                An American comic book writer, editor, publisher, and producer.
                He rose through the ranks of a family-run business called Timely
                Comics which would later become Marvel Comics.
              </p>
            </div>
          </div>
          <div className="animated">
            <img
              className="animated__img"
              src={JackKirbyImg}
              alt="Jack Kirby"
            />
            <div className="intro">
              <h4 className="intro__title">Jack Kirby</h4>
              <p className="intro__text">
                An American comic book artist, writer, and editor, widely
                regarded as one of the medium's major innovators and one of its
                most prolific and influential creators.
              </p>
            </div>
          </div>
          <div className="animated">
            <img
              className="animated__img"
              src={SteveDitkoImg}
              alt="Steve Ditko"
            />
            <div className="intro">
              <h4 className="intro__title">Steve Ditko</h4>
              <p className="intro__text">
                An American comics artist and writer best known for being
                co-creator of Marvel superhero Spider-Man and creator of Doctor
                Strange. He made notable contributions to Iron Man's iconic red
                and yellow design.
              </p>
            </div>
          </div>
        </div>
        <div className="button" id="loadMoreBtn">
        <button onClick={toggleGallery} >
            {showGallery ? "Hide Gallery" : "Load Gallery"}
          </button>
        </div>
      </section>
      <GallerySection showGallery={showGallery} ></GallerySection>
    </>
  );
};

export default TeamSection;
