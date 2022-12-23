import React from 'react'
import Axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Footer from '../components/footer';
import Header from '../components/header';

import '../css/register.css'

function Register() {

  const [userfnameReg, setfnameReg] = useState('');
  const [userEmailReg, setUserEmailReg] = useState('');
  const [userAddressReg, setUserAddressReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const [regStatus, setregStatus] = useState('');

  const register = () => {
    Axios.post("http://localhost:3002/register", {
      user_fname: userfnameReg,
      user_email: userEmailReg,
      user_address: userAddressReg,
      user_password: passwordReg,
    }).then((response) => {
      if(response.data.message){
        setregStatus(response.data.message);
      }else{
        setregStatus("noice");
      }
    });
    navigate("/login");
  };

  const formFilled = userfnameReg !== "" && userEmailReg !== "" && userAddressReg !== "" && passwordReg !== "";


  return (
    <div className='registerPage'>
      <Header/>
      <div className="registerBody">
        <form>
          <h1 className='Register'>Register</h1>
          <h1>{regStatus}</h1>
          <div className="longinput">
            <label>First Name</label>
            <div className="reg">
              <input 
                type="text"
                onChange={(e)=>{
                  setfnameReg(e.target.value);
                }}
                  required
                  
                />
            </div>
          </div>
          <div className="longinput">
            <label>Email</label>
            <div className="reg">
              <input 
                type="email"
                onChange={(e)=>{
                  setUserEmailReg(e.target.value);
                }}
                  required
                  
                />
            </div>
          </div>
          <div className="longinput">
            <label>Address</label>
            <div className="reg">
              <input 
                type="text"
                onChange={(e)=>{
                  setUserAddressReg(e.target.value);
                }}
                  required
                  
                />
            </div>
          </div>
          <div className="longinput">
            <label>Password</label>
            <div className="reg">
              <input 
                type="password" 
                onChange={(e)=>{
                  setPasswordReg(e.target.value);
                }}
                required
                
              />
            </div>
          </div>
          <p>Have an account? <Link to="/login">Login</Link></p>
          <button className='reg-btn' onClick={formFilled? register : null}>Register</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Register;