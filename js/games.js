"use strict";
import * as main from "./main.js";
import { getGameID } from "./details.js";
import { displayGamesData } from "./ui.js";


let data;
export let gamesList = [];


// Games class.
export class Games {
    // Get games data.
    async getGamesData() {
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
            const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${main.categoryTitle}`, options);
            data = await response.json();
            gamesList = [];

            // Add games data.
            for (let i = 0; i < data.length; i++) {
                const game = {
                    id: data[i].id,
                    title: data[i].title,
                    thumbnail: data[i].thumbnail,
                    short_description: data[i].short_description,
                    genre: data[i].genre,
                    platform: data[i].platform,
                };

                gamesList.push(game);
            };

            console.log(gamesList);
            // Display games data.
            displayGamesData();
            getGameID();

            main.loaderOverlay.classList.remove('d-flex');
            main.loaderOverlay.classList.add('d-none');
        } catch (error) {
            console.log("Error: ", error);
        };
    };
};
