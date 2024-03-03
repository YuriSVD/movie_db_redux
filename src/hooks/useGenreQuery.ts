import {useState} from "react";
import {useAppContext} from "./useAppContext";
import {IGenre} from "../interfaces";
import {movieActions} from "../reducers";

const useGenreQuery = () => {
    const {state: {selectedGenres}, dispatch} = useAppContext();
    const [selected, setSelected] = useState<boolean>(false);
    const genresIds = selectedGenres.map(genre => genre.id).toString();
    return {
        selected,
        changeTrigger: () => setSelected(prevState => !prevState),
        setRemoveFromSelected: (genre: IGenre) =>
            selectedGenres.includes(genre)
                ? dispatch(movieActions.removeGenreFromList(genre))
                : dispatch(movieActions.addGenreToList(genre)),
        searchBySelectedGenres: () => {
            dispatch(movieActions.getGenreIds(genresIds));
            dispatch(movieActions.removeAllGenresFromList());
        }
    }
}

export {useGenreQuery}