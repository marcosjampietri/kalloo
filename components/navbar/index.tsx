import NextLink from "next/link";
import styled from "styled-components";
import { Link } from "../../styles/typography";
import { Margin } from "../../styles/globalSC";

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
            <Margin>
                <Width>
                    <NextLink href="/">
                        <Link>LOGO</Link>
                    </NextLink>

                    <Links>
                        {links.map(({ name, path }: any, index: number) => (
                            <NextLink href={path} key={index}>
                                <Link>{name}</Link>
                            </NextLink>
                        ))}
                    </Links>
                </Width>
            </Margin>
        </Nav>
    );
};

export default Navbar;

const Nav = styled.nav`
    position: fixed;
    width: 100vw;
    height: 100px;
    padding: 0px 20px;
    z-index: 10;

    background: hsla(0, 0%, 100%, 0.7);
`;
const Width = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Links = styled.div``;
