import {IMovie, IGenre} from "./index";

export interface IMovieDetails extends IMovie{
    runtime: number;
    budget: number;
    revenue: number;
    genres: IGenre[];
}