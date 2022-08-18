import React from "react";
import styled from "styled-components";

import Conta from "../Conta";
import  Extrato  from "../Extrato";
import Titulo from "../Titulo";


const Container = styled.div`
    background-color: #f1f1f1;
    min-height: 90vh;
    padding: 0px 15vw;
`
const Conteudo = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 800px) {
    flex-direction: column;
  }
  `

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <Container>
      <Titulo>Olá Pessoal!</Titulo>
      <Conteudo>
        <Conta />
        <Extrato />
      </Conteudo>
    </Container>
  );
};

