const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const form = document.getElementById("contactForm");
const year = document.getElementById("year");
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

/* =========================
   🌙 THEME TOGGLE
========================= */

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

/* =========================
   ☰ MOBILE NAV TOGGLE
========================= */

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

/* =========================
   📩 CONTACT FORM
========================= */

form?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message Sent Successfully!");
  form.reset();
});

/* =========================
   📅 AUTO YEAR
========================= */

if (year) {
  year.textContent = new Date().getFullYear();
}

/* =========================
   🔥 ACTIVE NAV ON SCROLL
========================= */

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form Working Successfully ✅");
  });

});