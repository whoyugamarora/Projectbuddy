import React from 'react';
import Navbar from '../../components/Navbar/index';
import ReactDOM from 'react';
import { auth } from "../firebase";
import './account.css';

const AccountPage = ({ user }) => {

    return (
        <>
            <Navbar />
            <br />
            <div className="account-page">
                <h2>{user.displayName}'s Profile</h2>
                <div className='account'>
                    <div className='accountimg'>
                        <img src={user.photoURL} alt={user.name} />
                    </div>
                    <div className='accountskills'>
                        <h3>Skills:</h3>
                        <ul>
                           <li>HTML</li>
                           <li>CSS</li>
                           <li>JavaScript</li>
                           <li>Java</li>
                           <li>NodeJS</li>
                        </ul>
                        <h3>Postings:</h3>
                        <ul>
                            {/* {postings.map((posting) => (
          <li key={posting.id}>{posting.title}</li>
        ))} */}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountPage;
