import React, {createContext, Dispatch, FC, PropsWithChildren, useReducer} from 'react';

import {IActions, IState, movieInitialState, movieReducer} from "../reducers";

type IContext = {
    state: IState;
    dispatch: Dispatch<IActions>
};

const Context = createContext<IContext>(null);

interface IProps extends PropsWithChildren {

}


const ContextProvider: FC<IProps> = ({children}) => {
    const [state, dispatch] = useReducer(movieReducer, movieInitialState);
    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    );
};
export {ContextProvider, Context};