// 1. feladat
// const navLinks = document.querySelectorAll(".js-scroll-trigger");

// function handleAddEventListener(elem) {
//   function handleClick(event) {
//     event.preventDefault();
//     const linkedElementId = event.target.getAttribute("href");
//     const linkedElement = document.querySelector(linkedElementId);

//     linkedElement.scrollIntoView({
//       behavior: "smooth",
//     });
//   }
//   elem.addEventListener("click", handleClick);
// }

// navLinks.forEach(handleAddEventListener);

// 2. feladat
const nav = document.querySelector("#mainNav");

function handleScroll(event) {
  //   console.log("Helóka");
  // tegyünk egy navbar-scrolled stílusosztályt a navra, ha letekertünk 200px-t
  //   if (window.scrollY >= 200) {
  //     nav.classList.add("navbar-scrolled");
  //   } else {
  //     nav.classList.remove("navbar-scrolled");
  //   }
  nav.classList.toggle("navbar-scrolled", window.scrollY >= 200);
}

window.addEventListener("scroll", _.throttle(handleScroll, 200));

// 3. feladat

// b. Callback function definiálása
function onObserve(entries) {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(
        "animate__animated",
        `animate__${entry.target.dataset.scrollAnimation}`
      );
    } else {
      entry.target.classList.remove(
        "animate__animated",
        `animate__${entry.target.dataset.scrollAnimation}`
      );
    }
  });
}

// a. IntersectionObserver példányosítása
const observer = new IntersectionObserver(onObserve, {
  threshold: 0.1,
});

// c. Observer hozzárendelése a megfigyelni kívánt elemekhez
const elementsToObserve = document.querySelectorAll("[data-scroll]");
elementsToObserve.forEach((elem) => {
  observer.observe(elem);
});
