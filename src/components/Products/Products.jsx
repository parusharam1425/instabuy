import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';

import './Products.css'
import { useNavigate } from 'react-router-dom';

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getProducts() {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20');
      setProducts(response.data);
      console.log(response.data);
    }
    getProducts();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Select the Products</h1>
      <Row>
        {products.map((product) => (
          <Col xs={12} sm={6} md={4} lg={3} className="mb-4" key={product.id}>
            <Card className="h-70 shadow-sm card-container">
              <Card.Img
                src={product.images[0]}
                alt={product.title}
                className="product-img"
              />
              <Card.Body>
                <Card.Title className="product-title">{product.title}</Card.Title>
                <Card.Text className="product-price">${product.price}</Card.Text>
                <Button onClick={() => {
                  navigate(`/product/${product.id}`, { state: product })
                }}>View Item</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Products;
