import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Axios from 'axios';
import Footer from '../components/footer';
import Header from '../components/header';


import '../css/store.css'

const  Shop = () => {

    const [prods, setProds] = useState('');
    const [modal, setModal] = useState([]);
    const [counter, setCounter] = useState(1);
    const [poptoggle, setpoptoggle] = useState(false); 
    const [usrData, setUsrData] = useState('');
    const [checklogin, setchecklogin] = useState(false);

    const getData = (product) => {
        setModal([product]);
        setpoptoggle(!poptoggle);
    }
    
    const minus = () =>{
        if(counter!=1){
            setCounter(counter-1);
        }
    }
    const plus = () =>{
        if(counter!=9){
            setCounter(counter+1);
        }
    }

    const navigate = useNavigate();


    useEffect(()=>{
        Axios.get("http://localhost:3002/shop").then((res)=>{   
            setProds(res.data);
        })

        Axios.get("http://localhost:3002/login").then((response) =>{
            if(response.data.loggedIn === true){
                setUsrData(response.data.user[0]);
                setchecklogin(true);
            }else{

            }
        })

    },[]);


    const addtocart = () => {
        if(checklogin == false){
            navigate("/login");
        }else{
            
            
            Axios.post("http://localhost:3002/addcart", {
                user_id: usrData.id,
                prod_id: modal[0].id,
                quantity: counter,
            }).then((res) => {
                console.log(res.data);
            });
        }
    }

    return !prods ? null : (
    <div className="Shop">
        <Header/>
        <div className="ShopHead">
            <h1>SHOP</h1>
        </div>
        <div className="ShopBody">
            {prods.map(product =>{
                return(
                    <button className='Btn' onClick={()=>getData(product)}>
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
                    </button>
                );
            })}
            {poptoggle&&( <div className="Modal_container">
                <div className="Decoy" onClick={getData}></div>
                <div className="Modal_body">
                <div className="Modal_header">
                    <button className='Close' onClick={()=> {getData(); setCounter(1)}}>x</button>
                </div>
                {modal.map((pop)=>{
                    return(
                        <div className="Modal" key={pop.id}>
                            <div className="Modal_img">
                                <img src={pop.img} alt="" />
                            </div>
                            <div className="Modal_content">
                                <h1>{[pop.name]}</h1>
                                <p>350 ml</p>
                                <h2>Php {pop.price}</h2>
                                <div className="Content_bottom">
                                    <div className="Quantity">
                                        <p style={{margin:'0 15px 0 0'}}>Quantity: </p>
                                        <button className='Bton Minus' onClick={minus}>-</button>
                                        <div className="Count">
                                            <p>{counter}</p>
                                        </div>
                                        <button className='Bton Plus' onClick={plus}>+</button>
                                    </div>
                                    <button className="Add_cart" onClick={()=>addtocart()}>Add to Cart</button>
                                </div>
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