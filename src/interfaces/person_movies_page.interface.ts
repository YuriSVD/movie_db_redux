import {ICastMovie} from "./cast_movie.interface";
import {ICrewMovie} from "./crew_movie.interface";

export interface IPersonMoviesPage {
    cast: ICastMovie[];
    crew: ICrewMovie[]
}