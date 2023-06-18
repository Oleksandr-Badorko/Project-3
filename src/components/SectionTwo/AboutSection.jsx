import React from "react";
import "./AboutSection.scss";
import MarvelAvengersPNG from "../../images/about-img/Marvel-Avengers-PNG-Free-Image.png";
import AboutMoreImg from "../../images/about-img/1637613773_1-gamerwall-pro-p-kinematograficheskaya-vselennaya-marvel-ob-1.jpg"

const AboutSection = () => {
  return (
    <section className="about" id="aboutUs">
      <div className="about-container">
        <div className="about__img">
        <img src={MarvelAvengersPNG} alt="#" />
        </div>
        <div className="about__text">
          <h2 className="about__text-title">
            About <span className="title-span">Us</span>
          </h2>
          <p className="about__text-paragraph">
            Marvel Entertainment, LLC, a wholly-owned subsidiary of The Walt
            Disney Company, is one of the world's most prominent character-based
            entertainment companies, built on a proven library of more than
            8,000 characters featured in a variety of media over seventy-five
            years. Marvel utilizes its character franchises in entertainment,
            licensing and publishing. For more information visit marvel.com. ©
            2023 MARVEL
          </p>
        </div>
      </div>
      <div className="about__more">
        <p className="about__more-text">
          The precursor to Marvel Comics was founded in 1939 by pulp magazine
          publisher Martin Goodman. In order to capitalize on the growing
          popularity of comic books—especially those starring
          superheroes—Goodman created Timely Comics. Timely’s first comic book
          was Marvel Comics no. 1 (cover dated October 1939), which featured
          several superhero characters, most notably the Human Torch and the
          Sub-Mariner. Timely Comics introduced many superhero characters during
          comics’ “Golden Age” in the 1940s, most importantly Captain America,
          who first appeared in Captain America Comics no. 1 (March 1941).
          Timely characters were often portrayed as fighting against the Nazis
          and the Japanese even before the United States entered World War II.
          As the 1940s came to a close, superheroes fell out of vogue with comic
          book readers, and Timely canceled the last of its books in this genre
          in 1950. In 1951 Goodman formed his own distribution company, and
          Timely Comics became Atlas Magazines. Though there was a brief
          experiment in bringing back superheroes such as Captain America in
          1953, Atlas’s output was mostly in other genres such as humour,
          westerns, horror, war, and science fiction. In 1956 rival company DC
          Comics ushered in the so-called Silver Age of comics by reintroducing
          superhero titles with significant commercial success. In the early
          1960s Atlas changed its name to Marvel Comics. For several decades
          Marvel and DC were the top companies in the industry. Throughout the
          1980s and ’90s Marvel changed hands numerous times, becoming a
          publicly held company in 1991. Questionable management decisions and a
          general slump in sales in the comic book industry drove Marvel Comics
          into bankruptcy in 1996. The company emerged from bankruptcy in 1998
          and began to diversify its output, launching imprints aimed at a
          variety of demographics and expanding its cinematic offerings under
          the Marvel Studios banner. In 2007 Marvel began publishing digital
          comics. In 2009 the Walt Disney Company purchased the parent company
          of Marvel Comics.
        </p>
        <div className="about__more-img">
        <img src={AboutMoreImg} alt="#" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
