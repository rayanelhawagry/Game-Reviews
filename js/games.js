"use strict";
import * as main from "./main.js";


let data;
let gamesList = [];


// Game card.
class GameCard {
    constructor(title, thumbnail, short_description, genre, platform) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.short_description = short_description;
        this.genre = genre;
        this.platform = platform;
    };
};


// Get games data.
export async function getGamesData() {
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
        addGamesData();

        main.loaderOverlay.classList.remove('d-flex');
        main.loaderOverlay.classList.add('d-none');
    } catch (error) {
        console.log("Error: ", error);
    };
};


// Add games data.
export function addGamesData() {
    for (let i = 0; i < data.length; i++) {
        const game = new GameCard(
            data[i].title,
            data[i].thumbnail,
            data[i].short_description,
            data[i].genre,
            data[i].platform,
        );

        gamesList.push(game);
    };

    console.log(gamesList);
};
