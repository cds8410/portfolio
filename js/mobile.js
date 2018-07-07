var mobileButton = document.querySelector(".nav-mobile-icon");
var mobileMenu = document.querySelector(".nav-mobile-menu");
var shadow = document.querySelector(".portfolio-overlay");

function toggleMobileMenu(){
    mobileMenu.classList.toggle("is-hidden");
    shadow.classList.toggle("is-hidden");
    //mobileMenu.classList.toggle("nav-mobile-transition");
}
