"use strict";
import { gamesList } from "./games.js";
import { outerGameCards } from "./ui.js";


let gameID;


// Details class.
export class Details {
    // Get game ID.
    getGameID() {
        outerGameCards.forEach(game => {
            game.addEventListener("click", function () {
                gameID = outerGameCards.indexOf(this)
                console.log(gamesList[gameID].id);
            });
        });
    };
};
