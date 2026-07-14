"use strict";
import navbarUI from "./navbar.js";
import * as games from "./games.js";


const navLinks = document.querySelectorAll('.nav-link');
export const navbarDiv = document.querySelector('#navbarDiv');
export const gamesCardsDiv = document.querySelector('#gamesCardsDiv');
export const gameDetailsDiv = document.querySelector('#gameDetailsDiv');
export const loaderOverlay = document.querySelector('.loader-overlay');
export const gamesCards = document.querySelector('#gamesCards');
export const gameDetails = document.querySelector('#gameDetails');
export let categoryTitle = "mmorpg";
const gamesClass = new games.Games();


// Get games data.
gamesClass.getGamesData();

// Get category title.
export function getCategoryTitle() {
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            categoryTitle = link.textContent.toLowerCase();
            console.log(categoryTitle);

            // Get games data.
            gamesClass.getGamesData();
        });
    });
};

getCategoryTitle();


// Navbar UI.
navbarUI();
