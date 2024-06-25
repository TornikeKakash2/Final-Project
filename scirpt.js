// burger menu

const navIcon = document.querySelector(".nav-icon");
const navListMobile = document.querySelector(".nav-list-mobile");

navIcon.addEventListener("click", () => {
  navListMobile.classList.toggle("active");
});

// fetch

async function fetchData() {
  const response = await fetch("https://dummyjson.com/recipes");
  const recipes = await response.json();
  return recipes.recipes;
}

const menuSection = document.querySelector(".menu-section");

async function getRecipes() {
  const recipes = await fetchData();
  const filteredRecipes = recipes.filter((recipe) => recipe.id < 4);
  const cardRightContainer = document.querySelector(".card-right-container");
  for (let element of filteredRecipes) {
    let card = document.createElement("div");
    card.classList.add("card");
    let title = document.createElement("h3");
    let paragraph = document.createElement("p");
    paragraph.classList.add("card-left-paragraph");
    let image = document.createElement("img");
    let cardLeft = document.createElement("div");
    cardLeft.classList.add("card-left");
    cardLeft.append(title, paragraph);
    image.classList.add("menu-images");
    cardRightContainer.append(card);
    card.append(image, cardLeft);
    title.innerText = element.name;
    paragraph.innerText = element.ingredients[0];
    image.src = element.image;
  }
}

getRecipes();

// Slider

const slider = document.querySelectorAll(".slider");

const rightArrow = document.querySelector(".right-arrow");
const leftArrow = document.querySelector(".left-arrow");
let currentSlider = 0;

function removeActive() {
  for (let element of slider) {
    element.classList.remove("active");
  }
}

rightArrow.addEventListener("click", () => {
  removeActive();
  if (currentSlider < slider.length - 1) {
    currentSlider++;
  } else {
    currentSlider = 0;
  }
  slider[currentSlider].classList.add("active");
});

leftArrow.addEventListener("click", () => {
  removeActive();
  if (currentSlider > 0) {
    currentSlider--;
  } else {
    currentSlider = slider.length - 1;
  }
  slider[currentSlider].classList.add("active");
});

// local storage

const toggleBtn = document.querySelector(".toggle-theme");
const darkMode = localStorage.getItem("darkMode");

function setDarkMode() {
  localStorage.setItem("darkMode", "enabled");
  document.body.classList.add("dark");
}

function setLightMode() {
  localStorage.setItem("darkMode", "disabled");
  document.body.classList.remove("dark");
}
if (darkMode === "enabled") {
  setDarkMode();
}
toggleBtn.addEventListener("click", () => {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    setLightMode();
  } else {
    setDarkMode();
  }
});
