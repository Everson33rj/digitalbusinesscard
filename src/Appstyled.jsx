import styled from "styled-components";

export const Appstyled = styled.div`
    height: 100vh;
    font-family: ${props => props.tipoFonte};
    background-color: ${props => props.corBG};
    color: ${props => props.corFontes};
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`