const CORRECT_PASSWORD = "Brahmastra"; // Change as needed

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input === CORRECT_PASSWORD) {
    document.getElementById("login-container").classList.add("hidden");
    document.getElementById("memory-container").classList.remove("hidden");
    startHeartsAnimation();
  } else {
    alert("Wrong password 😔");
  }
  if (input === CORRECT_PASSWORD) {
  document.getElementById("login-container").classList.add("hidden");
  document.getElementById("memory-container").classList.remove("hidden");
  startHeartsAnimation();

  // 🔔 Send Telegram notification
  fetch("https://script.google.com/macros/s/AKfycby3i-cz7pz9_3mAzFDqsH2pxgMdL1O3OQjw_ihehvOAgZTrEN-Ufh6xcudGCny5lSFIjg/exec", { method: "POST" });
}

}

// Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

function startHeartsAnimation() {
  const container = document.getElementById("hearts-container");
  container.classList.remove("hidden");
  setInterval(() => {
    const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    heart.setAttribute("viewBox", "0 0 24 24");
    heart.innerHTML = `<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 
        6 4 4 6.5 4c1.74 0 3.41 1.01 4.13 
        2.44h1.74C14.09 5.01 15.76 4 17.5 4 20 
        4 22 6 22 8.5c0 3.78-3.4 6.86-8.55 
        11.54L12 21.35z"/>`;
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 3 + Math.random() * 2 + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 300);
}
