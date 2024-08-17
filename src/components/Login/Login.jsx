import React, { useState } from 'react';
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import Logo from '../../assets/logo.png';
import MegaSale from '../../assets/megasale.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please enter email and password');
      return;
    }

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      setUser(email);
      navigate('/products');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className='login-container'>
      <Row className='justify-content-center'>
        <Col xs={10} md={6} lg={5} >
          <div className='login-card'>
            <div className='d-flex logo-card'>
              <img className='logo' src={Logo} alt="logo" height={30} />
              <h3 className='logo-name'>InstaBuy!</h3>
            </div>
            <h1>InstaBuy!</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt.</p>
            <Form onSubmit={handleSubmit}>
              <div className='login-inputs'>
                <Form.Group className='form-inputs'>
                  <Form.Control
                    className="custom-placeholder"
                    type='email'
                    placeholder='Enter Name/Email'
                    value={email}
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                </Form.Group>
                <Form.Group className='form-inputs'>
                  <Form.Control
                    className="custom-placeholder"
                    type='password'
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                </Form.Group>
              </div>
              <p className='error'>{error}</p>
              <div className='shopping-card'>
                <Button
                  className='shopping-button'
                  type='submit'
                >
                  Start Shopping
                </Button>
                <p>Join the club <span className='span' onClick={() => navigate('/signup')}>Click here!</span></p>
              </div>
            </Form>
          </div>
        </Col>
        <Col xs={10} md={6}>
          <img src={MegaSale} alt="login Img" className='login-img' />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
