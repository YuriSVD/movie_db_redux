import {useState} from "react";

const useMovieVideoQuery = () => {
    const [playTrailer, setPlayTrailer] = useState<boolean>(false);
    return {
        playTrailer,
        playStopTrailer: () => setPlayTrailer(prevState => !prevState)
    }
}

export {useMovieVideoQuery}