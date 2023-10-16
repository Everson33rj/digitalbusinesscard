import styled from "styled-components";

export const CorpoStyled = styled.div`

    border: ${props => props.bordaCard};
    height: 550px;
    width: 320px;
    border-radius: 20px;
    box-shadow: 5px 5px 5px #0000004e;
    animation: card .5s ease-in-out;
    animation-fill-mode: both;
    position: absolute;
    opacity: 0;

    @keyframes card {
        0%{
            transform: rotate(5deg);
        }

        100%{
             opacity: 1;
        }
    }

.logo-menu{
    background-color: ${props => props.barraBG};
    height: 65px;
    display: flex;
    align-items: center;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
}

.logo{
    margin-right: auto;
    margin-left: auto;
    width: 80%;
    font-size: 18pt;
    display: flex;
    justify-content: center;
    font-family: ${props => props.fonteBarra}
}

.logo a{
    text-decoration: none;
    color: ${props => props.corFonteCab};
    font-weight: 600;
    justify-content: center;

}

.ponteiro{
    color: ${props => props.barra};
}

.main{
    display: flex;
    justify-content: center;
    position: relative;
    height: 85%;
    padding-top: 20px;
}

.conteudo{
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
    height: 100%;
}

.imagem1{
    height: 200px;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    margin-bottom: 8px;
}

.nome{
    font-weight: bold;
    font-size: 25pt;
}

.subtitulo{
    padding-top: 20px;
    padding-bottom: 30px;
    width: 70%;
    text-align: center;
}

.contatos{
    position: absolute;
    bottom: 0;
}

.contatos a{
    color: ${props => props.corFontes};
    padding: 10px;
}

.contatos svg {
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round; 
}
`