import React from 'react';
import {Jumbotron as Jumbo, Container, Button} from 'react-bootstrap';
import styled from 'styled-components';
import Bg from '../assets/bg.jpg';

const Styles = styled.div`
.jumbo {
    background: url(${Bg}) no-repeat fixed bottom;
    background-size: cover;
    color: white;
    height: 350px;
    position: relative;
    z-index: -2;
}

.overlay{
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
.con {
    text-align: center;
    padding-top: 5%;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 0;
}
.title {
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 0;
}
.btn {
    padding: 15px 25px;
    font-size: 14px;
    text-align: center;
    
    outline: none;
    color: #fff;
    background-color: #f58634;
    border: none;
    border-radius: 15px;
    margin-top: 20px;
}
.btn:hover {
    background-color: #A3CB38;

}
`;

export default function Jumbotron(props) {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="con">
                    <h1 className="title">{props.title}</h1>
                    <p>Pakistan's No.1 Online Shopping Plateform.</p>
                </Container>
            </Jumbo>
            <Button variant="outline-success" style={{position: "relative", top:"-150px", left:"46%"}}>Latest</Button>

        </Styles>
    )
}
