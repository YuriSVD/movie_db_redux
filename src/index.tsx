import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import './index.css';
import {setupStore} from "./redux";
import {Provider} from "react-redux";
import {router} from "./router";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
