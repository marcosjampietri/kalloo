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

    background-color: hsla(0, 0%, 95%, 0.7);
    background-image: url("https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80");
    background-blend-mode: lighten;
`;
const Text = styled.div`
    padding: 30px 0px;

    h4 {
        line-height: 1.5em;
        text-align: justify;
        font-size: 12px;
    }
`;
