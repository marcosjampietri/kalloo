import styled from "styled-components";

const Hero = () => {
    return (
        <HeroSection>
            <Notes>
                <h4>NOTAS</h4>
                <p>Background?</p>
                <p>Barra de Navegação?</p>
                <p>Páginas?</p>
            </Notes>
            <Name>
                <h1>KALLOO</h1>
            </Name>
            <Slogan>
                <h2>Dê match com o professor de inglês</h2>
            </Slogan>
            <Button>Botão</Button>
        </HeroSection>
    );
};

export default Hero;

const HeroSection = styled.section`
    width: 100vw;
    height: 100vh;

    border: 1px solid lightgrey;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Name = styled.div``;

const Slogan = styled.div``;

const Button = styled.button`
    width: 150px;
    height: 70px;

    background: white;
    border-radius: 5px;
    border: 1px solid hsla(0, 0%, 70%, 1);
    cursor: pointer;
`;

const Notes = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;

    h4 {
        color: lightgrey;
        margin: 0px 0px 10px;
    }
    p {
        color: lightgrey;
        margin: 0px 0px 8px 15px;
    }
`;
