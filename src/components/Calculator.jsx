import React from 'react';
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/system';

export default function Calculator() {
    return (
        <div>
            <Box m={5}/>
            <Container maxWidth="xs">
                <div className='wrapper'>
                <Box m={12}/>
                    <h1 className='resultado'>01</h1>
                    <button>AC</button>
                    <button>+/-</button>
                    <button>%</button>
                    <button className='orange'>/</button>
                    <button className='grey'>7</button>
                    <button className='grey'>8</button>
                    <button className='grey'>9</button>
                    <button className='orange'>X</button>
                    <button className='grey'>4</button>
                    <button className='grey'>5</button>
                    <button className='grey'>6</button>
                    <button className='orange'>-</button>
                    <button className='grey'>1</button>
                    <button className='grey'>2</button>
                    <button className='grey'>3</button>
                    <button className='orange'>+</button>
                    <button className='grey'>0</button>
                    <button style={{visibility: "hidden"}}>=</button>
                    <button className='grey'>,</button>
                    <button>=</button>
                </div>
            </Container>
        </div>
    )
}