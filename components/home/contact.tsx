import styled from "styled-components";

const Contact = () => {
    return (
        <ContactSection>
            <Note2>
                <p>---- seção: contatos ----</p>
            </Note2>
            <Notes>
                <h4>TEL:</h4>
                <p>555-252525</p>
            </Notes>
        </ContactSection>
    );
};

export default Contact;

const ContactSection = styled.section`
    position: relative;
    width: 100vw;
    height: 100vh;

    border: 1px solid lightgrey;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Notes = styled.div`
    h4 {
        color: lightgrey;
        margin: 0px 0px 10px;
    }
    p {
        color: lightgrey;
        margin: 0px 0px 8px 15px;
    }
`;
const Note2 = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;

    text-align: center;
    color: lightgrey;
`;
