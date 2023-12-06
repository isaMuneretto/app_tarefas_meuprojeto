import styled from "styled-components";

export const CardContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 90%;
    height: 200px;
    margin-top: 50px;

    box-shadow: rgba(50, 50, 105, 0.149) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
    border-radius: 0.8rem;
    background-color: #F2EFFB;
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