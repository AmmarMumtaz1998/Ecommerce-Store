import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import Shose from '../assets/card1.jpg';



const Styles = styled.div`
   
    .card{
        width: 26rem;
        margin-top: 20%;
        padding: 20%;
    }
    .card:hover {
        box-shadow: 5px 10px 20px 1px rgba(0,0,0,253)!important;
    }
    
    .cardText {
        font-size: 0.9rem;
       
    }
    .cardImg{
        transform: scale(1);
        transition: transform 0.5s ease; 
    }
    .cardImg:hover{
        transform: scale(1.8);
    }
    .overflow {
        overflow: hidden;
    }

`;


export default function Cards(props) {
   
    return (

        <Styles>
                
            <Card className="card" >
                <div className="overflow">
                    <img src={props.img} alt="Shose Picure" className="cardImg" fluid />
                </div>
                <Card.Body className="card-body">
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text className="cardText">
                       Price: {props.price}$
    </Card.Text>
                    
                </Card.Body>
            </Card>
        </Styles>
    )
}
