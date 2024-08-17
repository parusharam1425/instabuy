import React from 'react';
import { Badge, Button } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../../assets/logo.png';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import CartImg from '../../assets/cart.png'

function Navbr({ user, setUser, cartItems }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // localStorage.removeItem('userName');
    // localStorage.removeItem('userEmail');
    // localStorage.removeItem('userPassword');
    setUser(null);
    navigate('/login');
  };

  return (
    <div className='nav-container'>
      <Navbar className="instabuy-navbar">
        <Navbar.Brand onClick={()=> navigate('/')} style={{ marginLeft: '1.7rem' }}>
          <img src={Logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt="logo" />{' '}
          InstaBuy!
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {user && (
            <div onClick={() => navigate('/cart')} style={{ position: 'relative', cursor: 'pointer' }}>
              <img src={CartImg} alt="Cart" style={{ width: '40px', height: '40px' }} />
              {Object.keys(cartItems).length > 0 && (
                <Badge bg="success" style={{ position: 'absolute', top: '-5px', right: '-5px' }}>
                  {Object.keys(cartItems).length}
                </Badge>
              )}
            </div>
          )}

          {user ? (
            <Button
              className='instabuy-login-button'
              onClick={handleLogout}
              style={{ marginRight: '1.7rem' }}
            >
              Logout
            </Button>
          ) : (
            <Button
              className='instabuy-login-button'
              onClick={() => navigate('/login')}
              style={{ marginRight: '1.7rem' }}
            >
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbr;
