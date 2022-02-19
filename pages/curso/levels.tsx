import styled from "styled-components";
import { Margin } from "../../styles/globalSC";

const Levels = () => {
    const levels = [
        {
            grade: "Iniciante",
            code: "A1",
            descript:
                "É capaz de compreender e usar expressões familiares e cotidianas, assim como enunciados muito simples, que visam satisfazer necessidades concretas. Pode apresentar-se e apresentar outros e é capaz de fazer perguntas e dar respostas sobre aspectos pessoais como, por exemplo, o local onde vive, as pessoas que conhece e as coisas que tem. Pode comunicar de modo simples, se o interlocutor falar lenta e distintamente e se mostrar cooperante.",
        },
        {
            grade: "Básico",
            code: "A2",
            descript:
                "É capaz de compreender frases isoladas e expressões frequentes relacionadas com áreas de prioridade imediata (p. ex.: informações pessoais e familiares simples, compras, meio circundante). É capaz de comunicar em tarefas simples e em rotinas que exigem apenas uma troca de informação simples e direta sobre assuntos que lhe são familiares e habituais. Pode descrever de modo simples a sua formação, o meio circundante e, ainda, referir assuntos relacionados com necessidades imediatas.",
        },
        {
            grade: "Intermediário",
            code: "B1",
            descript:
                "É capaz de compreender as questões principais, quando é usada uma linguagem clara e estandardizada e os assuntos lhe são familiares (temas abordados no trabalho, na escola e nos momentos de lazer, etc.). É capaz de lidar com a maioria das situações encontradas na região onde se fala a língua-alvo. É capaz de produzir um discurso simples e coerente sobre assuntos que lhe são familiares ou de interesse pessoal. Pode descrever experiências e eventos, sonhos, esperanças e ambições, bem como expor brevemente razões e justificações para uma opinião ou um projeto.",
        },
        {
            grade: "Estudante Independente",
            code: "B2",
            descript:
                "É capaz de compreender as ideias principais em textos complexos sobre assuntos concretos e abstratos, incluindo discussões técnicas na sua área de especialidade. É capaz de comunicar com certo grau de espontaneidade com falantes nativos, sem que haja tensão de parte a parte. É capaz de exprimir-se de modo claro e pormenorizado sobre uma grande variedade de temas e explicar um ponto de vista sobre um tema da atualidade, expondo as vantagens e os inconvenientes de várias possibilidades.",
        },
        {
            grade: "Proficiência operativa eficaz",
            code: "C1 ",
            descript:
                "É capaz de compreender um vasto número de textos longos e exigentes, reconhecendo os seus significados implícitos. É capaz de se exprimir de forma fluente e espontânea sem precisar procurar muito as palavras. É capaz de usar a língua de modo flexível e eficaz para fins sociais, acadêmicos e profissionais. Pode exprimir-se sobre temas complexos, de forma clara e bem estruturada, manifestando o domínio de mecanismos de organização, de articulação e de coesão do discurso.",
        },
        {
            grade: "Domínio Pleno",
            code: "C2",
            descript:
                "É capaz de compreender, sem esforço, praticamente tudo o que ouve ou lê. É capaz de resumir as informações recolhidas em diversas fontes orais e escritas, reconstruindo argumentos e fatos de um modo coerente. É capaz de se exprimir espontaneamente, de modo fluente e com exatidão, sendo capaz de distinguir finas variações de significado em situações complexas.",
        },
    ];

    return (
        <>
            <Section>
                <Margin>
                    <h2>NÍVEIS</h2>
                    <Table>
                        {levels.map((item, index) => (
                            <Item key={index}>
                                <Grade>
                                    <div>{item.code}</div>
                                    <h2>{item.grade}</h2>
                                </Grade>
                                <h4>{item.descript}</h4>
                            </Item>
                        ))}
                    </Table>
                </Margin>
            </Section>
        </>
    );
};

export default Levels;

const Section = styled.section`
    position: relative;
    width: 100vw;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Table = styled.ul`
    width: 100%;
    padding: 0px;

    li:nth-child(2n) {
        background-color: hsla(45, 100%, 65%, 1);
        margin-bottom: 40px;
    }
    li:nth-child(2n + 1) {
        padding-top: 50px;
    }
`;
const Item = styled.li`
    padding: 10px;

    border: 1px solid hsla(0, 0%, 0%, 0.1);

    display: flex;
    flex-wrap: wrap;

    h4 {
        flex: 1 1 490px;
        font-weight: 300;
    }
    h2,
    h4 {
        margin: 8px;
        white-space: pre-line;
        line-height: 1.5em;
        text-align: justify;
    }
`;
const Grade = styled.div`
    flex: 1 1 80px;
    width: 30%;
    min-width: 200px;
    margin: 8px;
    display: flex;
    align-items: center;
    h2 {
        min-width: 150px;
        padding-left: 8px;
        font-size: 18px;

        text-shadow: -2px 2px 1px hsla(0, 0%, 60%, 0.3);
        text-transform: uppercase;
    }

    div {
        flex: 0 0 35px;
        width: 35px;
        height: 35px;

        border-radius: 50%;
        box-shadow: 1px 1px 5px hsla(0, 0%, 50%, 0.3);

        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
