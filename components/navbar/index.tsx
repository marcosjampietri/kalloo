import NextLink from "next/link";
import styled from "styled-components";
import { Link } from "../../styles/typography";

const Navbar = () => {
    return (
        <NavbarSection>
            <NextLink href="/">
                <Link>LOGO</Link>
            </NextLink>
            <NextLink href="/cursos">
                <Link>CURSO</Link>
            </NextLink>
            <NextLink href="/sobre">
                <Link>SOBRE</Link>
            </NextLink>
            <NextLink href="/contato">
                <Link>CONTATO</Link>
            </NextLink>
        </NavbarSection>
    );
};

export default Navbar;

const NavbarSection = styled.section`
    position: fixed;
    width: 100vw;
    height: 100px;
    z-index: 10;

    display: flex;

    justify-content: center;
    align-items: center;
`;
