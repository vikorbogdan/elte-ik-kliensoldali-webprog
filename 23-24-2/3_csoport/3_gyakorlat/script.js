const carouselElement = document.querySelector("#carousel");
const imageElements = carouselElement.querySelectorAll("img");

let activeIndex = 0;

// Egy olyan függvény, ami activeIndex alapján jeleníti meg a helyes képet
const render = () => {
  imageElements.forEach((image, index) => {
    image.classList.toggle("active", index === activeIndex);
  });
};

// setInterval(() => {
//   activeIndex = (activeIndex + 1) % imageElements.length;
//   render();
// }, 500);

const previousButton = document.createElement("button");
const nextButton = document.createElement("button");

previousButton.innerText = "Previous";
nextButton.innerText = "Next";

carouselElement.appendChild(previousButton);
carouselElement.appendChild(nextButton);

const previousImageButtonHandler = () => {
  activeIndex = (activeIndex - 1 + imageElements.length) % imageElements.length;
  render();
};
const nextImageButtonHandler = () => {
  activeIndex = (activeIndex + 1) % imageElements.length;
  render();
};

previousButton.addEventListener("click", previousImageButtonHandler);
nextButton.addEventListener("click", nextImageButtonHandler);

render();
