"use strict";
import { gamesList } from "./games.js";
import * as ui from "./ui.js";
import * as main from "./main.js";


let gameID;
export let data;


// Get game ID.
export function getGameID() {
    ui.outerGameCards.forEach(game => {
        game.addEventListener("click", function () {
            gameID = ui.outerGameCards.indexOf(this)
            console.log(gamesList[gameID].id);

            // Get game details.
            const gameDetails = new Details();
            gameDetails.getGameDetails();
        });
    });
};


// Details class.
export class Details {
    // Get game details.
    async getGameDetails() {
        main.loaderOverlay.classList.remove('d-none');
        main.loaderOverlay.classList.add('d-flex');

        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'bd01d18637msh0301c4d387d8523p12de84jsnc081d402406d',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gamesList[gameID].id}`, options);
            data = await response.json();

            console.log(data);
            // Display game details.
            ui.displayGameDetails();

            main.loaderOverlay.classList.remove('d-flex');
            main.loaderOverlay.classList.add('d-none');
        } catch (error) {
            console.log("Error: ", error);
        };
    };
};
