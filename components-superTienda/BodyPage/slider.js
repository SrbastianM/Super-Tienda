const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider-section");
const sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnRight = document.querySelector("#btn-right");
const btnLeft = document.querySelector("#btn-left");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 1s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 1000);
}

function Before() {
  let sliderSection = document.querySelectorAll(".slider-section");
  const sliderSectionLast = sliderSection[sliderSection.length - 1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 1s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 1000);
}

btnLeft.addEventListener("click", () => {
  Before();
});

btnRight.addEventListener("click", () => {
  Next();
});
