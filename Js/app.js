const openBurger = document.querySelector(".burger-open");
const closeBurger = document.querySelector(".burger-close");
const headerMenu = document.querySelector(".header__menu");

openBurger.addEventListener("click", openList);
closeBurger.addEventListener("mouseup", closeList);

function openList() {
  openBurger.classList.add("active");
  closeBurger.classList.add("active");
  headerMenu.classList.add("active");
}

function closeList() {
  openBurger.classList.remove("active");
  closeBurger.classList.remove("active");
  headerMenu.classList.remove("active");
}
