import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import {
    animated,
    useSpring,
    useTrail,
    useTransition,
    config,
} from "react-spring";

import styled from "styled-components";

import { AppState, useTypedSelector } from "../../store/_rootReducer";
import { navOffAction } from "../../store/nav/navActions";

const useOutsideAlerter = (ref: React.RefObject<HTMLElement>) => {
    const dispatch = useDispatch();

    const { NavOn } = useTypedSelector((state: AppState) => state.nav);
    useEffect(() => {
        if (NavOn) {
            const handleClickOutside = (event: any) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    dispatch(navOffAction());
                }
            };
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }
    }, [ref, dispatch, NavOn]);
};

const Menu = () => {
    const dispatch = useDispatch();

    const { NavOn } = useTypedSelector((state: AppState) => state.nav);

    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef);

    const menuIt = [
        {
            name: "SOBRE",
            color: "hsla(263, 0%, 40%, 0.2)",
            path: "/sobre",
            target: undefined,
        },
        {
            name: "O CURSO",
            color: "hsla(263, 0%, 30%, 0.2)",
            path: "/curso",
            target: undefined,
        },
        {
            name: "CONTATO",
            color: "hsla(263, 0%, 20%, 0.2)",
            path: "/contato",
            target: undefined,
        },
    ];

    interface springProps {
        opacity?: number;
        position?: number;
    }
    const textSwipe = useSpring<springProps>({
        config: config.slow,
        delay: 1000,
        opacity: NavOn ? 1 : 1,
        position: "absolute",
    });

    interface trailProps {
        position?: number;
    }
    const trail = useTrail<trailProps>(menuIt.length, {
        // config: config.slow,
        opacity: NavOn ? 1 : 0,
        y: NavOn ? 0 : -100,
        delay: 200,
    });

    const menuTransition = useTransition(NavOn, {
        from: { opacity: 0, transform: "translate(0,-100%)" },
        enter: { opacity: 1, transform: "translate(0,0%)" },
        leave: { opacity: 0, transform: "translate(0,100%)" },
        reverse: NavOn,
        delay: 100,
        // config: config.slow,
    });

    return menuTransition((styles, menu) =>
        menu ? (
            <MenuST
                ref={wrapperRef}
                onClick={() => dispatch(navOffAction())}
                style={styles}
            >
                {trail.map(({ y, ...otherProps }, i) => (
                    <MenuItem
                        key={i}
                        style={{
                            ...otherProps,
                            background: `${menuIt[i].color}`,
                            transform: y.to(
                                (y: any) => `translate3d(0, ${y}vh, 0)`
                            ),
                        }}
                    >
                        <Link href={menuIt[i].path} passHref>
                            <Aaa
                                style={textSwipe}
                                href={menuIt[i].path}
                                target={menuIt[i].target}
                                rel="noreferrer"
                            >
                                {menuIt[i].name}
                            </Aaa>
                        </Link>
                    </MenuItem>
                ))}
            </MenuST>
        ) : null
    );
};

export default Menu;

//style------------------------------------------------------------------

const MenuST = styled(animated.div)`
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 8;
    width: 100vw;
    height: 100vh;
    padding-top: 70px;

    background-image: linear-gradient(
        hsla(280, 100%, 15%, 1),
        hsla(280, 100%, 35%, 1)
    );

    // display: flex;
    // align-items: center;
    pointer-events: none;
`;
const MenuItem = styled(animated.div)`
    height: 25vh;

    pointer-events: all;
`;

const Aaa = styled(animated.a)`
    width: 100%;
    height: 100%;
    font-size: clamp(1rem, 3.5vw, 2.5rem);

    font-weight: 700;
    color: hsla(0, 0%, 80%, 1);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
        background: hsla(340, 100%, 50%, 1);
        text-shadow: 0px 0px 10px white;
        color: hsla(0, 0%, 100%, 1);
    }
`;
