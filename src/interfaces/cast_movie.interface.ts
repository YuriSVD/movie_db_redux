import {IMovie} from "./movie.interface";

export interface ICastMovie extends IMovie {
    character: string;
    media_type: string;
}