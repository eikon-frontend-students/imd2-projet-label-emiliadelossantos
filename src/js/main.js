const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

const slides = [
  {
    artist: "ROSALÍA",
    image: "../img/rosi.png",
    link: "https://open.spotify.com/intl-es/artist/7ltDVBr6mKbRvohxheJ9h1",
  },
  {
    artist: "PEDRO CAPÓ",
    image: "../img/pedro.jpeg",
    link: "https://open.spotify.com/intl-es/artist/4QVBYiagIaa6ZGSPMbybpy",
  },
  {
    artist: "EMILIA",
    image: "../img/emiliamernes.webp",
    link: "https://open.spotify.com/intl-es/artist/0AqlFI0tz2DsEoJlKSIiT9",
  },
  {
    artist: "PRINCE ROYCE",
    image: "../img/prince.webp",
    link: "https://open.spotify.com/intl-es/artist/3MHaV05u0io8fQbZ2XPtlC",
  },
  {
    artist: "NATTI NATASHA",
    image: "../img/natti.webp",
    link: "https://open.spotify.com/intl-es/artist/1GDbiv3spRmZ1XdM1jQbT7",
  },
];

let currentSlide = 0;

const heroImage = document.getElementById("hero-image");
const heroArtist = document.getElementById("hero-artist");
const heroLink = document.querySelector(".hero-btn");
const dotsContainer = document.getElementById("hero-dots");

// sécurité
if (!heroImage || !heroArtist || !heroLink || !dotsContainer) {
  console.error("Hero elements missing");
}

// dots
slides.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("hero-dot");
  if (index === 0) dot.classList.add("active");

  dot.addEventListener("click", () => {
    currentSlide = index;
    updateHero();
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".hero-dot");

heroImage.onerror = () => {
  console.error("Image not found:", heroImage.src);
};

function updateHero() {
  heroImage.style.opacity = 0;

  setTimeout(() => {
    heroImage.src = slides[currentSlide].image;
    heroArtist.textContent = slides[currentSlide].artist;
    heroLink.href = slides[currentSlide].link;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");

    heroImage.style.opacity = 1;
  }, 300);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateHero();
}

setInterval(nextSlide, 5000);

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    // toggle visible state
    const isHidden = mainNav.getAttribute("aria-hidden") === "false";
    mainNav.setAttribute("aria-hidden", String(isHidden ? "true" : "false"));
    // Also toggle class for legacy CSS display
    if (isHidden) mainNav.style.display = "none";
    else mainNav.style.display = "block";
  });
}

// Set current year in footer
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

export {};
