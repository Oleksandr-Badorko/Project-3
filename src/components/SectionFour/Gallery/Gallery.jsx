import React from "react";
import "./Gallery.scss";

import Img1 from "../../../images/gallery/img1.png";
import Img2 from "../../../images/gallery/img2.png";
import Img3 from "../../../images/gallery/img3.png";
import Img4 from "../../../images/gallery/img4.png";
import Img5 from "../../../images/gallery/img5.png";
import Img6 from "../../../images/gallery/img6.png";
import Img7 from "../../../images/gallery/img7.png";
import Img8 from "../../../images/gallery/img8.png";
import Img9 from "../../../images/gallery/img9.png";

const GallerySection = ({ showGallery }) => {
  return (
    <section className={`gallery ${showGallery ? "show" : ""}`} id="gallery">
      <h1 className="heading">
        Gallery of<span className="title-span">heroes</span>
      </h1>
      <div className="gallery-container">
        <div className="gallery__item">
          <img src={Img1} alt="Captain America" />
          <div className="gallery__info">
            <h3 className="gallery__title">captain america</h3>
            <p className="gallery__text">
              “I don't like bullies; I don't care where they're from.”
            </p>
          </div>
        </div>
        <div className="gallery__item">
          <img src={Img2} alt="War Machine" />
          <div className="gallery__info">
            <h3 className="gallery__title">war machine</h3>
            <p className="gallery__text">
              “If you want this suit, you’re going to have to pry my cold dead
              body out of it.”
            </p>
          </div>
        </div>
        <div className="gallery__item">
          <img src={Img3} alt="Deadpool" />
          <div className="gallery__info">
            <h3 className="gallery__title">deadpool</h3>
            <p className="gallery__text">
              "Please don't make the super suit green... or animated!"
            </p>
          </div>
        </div>
        <div className="gallery__item">
          <img src={Img4} alt="Hulk" />
          <div className="gallery__info">
            <h3 className="gallery__title">hulk</h3>
            <p className="gallery__text">
              "I know, I'm sorry! I just get so angry all the time! Hulk always... always angry."
            </p>
          </div>
        </div>
        <div className="gallery__item">
          <img src={Img5} alt="wolverine" />
          <div className="gallery__info">
            <h3 className="gallery__title">wolverine</h3>
            <p className="gallery__text">
              "Nature made me a freak. Man made me a weapon. and God made it
              last too long."
            </p>
          </div>
        </div>
        <div className="gallery__item">
          <img src={Img6} alt="Daredevil" />
          <div className="gallery__info">
            <h3 className="gallery__title">daredevil</h3>
            <p className="gallery__text">
              “How do you know the angel and the devil inside me aren’t the
              same thing?”
            </p>
          </div>
        </div>
        <div className="gallery__item">
          <img src={Img7} alt="Black Panther" />
          <div className="gallery__info">
            <h3 className="gallery__title">black panther</h3>
            <p className="gallery__text">"Wakanda forever!"</p>
          </div>
        </div>
        <div className="gallery__item">
          <img src={Img8} alt="Scarlet Witch" />
          <div className="gallery__info">
            <h3 className="gallery__title">Scarlet Witch</h3>
            <p className="gallery__text">
              "Don't look back. The past is exactly where it belongs."
            </p>
          </div>
        </div>
        <div className="gallery__item">
          <img src={Img9} alt="Hawkeye" />
          <div className="gallery__info">
            <h3 className="gallery__title">hawkeye</h3>
            <p className="gallery__text">
              "The city is flying, we’re fighting an army of robots, and I have
              a bow and arrow. None of this makes sense."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;