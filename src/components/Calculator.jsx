import React, {useState} from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() {
    const [num, setNum] = useState(0);
    
    function inputNum (e) {
        let input = e.target.value
        if(num === 0){
            setNum(input);
        } else {
            setNum(num+input);
        }
    }

    function clear() {
        setNum(0);
    }

    function porcentagem(e) {
        setNum(num / 100);
    }

    function changeSign() {
        if(num > 0) {
            setNum(-num);
        } else {
            setNum(Math.abs(num));
        }
    }

    function calculate() {
        alert('calculou');
    }
    
    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className='wrapper'>
                <Box m={12}/>
                    <h1 className='resultado'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentagem}>%</button>
                    <button className='orange'>/</button>
                    <button className='grey' onClick={inputNum} value={7}>7</button>
                    <button className='grey' onClick={inputNum} value={8}>8</button>
                    <button className='grey' onClick={inputNum} value={9}>9</button>
                    <button className='orange'>X</button>
                    <button className='grey' onClick={inputNum} value={4}>4</button>
                    <button className='grey' onClick={inputNum} value={5}>5</button>
                    <button className='grey' onClick={inputNum} value={6}>6</button>
                    <button className='orange'>-</button>
                    <button className='grey' onClick={inputNum} value={1}>1</button>
                    <button className='grey' onClick={inputNum} value={2}>2</button>
                    <button className='grey' onClick={inputNum} value={3}>3</button>
                    <button className='orange'>+</button>
                    <button className='grey' onClick={inputNum} value={0}>0</button>
                    <button style={{visibility: "hidden"}}>k</button> {/* Esse componente serve apenas para preencher um espaço em branco e ficar escondido, não delete ele */}
                    <button className='grey' onClick={inputNum} value={","}>,</button>
                    <button className='orange' onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    )
}