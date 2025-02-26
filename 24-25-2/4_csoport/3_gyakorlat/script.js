class Carousel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.ulElement = this.querySelector("ul");
    this.shadowRoot.appendChild(this.ulElement);

    this.listItemElements = this.querySelectorAll("li");
    this.styleElement = document.createElement("style");
    this.styleElement.textContent = this.styleTextContent;
    this.shadowRoot.appendChild(this.styleElement);

    this.previousButton = document.createElement("button");
    this.previousButton.textContent = "Előző kép";
    this.previousButton.addEventListener("click", this.previousImage);
    this.shadowRoot.appendChild(this.previousButton);

    this.nextButton = document.createElement("button");
    this.nextButton.textContent = "Következő kép előtti kép utáni kép";
    this.nextButton.addEventListener("click", this.nextImage);
    this.shadowRoot.appendChild(this.nextButton);
  }

  styleTextContent = `
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
        position: absolute;
        top: 0;
        left: 0;
        width: 300px;
        height: 200px;
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
      }
`;

  activeIndex = 0;

  render() {
    this.listItemElements.forEach((image, index) => {
      if (index === this.activeIndex) {
        image.classList.add("active");
        image.classList.remove("hidden");
      } else {
        image.classList.add("hidden");
        image.classList.remove("active");
      }
    });
  }

  nextImage = () => {
    this.activeIndex = (this.activeIndex + 1) % this.listItemElements.length;
    this.render();
  };

  previousImage = () => {
    console.log("helo");
    this.activeIndex =
      (this.activeIndex - 1 + this.listItemElements.length) %
      this.listItemElements.length;
    this.render();
  };
}

customElements.define("carousel-images", Carousel);

// const carousel1 = new Carousel(document.querySelector("#carousel1"));
// const carousel2 = new Carousel(document.querySelector("#carousel2"));
