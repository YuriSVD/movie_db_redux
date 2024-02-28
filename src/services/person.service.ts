import {IRes} from "../types";
import {ICredits} from "../interfaces";
import {apiService} from "./api.service";
import {urls} from "../configs";

const personService = {
    getAll: (movieId: string): IRes<ICredits> => apiService.get(`${urls.movie}/${movieId}${urls.credits}`)
}

export {personService};