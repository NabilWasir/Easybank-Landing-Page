const hambergerMenu = document.querySelector(".navbar__hamberger-menu");
const overlayHambergerMenu = document.querySelector(".overlay-menu__hamberger-menu");
const overlayMenu = document.querySelector(".overlay-menu");

hambergerMenu.addEventListener("click", function () {
  if ((overlayMenu.style.display = "none")) {
    overlayMenu.style.display = "block";
    hambergerMenu.style.display = "none";
    overlayHambergerMenu.style.display = "block";
  } else {
    overlayMenu.style.display = "none";
    overlayHambergerMenu.style.display = "none";
  }
});

overlayHambergerMenu.addEventListener("click", function () {
  if ((overlayHambergerMenu.style.display = "block")) {
    overlayHambergerMenu.style.display = "none";
    overlayMenu.style.display = "none";
    hambergerMenu.style.display = "block";
  } else {
    overlayHambergerMenu.style.display = "block";
    overlayMenu.style.display = "block";
  }
});
