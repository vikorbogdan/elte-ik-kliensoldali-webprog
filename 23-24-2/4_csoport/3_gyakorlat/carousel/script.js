const carouselElement = document.querySelector("#carousel");
const imageElements = carouselElement.querySelectorAll("img");

let activeIndex = 0;

const render = () => {
  imageElements.forEach((image, index) => {
    image.classList.toggle("active", index === activeIndex);
  });
};

const previousButtonElement = document.createElement("button");
const nextButtonElement = document.createElement("button");

previousButtonElement.innerText = "Previous";
nextButtonElement.innerText = "Next";

carouselElement.appendChild(previousButtonElement);
carouselElement.appendChild(nextButtonElement);

const handlePrevious = () => {
  activeIndex = (activeIndex - 1 + imageElements.length) % imageElements.length;
  render();
};
const handleNext = () => {
  activeIndex = (activeIndex + 1) % imageElements.length;
  render();
};

previousButtonElement.addEventListener("click", handlePrevious);
nextButtonElement.addEventListener("click", handleNext);

render();
