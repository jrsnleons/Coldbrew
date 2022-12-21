import Axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react'

import Header from '../components/header';
import Footer from '../components/footer';

import '../css/cart.css'
import { useNavigate } from 'react-router-dom';



function Cart() {

  const [userData, setUserData] = useState('');
  const [cartProd, setCartProd] =  useState('');
  const [total, setTotal] = useState('');

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
    console.log(userData.id);
    //gets the list of items in the user's cart
    Axios.post("http://localhost:3002/cart", {
      user_id: userData.id,
    }).then((response) =>{
      setCartProd(response.data.result);
      setTotal(response.data.res2[0].sum);
    })
  }, [navigate, userData.id]);
  



  return !cartProd ? null : ( 
    <div className='Cart'>
      <Header/>
      <div className="Cartbody">
        <div className="Container">
          <div className="Ctable">
            <table class="fixed_header">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartProd.map(product =>{
                  return(
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.quantity}</td>
                      <td>{product.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="Cbottom">
            <h1>TOTAL: {total}.00</h1>
            <button className='Cbtn'>CHECK OUT</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
};

export default Cart