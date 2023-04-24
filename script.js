'use strict';

/* navbar toggle*/

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link");
const menuToggleBtn = document.querySelector("[data-nav-toggle-btn");

menuToggleBtn.addEventListener("click", function () {
    navbar.classList.toggle("active");
    this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].addEventListener("click", function () {
        navbar.classList.toggle("active");
        menuToggleBtn.classList.toggle("active");
    })
}

/* header */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");


window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        header.classList.add("active");
        backTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        backTopBtn.classList.remove("active");

    }
})

/* gallery image click */

const galleryMainBox = document.querySelector("[data-gallery-main-box]");
const galleryImgs = document.querySelectorAll("[data-gallery-img]");

galleryMainBox.addEventListener("click", function () {
    galleryMainBox.classList.remove("active");
});

for (let i = 0; i < galleryImgs.length; i++) {
    galleryImgs[i].addEventListener("click", function () {
        var src = galleryImgs[i].getAttribute('src');
        galleryMainBox.classList.add("active");

        document.getElementById("main-img").src = src; //change main image to the image being clicked on
    });
}

