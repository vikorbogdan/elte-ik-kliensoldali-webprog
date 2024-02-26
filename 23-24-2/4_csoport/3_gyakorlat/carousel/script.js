class Carousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.styleElement = document.createElement("style");
    this.styleElement.textContent = this.styleTextContent;
    this.shadowRoot.appendChild(this.styleElement);

    this.ulElement = this.querySelector("ul");
    this.shadowRoot.appendChild(this.ulElement);
    this.imageElements = this.ulElement.querySelectorAll("img");
    this.previousButtonElement = document.createElement("button");
    this.nextButtonElement = document.createElement("button");

    this.previousButtonElement.innerText = "Previous";
    this.nextButtonElement.innerText = "Next";

    this.shadowRoot.appendChild(this.previousButtonElement);
    this.shadowRoot.appendChild(this.nextButtonElement);

    this.previousButtonElement.addEventListener("click", this.handlePrevious);
    this.nextButtonElement.addEventListener("click", this.handleNext);

    this.render();
  }
  styleTextContent = `
    ul {
        list-style: none;
        width: 300px;
        height: 200px;
        overflow: hidden;
        position: relative;
        padding: 0;
        margin: 0;
        color: red;
    }
    ul li {
        position: absolute;
        width: 300px;
        height: 200px;
    }
    ul li img {
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
customElements.define("img-carousel", Carousel);
