"use strict";
import { gamesCards } from "./main.js";
import { gamesList } from "./games.js";


// Display games data.
export function displayGamesData() {
    let cartona = ``;

    for (let i = 0; i < gamesList.length; i++) {
        cartona += `
        <div class="outer-card">
            <div class="inner-card">
                <div class="main">
                    <figure>
                        <img src="${gamesList[i].thumbnail}" alt="Game Cover" />
                    </figure>
                    <figcaption>
                        <div class="title">
                            <h3>${gamesList[i].title}</h3>
                            <span>Free</span>
                        </div>
                        <div class="desc">
                            <p>${gamesList[i].short_description}</p>
                        </div>
                    </figcaption>
                </div>
                <footer>
                    <span>${gamesList[i].genre}</span>
                    <span>${gamesList[i].platform}</span>
                </footer>
            </div>
        </div>
        `;

        gamesCards.innerHTML = cartona;
    };
};
