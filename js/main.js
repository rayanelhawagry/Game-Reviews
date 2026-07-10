"use strict";
import navbarUI from "./navbar.js";
import { getGamesData } from "./games.js";


const navLinks = document.querySelectorAll('.nav-link');
export let categoryTitle = "mmorpg";
export let gamesList = [];


getGamesData();

// Get category title.
export function getCategoryTitle() {
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            categoryTitle = link.textContent.toLowerCase();
            console.log(categoryTitle);

            // Get games data.
            getGamesData();
        });
    });
};

getCategoryTitle();


// Navbar UI.
navbarUI();
