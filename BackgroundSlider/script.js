const sliderContainer = document.querySelector(".slider-container");
const leftSlide = document.querySelector(".left-slide");
const rightSlide = document.querySelector(".right-slide");
const upBtn = document.querySelector(".up-btn");
const downBtn = document.querySelector(".down-btn");
const slidesLength = leftSlide.querySelectorAll("div").length;
let currentSlide = 0;

leftSlide.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  if (direction == "up") {
    currentSlide++;
    if (currentSlide >= slidesLength) currentSlide = 0;
  } else {
    currentSlide--;
    if (currentSlide < 0) currentSlide = slidesLength - 1;
  }
  rightSlide.style.transform = `translateY(-${
    currentSlide * sliderContainer.clientHeight
  }px)`;
  leftSlide.style.transform = `translateY(${
    currentSlide * sliderContainer.clientHeight
  }px)`;
};

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));
