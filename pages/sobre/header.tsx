import styled from "styled-components";
import { Margin } from "../../styles/globalSC";

const Levels = () => {
    return (
        <Section>
            <Margin>
                <Text>
                    <h1>Sobre</h1>
                    <h4>
                        Criada com o propósito de trazer inovação para o ensino
                        da língua inglesa, a Kalloo é a primeira escola de
                        inglês do Brasil a desenvolver uma plataforma
                        colaborativa de aprendizado, com material pedagógico
                        totalmente interativo, combinada a um sistema que traça
                        o perfil dos alunos com a finalidade de escolher os
                        melhores professores.
                    </h4>
                </Text>
            </Margin>
        </Section>
    );
};

export default Levels;

const Section = styled.section`
    position: relative;
    width: 100vw;
    height: 100%;
    padding: 20px;
    padding-top: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: hsla(280, 50%, 30%, 1);

    background-image: linear-gradient(
        90deg,
        hsla(270, 100%, 40%, 1),
        hsla(260, 100%, 66%, 1)
    );
`;
const Text = styled.div`
    padding: 30px 0px;

    h1 {
        color: hsla(55, 100%, 100%, 1);
    }
    h4 {
        line-height: 1.5em;
        text-align: justify;
        font-size: 12px;
        color: white;
        // color: hsla(55, 100%, 60%, 1);
    }
`;
