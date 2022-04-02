import NextLink from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { Link } from "../../styles/typography";
import { Margin } from "../../styles/globalSC";
import { below } from "../../styles/breakpoints";
import Burguer from "./burguer";
import Menu from "./menu";

const Navbar = () => {
    const links = [
        {
            name: "SOBRE",
            path: "/sobre",
        },
        {
            name: "O CURSO",
            path: "/curso",
        },
        {
            name: "CONTATO",
            path: "/contato",
        },
    ];

    return (
        <Nav>
            <OFF>
                <Menu />
            </OFF>
            <Margin>
                <Width>
                    <NextLink href="/">
                        <Link>
                            <Logo>
                                <Image
                                    src="/Logo-final.png"
                                    width="180"
                                    height="55"
                                    alt="logo"
                                />
                            </Logo>
                        </Link>
                    </NextLink>

                    <Links>
                        {links.map(({ name, path }: any, index: number) => (
                            <NextLink href={path} key={index}>
                                <Link>{name}</Link>
                            </NextLink>
                        ))}
                    </Links>
                    <OFF>
                        <Burguer />
                    </OFF>
                </Width>
            </Margin>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    position: fixed;
    width: 100vw;
    height: 80px;
    padding: 0px 20px;
    z-index: 10;

    background: hsla(345, 100%, 100%, 0.9);
    backdrop-filter: blur(5px);
    border-bottom: 4px solid hsla(45, 100%, 65%, 0);
`;
const OFF = styled.div`
    ${below.med`
        display: initial; 
    `};
    display: none;
`;
const Width = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Links = styled.div`
    color: #65009c;

    a {
        font-weight: bold;
        margin: 12px;
    }

    ${below.med`
        display: none; 
    `};
`;
const Logo = styled.div`
    padding: 12px;
    width: 30vh;
    max-width: 180px;

    // padding-left: 0px;

    .img {
        object-fit: cover;
    }
`;
