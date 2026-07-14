"use strict";
import { gamesList } from "./games.js";
import { outerGameCards } from "./ui.js";


let gameID;


// Get game ID.
export function getGameID() {
    outerGameCards.forEach(game => {
        game.addEventListener("click", function() {
            gameID = outerGameCards.indexOf(this)
            console.log(gameID);
        });
    });
};
