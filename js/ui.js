"use strict";
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('#navbar-menu');
// const navLinks = document.querySelectorAll('.nav-link');


document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('.nav-link');
    
    navItems.forEach(item => {item.addEventListener('click', function () {
        navItems.forEach(navItem => navItem.classList.remove('active'));
        this.classList.add('active');
    });
});
});


// navLinks.forEach(link => {
//     link.addEventListener("click", () => {
//         // Remove 'active' class from all links
//         navLinks.forEach(item => item.classList.remove('active'));
//         // Add 'active' class to the clicked link
//     });
// });

navbarToggle.addEventListener("click", () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
    // navbarMenu.classList.toggle('d-none');
});