import '../App.css'

import { useEffect, useState } from 'react'
import Axios from 'axios'

const Header = () =>{


    const [user, setUser] =  useState('');

    useEffect(()=>{
        Axios.get("http://localhost:3002/login").then((response) =>{
            console.log(response);
            if(response.data.loggedIn === true)
            setUser(response.data.user[0].Fname);
        })
    }, [])

    return(
            <header>
                <div className='header'>
                    <div className="left">
                    <img src="./logo.png" alt=""></img>
                    <h2>COLD BREW</h2>
                    </div>
                    <div className='right'>
                        <a href='#'>About</a>
                        <a href='#'>Store</a>
                        <a href='#'>Cart</a>
                        <a href='#'>{user}</a>
                    </div>
                </div>
            </header>
    )
}

export default Header