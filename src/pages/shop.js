import React, { useEffect } from 'react'

import Axios from 'axios';
import Footer from '../components/footer';
import Header from '../components/header';


import '../css/store.css'

function Store(){

    var prod;


    useEffect(()=>{
        Axios.get("http://localhost:3002/shop").then((res)=>{
            prod = res.data;    
        })
    })



    return(
    <div className="Shop">
        <Header/>
        <div className="ShopHead"></div>
        <div className="ShopBody">
            <div className="Products P1">
                <img src="./prod1.png" alt="" />
                <div className="bottom">
                <div className="description">
                    <h3>Creamy Latte</h3>
                    <h3>Php 80.00</h3>
                </div>
                <p>350 ml</p>
                </div>
            </div>
            <div className="Products P2">
                <img src="./prod2.png" alt="" />
                <div className="bottom">
                <div className="description">
                    <h3>Caramel Macchiato</h3>
                    <h3>Php 80.00</h3>
                </div>
                <p>350 ml</p>
                </div>
            </div>
            <div className="Products P3">
                <img src="./prod3.png" alt="" />
                <div className="bottom">
                <div className="description">
                    <h3>Dark Mocha</h3>
                    <h3>Php 80.00</h3>
                </div>
                <p>350 ml</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    )
}

export default Store;