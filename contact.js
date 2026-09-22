emailjs.init("C3kXASurd5x5Nhnks");

document.getElementById("contactForm")?.addEventListener("submit", (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ednaavg", "template_uc7itbp", e.target)
    .then(() => {
        alert("ສົ່ງສຳເລັດ!");
        e.target.reset();
    })
    .catch(() => {
        alert("ມີຂໍ້ຜິດພາດ ລອງໃໝ່!");
    });
});

// ==== Contact Tab Toggle with Re-triggered Animations ====
document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".contact-nav-button");
  const tabContents = document.querySelectorAll("[data-tab-content]");

  function switchTab(target) {
    // 1. Toggle active classes on tab buttons
    tabButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.tab === target);
    });

    // 2. Toggle active classes on tab content panels
    tabContents.forEach((content) => {
      const isActive = content.dataset.tabContent === target;
      content.classList.toggle("active", isActive);

      // 3. Reset AOS animations inside the active tab
      if (isActive) {
        const animatedElements = content.querySelectorAll("[data-aos]");
        
        animatedElements.forEach((el) => {
          // Remove the animated class so it resets
          el.classList.remove("aos-animate");
        });

        // Trigger reflow to restart CSS transitions, then refresh AOS
        setTimeout(() => {
          if (typeof AOS !== "undefined") {
            AOS.refreshHard(); // Hard refresh forces AOS to re-evaluate elements
          }
        }, 50);
      }
    });
  }

  // Set initial tab on page load
  switchTab("direct");

  // Add click listeners to buttons
  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const target = btn.dataset.tab;
      switchTab(target);
    });
  });
});

window.addEventListener("DOMContentLoaded", () => {
  if (typeof emailjs !== "undefined") {
    emailjs.init("C3kXASurd5x5Nhnks");
  }
});