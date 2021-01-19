import React from 'react';
import styled from 'styled-components';

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`
const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: bold;
    }
`
const Info = styled.p`
    font-size: 18px;
    span{
        font-weight: bold;
    }
`
const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null
    //console.log(resultado);
    return ( 
        <ResultadoDiv>
            <Precio>El precio es: <span>{resultado.PRICE}</span></Precio>
            <Info>Ultima Actualización: <span>{resultado.LASTUPDATE}</span></Info>
        </ResultadoDiv>
     );
}
 
export default Cotizacion;