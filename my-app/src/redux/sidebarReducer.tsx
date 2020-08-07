import {PostsStatePropsType} from "../components/Profile/Profile";
import {ActionsTypes} from "./state";
import {v1} from "uuid";


export type SidebarType = {}

const initialState: SidebarType = {}

export const sidebarReducer = (state=initialState, action: ActionsTypes):SidebarType => {
    return state
}
