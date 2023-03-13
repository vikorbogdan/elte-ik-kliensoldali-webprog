// Landing page – navigáció rögzítése Ha elgördült az oldal 200px-nyit, akkor alkalmazzuk a navbar-scrolled stílusosztályt a nav elemen. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!

const nav = document.querySelector("nav");
let waiting;

// const onScroll = (e) => {
//   //   if (window.scrollY > 200) {
//   //     nav.classList.add("navbar-scrolled");
//   //   } else {
//   //     nav.classList.remove("navbar-scrolled");
//   //   }
//   if (!waiting) {
//     nav.classList.toggle("navbar-scrolled", window.scrollY > 200);
//     waiting = true;
//     setTimeout(() => (waiting = false), 10);
//   }
// };

const onScroll = (e) => {
  nav.classList.toggle("navbar-scrolled", window.scrollY > 200);
};

window.addEventListener("scroll", _.throttle(onScroll, 100));

// Landing page – animáció megjelenéskor Ha egy elem gördítés közben a viewportba ér, akkor valamilyen animáció segítségével jelenjen meg! Az elemeket deklaratívan jelöljük meg HTML5 data attribútumokat használva, pl. data-scroll. Az animáció nevét is eltárolhatod data attribútumban, pl. data-scroll-animation="fadeInUp". Animációhoz használhatod az animate.css könyvtárat. Ügyelj arra, hogy a scroll esemény nagyon sokszor hívódik meg!

const onObserve = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(
        "animate__animated",
        `animate__${entry.target.dataset.scrollAnimation}`
      );
    }
  });
};

const observer = new IntersectionObserver(onObserve, { threshold: 1.0 });

document.querySelectorAll("[data-scroll]").forEach((e) => observer.observe(e));

// Landing page – számláló pörgetése Tedd lehetővé, hogy egy számot tartalmazó elem 0-tól felpörögjön az aktuális értékére! Az elemet deklaratívan paraméterezzük fel data attribútumokon keresztül! Eleinte az elemre kattintva történjen meg a számlálás, később a viewportba érve induljon el!
$("footer").click(() => {
  $("footer #year").animateNumber({ number: 2023 });
});
// $("#lines").animateNumber({ number: 165 });
