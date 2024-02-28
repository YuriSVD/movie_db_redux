const movieURL = "https://api.themoviedb.org/3";

const apiKey = "82ab29d735e7a01ed0e8122bc04cccfe";

const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmFiMjlkNzM1ZTdhMDFlZDBlODEyMmJjMDRjY2NmZSIsInN1YiI6IjY0NjBjOWY2NmUwZDcyMDE1YzBlYzJmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tFqAWFK40NUS5vWp0s-MAieQ3ljtDvdyENclc4P-UNM"

const posterURL = "https://image.tmdb.org/t/p";

const urls = {
    discover: "/discover",
    movie: "/movie",
    originalPosterSize: "/original",
    w500PosterSize: "/w500",
    w300PosterSize: "/w300",
    genre: "/genre",
    list: "/list",
    credits: "/credits",
    top_rated: "/top_rated",
    upcoming: "/upcoming",
    now_playing: "/now_playing",
    popular: "/popular",
    search: "/search",
    videos: "/videos",
    watch: "/watch?v=",
    person: "/person"
};

export {movieURL, apiKey, posterURL, urls, accessToken}