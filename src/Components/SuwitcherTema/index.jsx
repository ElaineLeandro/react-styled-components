/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import ThemeOn from "../../assets/images/themeOn.svg";
import ThemeOff from "../../assets/images/themeOff.svg";
import {Icone} from '../UI'

const claro = <Icone src={ThemeOn} all="Tema Claro"/>
const escuro = <Icone src={ThemeOff} all="Tema Claro"/>

export default (({tema}) => (tema ? escuro : claro))