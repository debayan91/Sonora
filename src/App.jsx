import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Hero/Home.jsx';
import Signin from './assets/components/Hero/Signin.jsx';
import Products from './assets/components/Hero/Products.jsx';
import Login from './assets/components/Hero/Login.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};
export default App;
