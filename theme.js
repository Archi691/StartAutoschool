/* ── Theme Switcher — Light / Dark ── */
function getStoredTheme() {
  return localStorage.getItem("start-theme") || "light";
}

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("start-theme", theme);

  // Update toggle button icon
  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    toggleBtn.setAttribute(
      "aria-label",
      theme === "dark" ? "Переключить на светлую тему" : "Переключить на тёмную тему"
    );
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") || "light";
  setTheme(current === "dark" ? "light" : "dark");
}

function initTheme() {
  const saved = getStoredTheme();
  setTheme(saved);

  const toggleBtn = document.getElementById("themeToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleTheme);
  }
}

// Apply theme immediately to prevent flash
(function () {
  const saved = localStorage.getItem("start-theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
})();

document.addEventListener("DOMContentLoaded", initTheme);
