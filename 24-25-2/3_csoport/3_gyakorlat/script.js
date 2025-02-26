class Carousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.listElements = this.querySelectorAll("li");
    this.styleElement = document.createElement("style");
    this.styleElement.textContent = ` 
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        width: 300px;
        height: 200px;
        overflow: hidden;
        position: relative;
      }
      ul li {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }
      ul li img {
        width: 100%;
        height: 100%;
      }
      .active {
        opacity: 1;
      }
      .hidden {
        opacity: 0;
      }`;
    this.shadowRoot.appendChild(this.styleElement);
    this.shadowRoot.appendChild(this.querySelector("ul"));
    this.shadowRoot.appendChild(
      this.createButton("⬅️ Previous", this.previousImage)
    );
    this.shadowRoot.appendChild(this.createButton("Next ➡️", this.nextImage));
  }

  activeIndex = 1;
  render() {
    this.listElements.forEach((listElement, index) => {
      if (index === this.activeIndex) {
        listElement.classList.add("active");
        listElement.classList.remove("hidden");
      } else {
        listElement.classList.remove("active");
        listElement.classList.add("hidden");
      }
    });
  }

  nextImage = () => {
    this.activeIndex = (this.activeIndex + 1) % this.listElements.length;
    this.render();
  };

  previousImage = () => {
    this.activeIndex =
      (this.activeIndex - 1 + this.listElements.length) %
      this.listElements.length;
    this.render();
  };

  createButton(text, callback) {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = text;
    buttonElement.addEventListener("click", callback);
    return buttonElement;
  }
}
customElements.define("carousel-gallery", Carousel);
