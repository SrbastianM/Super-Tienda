import React from "react";
import "./styles/SliderStyle.css";

function Slider() {
  return (
    <section>
      <div className="container">
        <ul className="slider">
          <li id="slide">
            <img
              src="https://m.media-amazon.com/images/I/71INExvrLdL._AC_SL1200_.jpg"
              alt
            />
          </li>
          <li id="slide-two">
            <img
              src="https://m.media-amazon.com/images/I/81exKNoL4-S._AC_SX679_.jpg"
              alt
            />
          </li>
          <li id="slide-three">
            <img
              src="https://m.media-amazon.com/images/I/71ielMNOtyL._AC_SX679_.jpg"
              alt
            />
          </li>
        </ul>
        <ul className="menu-sliders">
          <li>
            <a href="#slide">
              <span className="material-symbols-outlined">
                radio_button_unchecked
              </span>
            </a>
          </li>
          <li>
            <a href="#slide-two">
              <span className="material-symbols-outlined">
                radio_button_unchecked
              </span>
            </a>
          </li>
          <li>
            <a href="#slide-three">
              <span className="material-symbols-outlined">
                radio_button_unchecked
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Slider;
