"use strict";
import { categoryTitle, getCategoryTitle } from "./main.js";


// Get games data.
export async function getGamesData() {
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'bd01d18637msh0301c4d387d8523p12de84jsnc081d402406d',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
            'Content-Type': 'application/json'
        }
    };

    try {
        const response = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categoryTitle}`, options);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    };
};


class GameCard {
    constructor(title, thumbnail, short_description, genre, platform) {
        this.title = title;
        this.thumbnail = thumbnail;
        this.short_description = short_description;
        this.genre = genre;
        this.platform = platform;
    };
};

// const LostArk = new GameCard("Lost Ark", "Cover", "Interesting game", "Shooting", "PC");
