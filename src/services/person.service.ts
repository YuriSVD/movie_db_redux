import {apiService} from "./api.service";
import {urls} from "../configs";
import {ICredits, IPersonDetails, IPersonMoviesPage, IPersonLinks} from "../interfaces";
import {IRes} from "../types";

const personService = {
    getAll: (movieId: string): IRes<ICredits> => apiService.get(`${urls.movie}/${movieId}${urls.credits}`),
    getPersonDetails: (id: string): IRes<IPersonDetails> => apiService.get(`${urls.person}/${id}`),
    getMoviesByPerson: (id: number): IRes<IPersonMoviesPage> => apiService.get(`${urls.person}/${id}${urls.movie_credits}`),
    getPersonLinks: (id: number): IRes<IPersonLinks> => apiService.get(`${urls.person}/${id}${urls.external_ids}`)
}

export {personService};