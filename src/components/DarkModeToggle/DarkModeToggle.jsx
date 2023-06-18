import React, { useState, useEffect } from "react";
import "./DarkModeToggle.scss";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    const updatedDarkMode = !isDarkMode;
    setIsDarkMode(updatedDarkMode);
    localStorage.setItem("isDarkMode", JSON.stringify(updatedDarkMode));
  };

  useEffect(() => {
    const storedDarkMode = JSON.parse(localStorage.getItem("isDarkMode"));
    if (storedDarkMode !== null) {
      setIsDarkMode(storedDarkMode);
    }
  }, []);

  const getDarkModeStyle = () => ({
    background: "#151515",
    color: "white",
    transition: "2s",
  });

  const getLightModeStyle = () => ({
    background: "white",
    color: "black",
    transition: "2s",
  });

  useEffect(() => {
    const body = document.querySelector("body");
    const about = document.querySelector(".about");
    const news = document.querySelector(".news");
    const aboutTextParagraph = document.querySelector(".about__text-paragraph");
    const aboutTextTitle = document.querySelector(".about__text-title");
    const aboutMoreText = document.querySelector(".about__more-text");
    const aboutMoreParagraph = document.querySelector(".about__more p");
    const featuredNews = document.querySelector(".featured-news");
    const newsDescriptionTitle = document.querySelector(
      ".news__description-title"
    );
    const owlTitles = document.querySelectorAll(".owl-title");
    const animatedContainer = document.querySelector(".animated-container");
    const teamTitle = document.querySelector(".team-title");
    const buttonLink = document.querySelector(".button button");
    const heading = document.querySelector(".heading");
    const gallery = document.querySelector(".gallery");
    const search = document.querySelector(".search");
    const searchInput = document.querySelector(".search__input input");
    const characterName = document.querySelector(
      ".card-container .character-name"
    );
    const characterDescription = document.querySelector(
      ".card-container .character-description"
    );
    const comicTitles = document.querySelectorAll(".comic-title");
    const footer = document.querySelector(".footer");
    const footerSocialLinks = document.querySelectorAll(".footer__socials a");
    const sidebar = document.querySelector(".sidebar");
    const header = document.querySelector("header");
    const brBt = document.querySelectorAll(".br-bt");
    const btn = document.getElementById("btn");
    const cancel = document.getElementById("cancel");

    if (body) {
      body.style.background = isDarkMode ? "white" : "#151515";
      body.style.color = isDarkMode ? "black" : "white";
    }

    if (about) {
      about.style.background = isDarkMode ? "white" : "#151515";
    }

    if (aboutTextParagraph) {
      aboutTextParagraph.style.color = isDarkMode ? "black" : "white";
      aboutTextParagraph.style.background = isDarkMode ? "#E6F1F7" : "#001f3f";
      aboutTextParagraph.style.borderColor = isDarkMode ? "black" : "white";
    }

    if (aboutTextTitle) {
      aboutTextTitle.style.color = isDarkMode ? "black" : "white";
    }

    if (aboutMoreText) {
      aboutMoreText.style.color = isDarkMode ? "black" : "white";
      aboutMoreText.style.background = isDarkMode ? "#E6F1F7" : "#001f3f";
    }

    if (aboutMoreParagraph) {
      aboutMoreParagraph.style.borderColor = isDarkMode ? "black" : "white";
    }

    if (featuredNews) {
      featuredNews.style.color = isDarkMode ? "#151515" : "white";
      featuredNews.style.background = isDarkMode ? "white" : "#151515";
    }

    if (news) {
      news.style.background = isDarkMode ? "white" : "#151515";
    }

    if (newsDescriptionTitle) {
      newsDescriptionTitle.style.color = isDarkMode ? "black" : "white";
    }

    if (owlTitles) {
      owlTitles.forEach((element) => {
        element.style.color = isDarkMode ? "black" : "white";
      });
    }

    if (animatedContainer) {
      animatedContainer.style.background = isDarkMode ? "white" : "#151515";
    }

    if (teamTitle) {
      teamTitle.style.color = isDarkMode ? "black" : "white";
    }

    if (buttonLink) {
      buttonLink.style.background = isDarkMode ? "black" : "white";
      buttonLink.style.color = isDarkMode ? "white" : "black";
    }

    if (gallery) {
      gallery.style.background = isDarkMode ? "white" : "#151515";
    }

    if (heading) {
      heading.style.color = isDarkMode ? "black" : "white";
    }

    if (search) {
      search.style.background = isDarkMode ? "white" : "#151515";
    }

    if (searchInput) {
      searchInput.style.background = isDarkMode ? "black" : "#3a3939";
    }

    if (characterName) {
      characterName.style.color = isDarkMode ? "black" : "white";
    }

    if (characterDescription) {
      characterDescription.style.color = isDarkMode ? "black" : "white";
    }

    if (comicTitles) {
      comicTitles.forEach((title) => {
        title.style.color = isDarkMode ? "black" : "white";
      });
    }

    if (footer) {
      footer.style.background = isDarkMode ? "grey" : "#222";
    }

    if (footerSocialLinks) {
      footerSocialLinks.forEach((link) => {
        link.style.color = isDarkMode ? "black" : "white";
      });
    }

    if (sidebar) {
      sidebar.style.background = isDarkMode ? "grey" : "#1e1e1e";
    }

    if (header) {
      header.style.background = isDarkMode ? "grey" : "#1e1e1e";
    }

    if (brBt) {
      brBt.forEach((element) => {
        element.style.borderBottom = isDarkMode ? "#1e1e1e" : "grey";
      });
    }

    if (btn) {
      btn.style.background = isDarkMode ? "grey" : "#262626";
    }

    if (cancel) {
      cancel.style.background = isDarkMode ? "grey" : "#262626";
    }
  }, [isDarkMode]);

  return (
    <div
      className="light-mode"
      style={isDarkMode ? getDarkModeStyle() : getLightModeStyle()}
    >
      <i
        className={isDarkMode ? "bi bi-moon" : "bi bi-brightness-high-fill"}
        id="toggleDark"
        onClick={toggleDarkMode}
      ></i>
    </div>
  );
};

export default DarkModeToggle;
