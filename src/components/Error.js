import React from 'react';
import styled from 'styled-components';

const MensajeError = styled.p`
    background-color: #B7322c;
    padding: 1rem;
    color: #fff;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue', cursive;
`
const Error = ({mensaje}) => <MensajeError>{mensaje}</MensajeError>
 
export default Error;