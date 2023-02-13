/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
};
window.addEventListener("scroll", scrollHeader);

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll(".value__accordion-item");

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector(".value__accordion-header");

  accordionHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".accordion-open");

    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

// SCROL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
});

sr.reveal(".home__title, .section__title");
sr.reveal(".home__description", { delay: 500 });
sr.reveal(".home__data, .project__card", { delay: 600 });
sr.reveal(".home__social-media", { delay: 700 });
sr.reveal(".home__images, .value__content, .subscribe__button", {
  delay: 800,
  origin: "right",
});
sr.reveal(".logos__img", { delay: 900, origin: "bottom" });
sr.reveal(
  ".value__img, .subscribe__title, .footer__logo, .footer__social, .footer__description, .footer__title, .footer__copy, .footer__privacy",
  {
    delay: 900,
    origin: "left",
  }
);
