// 2. feladat
const nav = document.querySelector("#mainNav");

const onScroll = (event) => {
  console.log("most");
  nav.classList.toggle("navbar-scrolled", window.scrollY > 200);
  //   if (window.scrollY > 200) {
  //     nav.classList.add("navbar-scrolled");
  //   } else {
  //     nav.classList.remove("navbar-scrolled");
  //   }
};

window.addEventListener("scroll", _.throttle(onScroll, 200));

//3. feladat
const elementsToAnimate = document.querySelectorAll("[data-scroll]");
console.log(elementsToAnimate);
// b. callback function megírása (mi történjen amikor egy adott elem a viewportunkba kerül?)
const onScrollAnimationObserve = (entries) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      entry.target.classList.add(
        "animate__animated",
        `animate__${entry.target.dataset.scrollAnimation}`
      );
    });
};

// a. IntersectionObserver példányosítása (Observer létrehozása)
const scrollAnimationObserver = new IntersectionObserver(
  _.throttle(onScrollAnimationObserve, 200),
  { threshold: 1.0 }
);

// c. Observer hozzárendelése egy vagy több elemhez, hogy figyelje
elementsToAnimate.forEach((elemToAnimate) =>
  scrollAnimationObserver.observe(elemToAnimate)
);

// 4. feladat
const progressBar = document.querySelector("progress");

const updateProgressBar = () => {
  const scroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const progressPercentage = Math.round((scroll / height) * 100);
  progressBar.value = progressPercentage;
};

window.addEventListener("scroll", _.throttle(updateProgressBar, 200));
