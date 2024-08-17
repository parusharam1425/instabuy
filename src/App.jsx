import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Login/Signup'
import Navbr from './components/Navbr/Navbr'
import { useState, useEffect } from 'react'
import Products from './components/Products/Products'
import ProductDetails from './components/Products/ProductDetails'
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout'

function App() {
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({});

  const handleAddToCart = (item) => {
    setCartItems({ ...cartItems, ...item })
  }
  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setUser(userEmail);
    }
  }, [])
  return (
    <>
      <Navbr user={user} setUser={setUser} cartItems={cartItems} />
      <Routes>
        <Route path='/' element={<Home user={user} />} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems} />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>


    </>
  )
}

export default App
