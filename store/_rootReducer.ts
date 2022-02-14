import { combineReducers } from "redux";
import { useSelector, TypedUseSelectorHook } from "react-redux";

import { modalReducer } from "./modal/modalReducer";
import { navReducer } from "./nav/navReducer";


const rootReducer = combineReducers({
    mod: modalReducer,
    nav: navReducer,

});

export type AppState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<AppState> = useSelector;

export default rootReducer;