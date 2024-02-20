import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 90%;
    height: 250px;
    margin-top: 50px;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    border-radius: 0.8rem;
    background-color: #CEE3F6;
`

export const CardBody = styled.article`
    display: flex;
    width: 100%;
    height: 100%;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1rem;
        width: 100%;
    }

    h2{
        margin-bottom: 1rem;
    };

`;

export const CardHeader = styled.article`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: ${(props) => (props.top ? "50rem" : "1rem")};

    h2{
        margin-bottom: 1rem;
        font-size: ${(props) => (props.top ? "2rem" : "1.6rem")};
        width: 100%;
    }
`;

export const CardButton = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Isso alinha os itens à direita */
     /* Ajusta o espaçamento entre o CardFooter e os botões */
`;

export const AlterarButton = styled.button`
    margin-bottom: 10px; /* Reduzido o espaço entre o botão Alterar e Excluir */
    padding: 8px 12px;
    border: none;
    outline: none;
    font-size: 0.6;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, Arial;
    font-weight: 100;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    :hover {
        background-color: #0a86af;
    }
`;

export const ExcluirButton = styled.button`
    padding: 8px 12px;
    background-color: #247ba0;
    border: none;
    outline: none;
    font-size: 0.6;
    color: #fff; /* Alterado para texto branco */
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, Arial;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    :hover {
        background-color: #0a86af;
    }
`;



export const CardFooter = styled.article`
    display: flex;
    align-items: center;
    gap: 1rem;

section{
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 0.9rem;
    }
`;