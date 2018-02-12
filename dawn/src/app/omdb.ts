export interface OMDBFullMovie {
    imdbID: string;
    Title: string;
    Poster: string;
    Year: string;
    Runtime: string;
    Rated: string;
}

export interface OMDBBasicMovie {
    Title: string;
    Poster: string;
    Year: string;
    imdbID: string;
}

export interface OMDBSearchResults {
    Search: OMDBBasicMovie[];
    totalResults: string;
}
