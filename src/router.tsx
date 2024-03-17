import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CastAndCrewPage, GenrePage, HomePage, MovieDetailsPage, MoviesPage, PersonPage, SearchPage, UserFavoriteListPage, UserWatchListPage, VideoPage} from "./pages";
import {movieService, personService} from "./services";

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
                path: "movies/:movieId/videos", element: <VideoPage/>
            },
            {
              path: "genre/:genreId", element:<GenrePage/>
            },
            {
                path: "person/:personId", element: <PersonPage/>,
                loader: ({params: {personId}}) => personService.getPersonDetails(personId),
            },
            {
                path: ":userId/watch", element: <UserWatchListPage/>
            },
            {
                path: ":userId/favorite", element: <UserFavoriteListPage/>
            }
        ]
    }
]);

export {router};