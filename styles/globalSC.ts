import styled, { createGlobalStyle, css } from "styled-components";

interface Props {
    NavOn: boolean;
}

export const GlobalStyle = createGlobalStyle<Props>`

body {
  background-color: black;
  overflow: ${(props) => (props.NavOn ? "hidden" : "visible")};

}

`;


export const Margin = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0px auto;
`;
