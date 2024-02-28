import {ICastMember, ICrewMember, IGenre, IMovie, IMovieDetails} from "../interfaces";

interface IState {
    isDarkTheme: boolean;
    totalPage: number;
    movies: IMovie[];
    movieDetails: IMovieDetails;
    searchTitle: string;
    counterOfSelectedGenres: number;
    selectedGenres: IGenre[];
    genreIds: string;
    cast: ICastMember[];
    crew: ICrewMember[];
}

interface IActions {
    type: movieActionType;
    payload?: any;
}

enum movieActionType {
    SET_TOTAL_PAGE = "SET_TOTAL_PAGE",
    SET_ALL = "SET_ALL",
    GET_MOVIE_DETAILS = "GET_MOVIE_DETAILS",
    SEARCH_MOVIES = "SEARCH_MOVIES",
    CHANGE_THEME = "CHANGE_THEME",
    INC_COUNTER_OF_GENRES = "INC_COUNTER_OF_GENRES",
    DEC_COUNTER_OF_GENRES = "DEC_COUNTER_OF_GENRES",
    ADD_GENRE_TO_LIST = "ADD_GENRE_TO_LIST",
    REMOVE_GENRE_FROM_LIST = "REMOVE_GENRE_TO_LIST",
    GET_GENRE_IDS = "GET_GENRE_IDS",
    REMOVE_ALL_GENRES_FROM_LIST = "REMOVE_ALL_GENRES_FROM_LIST",
    GET_CAST_MEMBERS = "GET_CAST_MEMBERS",
    GET_CREW_MEMBERS = "GET_CREW_MEMBERS",
}

const movieActions = {
    setTotalPage: (totalPage: number) => ({type: movieActionType.SET_TOTAL_PAGE, payload: totalPage}),
    changeTheme: () => ({type: movieActionType.CHANGE_THEME}),
    setAll: (movies: IMovie[]) => ({type: movieActionType.SET_ALL, payload: movies}),
    getMovieDetails: (movie: IMovieDetails) => ({type: movieActionType.GET_MOVIE_DETAILS, payload: movie}),
    searchMovies: (searchTitle: string) => ({type: movieActionType.SEARCH_MOVIES, payload: searchTitle}),
    addSelectedGenre: () => ({type: movieActionType.INC_COUNTER_OF_GENRES}),
    removeSelectedGenre: () => ({type: movieActionType.DEC_COUNTER_OF_GENRES}),
    addGenreToList: (genre: IGenre) => ({type: movieActionType.ADD_GENRE_TO_LIST, payload: genre}),
    removeGenreFromList: (genre: IGenre) => ({type: movieActionType.REMOVE_GENRE_FROM_LIST, payload: genre}),
    getGenreIds: (genreIds: string) => ({type: movieActionType.GET_GENRE_IDS, payload: genreIds}),
    removeAllGenresFromList: () => ({type: movieActionType.REMOVE_ALL_GENRES_FROM_LIST}),
    getCastMembers: (cast: ICastMember[]) => ({type: movieActionType.GET_CAST_MEMBERS, payload: cast}),
    getCrewMembers: (crew: ICrewMember[]) => ({type: movieActionType.GET_CREW_MEMBERS, payload: crew})
}

const movieInitialState:IState = {
    isDarkTheme: false,
    totalPage: 1,
    movies: [],
    movieDetails: null,
    searchTitle: null,
    counterOfSelectedGenres: null,
    selectedGenres: [],
    genreIds: null,
    cast: [],
    crew: [],
}
const movieReducer = (state:IState, action: IActions) => {
    switch (action.type) {
        case movieActionType.SET_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        case movieActionType.SET_ALL:
            return {...state, movies: action.payload}
        case movieActionType.GET_MOVIE_DETAILS:
            return {...state, movieDetails: action.payload}
        case movieActionType.SEARCH_MOVIES:
            return {...state, searchTitle: action.payload}
        case movieActionType.CHANGE_THEME:
            return {...state, isDarkTheme: !state.isDarkTheme}
        case movieActionType.INC_COUNTER_OF_GENRES:
            return {...state, counterOfSelectedGenres: state.counterOfSelectedGenres + 1}
        case movieActionType.DEC_COUNTER_OF_GENRES:
            return {...state, counterOfSelectedGenres: state.counterOfSelectedGenres - 1}
        case movieActionType.ADD_GENRE_TO_LIST:
            return {...state, selectedGenres: [...state.selectedGenres, action.payload]} //
        case movieActionType.REMOVE_GENRE_FROM_LIST:
            return {...state, selectedGenres: state.selectedGenres.filter(genre => genre !== action.payload)}
        case movieActionType.GET_GENRE_IDS:
            return {...state, genreIds: action.payload, counterOfSelectedGenres: 0}
        case movieActionType.REMOVE_ALL_GENRES_FROM_LIST:
            return {...state, selectedGenres: []}
        case movieActionType.GET_CAST_MEMBERS:
            return {...state, cast: action.payload}
        case movieActionType.GET_CREW_MEMBERS:
            return {...state, crew: action.payload}
        default:
            return state;
    }
}

export {
    movieActions,
    movieInitialState,
    movieReducer
};
export type { IState, IActions };
