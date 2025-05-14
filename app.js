
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

// navbar mobile
const menu_btn = document.querySelector(".hamburger");
const mobile_menu = document.querySelector("#nav-links-mobile");

menu_btn.addEventListener("click", function () {
  menu_btn.classList.toggle("is-active");
  mobile_menu.classList.toggle("is-active");
});

// GALLERY
const modal = document.querySelector(".modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close");

// Get all images with the class 'carousel-img'
const images = document.querySelectorAll(".carousel-img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    modalImg.alt = img.alt;
  });
});

// Close modal on close button click
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal if clicking outside the image
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// END GALLERY
document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);

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

// for OUR STORY page
const osTl = gsap.timeline();

osTl.fromTo("#osTitle", { opacity: 0 }, { opacity: 1, duration: 5 }, 0);
osTl.fromTo(
  ".os-image",
  { opacity: 0, x: -400 },
  { opacity: 1, x: 0, duration: 3 },
  0
);
osTl.fromTo(
  ".os-content",
  { opacity: 0, x: 400 },
  { opacity: 1, x: 0, duration: 3 },
  0
);

// for THINGS TO DO page

const ttd = gsap.timeline({
  defaults: { ease: "power4inOut", duration: 1 },
});

ttd.fromTo(".ttd-title", { opacity: 0 }, { opacity: 1, duration: 5 }, 0);
ttd.fromTo(
  ".ttd-box",
  { opacity: 0, y: -50 },
  { opacity: 1, y: 0, duration: 5 },
  0
);

ttd.fromTo(
  ".list-one li",
  {
    x: -50,
    opacity: 0,
  },
  {
    stagger: 0.5,
    x: 0,
    opacity: 1,
    duration: 1,
  },
  0
);
ttd.fromTo(
  ".list-two li",
  {
    y: -50,
    opacity: 0,
  },
  {
    stagger: 0.5,
    y: 0,
    opacity: 1,
    duration: 1,
    //delay: 1,
  },
  0
);
ttd.fromTo(
  ".list-three li",
  {
    x: 50,
    opacity: 0,
  },
  {
    stagger: 0.5,
    x: 0,
    opacity: 1,
    duration: 1,
    //delay: 2,
  },
  0
);
 });



