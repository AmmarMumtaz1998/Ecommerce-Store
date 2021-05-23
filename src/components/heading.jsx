import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .heading {
        display: flex;
        justify-content: center;
        position: relative;
        bottom: 50px;
    }
`;
export default function Heading1(props) {
    return (

        <Styles>
            <Container>
                <Row className='con'>
                    <Col lg={12} md={12} sm={12} className="heading"><h1>{props.title}</h1></Col>
                </Row>
            </Container>
        </Styles>

    )
}
