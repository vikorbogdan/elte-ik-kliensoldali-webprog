class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.imageElements = this.carouselElement.querySelectorAll("img");
    this.styleElement = document.createElement("style");
    this.styleElement.textContent = this.styleTextContent;
    document.head.appendChild(this.styleElement);
    this.previousButton = document.createElement("button");
    this.nextButton = document.createElement("button");
    this.previousButton.innerText = "Previous";
    this.nextButton.innerText = "Next";
    this.carouselElement.appendChild(this.previousButton);
    this.carouselElement.appendChild(this.nextButton);

    this.previousButton.addEventListener(
      "click",
      this.previousImageButtonHandler
    );
    this.nextButton.addEventListener("click", this.nextImageButtonHandler);

    this.render();
  }

  activeIndex = 0;
  styleTextContent = `
.carousel ul {
    list-style: none;
    overflow: hidden;
    height: 200px;
    width: 300px;
    position: relative;
  }
  .carousel ul li {
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 200px;
  }
  .carousel ul li img {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .active {
    opacity: 1 !important;
  }
  .hidden {
    opacity: 0;
  }
`;

  render = () => {
    this.imageElements.forEach((image, index) => {
      image.classList.toggle("active", index === this.activeIndex);
    });
  };

  previousImageButtonHandler = () => {
    this.activeIndex =
      (this.activeIndex - 1 + this.imageElements.length) %
      this.imageElements.length;
    this.render();
  };
  nextImageButtonHandler = () => {
    this.activeIndex = (this.activeIndex + 1) % this.imageElements.length;
    this.render();
  };
}

const carousel = new Carousel(document.querySelector("#carousel"));
const carousel2 = new Carousel(document.querySelector("#carousel2"));
