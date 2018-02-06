import { JsonProperty } from 'json-typescript-mapper';

export class Movie {
    constructor() {
        this.id = 'undefinedID';
        this.title = 'undefinedTITLE';
        this.image = 'undefinedIMAGE';
        this.year = 'undefinedYEAR';
        this.runtime = 'undefinedRUNTIME';
        this.rating = 'undefinedRATING';
    }

    @JsonProperty('imdbID')
    id: string;
    @JsonProperty('Title')
    title: string;
    @JsonProperty('Poster')
    image: string;
    @JsonProperty('Year')
    year: string;
    @JsonProperty('Runtime')
    runtime: string;
    @JsonProperty('Rating')
    rating: string;
}

export class Movies {
    constructor() {
        this.movies = [];
    }

    @JsonProperty('movies')
    movies: Movie[];
}
