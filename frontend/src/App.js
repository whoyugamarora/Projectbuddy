import React , { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './pages/Login/login';
import Dashboard from './pages/Dashboard/dashboard';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import Home from './pages/Home/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase  from '../src/pages/firebase';
import AccountPage from './pages/Account/account';
import Listings from './pages/Listings/listings';
import AddProjectForm from './pages/NewListing/newlisting';
import UserProfilePage from './pages/publicprofile/userprofilepage';



  function App() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
        setUser(user);
      })
    }, [])

  return (
    <>
      <Routes>
        <Route path='/' element = { <Home/> } />
        <Route path='/dashboard' element ={user ? <Dashboard user={user} /> : <Login/> } />
        <Route path='/about' element ={user ? <About user={user} /> : <Login/> } />
        <Route path='/listings'  element= {user ? <Listings user={user} /> : <Login/> } />
        <Route path='/contact-us' component={Contact} />
        <Route path='/myaccount' element= {user ? <AccountPage user={user} /> : <Login/> } />
        <Route path='/projects' element= {user ? <AddProjectForm user={user} /> : <Login/> } />
        <Route path='/profile/:userId' element={user ? <UserProfilePage user={user} /> : <Login/> } />
      </Routes>
     
    </>

    
  );
}

export default App;
