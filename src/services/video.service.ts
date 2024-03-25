import {apiService} from "./api.service";
import {urls} from "../configs";
import {IVideoPage} from "../interfaces";
import {IRes} from "../types";

const videoService = {
    getAll: (id: number): IRes<IVideoPage> => apiService.get(`${urls.movie}/${id}${urls.videos}`)
}

export {videoService}