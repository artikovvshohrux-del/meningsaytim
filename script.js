// Intro harfma-harf animatsiya
const letters = document.querySelectorAll(".intro-text .letter");
letters.forEach((letter, index) => {
  letter.style.animationDelay = `${index * 0.2}s`;
});

// Intro keyin main content
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
    document.querySelector(".main").classList.remove("hidden");
  }, 3000);
});

// Form handling
const form = document.getElementById("contactForm");
const resp = document.getElementById("resp");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resp.textContent = "Xabaringiz yuborildi! ✅";
  form.reset();
});

clearBtn.addEventListener("click", () => {
  form.reset();
  resp.textContent = "";
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
// Force a hover to see the effect
const share = document.querySelector('.share');

setTimeout(() => {
  share.classList.add("hover");
}, 1000);

setTimeout(() => {
  share.classList.remove("hover");
}, 3000);