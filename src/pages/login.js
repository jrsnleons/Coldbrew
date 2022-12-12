import React from 'react'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/footer';
import Header from '../components/header';


const login = () => {
  return (
    <div className="loginPage">
      <Header/>
      <div className="loginBody">
        <h1>Login</h1>
        <h1>{}</h1>
      </div>
      <Footer/>
    </div>
  )
}

export default login