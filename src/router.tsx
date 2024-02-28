import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CastAndCrewPage, HomePage, MovieDetailsPage, MoviesPage, SearchPage} from "./pages";

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
                path: "movies/:movieId", element: <MovieDetailsPage/>
            },
            {
                path: "search", element: <SearchPage/>
            },
            {
                path: "movies/:movieId/cast", element: <CastAndCrewPage/>
            }
        ]
    }
]);

export {router};