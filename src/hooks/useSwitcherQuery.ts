import {movieActions} from "../reducers";
import {useAppContext} from "./useAppContext";

const useSwitcherQuery = () => {
    const {dispatch} = useAppContext();
    return {
        changeTheme: () => {
            document.body.classList.toggle("darkTheme");
            localStorage.setItem("themeMode", document.body.className);
            dispatch(movieActions.changeTheme());
        }
    }
}

export {useSwitcherQuery}