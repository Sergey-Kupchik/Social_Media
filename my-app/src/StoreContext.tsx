import React from "react";
import {store} from './redux/reduxStore';
import { StoreType } from "./redux/state";
import App from './App';
import {BrowserRouter} from 'react-router-dom';



export const StoreContext = React.createContext<StoreType>(store);
