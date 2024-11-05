
const imageContainerEl = document.querySelector(".image-container");
const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
let x = 0;
let timer;

nextEl.addEventListener("click", () => {
  x = x - 45;
  clearTimeout(timer);
  updateGallery();
  }
);

prevEl.addEventListener("click", () => {
  x = x + 45;
  clearTimeout(timer);
  updateGallery();
  }
);

updateGallery();

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
  
  timer = setTimeout(() => {
    x = x - 45;
    updateGallery();
  }, 3000);
  /*
    - prøv med setTimer
    - også prøv med setInterval
  */
}