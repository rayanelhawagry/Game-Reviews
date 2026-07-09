"use strict";
import navbarUI from "./navbar.js";


const navLinks = document.querySelectorAll('.nav-link');
export let categoryTitle = 'mmorpg';


// Get category title.
export function getCategoryTitle() {
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            categoryTitle = link.textContent.toLowerCase();
            console.log(categoryTitle);
        });
    });
};


// Navbar UI.
navbarUI();
