import { modState } from "./types";

const initState = {
    ModOn: false,
};

export const modalReducer = (state: modState = initState, { type, payload }: any) => {
    switch (type) {
        case "TOGGLE_MOD_ON":
            return {
                ...state,
                ModOn: true
            };
        case "TOGGLE_MOD_OFF":
            return {
                ...state,
                ModOn: false,
            };
        default:
            return {
                ...state,
            };
    }
};
