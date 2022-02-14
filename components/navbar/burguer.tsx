import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

import { AppState } from "../../store/_rootReducer";
import { navAction, navOffAction } from "../../store/nav/navActions";

const Burger = () => {
    const dispatch = useDispatch();
    //access rootReducer
    const { NavOn } = useSelector((state: AppState) => state.nav);

    //dispatch buttons
    const toggleNav = () => {
        if (NavOn) {
            dispatch(navOffAction());
        } else {
            dispatch(navAction());
        }
    };

    {
        /*     useEffect(() => {
        if (NavOn) {
            dispatch(navAction());
        }
    }, [dispatch, NavOn]); */
    }

    interface springProps {
        position?: string;
        transform?: string;
    }

    const first = useSpring<springProps>({
        position: "absolute",
        transform: NavOn
            ? "translate(15px, 35px) rotate(-45deg)"
            : "translate(10px, 8px) rotate(0deg)",
    });
    const second = useSpring<springProps>({
        position: "absolute",
        transform: NavOn
            ? "translate(20px, 7px) rotate(45deg)"
            : "translate(10px, 20px) rotate(0deg)",
    });
    const third = useSpring<springProps>({
        position: "absolute",
        transform: NavOn
            ? "translate(15px, 35px) rotate(-45deg)"
            : "translate(10px, 32px) rotate(0deg)",
    });
    const bg = useSpring({
        backgroundColor: NavOn
            ? "hsla(350, 0%, 90%, 0.7)"
            : "hsla(350, 0%, 90%, 0.05)",
    });

    return (
        <Wrap>
            {NavOn ? <BoxX></BoxX> : null}
            <Box onClick={toggleNav}>
                <Lines>
                    <OneLine style={first} />
                    <OneLine style={second} />
                    <OneLine style={third} />
                </Lines>
            </Box>
        </Wrap>
    );
};

export default Burger;

const Wrap = styled.div`
    position: relative;
    z-index: 9;
`;

const Box = styled(animated.div)`
    position: relative;
    width: 60px;
    height: 60px;
    margin: 0 5px;

    // border: 3px solid hsla(340, 80%, 50%, 1);
    border-radius: 50%;
    cursor: pointer;

    :hover {
        svg {
            transition: 0.01s;
            // fill: hsla(350, 80%, 80%, 1);
        }
    }
`;

const BoxX = styled(Box)`
    position: absolute;
    z-index: 99999999999999;
`;

const Lines = styled.svg`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;

    transition: 0.8s;
    fill: hsla(340, 80%, 50%, 1);

    viewbox: 0 0 44 44;
`;

const OneLine = styled(animated.rect)`
    width: 40px;
    height: 4px;

    transform: translate(0px, 0px) rotate(0deg);
`;
