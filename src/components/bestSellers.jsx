import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import Heading2 from '../components/heading2';
import chooseus from '../assets/choose_us.png'


const Styles = styled.div`
    .con{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .row1{
        align-content: center;
    text-align: center;
    justify-content: center;
    }
    .teamImg {
        justify-content: left;
      
    }
    .teamText h1 {
        margin-top: 20%;
    font-weight: 700;
    font-size: 36px;
    color: #f58634;
    margin-bottom: 20px
    }
    .teamText p {
        color: #666666;
   
    text-transform: none;
    font-weight: 400;
}
    
    

`;
export default function BestSellers() {
    return (
        <div>
              <Styles>
            <Container className="con">
                <Row className="row1 justify-content-md-center">
                    <Col  lg={6} md={12} sm={12} xs={12} className="teamText"><h1>Welcome to MU Stores</h1>
                    <p>MU Store is Pakistan's No.1 online Shopping store in Pakitan.We Serve you from 16 years.We have best Sallers of Pakistan. We Try of best to Deliver you the best Quality of your choosed goods.</p>
                    </Col>
                    <Col lg={6} md={12} sm={12} xs={12} ><img src={chooseus} alt=" Teams"  fluid /></Col>
                </Row>
            </Container>
        </Styles>
        </div>
    )
}
