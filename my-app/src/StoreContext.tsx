import React from "react";
import {store} from './redux/reduxStore';
import { StoreType } from "./redux/state";



export const StoreContext = React.createContext<StoreType>(store)