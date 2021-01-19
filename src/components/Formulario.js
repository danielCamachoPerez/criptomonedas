import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useMoneda from '../Hook/useMoneda'
import useCriptomoneda from '../Hook/useCriptomoneda'
import axios from 'axios'
import Error from './Error'

const Button = styled.input`
    margin-top:20px;
    font-weight:bold;
    font-size:20px;
    padding:10px;
    background-color:#66A2FE;
    border:none;
    width:100%;
    border-radius:10px;
    color:#FFf;
    transition:background-color .3s ease;
    &:hover{
        background-color:#326AC0;
        cursor: pointer;
    }
`
const Formulario = ({guardarMoneda, guardarCriptomoneda}) => {
    //state del listado de criptomonedas
    const [listacripto, guardarCriptomonedas] = useState([])
    const [error, guardarError]=useState(false)
    const MONEDAS = [
        {codigo:'MXN', nombre: 'Peso Mexicano'},
        {codigo:'EUR', nombre: 'Euro'},
        {codigo:'GBP', nombre: 'Libra Esterlina'},
        {codigo:'USD', nombre: 'Dolar de Estados Unidos'},
    ] 
    //utikizar useMoneda
    const [moneda, SelectMoneda] = useMoneda('Elige tu Moneda','', MONEDAS)
    //utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useCriptomoneda('Elige tu Criptomoneda', '', listacripto)
    //Ejecutar llamado a la API
    useEffect(()=>{
        const ConsultarApi = async()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const resultado = await axios.get(url)
            guardarCriptomonedas(resultado.data.Data)
        }
        ConsultarApi()
    },[])
    //cuando el usuario hace submit
    const cotizarMoneda=e=>{
        e.preventDefault()
        //validar si ambos campos estan rellenos
        if(moneda === '' || criptomoneda === ''){
            guardarError(true)
            return
        }
        //pasar los datos al componente principal
        guardarError(false)
        guardarMoneda(moneda)
        guardarCriptomoneda(criptomoneda)
    }
    return ( 
        <form
            onSubmit={cotizarMoneda}
        >
            {error ? <Error mensaje='Todos los campos son obligatorios'/> : null}
            <SelectMoneda/>
            <SelectCripto/>
            <Button
                type='submit'
                value='Calcular'
            />
        </form>
     );
}
 
export default Formulario;