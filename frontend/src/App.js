import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
<<<<<<< HEAD
import Home from './pages';
=======
import Dashboard from './pages/Dashboard/dashboard';
>>>>>>> 606389e7b8b4d2bc176eae800c5564befdd1a3d2
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element ={<Dashboard />} />
        <Route path='/about' element ={<About />} />
        <Route path='/services' element ={<Services />} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
      </Routes>
<<<<<<< HEAD
    </Router>
=======
    </>
>>>>>>> 606389e7b8b4d2bc176eae800c5564befdd1a3d2
  );
}
export default App;
