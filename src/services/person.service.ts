import {apiService} from "./api.service";
import {urls} from "../configs";
import {ICredits} from "../interfaces";
import {IRes} from "../types";

const personService = {
    getAll: (movieId: string): IRes<ICredits> => apiService.get(`${urls.movie}/${movieId}${urls.credits}`)
}

export {personService};