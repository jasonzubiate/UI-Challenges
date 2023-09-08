gsap.to("#overlay-dark", {
  top: "-100%",
  ease: "power3.inOut",
  delay: 4,
  duration: 2,
});
gsap.from(".divider", {
  scaleX: 0,
  ease: "power3.inOut",
  delay: 1,
  duration: 3,
  stagger: {
    amount: 1,
  },
});
gsap.from(".row > .col", {
  opacity: 0,
  y: 40,
  ease: "power3.inOut",
  delay: 2,
  duration: 2,
  stagger: {
    amount: 1.5,
  },
});
gsap.from(".marquee", {
  y: "50%",
  opacity: 0,
  ease: "power3.inOut",
  delay: 4.5,
  duration: 1,
});