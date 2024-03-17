import {useAppDispatch, useAppSelector} from "./redux.hook";
import {userActions} from "../redux";

const useMovieStatesQuery = () => {
    const {movieStates, movieId} = useAppSelector(state => state.movieReducer);
    const {user} = useAppSelector(state => state.userReducer);
    const dispatch = useAppDispatch();
    return {
        setRemoveFromWatchList: async () => {
            const movie = {media_type: "movie", media_id: movieId, watchlist: !movieStates.watchlist};
            await dispatch(userActions.addRemoveFromWatchList({userId: user.id, movie}));
            dispatch(userActions.changeTrigger());
        },
        setRemoveFromFavoriteList: async () => {
            const movie = {media_type: "movie", media_id: movieId, favorite: !movieStates.favorite};
            await dispatch(userActions.addRemoveFromFavoriteList({userId: user.id, movie}));
            dispatch(userActions.changeTrigger());
        }
    }
}

export {useMovieStatesQuery};