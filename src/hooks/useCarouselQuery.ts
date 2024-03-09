import {useState} from "react";
import {useAppSelector} from "./redux.hook";

const useCarouselQuery = () => {
    const {movies} = useAppSelector(state => state.movieReducer);
    const [offset, setOffset] = useState<number>(0);

    return {
        offset,
        prevButton: () => {
            setOffset(offset + 100);
            if (offset === 0) {
                setOffset(-(100 * (movies.length - 1)));
            }
        },
        nextButton: () => {
            setOffset(offset - 100);
            if (offset === -(100 * (movies.length - 1))) {
                setOffset(0);
            }
        }
    }
}

export {useCarouselQuery}