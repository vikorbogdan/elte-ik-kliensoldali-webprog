const navBar = document.querySelector("nav#mainNav");

const onScroll = () => {
  //   const hasScrolledEnough = window.scrollY > 200;
  //   if (hasScrolledEnough) {
  //     navBar.classList.add("navbar-scrolled");
  //   } else {
  //     navBar.classList.remove("navbar-scrolled");
  //   }
  navBar.classList.toggle("navbar-scrolled", window.scrollY > 200);
};

window.addEventListener("scroll", _.throttle(onScroll, 200));

// 3. feladat

const elementsToAnimate = document.querySelectorAll("[data-scroll]");
// b. Hozzuk létre a callback functiont
const onAnimationObserve = (entries) => {
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => {
      entry.target.classList.add(
        "animate__animated",
        `animate__${entry.target.dataset.scrollAnimation}`
      );
    });
};

// a. Példányosítsuk az Observert
const animationObserver = new IntersectionObserver(onAnimationObserve, {
  threshold: 1.0,
});

// c. Rendeljük hozzá elemekhez az Observert
elementsToAnimate.forEach((elem) => animationObserver.observe(elem));

// 4. feladat
const progressBar = document.querySelector("#scrollProgress");

const updateProgressBar = () => {
  const scroll = document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progressPercentage = Math.round((scroll / height) * 100);
  progressBar.value = progressPercentage;
};

window.addEventListener("scroll", _.throttle(updateProgressBar, 20));

// 5. feladat
// const navBar = document.querySelector("nav#mainNav");

const sections = [...document.querySelectorAll("section")].filter((section) =>
  section.hasAttribute("id")
);

const onActiveLinkObserve = (entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.id;
    const navLink = navBar.querySelector(`a[href="#${sectionId}"]`);
    navLink.classList.toggle("active", entry.isIntersecting);
  });
};

const activeLinkObserver = new IntersectionObserver(onActiveLinkObserve, {
  threshold: 1.0,
});

sections.forEach((section) => activeLinkObserver.observe(section));
