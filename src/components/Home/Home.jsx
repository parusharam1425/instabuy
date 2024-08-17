import React from 'react';
import { Carousel, CarouselItem, Col, Row } from 'react-bootstrap';
import CarouselOne from '../../assets/carousel-1.png';
import CarouselTwo from '../../assets/carousel-2.png';
import CarouselThree from '../../assets/carousel-3.png';

import ProductOne from '../../assets/product-1.png';
import ProductTwo from '../../assets/product-2.png';
import ProductThree from '../../assets/product-3.png';
import ProductFour from '../../assets/product-4.png';
import ProductFive from '../../assets/product-5.png';
import ProductSix from '../../assets/product-6.png';

import { useNavigate } from 'react-router-dom';

import { Button } from 'react-bootstrap';
import './Home.css';

function Home({ user }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      // Navigate to product
       navigate('/products')
    } else {
      navigate('/login');
    }
  };

  return (
    <div className='home-container'>
      <Carousel>
        <CarouselItem>
          <Row className='carousel-row-container'>
            <Col xs={12} md={5}  className='carousel-col-container'>
              <div>
                <h4 className='carousel-text'>SHOP WITH UTMOST <br />
                  <span className='carousel-span-text'>STYLE</span>
                </h4>
                <p className='product-description'>Shop with latest trendy Products</p>
                <div>
                  <Button className='product-button' onClick={handleClick}>Product List</Button>
                </div>
                <h6 className='products-text'>Products available from:</h6>
                <div className='product-items'>
                  <img src={ProductOne} alt="product one" />
                  <img src={ProductTwo} alt="product two" />
                  <img src={ProductThree} alt="product three" />
                  <img src={ProductFour} alt="product four" />
                  <img src={ProductFive} alt="product five" />
                  <img src={ProductSix} alt="product six" />
                </div>
              </div>
            </Col>
            <Col xs={12} md={5} >
              <img className='instabuy-carousel-img' src={CarouselOne} alt="First slide" />
            </Col>
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row className='carousel-row-container'>
            <Col xs={12} md={5} className='carousel-col-container'>
              <h4 className='carousel-text'>SHOP WITH UTMOST <br />
                <span className='carousel-span-text'>STYLE</span>
              </h4>
              <p className='product-description'>Shop with latest trendy Products</p>
              <Button className='product-button' onClick={handleClick}>Product List</Button>
              <h6 className='products-text'>Products available from:</h6>
              <div className='product-items'>
                <img src={ProductOne} alt="product one" />
                <img src={ProductTwo} alt="product two" />
                <img src={ProductThree} alt="product three" />
                <img src={ProductFour} alt="product four" />
                <img src={ProductFive} alt="product five" />
                <img src={ProductSix} alt="product six" />
              </div>
            </Col>
            <Col xs={12} md={5}>
              <img className='instabuy-carousel-img' src={CarouselTwo} alt='Second slide' />
            </Col>
          </Row>
        </CarouselItem>
        <CarouselItem>
          <Row className='carousel-row-container'>
            <Col xs={12} md={5} className='carousel-col-container'>
              <h4 className='carousel-text'>SHOP WITH UTMOST <br />
                <span className='carousel-span-text'>DISCOUNTS</span>
              </h4>
              <p className='product-description'>Shop with latest trendy Products</p>
              <Button className='product-button' onClick={handleClick}>Product List</Button>
              <h6 className='products-text'>Products available from:</h6>
              <div className='product-items'>
                <img src={ProductOne} alt="product one" />
                <img src={ProductTwo} alt="product two" />
                <img src={ProductThree} alt="product three" />
                <img src={ProductFour} alt="product four" />
                <img src={ProductFive} alt="product five" />
                <img src={ProductSix} alt="product six" />
              </div>
            </Col>
            <Col xs={12} md={5}>
              <img className='instabuy-carousel-img' src={CarouselThree} alt="Third slide" />
            </Col>
          </Row>
        </CarouselItem>
      </Carousel>
    </div>
  );
}

export default Home;
