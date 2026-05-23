/* =========================
   HEADER 滚动变深
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }

});

/* =========================
   滚动淡入动画
========================= */

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

},{
  threshold:0.15
});

document.querySelectorAll(".fade").forEach((el)=>{
  observer.observe(el);
});

/* =========================
   PRODUCTS SLIDER
========================= */

const track = document.querySelector(".products-track");
const prevBtn = document.querySelector(".products-prev");
const nextBtn = document.querySelector(".products-next");
const slides = document.querySelectorAll(".showcase-item");

let currentIndex = 0;

function getVisibleCount(){

  if(window.innerWidth <= 768){
    return 1;
  }

  if(window.innerWidth <= 992){
    return 2;
  }

  return 3;
}

function updateSlider(){

  const visibleCount = getVisibleCount();

  const maxIndex = slides.length - visibleCount;

  if(currentIndex > maxIndex){
    currentIndex = maxIndex;
  }

  const slideWidth = slides[0].offsetWidth + 8;

  track.style.transform =
    `translateX(-${currentIndex * slideWidth}px)`;

}

nextBtn.addEventListener("click", ()=>{

  const visibleCount = getVisibleCount();

  if(currentIndex < slides.length - visibleCount){
    currentIndex++;
    updateSlider();
  }

});

prevBtn.addEventListener("click", ()=>{

  if(currentIndex > 0){
    currentIndex--;
    updateSlider();
  }

});

window.addEventListener("resize", updateSlider);

window.addEventListener("load", updateSlider);
