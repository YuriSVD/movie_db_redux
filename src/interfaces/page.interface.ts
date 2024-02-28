import {IMovie} from "./index";

export interface IPage {
    page: number;
    results: IMovie[];
    total_pages: number;
}