import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { modalReducer } from "./modal/modalReducer";


const rootReducer = combineReducers({
    mod: modalReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;