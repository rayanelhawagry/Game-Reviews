"use strict";
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('#navbar-menu');
const navLinks = document.querySelectorAll('.nav-link');
const firstLink = document.querySelector('.firstLink');


// Navbar active links.
firstLink.classList.add('active');
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navLinks.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});


// Navbar Toggle.
navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});
