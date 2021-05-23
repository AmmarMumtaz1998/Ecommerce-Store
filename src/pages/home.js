import React from 'react';
import CardUI from '../components/cardUI';
import Heading1 from '../components/heading';
import BestSellers from '../components/bestSellers';

import styled from 'styled-components';

const Styles = styled.div`
    
`;
export default function Home() {
    return (
        <Styles>
            <Heading1 title="Our Products" />
            <CardUI />
            <BestSellers />
        </Styles>
    );
}

