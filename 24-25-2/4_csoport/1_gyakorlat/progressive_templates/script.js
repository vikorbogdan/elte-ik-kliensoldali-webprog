// 2. feladat
const navElement = document.querySelector("#mainNav");

function handleScroll() {
  //   if (window.scrollY > 200) {
  //     navElement.classList.add("navbar-scrolled");
  //   } else {
  //     navElement.classList.remove("navbar-scrolled");
  //   }
  console.log("görögök");
  navElement.classList.toggle("navbar-scrolled", window.scrollY > 200);
}

window.addEventListener("scroll", _.throttle(handleScroll, 200));

// 3. feladat

// b. Callback függvény definiálása

function onObserve(entries) {
  entries.forEach((entry) => {
    const animationName = entry.target.dataset.scrollAnimation;
    if (entry.isIntersecting) {
      entry.target.classList.add(
        "animate__animated",
        `animate__${animationName}`
      );
    } else {
      entry.target.classList.remove(
        "animate__animated",
        `animate__${animationName}`
      );
    }
  });
}

// a. IntersectionObserver példányosítása
const observer = new IntersectionObserver(_.throttle(onObserve, 500), {
  threshold: 0.2,
});

// c. IntersectionObserver hozzárendelése elemekhez

const elementsToAnimate = document.querySelectorAll("[data-scroll]");
elementsToAnimate.forEach((elem) => {
  observer.observe(elem);
});
