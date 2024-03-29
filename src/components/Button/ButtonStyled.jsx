import styled from "styled-components";

export const ButtonSpace = styled.button`

  background-color: #247BA0;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 0.4rem 2rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  width: auto;
  margin-right: 10px;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  transition: border-color 0.3s;
  margin: 0 auto;
  display: block;

  :hover {
    //o hover é como uma herança
    background-color: #51af0a;
  }
`;
