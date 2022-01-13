import styled from "styled-components";

const Faq = () => {
    const faqs = [
        {
            question: "As aulas",
            answer: "A Kalloo oferece aulas particulares ou coletivas em formato exclusivamente EAD (online). As aulas em grupo atendem de 3 a 5 estudantes.\nPara as nossas atividades, utilizamos o material exclusivo da Kalloo, totalmente interativo e criado para o ambiente virtual\nAs aulas Kalloo funcionam assim: o professor compartilha sua tela e apresenta todo o conteúdo da aula, que se alterna entre dinâmicas faladas, leituras, exercícios escritos, jogos interativos e outras atividades. Os exercícios escritos que os alunos fizerem em seus cadernos virtuais podem ser acompanhados em tempo real pelo professor\nTodas as aulas se iniciam com uma atividade mais lúdica de warm-up (aquecimento) e se encerram com um dever de casa. Mas o professor pode sempre propor dinâmicas diferentes ou alterar a ordem das coisas, se achar necessário.\n",
        },
        {
            question: "Como funciona o ‘match’ com o professor?",
            answer: "Você deixa os seus contatos aqui no nosso site, ou manda um direct pelas redes sociais, e a Kalloo entra em contato para agendar seu teste de nivelamento (totalmente gratuito, tá?). No dia do teste, fazemos uma análise completa do seu perfil e selecionamos o professor que mais tiver sintonia com a sua personalidade e alinhamento com os seus objetivos.\nComo o nosso time é bastante heterogêneo, conseguimos escolher o teacher ideal para você. Temos advogados, artistas, jornalistas e, claro, profissionais da área da educação. Tem para todos os gostos\n“É escolhendo o professor certo para aquele perfil específico que a gente engaja o aluno e faz com que ele não veja a hora de ter a próxima aula.” - Catherine Wajcenberg, cofundadora da Kalloo\n",
        },
        {
            question: "Por que combinamos perfis de alunos e professores?",
            answer: 'Porque acreditamos que a única forma de reter um aluno para que ele possa ter consistência e, consequentemente, evoluir, é promover encontros em que ele se sinta confortável e motivado.\nComo funciona a plataforma colaborativa?\nÉ simples. Todo o nosso material é editável e compartilhado com todos os professores da Kalloo, que podem adicionar observações, editar exercícios, atualizar ou substituir textos e acrescentar novas atividades. Assim, nosso conteúdo estará em constante evolução e atualização.\n"Ao incentivar os usuários a avaliar, modificar e até criar conteúdos novos para as aulas, a gente passa a ter uma plataforma viva, que melhora e se atualiza a cada aula dada.” - Lucas Santoro, cofundador da Kalloo',
        },
        {
            question: "Como funciona a plataforma colaborativa?",
            answer: 'É simples. Todo o nosso material é editável e compartilhado com todos os professores da Kalloo, que podem adicionar observações, editar exercícios, atualizar ou substituir textos e acrescentar novas atividades. Assim, nosso conteúdo estará em constante evolução e atualização.\n"Ao incentivar os usuários a avaliar, modificar e até criar conteúdos novos para as aulas, a gente passa a ter uma plataforma viva, que melhora e se atualiza a cada aula dada.” - Lucas Santoro, cofundador da Kalloo',
        },
        {
            question: "Por que apostamos em uma plataforma colaborativa?",
            answer: "Porque acreditamos que é possível criar e aperfeiçoar um conteúdo didático a várias mãos, de forma que cada um contribui como quiser ou puder. Nossa ideia é que os professores possam sugerir mudanças e melhorias no nosso material, assim como é feito em ambientes colaborativos como o Waze ou o Wikipedia, por exemplo. Dessa forma, o material é enriquecido a cada dia com textos atualizados, atividades extras, instruções e sugestões novas para as dinâmicas de aula, correções e atualizações dos conteúdos já existentes.",
        },
    ];

    return (
        <>
            <FaqSection>
                <div>
                    <h1>FAQ</h1>
                    <h4>
                        Criada com o propósito de trazer inovação para o ensino
                        da língua inglesa, a Kalloo é a primeira escola de
                        inglês do Brasil a desenvolver uma plataforma
                        colaborativa de aprendizado, com material pedagógico
                        totalmente interativo, combinada a um sistema que traça
                        o perfil dos alunos com a finalidade de escolher os
                        melhores professores.
                    </h4>
                    {faqs.map((item, index) => (
                        <Item key={index}>
                            <h2>{item.question}</h2>
                            <h4>{item.answer}</h4>
                        </Item>
                    ))}
                </div>
            </FaqSection>
        </>
    );
};

export default Faq;

const FaqSection = styled.section`
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
const Item = styled.div`
    border: 1px solid black;
    margin: 10px;

    h2 {
        background-color: hsla(0, 0%, 50%, 0.1);
    }
    h4 {
    }
    h2,
    h4 {
        margin: 8px;
        padding: 30px;
        white-space: pre-line;
        line-height: 1.5em;
        text-align: justify;
    }
`;
