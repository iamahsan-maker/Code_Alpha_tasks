const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const sun = document.getElementById("sun");
const moon = document.getElementById("moon");
const buttons = document.querySelectorAll(".button");
const input = document.querySelector("input");

// 🌙 Toggle Theme and Apply JS Styling
themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    // --- DARK MODE ---
    sun.style.display = "block";
    moon.style.display = "none";
    sun.style.filter = "invert(1)";
    body.style.backgroundColor = "#1e1e1e";
    input.style.backgroundColor = "#333";
    input.style.color = "#fff";

    buttons.forEach((btn) => {
      if (btn.classList.contains("bg-blue")) {
        btn.style.backgroundColor = "#0077ff";
        btn.style.color = "#fff";
      } else if (btn.classList.contains("bg-red")) {
        btn.style.backgroundColor = "#ff4c4c";
        btn.style.color = "#fff";
      } else {
        btn.style.backgroundColor = "#444";
        btn.style.color = "#fff";
      }
      btn.style.border = "1px solid #555";
    });
  } else {
    // --- LIGHT MODE ---
    sun.style.display = "none";
    moon.style.display = "block";
    body.style.backgroundColor = "#e4e4e4ff";
    input.style.backgroundColor = "#f0f0f0";
    input.style.color = "#000";

    buttons.forEach((btn) => {
      if (btn.classList.contains("bg-blue")) {
        btn.style.backgroundColor = "#007bff";
        btn.style.color = "#fff";
      } else if (btn.classList.contains("bg-red")) {
        btn.style.backgroundColor = "#ff4d4d";
        btn.style.color = "#fff";
      } else {
        btn.style.backgroundColor = "#fff";
        btn.style.color = "#000";
      }
      btn.style.border = "1px solid #ccc";
    });
  }
});


let str = "";
const buttonss = document.querySelectorAll(".button");
const inputs = document.querySelector("input");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.innerHTML;

    if (value === "=") {
      try {
        const expression = str.replace(/÷/g, "/").replace(/×/g, "*");
        str = eval(expression);
        input.value = str;
      } catch {
        input.value = "Error";
        str = "";
      }
    } else if (value === "Ac") {
      str = "";
      input.value = "";
    } else if (value === "⌫") {
      str = str.slice(0, -1);
      input.value = str;
    } else {
      str += value;
      input.value = str;
    }
  });
});
