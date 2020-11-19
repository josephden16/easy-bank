// credit to sabe.io for the modal.
let modal = document.querySelector(".modal");
let hamburger = document.querySelector(".hamburger");
let open = false
function toggleModal() {
  modal.classList.toggle("show-modal");
  hamburger.classList.toggle("close");
  if (hamburger.classList.contains("close")) {
    hamburger.style.content = "url(../images/icon-close.svg)";
  } else {
    hamburger.style.content = "url(../images/icon-hamburger.svg)";
  }

}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

hamburger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


// gsap animations
gsap.registerPlugin(ScrollTrigger);
gsap.from(".services__services", {
  scrollTrigger: {
    trigger: ".services__services",
    start: "top center",
    end: "bottom top",
    toggleActions: "restart reverse restart reverse",
  },
  opacity: 0,
  duration: 1,
  x: "200%",
  ease: "slow"
});

gsap.from(".intro__text-content", {
  scrollTrigger: {
    trigger: ".intro__text-content",
    toggleActions: "restart reverse restart reverse",
    start: "top bottom",
  },
  x: "-100%",
  opacity: 0,
  duration: 0.7
})

gsap.from(".intro__img", {
  scrollTrigger: {
    trigger: ".intro__img",
    toggleActions: "restart reverse restart reverse",
  },
  x: "100%",
  opacity: 0,
  duration: 0.7
});
