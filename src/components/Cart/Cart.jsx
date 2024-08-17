import React, { useEffect, useState } from 'react'
import { Button, Col, Row, Table } from 'react-bootstrap';
import Logo from '../../assets/6.png';
import './Cart.css'
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems }) {
  // console.log(cartItems)
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const navigate = useNavigate()

  useEffect(() => {
    let tempPrice = 0;
    let tempQuantity = 0;

    Object.keys(cartItems).map((cartItemId) => {
      const details = cartItems[cartItemId];
      tempQuantity += details.quantity;
      tempPrice += details.quantity * details.price;
    });
    setTotalQuantity(tempQuantity);
    setTotalPrice(tempPrice);

  }, [])

  return (
    <div >
      <Row>
        <Col lg={6} style={{padding:100}} >
          <h5>
            Your Cart :
          </h5>
          <Table>
            <thead>
              <tr>
                <td>Name</td>
                <td>Quantity</td>
                <td>Price</td>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cartItems).map((cartItemId) => {
                const itemDetails = cartItems[cartItemId];
                return (
                  <tr key={cartItemId}>
                    <td>{itemDetails.title}</td>
                    <td>{itemDetails.quantity}</td>
                    <td>{itemDetails.price}</td>

                  </tr>
                )
              })}
              <tr>
                <td>Total Price</td>
                <td>{totalQuantity}</td>
                <td>{totalPrice}</td>
              </tr>
            </tbody>
          </Table>
          <Button onClick={()=>{
            console.log("Checkout Button Clicked");
            navigate('/checkout')
          }}>Check out</Button>
        </Col>
        <Col lg={6}>
          <img src={Logo} alt="" className='side-image' />
        </Col>
      </Row>
    </div>
  )
}

export default Cart