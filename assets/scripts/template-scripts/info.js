function checkAndHideButton(){document.querySelectorAll(".description").forEach((e=>{const t=e.querySelector(".text-expandable"),n=t.clientHeight;t.classList.add("expanded");const o=t.scrollHeight;t.classList.remove("expanded"),n===o&&(e.querySelector(".button--outlined").style.display="none")}))}function expandText(e){const t=e.parentElement;t.querySelector(".text-expandable").classList.toggle("expanded"),t.scrollIntoView({behavior:"smooth",block:"nearest"}),e.querySelectorAll(".btn-text").forEach((e=>e.classList.toggle("hidden")))}window.onload=checkAndHideButton;const swiper=new Swiper(".swiperInfo",{spaceBetween:32,loop:!0,keyboard:{enabled:!0},navigation:{nextEl:".button-next",prevEl:".button-prev"}});function initializeLightbox(){lightbox.option({resizeDuration:200,alwaysShowNavOnTouchDevices:!0,disableScrolling:!0,wrapAround:!0})}document.addEventListener("DOMContentLoaded",(function(){initializeLightbox()}));