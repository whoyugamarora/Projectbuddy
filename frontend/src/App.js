import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/login';
import Register from './pages/Register/register';
import Reset from './pages/Reset/reset';
import Dashboard from './pages/Dashboard/dashboard';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element ={<Login />} />
        <Route path='/register' element ={<Register />} />
        <Route path='/reset' element ={<Reset />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/about' element ={<About />} />
        <Route path='/services' element ={<Services />} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/dashboard' component={<Dashboard />} />
      </Routes>
    </>
  );
}
export default App;
