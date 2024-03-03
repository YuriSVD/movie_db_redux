import {IRes} from "../types";
import {IVideoPage} from "../interfaces";
import {apiService} from "./api.service";
import {urls} from "../configs";

const videoService = {
    getAll: (id: number): IRes<IVideoPage> => apiService.get(`${urls.movie}/${id}${urls.videos}`)
}

export {videoService}