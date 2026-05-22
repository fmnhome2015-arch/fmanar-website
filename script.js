 // 滚动出现动画
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));


// Header滚动效果
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});/* =========================
   头部滚动变深
   ========================= */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/* =========================
   滚动淡入动画
   ========================= */
const fadeEls = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

fadeEls.forEach((el) => observer.observe(el));

/* =========================
   Featured Products 轮播
   ========================= */
const track = document.querySelector(".products-track");
const prevBtn = document.querySelector(".products-prev");
const nextBtn = document.querySelector(".products-next");
const slides = document.querySelectorAll(".showcase-item");

let currentIndex = 0;
let visibleCount = getVisibleCount();
let maxIndex = Math.max(0, slides.length - visibleCount);

function getVisibleCount() {
  if (window.innerWidth <= 768) {
    return 1;
  } else if (window.innerWidth <= 992) {
    return 2;
  } else {
    return 3;
  }
}

function getGap() {
  if (window.innerWidth <= 768) {
    return 12;
  } else if (window.innerWidth <= 992) {
    return 10;
  } else {
    return 6;
  }
}

function updateSlider() {
  visibleCount = getVisibleCount();
  maxIndex = Math.max(0, slides.length - visibleCount);

  if (currentIndex > maxIndex) {
    currentIndex = maxIndex;
  }

  const slideWidth = slides[0].offsetWidth;
  const gap = getGap();
  const offset = currentIndex * (slideWidth + gap);

  track.style.transform = `translateX(-${offset}px)`;

  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === maxIndex;

  prevBtn.style.opacity = currentIndex === 0 ? "0.45" : "1";
  nextBtn.style.opacity = currentIndex === maxIndex ? "0.45" : "1";
  prevBtn.style.cursor = currentIndex === 0 ? "default" : "pointer";
  nextBtn.style.cursor = currentIndex === maxIndex ? "default" : "pointer";
}

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    currentIndex++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
});

window.addEventListener("resize", updateSlider);
window.addEventListener("load", updateSlider);

