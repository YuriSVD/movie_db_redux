import {IRes} from "../types";
import {IMovieToList, IUser} from "../interfaces";
import {apiService} from "./api.service";
import {urls} from "../configs";

const userService = {
    getUser: (): IRes<IUser> => apiService.get(`${urls.account}`),
    addRemoveFromWatchList: (userId: number, movie: IMovieToList): IRes<void> => apiService.post(`${urls.account}/${userId}${urls.watchlist}`, movie),
    addRemoveFromFavoriteList: (userId: number, movie: IMovieToList): IRes<void> => apiService.post(`${urls.account}/${userId}${urls.favorite}`, movie)
}

export {userService};