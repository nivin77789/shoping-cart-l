import React from "react";
import "./section.css";

function Section() {
  return (
    <div className="section">
      <div className="left">
        <div className="left-text">
          <h1>Be the envy of all</h1>
          <p>
            Discover a world of endless possibilities at our online store! From
            sparkling jewelry to the latest electronics, and fashionable
            clothing for men and women, we have something for every taste and
            budget. Come explore and be inspired by our wide selection.
          </p>
          <button>SHOP NOW</button>
        </div>
      </div>
      <div className="right">
        <img
          alt="girl"
          src="https://www.bmilcs.com/odin-shopping-cart/static/media/splash-photo.0d7de66bd2d7d813b1c2.jpg"
        ></img>
      </div>
    </div>
  );
}

export default Section;
