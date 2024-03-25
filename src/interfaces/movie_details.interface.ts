import {IMovie, IGenre, IMovieCollection} from "./index";

export interface IMovieDetails extends IMovie {
    runtime: number;
    budget: number;
    revenue: number;
    genres: IGenre[];
    tagline: string;
    belongs_to_collection: IMovieCollection;
}