class Carousel {
  constructor(carouselElement) {
    this.carouselElement = carouselElement;
    this.imageElements = this.carouselElement.querySelectorAll("img");

    this.previousButtonElement = document.createElement("button");
    this.nextButtonElement = document.createElement("button");

    this.previousButtonElement.innerText = "Previous";
    this.nextButtonElement.innerText = "Next";

    this.carouselElement.appendChild(this.previousButtonElement);
    this.carouselElement.appendChild(this.nextButtonElement);

    this.previousButtonElement.addEventListener("click", this.handlePrevious);
    this.nextButtonElement.addEventListener("click", this.handleNext);

    this.styleElement = document.createElement("style");
    this.styleElement.textContent = this.styleTextContent;
    document.head.appendChild(this.styleElement);

    this.render();
  }
  styleTextContent = `
  #carousel ul {
    list-style: none;
    width: 300px;
    height: 200px;
    overflow: hidden;
    position: relative;
    padding: 0;
    margin: 0;
  }
  #carousel ul li {
    position: absolute;
    width: 300px;
    height: 200px;
  }
  #carousel ul li img {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .active {
    opacity: 1 !important;
  }`;
  activeIndex = 0;

  render = () => {
    this.imageElements.forEach((image, index) => {
      image.classList.toggle("active", index === this.activeIndex);
    });
  };

  handlePrevious = () => {
    this.activeIndex =
      (this.activeIndex - 1 + this.imageElements.length) %
      this.imageElements.length;
    this.render();
  };

  handleNext = () => {
    this.activeIndex = (this.activeIndex + 1) % this.imageElements.length;
    this.render();
  };
}

const carousel = new Carousel(document.querySelector("#carousel"));
