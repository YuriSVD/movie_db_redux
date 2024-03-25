import {switchActions} from "../redux";
import {useAppDispatch} from "./redux.hook";

const useSwitcherQuery = () => {
    const dispatch = useAppDispatch();

    return {
        changeTheme: () => {
            document.body.classList.toggle("darkTheme");
            localStorage.setItem("themeMode", document.body.className);
            dispatch(switchActions.changeTheme());
        }
    }
}

export {useSwitcherQuery}