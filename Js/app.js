// Selectors
const openBurger = document.querySelector(".burger-open");
const closeBurger = document.querySelector(".burger-close");
const headerMenu = document.querySelector(".header__menu");

function toggleMenu(isOpen) {
  const action = isOpen ? "add" : "remove";
  openBurger.classList[action]("active");
  closeBurger.classList[action]("active");
  headerMenu.classList[action]("active");
}

// Event listeners
openBurger.addEventListener("click", () => toggleMenu(true));
closeBurger.addEventListener("mouseup", () => toggleMenu(false));
headerMenu.addEventListener("click", () => toggleMenu(false));
