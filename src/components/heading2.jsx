import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .heading {
        position: relative;
        top: 50px;
        font-weight: bolder;
        text-transform: uppercase;
    }
    .bottomText {
        font-size: 65px;
    }
`;

export default function Heading2(props) {
    return (
        <Styles>
            <Container>
                <Row className='con'>
                    <Col lg={12} md={12} sm={12} className="heading"><h1>{props.title}<br/><span className="bottomText">{props.title2}</span></h1></Col>
                </Row>
            </Container>
        </Styles>
    )
}
