import React, { useEffect } from "react";

import "../../carousel/owl-carousel/owl.carousel.min.css";
import "../../carousel/owl-carousel/owl.theme.default.min.css";
import "../../carousel/owl-carousel/owl.carousel.min.js";
import "./NewsSection.scss";

import avengers60thImage from "../../images/about-img/2000x1123_avengers60th.jpg";
import mawHeroImage from "../../images/about-img/maw_hero_shot.jpg";
import stuntSquadImage from "../../images/about-img/stunt_squad_title_key_frame_v2_1.jpg";
import avengersAssembleImage from "../../images/about-img/Avengers-Assemble-original.webp";
import phoenixBoxImage from "../../images/about-img/phoenix_box_card.jpg";
import avengers1Image from "../../images/about-img/avengers_1_card_closer_cut.jpg";
import jedMacKayImage from "../../images/about-img/collage-maker-20-jan-2023-02-41-pm-1674243710942.jpg";

const NewsSection = () => {
  useEffect(() => {
    const carouselElement = document.getElementById("newsItems");

    $(carouselElement).owlCarousel(carouselOptions);
  }, []);

  const carouselOptions = {
    loop: true,
    items: 4,
    nav: false,
    dots: true,
    dotsEach: 1,
    responsive: {
      320: { items: 1 },
      390: { items: 1 },
      400: { items: 2 },
      576: { items: 3 },
      768: { items: 3 },
      992: { items: 3 },
      1000: { items: 4 },
    },
  };
  return (
    <>
      <h1 className="featured-news" id="featured">
        featured <span className="title-span">news</span>
      </h1>
      <section className="news">
        <div className="news__container">
          <div className="news__img">
            <img src={avengers60thImage} alt="#" />
          </div>
          <div className="news__description">
            <h4 className="news__description-subtitle">
              culture and lifestyle
            </h4>
            <h2 className="news__description-title">
              marvel kicks off its avengers 60th
              <br />
              anniversary celebration for 2023
            </h2>
          </div>
        </div>
        <div className="news-items">
          <div
            className="owl-carousel owl-theme partners-carousel"
            id="newsItems"
          >
            <div className="owl-custom-item">
              <img src={mawHeroImage} alt="#" />
              <h4 className="owl-subtitle">culture and lifestyle</h4>
              <h2 className="owl-title">
                Make-A-Wish Family Receives Heroic Welcome at Avengers Campus
              </h2>
            </div>
            <div className="owl-custom-item">
              <img src={stuntSquadImage} alt="#" />
              <h4 className="owl-subtitle">culture and lifestyle</h4>
              <h2 className="owl-title">
                Watch All 5 Episodes of 'Marvel's Avengers: Stunt Squad' on
                Marvel HQ
              </h2>
            </div>
            <div className="owl-custom-item">
              <img src={avengersAssembleImage} alt="#" />
              <h4 className="owl-subtitle">culture and lifestyle</h4>
              <h2 className="owl-title">
                The Avengers Are Back In The Popular Marvel HQ Series 'Marvel's
                Avengers Mech Strike: Mechasaurs'
              </h2>
            </div>
            <div className="owl-custom-item">
              <img src={phoenixBoxImage} alt="#" />
              <h4 className="owl-subtitle">comics</h4>
              <h2 className="owl-title">
                Mark Brooks Spotlights Phoenix and the Avengers' ‘80s Lineup in
                New Corner Box Covers
              </h2>
            </div>
            <div className="owl-custom-item">
              <img src={avengers1Image} alt="#" />
              <h4 className="owl-subtitle">comics</h4>
              <h2 className="owl-title">
                May 17's New Marvel Comics: The Full List
              </h2>
            </div>
            <div className="owl-custom-item">
              <img src={jedMacKayImage} alt="#" />
              <h4 className="owl-subtitle">comics</h4>
              <h2 className="owl-title">
                'Avengers' Writer Jed MacKay Breaks Down His Debut Issue And
                Teases the Fight Ahead
              </h2>
            </div>
          </div>
        </div>
        <div className="news__insider">
          <h4 className="news__insider-subtitle">marvel insider</h4>
          <h2 className="news__insider-title">watch, earn, redeem!</h2>
          <p className="news__insider-description">
            Get rewarded for doing what you already do as a fan
          </p>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
