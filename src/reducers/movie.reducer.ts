import {ICastMember, ICrewMember, IGenre, IMovie, IVideo} from "../interfaces";

interface IState {
    isDarkTheme: boolean;
    totalPage: number; //done
    movies: IMovie[]; // done
    genres: IGenre[]; //done
    searchTitle: string; // done
    selectedGenres: IGenre[]; // done
    genreIds: string;
    cast: ICastMember[]; //done
    crew: ICrewMember[]; //done
    videos: IVideo[];
}

interface IActions {
    type: movieActionType;
    payload?: any;
}

enum movieActionType {
    SET_TOTAL_PAGE = "SET_TOTAL_PAGE",
    SET_MOVIES = "SET_MOVIES",
    SET_GENRES = "SET_GENRES",
    SEARCH_MOVIES = "SEARCH_MOVIES",
    CHANGE_THEME = "CHANGE_THEME",
    ADD_GENRE_TO_LIST = "ADD_GENRE_TO_LIST",
    REMOVE_GENRE_FROM_LIST = "REMOVE_GENRE_TO_LIST",
    GET_GENRE_IDS = "GET_GENRE_IDS",
    REMOVE_ALL_GENRES_FROM_LIST = "REMOVE_ALL_GENRES_FROM_LIST",
    GET_CAST_MEMBERS = "GET_CAST_MEMBERS",
    GET_CREW_MEMBERS = "GET_CREW_MEMBERS",
    GET_VIDEOS_TO_MOVIE = "GET_VIDEOS_TO_MOVIE",
}

const movieActions1 = {
    setTotalPage: (totalPage: number) => ({type: movieActionType.SET_TOTAL_PAGE, payload: totalPage}),
    changeTheme: () => ({type: movieActionType.CHANGE_THEME}),
    setMovies: (movies: IMovie[]) => ({type: movieActionType.SET_MOVIES, payload: movies}),
    setGenres: (genres: IGenre[]) => ({type: movieActionType.SET_GENRES, payload: genres}),
    searchMovies: (searchTitle: string) => ({type: movieActionType.SEARCH_MOVIES, payload: searchTitle}),
    addGenreToList: (genre: IGenre) => ({type: movieActionType.ADD_GENRE_TO_LIST, payload: genre}),
    removeGenreFromList: (genre: IGenre) => ({type: movieActionType.REMOVE_GENRE_FROM_LIST, payload: genre}),
    getGenreIds: (genreIds: string) => ({type: movieActionType.GET_GENRE_IDS, payload: genreIds}),
    removeAllGenresFromList: () => ({type: movieActionType.REMOVE_ALL_GENRES_FROM_LIST}),
    getCastMembers: (cast: ICastMember[]) => ({type: movieActionType.GET_CAST_MEMBERS, payload: cast}),
    getCrewMembers: (crew: ICrewMember[]) => ({type: movieActionType.GET_CREW_MEMBERS, payload: crew}),
    getVideosToMovie: (videos: IVideo[]) => ({type: movieActionType.GET_VIDEOS_TO_MOVIE, payload: videos})
}

const movieInitialState:IState = {
    isDarkTheme: false,
    totalPage: 1,
    movies: [],
    genres: [],
    searchTitle: null,
    selectedGenres: [],
    genreIds: null,
    cast: [],
    crew: [],
    videos: []
}
const movieReducer = (state:IState, action: IActions) => {
    switch (action.type) {
        case movieActionType.SET_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        case movieActionType.SET_MOVIES:
            return {...state, movies: action.payload}
        case movieActionType.SET_GENRES:
            return {...state, genres: action.payload}
        case movieActionType.SEARCH_MOVIES:
            return {...state, searchTitle: action.payload}
        case movieActionType.CHANGE_THEME:
            return {...state, isDarkTheme: !state.isDarkTheme}
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
        case movieActionType.GET_VIDEOS_TO_MOVIE:
            return {...state, videos: action.payload}
        default:
            return state;
    }
}

export {
    movieActions1,
    movieInitialState,
    movieReducer
};
export type { IState, IActions };
