import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col,ListGroup} from 'react-bootstrap';

    const Styles =styled.div`
    .row {
        display: flex;
        justify-content: center;
        padding: 50px 0px ;
        
    }
    .bg {
        background-color: #7868e6;
    }
    
    .input {
        border-radius: 20px;
        border: none;
        padding: 3px;
        margin-left: 5px;
    }
    .input::placeholder {
        padding: 3px;

    }
    .input:focus{
        outline: none;
       
    }
    .list-group-item {
        background-color: transparent;
border-top: 1px solid #ddd;
border-radius: 0;
color: #fff;
    }
    h2 {
        color: #fff;
    }
    .mu-store {
        font-size: 50px;
    }
    p {
        font-weight: lighter;
        color: #fff;
    }
    .text-center {
        border-top: 2px solid black;
        padding: 5px 0px 5px 0px ;
    }
    .copyCol{
        padding-top: 10px;
    }
   

    `;

export default function Footer() {
    return (
        <Styles>
            <section className="bg">
            <Container>
  <Row className="row">
    <Col lg={6} md={6} sm={6} xs={6}>
        <ListGroup class="list" variant="flush">
  <h2>Contact Info</h2>
  <ListGroup.Item><strong>Email: </strong>mu.store@info.com</ListGroup.Item>
  <ListGroup.Item><strong>Phone: </strong>+92 3085715723</ListGroup.Item>
  <ListGroup.Item><h2>Opening Hours</h2></ListGroup.Item>
  <ListGroup.Item>mon-fri <span style={{float:"right"}}>09am-05pm</span></ListGroup.Item>
  <ListGroup.Item>sat <span style={{float:"right"}}>09am-01pm</span></ListGroup.Item>
  <ListGroup.Item>sun <span style={{float:"right"}}>Close</span></ListGroup.Item>
</ListGroup>
</Col>
    <Col lg={3} md={6} sm={6} xs={6}>
    <ListGroup variant="flush">
  <h2>Our Major Products</h2>
  <ListGroup.Item variant="primary">Men</ListGroup.Item>
  <ListGroup.Item action variant="secondary">
    Women
  </ListGroup.Item>
  <ListGroup.Item action variant="success">
    Adults
  </ListGroup.Item>
  <ListGroup.Item action variant="danger">
    Teenagers
  </ListGroup.Item>
  <ListGroup.Item action variant="warning">
    Kids
  </ListGroup.Item>
</ListGroup>
    </Col>
    <Col className="center" lg={3} md={6} sm={6} xs={6}>
        <h2 class="mu-store">MU Stores</h2>
        <p>Fashion gives us a Power to face the world with full of confidence and live something better. It develops in us a perspective of looking at life. It helps us build opinions and have points of view on things in life.</p>
        <br/>
        <p>Please write your email and get our amazing updates, news and support*</p>
        <input type="text" placeholder="place your text Here!" className="input" />
    </Col>
  </Row> 
</Container>
    <Container fluid>
        <Row className="text-center">
            <Col className="copyCol">
            <p>&#169; copyright 2021.All Rights are reserved by MU store.</p>
            </Col>
        </Row>
    </Container>
</section>


        </Styles>
    )
}
