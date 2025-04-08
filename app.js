var countDownDate = new Date("Dec 12, 2025 14:15:00").getTime();
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " : " + hours + " : " + minutes + " : " + seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

gsap.registerPlugin(ScrollTrigger);

/*
const tl = gsap.timeline();
tl.from(".story-image", { x: -600 });
tl.from(".story-content", { x: 600 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".our-story",
  toggleActions: "restart pause reverse pause",
  start: "top 90%",
  end: "center center",
  ease: "power2.out",
  scrub: 1,
  pin: false,
  markers: true,
  //anticipatePin: 1,
});




gsap.to(".hero-section", {
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: () => {
      const nextSection = document.querySelector(".details-sec");
      const nextSectionTop = nextSection.offsetTop;
      const viewportHeight = window.innerHeight;
      const nextSectionCenter = nextSectionTop + nextSection.offsetHeight / 2;

      return `bottom+=${nextSectionCenter - viewportHeight / 6}`;
    },
    pin: ".hero-section",
    markers: true,
  },
});
*/
/*
gsap.to(".hero-section", {
  scrollTrigger: {
    trigger: ".details-sec",
    start: "bottom bottom",
    end: () => {
      const nextSection = document.querySelector(".details-sec");
      const nextSectionTop = nextSection.offsetTop;
      const viewportHeight = window.innerHeight;
      const nextSectionCenter = nextSectionTop + nextSection.offsetHeight / 2;

      return `bottom+=${nextSectionCenter / 2}`;
    },
    pin: ".hero-section",
    markers: true,
  },
});
*/

// for hero content section
const newTl = gsap.timeline();

newTl.fromTo(".bridegroom", { opacity: 0 }, { opacity: 1, duration: 5 });
newTl.fromTo(
  ".date-location",
  { opacity: 0 },
  { opacity: 1, duration: 3, delay: 1 },
  0 // 0 position means the animation will happen at the same time, instead of right after each other
);

// for details section
const deetTl = gsap.timeline();

deetTl.fromTo(
  ".details-inner",
  { x: -400, scale: 0.2, opacity: 0, duration: 2 },
  { x: 0, scale: 1, opacity: 1 }
);
deetTl.fromTo(
  ".details-image",
  { x: 400, scale: 0.2, opacity: 0, duration: 2 },
  { x: 0, scale: 1, opacity: 1 },
  0
);

ScrollTrigger.create({
  animation: deetTl,
  trigger: ".details-flex",
  toggleActions: "restart pause reverse pause",
  start: "top 90%",
  end: "center center",
  scrub: 1,
});

// for our-story section
const tl = gsap.timeline();

tl.fromTo(
  ".story-image",
  { x: -600, scale: 0.2, opacity: 0, duration: 2 },
  { x: 0, scale: 1, opacity: 1 }
);
tl.fromTo(
  ".story-content",
  { x: 600, scale: 0.2, opacity: 0, duration: 2 },
  { x: 0, scale: 1, opacity: 1 },
  0
);

ScrollTrigger.create({
  animation: tl,
  trigger: ".our-story",
  toggleActions: "restart pause reverse pause",
  start: "top 90%",
  end: "center center",
  //ease: "power2.out",
  scrub: 1,
  pin: false,
  markers: false,
  //anticipatePin: 1,
});

// for registry section
const newtl = gsap.timeline();

newtl.fromTo(
  ".reg-content",
  { x: -800, scale: 0.2, opacity: 0, duration: 2 },
  { x: 0, scale: 1, opacity: 1 }
);
newtl.fromTo(
  ".reg-image",
  { x: 800, scale: 0.2, opacity: 0, duration: 2 },
  { x: 0, scale: 1, opacity: 1 },
  0
);

ScrollTrigger.create({
  animation: newtl,
  trigger: ".registry",
  toggleActions: "restart pause reverse pause",
  start: "top 90%",
  end: "center center",
  //ease: "power2.out",
  scrub: 1,
  pin: false,
  markers: false,
  //anticipatePin: 1,
});

//for footer section
const footerTl = gsap.timeline();

footerTl.fromTo(".footer-img", { scale: 0.5 }, { scale: 1, duration: 3 });

ScrollTrigger.create({
  animation: footerTl,
  trigger: ".footer",
  toggleActions: "restart pause reverse pause",
  start: "top 80%",
  end: "bottom bottom",
  scrub: 1,
});
