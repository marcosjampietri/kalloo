import styled from "styled-components";
import { Margin } from "../../styles/globalSC";

const Levels = () => {
    return (
        <Section>
            <Margin>
                <Text>
                    <h1>Cursos</h1>
                    <h4>
                        Sempre com o objetivo de fazer com que o aluno atinja a
                        fluência na língua inglesa, a Kalloo oferece aulas para
                        os seis níveis do Quadro Europeu Comum de Referência
                        para as Línguas (A1, A2, B1, B2, C1 e C2). Cada nível
                        tem a duração de 10 meses a um ano. Há também um nível
                        pré-A1, para aqueles que ainda têm muito pouco contato
                        com a língua inglesa. Ao atingir o B2, o aluno já é
                        considerado fluente. QUADRO COMUM EUROPEU DE REFERÊNCIA
                        PARA AS LÍNGUAS (CEFL) O Quadro Europeu Comum de
                        Referência para Línguas (Common European Framework of
                        Reference for Languages – CEFR) é um padrão
                        internacionalmente reconhecido para descrever a
                        proficiência em um idioma.  É uma forma de descrever
                        quão bem você fala e entende uma língua estrangeira, que
                        divide o conhecimento dos alunos em três categorias,
                        cada uma com duas subdivisões:
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
