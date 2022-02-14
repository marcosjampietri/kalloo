import { actionCreator } from "../types";

export const navAction: actionCreator<any> =
    () => async (dispatch, getState) => {
        dispatch({
            type: "TOGGLE_NAV",
        });
    };

export const navOffAction = () => ({
    type: "TOGGLE_NAV_OFF",

});