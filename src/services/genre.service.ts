import {apiService} from "./api.service";
import {urls} from "../configs";
import {IGenres} from "../interfaces";
import {IRes} from "../types";

const genreService = {
    getAll: (): IRes<IGenres> => apiService.get(urls.genre + urls.movie + urls.list),
}

export {genreService}