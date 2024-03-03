import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CastAndCrewPage, GenrePage, HomePage, MovieDetailsPage, MoviesPage, SearchPage} from "./pages";
import {movieService} from "./services";

const router = createBrowserRouter([
    {
        path: "", element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={"home"}/>
            },
            {
                path: "home", element: <HomePage/>
            },
            {
                path: "movies", element: <MoviesPage/>
            },
            {
                path: "movies/:movieId", element: <MovieDetailsPage/>,
                loader: ({params: {movieId}}) => movieService.getMovieDetails(movieId),
            },
            {
                path: "search", element: <SearchPage/>
            },
            {
                path: "movies/:movieId/cast", element: <CastAndCrewPage/>
            },
            {
              path: "genre/:genreId", element:<GenrePage/>
            }
        ]
    }
]);

export {router};