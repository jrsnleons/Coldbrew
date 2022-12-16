import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import Axios from 'axios';
import Footer from '../components/footer';
import Header from '../components/header';


import '../css/store.css'

const  Shop = () => {

    const [prods, setProds] = useState('');



    useEffect(()=>{
        Axios.get("http://localhost:3002/shop").then((res)=>{   
            setProds(res.data);
        })
    },[]);


    return !prods ? null : (
    <div className="Shop">
        <Header/>
        <div className="ShopHead"></div>
        <div className="ShopBody">
            {prods.map(product =>{
                return(
                    <div className="Products P1" key={product.id}>
                        <img src={product.img} alt="" />
                        <div className="bottom">
                            <div className="description">
                                <h3>{product.name}</h3>
                                <h3>Php {product.price}</h3>
                            </div>
                            <p>350 ml</p>
                        </div>
                    </div>
                );
            })}
        </div>
        <Footer/>
    </div>
    )
}

export default Shop;