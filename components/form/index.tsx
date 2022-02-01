import styled from "styled-components";
import Form from "./form";
import List from "../../pages/contato/list";

const Contact = () => {
    return (
        <ContactSection id="Contact">
            <List />
        </ContactSection>
    );
};

export default Contact;

const ContactSection = styled.section`
    position: relative;
    padding-top: 100px;
    width: 100vw;

    border: 1px solid lightgrey;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
