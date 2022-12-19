import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


import Axios from 'axios';
import Footer from '../components/footer';
import Header from '../components/header';


import '../css/store.css'

const  Shop = () => {

    const [prods, setProds] = useState('');
    const [modal, setModal] = useState([]);
    const [poptoggle, setpoptoggle] = useState(false); 
    const getData = (product) => {
        setModal([product]);
        setpoptoggle(!poptoggle);
       }


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
                    <button className='Btn' onClick={()=>getData(product)}>
                    <div className="">
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
                    </div>
                    </button>
                );
            })}
            {poptoggle&&( <div className="Modal_container">
                <div className="Decoy" onClick={getData}></div>
                <div className="Modal_body">
                <div className="Modal_header">
                    <button className='Close' onClick={getData}>x</button>
                </div>
                 {modal.map((pop)=>{
                      return(
                      <div className="Modal" >
                        <div className="Modal_img">
                        <img src={pop.img} alt="" />
                        </div>
                        <div className="Modal_content">
                       <p>{[pop.name]}</p>
                       <p>I'll finish toms.</p>
                       </div>
                      </div>
                      )
                })}
            </div>
            </div>
            )}
        </div>
        <Footer/>
    </div>
    )
}

export default Shop;