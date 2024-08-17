import React, { useState } from 'react';
import { Button, Col, Form, Row, Alert } from 'react-bootstrap';
import BuyImg from '../../assets/buy.png';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Signup({ setUser }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password || !userName) {
      setError('Please fill in all fields');
      return;
    }

    localStorage.setItem('userName', userName);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPassword', password);

    setUser({ userName, userEmail: email, userPassword: password });

    navigate('/');
  };

  return (
    <div className='login-container'>
      <Row className='justify-content-center'>
        <Col xs={12} md={6} lg={5}>
          <div className='login-card'>
            <h1>InstaBuy!</h1>
            <p>One place for all your needs</p>
            <Form onSubmit={handleSubmit}>
              <div className='login-inputs'>

                <Form.Group className='form-inputs'>
                  <Form.Control
                    className="custom-placeholder"
                    type='email'
                    placeholder='Enter Email'
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
              <div className='sign-form-input'>
                <Form.Group className='form-input'>
                  <Form.Control
                    className="custom-placeholder"
                    type='text'
                    placeholder='Enter Full Name'
                    value={userName}
                    onChange={(e) => setUserName(e.currentTarget.value)}
                  />
                </Form.Group>
              </div>
              <p className='error'>
                {error}
              </p>
              <div className='shopping-card'>
                <Button
                  className='shopping-button'
                  type='submit'
                >
                  Join the club
                </Button>
                <p>Already a member? <span className='span' onClick={() => navigate('/login')}>Click here!</span></p>
              </div>
            </Form>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <img src={BuyImg} alt="Sign Up Img" className='login-img' />
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
