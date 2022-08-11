import React from "react";
import styled from "styled-components";
import { corPrimaria } from "../UI/variaveis";
import bank_logo from "../../assets/images/bank_logo.svg";

const StlyedHeader = styled.nav`
    background-color: ${corPrimaria};
    display: flex;
    justify-content: space-between;
    padding: 0 15vw;
    height: 10vh;
    align-items: center;
  `

  const Logo = styled.img`
    height: 50px;
    width: 50px;

  `
  const BtnCabecalho = styled.a`
      text-align: center;
      border-radius: 3px;
      padding: 5px 20px;
      margin: 0 10px;
      font-weight: 600;
      border: 2px solid white;

      background: ${(props) => (props.primary ? "#e2e8f0" : corPrimaria)};
      color: ${(props) => ( props.primary ? corPrimaria : "#e2e8f0" )};
  `


const Cabecalho = () => {
  return (
    <StlyedHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary className="btn-secundario" href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho className="btn-primario" href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </StlyedHeader>
  );
};

export default Cabecalho;
