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

    this.previousButton = document.createElement("button");
    this.nextButton = document.createElement("button");
    this.previousButton.innerText = "Previous";
    this.nextButton.innerText = "Next";

    this.shadowRoot.appendChild(this.previousButton);
    this.shadowRoot.appendChild(this.nextButton);

    this.previousButton.addEventListener(
      "click",
      this.previousImageButtonHandler
    );
    this.nextButton.addEventListener("click", this.nextImageButtonHandler);

    this.render();
  }

  activeIndex = 0;
  styleTextContent = `
   ul {
    list-style: none;
    overflow: hidden;
    height: 200px;
    width: 300px;
    position: relative;
    color: red !important;
  }
  ul li {
    position: absolute;
    top: 0;
    left: 0;
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

customElements.define("image-carousel", Carousel);
