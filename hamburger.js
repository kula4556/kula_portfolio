// ==== Mobile Hamburger Menu Toggle ====
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburgerMenu");
  const menuList = document.querySelector(".menu-list");
 
  if (!hamburger || !menuList) return;
 
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
  });
 
  // ປິດເມນູອັດຕະໂນມັດເມື່ອກົດລິ້ງໃດໜຶ່ງ (ດີສຳລັບ mobile UX)
  document.querySelectorAll(".menu-list a").forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      menuList.classList.remove("active");
    });
  });
 
  // ປິດເມນູຖ້າກົດນອກ nav
  document.addEventListener("click", function (e) {
    const isClickInsideNav = e.target.closest(".header");
    if (!isClickInsideNav && menuList.classList.contains("active")) {
      hamburger.classList.remove("active");
      menuList.classList.remove("active");
    }
  });
});