  document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Login form handling
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
      const message = document.getElementById("loginMessage");

      if (!username || !password) {
        message.style.color = "red";
        message.textContent = "Please fill in both fields.";
        return;
      }

      // Simulated login logic
      if (username === "testuser" && password === "1234") {
        message.style.color = "green";
        message.textContent = "Login successful! Welcome back.";
      } else {
        message.style.color = "red";
        message.textContent = "Invalid credentials. Try again.";
      }
    });
  }
});
