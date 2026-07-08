"use strict";
// Navbar UI.
export default function navbarUI() {
    const navbar = document.querySelector('.navbar');
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('#navbar-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const firstLink = document.querySelector('.firstLink');


    // Navbar toggle.
    function toggleNavbar() {
        navbar.classList.toggle('active');
        navbarToggle.classList.toggle('active');
        navbarMenu.classList.toggle('active');
    };


    // Navbar active links.
    firstLink.classList.add('active');
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
            toggleNavbar();
        });
    });


    // Navbar toggle event.
    navbarToggle.addEventListener("click", toggleNavbar);
};
