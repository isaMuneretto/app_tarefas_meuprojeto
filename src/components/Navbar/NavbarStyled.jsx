  import styled from "styled-components";

  export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 100%;
    padding: 1rem 0;
      /* position: fixed;
      top: 0; */
    background-color: #006494;
    z-index: 1;
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
  `;

  export const ImageLogo = styled.img`
    width: 8rem;
    height: 3.5rem;
    object-fit: cover;
    cursor: pointer;
  `;

  export const InputSpace = styled.div`
    position: relative;
    width: 200px;
    display: flex;
    align-items: center;
    margin-left: 15px;

    button {
      position: absolute;
      top: 1;
      right: 0.2rem;
      z-index: 10;
      border: none;
      background-color:  #f5f5f5;
      color: #247BA0;
      border-radius: 0.3rem;
      padding: 0.5rem;
      cursor: pointer;
      transition: 0.3s;
    }

    button:hover{
      background-color: #757575;
      color: #f5f5f5;
    }

    input {
      outline: none;
      font-size: 0.9rem;
      padding: 0.6rem;
      background-color: #E8F1F2;
      border: none;
      width: 100%;
      border-radius: 0.3rem;

      :focus {
        border: 2px solid #0bade3;
      }
    }
  `;

  export const Button = styled.button`
    //se quiser usar esse estilo em outro lugar é só exportar
    background-color: #247BA0;
    border: none;
    outline: none;
    font-size: 1rem;
    padding: 0.4rem 1rem;
    color: #247BA0;
    transition: all 0.4s ease-in-out;
    cursor: pointer;
    border-radius: 0.3rem;
    font-family: Roboto, arial;
    
    /* width: 40%; */
    margin-left: auto;
    font-weight: 500;
    letter-spacing: 0.1rem;
    text-transform: uppercase;

    :hover {
      //o hover é como uma herança
      background-color: #0a86af;
    }
  `;

  export const ErrorSpan = styled.span`
    background-color: #ffaeae;
    color: #9e0000;
    padding: 1rem;
    display: flex;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
  `
