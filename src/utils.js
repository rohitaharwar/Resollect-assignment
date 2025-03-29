document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".dashboard_grp Button");
  
    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        // Remove 'active' from all buttons
        buttons.forEach((btn) => btn.classList.remove("active"));
  
        // Add 'active' class to clicked button
        this.classList.add("active");
      });
    });
  });
  