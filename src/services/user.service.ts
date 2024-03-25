import {apiService} from "./api.service";
import {urls} from "../configs";
import {IMovieToList, IUser} from "../interfaces";
import {IRes} from "../types";

const userService = {
    getUser: (): IRes<IUser> => apiService.get(`${urls.account}`),
    addRemoveFromWatchList: (userId: number, movie: IMovieToList): IRes<void> => apiService.post(`${urls.account}/${userId}${urls.watchlist}`, movie),
    addRemoveFromFavoriteList: (userId: number, movie: IMovieToList): IRes<void> => apiService.post(`${urls.account}/${userId}${urls.favorite}`, movie)
}

export {userService};