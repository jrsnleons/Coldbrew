import '../App.css'
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react'
import Axios from 'axios'

const Header = () =>{


    const [user, setUser] =  useState('');

    Axios.defaults.withCredentials = true;

    useEffect(()=>{
        Axios.get("http://localhost:3002/login").then((response) =>{
            console.log(response);
            if(response.data.loggedIn === true){
                setUser(response.data.user[0].Fname);
            }else{
                setUser('User');
            }

        })
    }, [])

    const toProfile = (() => {
        if(user === 'User'){
            return "/login";
        }else{
            return "/about";
        }
    })

    return(
            <header>
                <div className='header'>
                    <a href='/home' className='Headerlink'>
                    <div className="left">
                    <img src="./logo.png" alt=""></img>
                    <h2>COLD BREW</h2>
                    </div>
                    </a>
                    <div className='Right'>
                        <Link to="/about">About</Link>
                        <Link to="/shop">Store</Link>
                        <Link to="/cart">Cart</Link>
                        <Link to={toProfile()}>{user}</Link>
                    </div>
                </div>
            </header>
    )
}

export default Header