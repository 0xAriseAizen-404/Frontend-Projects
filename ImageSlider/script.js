const imgWrapperEl = document.querySelector(".wrapper");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".btn-prev");
const imgs = document.querySelectorAll(".wrapper img");
let currentImg = 0;

nextBtn.addEventListener("click", () => {
  currentImg++;
  updatePicture();
});

prevBtn.addEventListener("click", () => {
  currentImg--;
  updatePicture();
});

function updatePicture() {
  if (currentImg >= imgs.length) {
    currentImg = 0;
  } else if (currentImg < 0) {
    currentImg = imgs.length - 1;
  }
  imgWrapperEl.style.transform = `translateX(-${currentImg * 500}px)`;

  //   // Hide or show the buttons based on current image index
  //   if (currentImg === 0) {
  //     prevBtn.style.display = 'none';
  //   } else {
  //     prevBtn.style.display = 'block';
  //   }

  //   if (currentImg === imgs.length - 1) {
  //     nextBtn.style.display = 'none';
  //   } else {
  //     nextBtn.style.display = 'block';
  //   }
}

// // Initial setup: Hide previous button on the first image
// prevBtn.style.display = 'none';
