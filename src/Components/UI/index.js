import styled from "styled-components";

export const Icone = styled.img`
  height: 25%;
  width: 25%;
`;

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    border-radius: 5px;
    box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.04);
    padding: 20px;
    width: 48%;
`

const Botao = styled.button`
    margin: 15px auto 0px auto;
    display: block;
    border-radius: 20px;
    background-color: #312e81;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 14px;
    padding: 8px 20px;
    cursor: pointer;
`