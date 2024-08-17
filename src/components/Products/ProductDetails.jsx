import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Card } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';

import './Products.css'

function ProductDetails({ handleAddToCart, cartItems }) {
    const location = useLocation();
    const navigate = useNavigate();
    const { images, price, title, description, category, id } = location.state;
    const [otherProducts, setOtherProducts] = useState([]);
    // console.log(title)

    useEffect(() => {
        async function getOtherProducts() {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=10&offset=0`);
            setOtherProducts(response.data)
        }
        getOtherProducts();

    }, [])

    const addToCart = () => {
        if (id in cartItems) {
            const currentItem = cartItems[id];
            handleAddToCart({ [id]: { title, price, quantity: currentItem.quantity + 1 } })
        }
        else {
            handleAddToCart({ [id]: { title, price, quantity: 1 } })
        }
        navigate('/cart')
    }
    return (
        <div className='product-details-main-container'>
            <h5 className='product-details-title'>Prodect Dtails</h5>
            <Row>
                <Col lg={2} xs={12} className='product-details-images' >
                    {images.map((image, index) => {
                        return (
                            <div key={index}>
                                <img src={image} alt="image" width={100} style={{ borderRadius: 8, marginBottom: 20 }} />
                            </div>
                        )
                    })}
                </Col>
                <Col lg={5} xs={12}>
                    <div className='display-image-details'>
                        <img src={images[0]} width={270} alt="" style={{ borderRadius: 8, marginBottom: 20 }} />
                        <h5>{title}</h5>
                        <div className='product-price'>
                            ${price}
                        </div>
                        <p className='product-description'>
                            {description}
                        </p>
                        <Button className='add-tocart-button'
                            onClick={addToCart}>
                            Add to cart</Button>
                    </div>
                </Col>
                <Col lg={5} xs={12}>
                    <div className='products-under-section'>
                        <h4 className='product-main-title'>
                            Products under this category
                        </h4>
                       <Row>
                            {otherProducts.map((product) => {
                                if (product.id == id) return
                                return (
                                    <Col className="mb-4  card-container-one" key={product.id}>
                                        <Card className="shadow-sm product-card-container">
                                            <Card.Img
                                                variant="top"
                                                src={product.images[0]}
                                                alt={product.title.split(" ")[0]}
                                                className="product-card-img"
                                            />
                                            <Card.Body>
                                                <Card.Title className="product-card-title">{product.title}</Card.Title>
                                                <Card.Text className="product-card-price">${product.price}</Card.Text>
                                                <Button className='product-card-button' onClick={() => {
                                                    navigate(`/product/${product.id}`, { state: product })
                                                }}>View Item</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ProductDetails