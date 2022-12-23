import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Axios from 'axios';
import Footer from '../components/footer';
import Header from '../components/header';

import '../css/profile.css'

const Profile = () => {

    const [userData, setUserData] = useState('');
    const navigate = useNavigate();
    
    useEffect(() =>{
        //checks if user is logged in else redirects to log in page
        Axios.get("http://localhost:3002/login").then((response) =>{
            if(response.data.loggedIn !== true){
                navigate('/login');
            }else{
                setUserData(response.data.user[0]);
            }
        })
    });

    function removeCookie(){
        // eslint-disable-next-line no-restricted-globals
        let logout = confirm("You are about to logout. Proceed?");

        if(logout){
            Axios.get("http://localhost:3002/logout").then((response) => {
                navigate('/');
            })
        }
    }

    return(
        <div className="Profile">
            <Header/>
            <div className="ProfileBody">
                <div className="Card">
                <div className="Details">
                    <h1 style={{margin:'0', padding:'0'}} className='Name'>{userData.Fname}</h1>
                    <div className="Line"></div>
                    <h2>Address: {userData.address}</h2>
                </div>
                <div className="Img">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#5A3E30" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <button className='pbtn logout' onClick={removeCookie}>Logout</button>
                </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profile;