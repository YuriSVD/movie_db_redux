import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";

import {RootState, AppDispatch} from "../types";


const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const useAppDispatch = () => useDispatch<AppDispatch>();

export {useAppDispatch, useAppSelector};