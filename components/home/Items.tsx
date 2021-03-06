import styled from "styled-components";
import Image from "next/image";
import { Margin } from "../../styles/globalSC";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiDuality } from "react-icons/gi";
import { ImDisplay } from "react-icons/im";

const Items = () => {
    const vantagens = [
        {
            name: "MATERIAL 100% VIRTUAL E INTERATIVO",
            text: "Dê adeus aos livros e cadernos físicos. Nosso material foi desenvolvido totalmente para o ambiente virtual",
            icon: <ImDisplay />,
        },
        {
            name: "'MATCH' COM A(O) TEACHER",
            text: "Selecionamos o professor que mais tem a ver com você, de acordo com a sua personalidade e os seus objetivos",
            icon: <MdFaceRetouchingNatural />,
        },
        {
            name: "PLATAFORMA COLABORATIVA",
            text: "A plataforma Kalloo é sempre atualizada e aperfeiçoada pelos nosso professores - o que permite que o nosso material esteja em constante evolução ",
            icon: <GiDuality />,
        },
    ];

    return (
        <Section>
            <Margin>
                <Content>
                    <Title>
                        <h2>
                            Na falta de <b>um</b> motivo, te damos
                            <span className="a"> três </span>
                            para estudar na
                            <span className="b">
                                <img
                                    src="/Logo-final.png"
                                    alt="Kalloo"
                                    className="kalloo"
                                />
                            </span>
                        </h2>
                    </Title>
                    <Cards>
                        {vantagens.map(({ name, text, icon }, index) => (
                            <Card key={index}>
                                <Icon>{icon}</Icon>
                                <h2>{name}</h2>
                                <p>{text}</p>
                            </Card>
                        ))}
                    </Cards>
                </Content>
            </Margin>
        </Section>
    );
};

export default Items;

const Section = styled.section`
    width: 100%;
    padding: 5vh 0px 15vh;

    background: hsla(45, 100%, 100%, 1);
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px;
`;
const Cards = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const Title = styled.div`
    width: 100%;
    max-width: 650px;
    margin: 0px auto 50px;

    h2 {
        font-size: 38px;
        line-height: 1.5em;
        text-align: center;
        letter-spacing: 0px;

        color: black;

        .a {
            background: #8c52ff;
            display: inline-block;
            font-weight: 900;
            padding: 2px 10px;
            margin: 0px 10px;
            color: hsla(290, 100%, 100%, 1);
        }

        .b {
            position: relative;
            top: 5px;
            height: 30px;
            display: inline-block;
            overflow: hidden;
            margin: 0px 15px;

            .kalloo {
                height: 45px;
                object-fit: cover;
            }
        }

        b {
            font-weight: 900;
        }
    }
`;

const Card = styled.div`
    width: 100%;
    height: 300px;
    max-width: 280px;
    margin: 16px;
    padding: 16px;

    border-radius: 10px;
    box-shadow: 1px 1px 10px hsla(0, 0%, 50%, 0.4);
    background: hsla(0, 0%, 100%, 1);
    // border: 1px solid hsla(330, 100%, 50%, 1);

    h2 {
        font-size: 20px;

        text-align: center;
        color: hsla(330, 100%, 50%, 1);
    }
    p {
        font-size: 16px;
        text-align: center;
        line-height: 1.3em;
        color: hsla(280, 100%, 0%, 1);
    }
`;

const Icon = styled.div`
    margin: 8px auto;
    width: 70px;
    height: 70px;

    box-shadow: 1px 1px 5px hsla(279, 100%, 31%, 0.3);
    border-radius: 50%;
    background: #8c52ff;
    svg {
        padding: 16px;
        width: 100%;
        height: 100%;
        fill: hsla(279, 100%, 100%, 1);
    }
`;
