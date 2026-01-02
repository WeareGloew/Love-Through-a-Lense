const images = [
  "AsapRihanna.png",
  "AugustJada.png",
  "BluefaceChrisean.png",
  "ChrisRhianna.png",
  "DavidVictoria.png",
  "DdgHalle.png",
  "DiddyCassie.png",
  "FutureCiara.png",
  "HarryMeghan.png",
  "JayBey.png",
  "JustinHayle.png",
  "KanyeKim.png",
  "MachineMegan.png",
  "MichaelLori.png",
  "NickBrie.png",
  "OffsetCardi.png",
  "PapouseRemy.png",
  "RussellCiara.png",
  "NellyAshanti.png",
  "WillJada.png"
];

// Shuffle images
let shuffled = images.sort(() => Math.random() - 0.5);
let index = 0;
let paused = false;

const imgEl = document.getElementById("coupleImage");
const pauseBtn = document.getElementById("pauseBtn");
const nextBtn = document.getElementById("nextBtn");
const reflection = document.getElementById("reflection");

function showImage() {
  imgEl.style.opacity = 0;

  setTimeout(() => {
    imgEl.src = shuffled[index];
    imgEl.style.opacity = 1;
  }, 300);
}

pauseBtn.addEventListener("click", () => {
  paused = !paused;

  if (paused) {
    reflection.classList.remove("hidden");
    pauseBtn.textContent = "Resume";
    nextBtn.style.display = "none";
  } else {
    reflection.classList.add("hidden");
    pauseBtn.textContent = "Pause here";
    nextBtn.style.display = "inline-block";
  }
});

nextBtn.addEventListener("click", () => {
  if (paused) return;

  index++;
  if (index >= shuffled.length) {
    shuffled = images.sort(() => Math.random() - 0.5);
    index = 0;
  }

  reflection.classList.add("hidden");
  pauseBtn.textContent = "Pause here";
  showImage();
});

// Initial load
showImage();
