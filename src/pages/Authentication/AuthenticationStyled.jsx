import styled from "styled-components";

export const AuthContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 auto;
    gap: 1rem;
    
    
    form {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 400px;
    padding: 2rem;
    gap: 1rem;
    background-color: ${(props) => (props.type === "signin" ? "#006494" : "#1B98E0")};
    color: ${(props) => (props.type === "signup" ? "#006494" : "#1B98E0")};
    border-radius: 8px;
    transition: all linear 160ms;
    box-shadow: 10px 10px 40px rgba(0, 0, 0, 0.4);

    h2 {
        font-size: 2rem;
        text-align: center;
        font-weight: 700;
    }
`;