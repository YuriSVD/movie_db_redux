import {useState} from "react";

import {IGenre} from "../interfaces";
import {genreActions} from "../redux";
import {useAppDispatch, useAppSelector} from "./redux.hook";

const useGenreQuery = () => {
    const {selectedGenres} = useAppSelector(state => state.genreReducer);
    const dispatch = useAppDispatch();
    const [selected, setSelected] = useState<boolean>(false);
    const genresIds = selectedGenres.map(genre => genre.id).toString();
    return {
        selected,
        changeTrigger: () => setSelected(prevState => !prevState),
        setRemoveFromSelected: (genre: IGenre) =>
            selectedGenres.includes(genre)
                ? dispatch(genreActions.removeGenreFromList(genre))
                : dispatch(genreActions.addGenreToList(genre)),
        searchBySelectedGenres: () => {
            dispatch(genreActions.setGenreIds(genresIds));
        }
    }
}

export {useGenreQuery}