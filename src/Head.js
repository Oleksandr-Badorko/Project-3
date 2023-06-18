import React from "react";

const Head = () => {
  return (
    <head>
      {/* MARVEL FAVICON */}
      <link
        rel="shortcut icon"
        href="./assets/marvel-favicon/android-chrome-icon-194.png"
        type="image/x-icon"
      />
      {/* FONTAWESOME, REMIXICON, BOXICON, AND BOOTSTRAP ICONS */}
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"
      />
      {/* SWIPER */}
      <link
        rel="stylesheet"
        href="./carousel/owl-carousel/owl.carousel.min.css"
      />
      <link
        rel="stylesheet"
        href="./carousel/owl-carousel/owl.theme.default.min.css"
      />
    </head>
  );
};

export default Head;
