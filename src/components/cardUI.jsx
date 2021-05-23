import React from 'react';
import Card from '../components/card';
import {Container, Row, Col} from 'react-bootstrap';
import styled from 'styled-components';
import useFetchProducts from '../components/useFetchProduct';


const Styles = styled.div`
    
    .con {
        padding: 20px 0px 20px 0px;
    }
    .row {
        display: flex;
        justify-content: center;   
    }
   .center {
    margin-top: 25px;
    display: flex;
    justify-content: center;
   }
   .sty {
    background-color: #e1e5ea;
   }
   
`;
export default function CardUI() {
  const [products, loading] = useFetchProducts();
    
  if(loading) {
      return(
          <div>Loading...</div>
      )
  }

  return (
    <>
  { products.map((product, index) => {
    return (
             <Styles>
           <section className="sty">
           <Container className="con" >
  <Row className='row'>
    <Col xs={12} lg={3} md={4} sm={6} className="center"><Card img={product.image} title={product.title} price={product.price} /></Col>
  </Row>
</Container>
</section>
       </Styles>
  // <div>
  //   <Container style={{display: "inline-flex"}}>
  //     <Row>
  //       <Col xs={12} sm={6} md={4} lg={3}>
  //         <Card style={{ width:"26rem" , marginTop: "20%" , padding: "20%"}}> 
  //         <Card.Img variant="top" src={product.image} style={{height:"370px"}} />
  //         <Card.Body>
  //           <Card.Title>
  //             {product.title}
  //           </Card.Title>
  //           <Card.Text>
  //             price: {product.price}
  //           </Card.Text>
  //         </Card.Body>
  //         </Card>  
  //       </Col>
  //     </Row>
  //   </Container>
  // </div>
)
    })}
   </>
   )
  }
