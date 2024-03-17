import {apiService} from "./api.service";
import {urls} from "../configs";
import {IMovieDetails, IPage} from "../interfaces";
import {IRes} from "../types";

const movieService = {
    getAll: (page: string, with_genres?: string): IRes<IPage> => apiService.get(urls.discover + urls.movie, {params: {page, with_genres}}),
    getMovieDetails: (id: string): IRes<IMovieDetails> => apiService.get(`${urls.movie}/${id}`),
    searchMovies:(page: string, query: string): IRes<IPage> => apiService.get(urls.search + urls.movie, {params: {page, query}}),
    getWatchList: (userId: number, page?: string) => apiService.get(`${urls.account}/${userId}${urls.watchlist}${urls.movies}`, {params: {page}}),
    getFavoriteList: (userId: number, page?: string) => apiService.get(`${urls.account}/${userId}${urls.favorite}${urls.movies}`, {params: {page}}),
    getMovieStates: (id: number) => apiService.get(`${urls.movie}/${id}${urls.account_states}`)
}

export {movieService};