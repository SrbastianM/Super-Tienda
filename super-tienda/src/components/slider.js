import React from "react";
import "./styles/SliderStyle.css";
import "../js/slider-configuration.js";

function Slider() {
  return (
    <section>
      <div className="container">
        <div className="slider" id="slider">
          <div className="slider-section" id="slide">
            <img
              src="https://m.media-amazon.com/images/I/71INExvrLdL._AC_SL1200_.jpg"
              alt
            />
          </div>
          <div className="slider-section" id="slide-two">
            <img
              src="https://m.media-amazon.com/images/I/81exKNoL4-S._AC_SX679_.jpg"
              alt
            />
          </div>
          <div className="slider-section" id="slide-three">
            <img
              src="https://m.media-amazon.com/images/I/71zPjL+rPhL._AC_SX679_.jpg"
              alt
            />
          </div>
        </div>
        <div className="btn_slider btn_slider-left" id="btn-left">
          <span href="#slide class=" className="material-symbols-outlined">
            chevron_left
          </span>
        </div>
        <div className="btn_slider btn_slider-right" id="btn-right">
          <span href="#slide-three" className="material-symbols-outlined">
            chevron_right
          </span>
        </div>
      </div>
    </section>
  );
}

export default Slider;
