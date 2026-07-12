"use strict";
import * as games from "./games.js";
import { gamesCards } from "./main.js";


// Display games data.
export function displayGamesData() {
    let cartona = ``;

    for (let i = 0; i < games.gamesList.length; i++) {
        cartona += `
        <div class="outer-card">
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
};
