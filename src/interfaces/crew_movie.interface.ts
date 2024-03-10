import {IMovie} from "./movie.interface";

export interface ICrewMovie extends IMovie {
    job: string;
    media_type: string;
}