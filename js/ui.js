"use strict";
import * as games from "./games.js";
import * as main from "./main.js";
import * as details from "./details.js";


export let outerGameCards;


// Display games data.
export function displayGamesData() {
    let cartona = ``;

    for (let i = 0; i < games.gamesList.length; i++) {
        cartona += `
        <div class="outer-card" id="outerGameCard">
            <div class="inner-card">
                <div class="main">
                    <figure>
                        <img src="${games.gamesList[i].thumbnail}" alt="Game Cover" />
                    </figure>
                    <figcaption>
                        <div class="title">
                            <h3>${games.gamesList[i].title}</h3>
                            <span>Free</span>
                        </div>
                        <div class="desc">
                            <p>${games.gamesList[i].short_description}</p>
                        </div>
                    </figcaption>
                </div>
                <footer>
                    <span>${games.gamesList[i].genre}</span>
                    <span>${games.gamesList[i].platform}</span>
                </footer>
            </div>
        </div>
        `;

        gamesCards.innerHTML = cartona;
    };

    outerGameCards = [...document.querySelectorAll('#outerGameCard')];
};


// Display game details.
export function displayGameDetails() {
    main.navbarDiv.classList.remove('d-flex');
    main.navbarDiv.classList.add('d-none');
    main.gamesCardsDiv.classList.add('d-none');
    main.gameDetailsDiv.classList.remove('d-none');


    // should add "title" attribute to img tag with ${details.data.title}.
    main.gameDetails.innerHTML = `
    <header>
        <h1>${details.data.title}</h1>
        <button class="close-btn" id="closeBtn">
            <img src="./images/close-window.png" alt="Close Button" />
        </button>
    </header>

    <div class="details-content">
        <div class="cover">
            <div class="inner">
                <img src="${details.data.thumbnail}" alt="Game Cover" />
            </div>
        </div>
        
        <div class="details">
            <div class="inner">
                <h3>Title: ${details.data.title}</h3>
                <p class="specs">Category: <span>${details.data.genre}</span></p>
                <p class="specs">Platform: <span>${details.data.platform}</span></p>
                <p class="specs">Status: <span>${details.data.status}</span></p>
                <p class="desc">${details.data.description}</p>
                <a href="${details.data.game_url}" target="_blank"><button class="show-btn">Show Game</button></a>
            </div>
        </div>
    </div>
    `;

    // Close game details.
    // should change #closeBtn to .close-btn (& also delete id from button tag)
    const closeBtn = document.querySelector('#closeBtn');
    closeBtn.addEventListener("click", function () {
        console.log("close");
        main.navbarDiv.classList.remove('d-none');
        main.navbarDiv.classList.add('d-flex');
        main.gamesCardsDiv.classList.remove('d-none');
        main.gameDetailsDiv.classList.add('d-none');
    });
};
