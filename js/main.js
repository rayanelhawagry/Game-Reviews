"use strict";
import navbarUI from "./navbar.js";
import * as games from "./games.js";


const navLinks = document.querySelectorAll('.nav-link');
export const loaderOverlay = document.querySelector('.loader-overlay');
export const gamesCards = document.querySelector('#gamesCards');
export let categoryTitle = "mmorpg";


// Get games data.
games.getGamesData();

// Get category title.
export function getCategoryTitle() {
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            categoryTitle = link.textContent.toLowerCase();
            console.log(categoryTitle);

            // Get games data.
            games.getGamesData();
        });
    });
};

getCategoryTitle();


// Navbar UI.
navbarUI();
