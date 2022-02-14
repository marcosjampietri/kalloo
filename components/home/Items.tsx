import styled from "styled-components";
import { Margin } from "../../styles/globalSC";
import { MdFaceRetouchingNatural } from "react-icons/md";
import { GiDuality } from "react-icons/gi";
import { ImDisplay } from "react-icons/im";

const Items = () => {
    const vantagens = [
        {
            name: "Vantagem",
            text: "this is the best advantage ever  is the best advantage ever  is the best advantage ever  is the best advantage ever  is the best advantage ever ",
            icon: <ImDisplay />,
        },
        {
            name: "Vantagem",
            text: "this is the best advantage ever  is the best advantage ever  is the best advantage ever  is the best advantage ever  is the best advantage ever ",
            icon: <MdFaceRetouchingNatural />,
        },
        {
            name: "Vantagem",
            text: "this is the best advantage ever  is the best advantage ever  is the best advantage ever  is the best advantage ever  is the best advantage ever ",
            icon: <GiDuality />,
        },
    ];

    return (
        <Section>
            <Margin>
                <Content>
                    <Title>
                        <h2>
                            Na falta de um motivo, te damos três para estudar na
                            KALLOO
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

    background: hsla(45, 100%, 65%, 1);
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
    max-width: 600px;
    margin: 0px auto 50px;

    h2 {
        font-size: 35px;

        text-align: center;
        letter-spacing: 2px;
    }
`;

const Card = styled.div`
    width: 100%;
    max-width: 280px;
    margin: 16px;
    padding: 16px;

    border-radius: 10px;
    box-shadow: 1px 1px 5px hsla(0, 0%, 50%, 0.3);
    background: white;

    h2 {
        font-size: 30px;

        text-align: center;
        color: hsla(212, 0%, 34%, 1);
    }
    p {
        font-size: 16px;
        text-align: center;
        line-height: 1.5em;
        color: grey;
    }
`;

const Icon = styled.div`
    margin: 8px auto;
    width: 70px;
    height: 70px;

    box-shadow: 1px 1px 5px hsla(0, 0%, 50%, 0.3);
    border-radius: 50%;

    svg {
        padding: 16px;
        width: 100%;
        height: 100%;
        fill: hsla(212, 0%, 34%, 1);
    }
`;
