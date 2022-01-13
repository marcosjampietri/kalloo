import styled from "styled-components";

const Levels = () => {
    const levels = [
        {
            grade: "A1 - Iniciante",
            descript:
                "É capaz de compreender e usar expressões familiares e cotidianas, assim como enunciados muito simples, que visam satisfazer necessidades concretas. Pode apresentar-se e apresentar outros e é capaz de fazer perguntas e dar respostas sobre aspectos pessoais como, por exemplo, o local onde vive, as pessoas que conhece e as coisas que tem. Pode comunicar de modo simples, se o interlocutor falar lenta e distintamente e se mostrar cooperante.",
        },
        {
            grade: "A2 - Básico",
            descript:
                "É capaz de compreender frases isoladas e expressões frequentes relacionadas com áreas de prioridade imediata (p. ex.: informações pessoais e familiares simples, compras, meio circundante). É capaz de comunicar em tarefas simples e em rotinas que exigem apenas uma troca de informação simples e direta sobre assuntos que lhe são familiares e habituais. Pode descrever de modo simples a sua formação, o meio circundante e, ainda, referir assuntos relacionados com necessidades imediatas.",
        },
        {
            grade: "B1 - Intermediário",
            descript:
                "É capaz de compreender as questões principais, quando é usada uma linguagem clara e estandardizada e os assuntos lhe são familiares (temas abordados no trabalho, na escola e nos momentos de lazer, etc.). É capaz de lidar com a maioria das situações encontradas na região onde se fala a língua-alvo. É capaz de produzir um discurso simples e coerente sobre assuntos que lhe são familiares ou de interesse pessoal. Pode descrever experiências e eventos, sonhos, esperanças e ambições, bem como expor brevemente razões e justificações para uma opinião ou um projeto.",
        },
        {
            grade: "B2 - Usuário Independente",
            descript:
                "É capaz de compreender as ideias principais em textos complexos sobre assuntos concretos e abstratos, incluindo discussões técnicas na sua área de especialidade. É capaz de comunicar com certo grau de espontaneidade com falantes nativos, sem que haja tensão de parte a parte. É capaz de exprimir-se de modo claro e pormenorizado sobre uma grande variedade de temas e explicar um ponto de vista sobre um tema da atualidade, expondo as vantagens e os inconvenientes de várias possibilidades.",
        },
        {
            grade: "C1 - Proficiência operativa eficaz",
            descript:
                "É capaz de compreender um vasto número de textos longos e exigentes, reconhecendo os seus significados implícitos. É capaz de se exprimir de forma fluente e espontânea sem precisar procurar muito as palavras. É capaz de usar a língua de modo flexível e eficaz para fins sociais, acadêmicos e profissionais. Pode exprimir-se sobre temas complexos, de forma clara e bem estruturada, manifestando o domínio de mecanismos de organização, de articulação e de coesão do discurso.",
        },
        {
            grade: "C2 - Domínio Pleno",
            descript:
                "É capaz de compreender, sem esforço, praticamente tudo o que ouve ou lê. É capaz de resumir as informações recolhidas em diversas fontes orais e escritas, reconstruindo argumentos e fatos de um modo coerente. É capaz de se exprimir espontaneamente, de modo fluente e com exatidão, sendo capaz de distinguir finas variações de significado em situações complexas.",
        },
    ];

    return (
        <>
            <LevelsSection>
                <div>
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
                    <Table>
                        {levels.map((item, index) => (
                            <Item key={index}>
                                <h2>{item.grade}</h2>
                                <h4>{item.descript}</h4>
                            </Item>
                        ))}
                    </Table>
                </div>
            </LevelsSection>
        </>
    );
};

export default Levels;

const LevelsSection = styled.section`
    position: relative;
    width: 100vw;
    height: 100%;

    border: 1px solid lightgrey;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        border: 1px solid black;
        max-width: 1200px;
        margin: 30px auto;
        padding: 10px;
    }
`;
const Table = styled.ul`
    width: 100%;
    padding: 0px;

    li:nth-child(2n) {
        background-color: hsla(0, 0%, 50%, 0.31);
        margin-bottom: 80px;
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

    h2 {
        flex: 1 1 80px;
        min-width: 150px;
    }
    h4 {
        flex: 1 1 490px;
        padding: 12px;
        // width: 70%;
    }
    h2,
    h4 {
        margin: 8px;
        white-space: pre-line;
        line-height: 1.5em;
        text-align: justify;
    }
`;
