import React from 'react';
import Navbar from '../../components/Navbar/index';
import ReactDOM from 'react';
import { auth } from "../firebase";
import './listings.css';

const Listings = ({ user }) => {

    return (
        <>
            <Navbar />
            <br />
            <div className="listingswrapped">
                <h2>ProjectBuddy Listings</h2>
                <div className='listings'>

                </div>
            </div>
        </>
    );
};

export default Listings;
