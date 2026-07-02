const toggle = document.getElementById("themeToggle");
const icon = document.querySelector(".toggle-icon");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");
  icon.textContent = isLight ? "☀" : "☾";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light");
  icon.textContent = "☀";
}

const revealItems = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach(item => observer.observe(item));
