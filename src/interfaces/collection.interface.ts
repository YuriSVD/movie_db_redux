import {IMovieCollection} from "./movie_collection.interface";
import {IMovie} from "./movie.interface";

export interface ICollection extends IMovieCollection{
    overview: string;
    parts: IMovie[];
}