
import React from 'react'


import Header from '../components/header';
import Footer from '../components/footer';

import '../App.css'

const home = () => {
    return (
        <div className="homePage">
            <Header/>
            <div className='home'>
                <div className="first">
                    <div className="text">
                        <h1>From bean to cup, we pour our heart into every brew.</h1>
                        <a href='/shop'><button>SHOP NOW</button></a>
                    </div>
                </div>
                <div className="second background-tint">
                    <div className="inner">
                        <h1>BEST SELLING</h1>
                    </div>
                    <div className="shop">
                        <h2>SHOP NOW</h2>
                    </div>
                    <div className="products">
                        <div className="prod p1">
                            <img src="./prod1.png" alt="" />
                            <h2>Dark Mocha</h2>
                        </div>
                        <div className="prod p2">
                            <img src="./prod2.png" alt="" />
                            <h2>Creamy Latte</h2>
                        </div>
                        <div className="prod p3">
                            <img src="./prod3.png" alt="" />
                            <h2>Caramel Macchiata</h2>
                        </div>
                    </div>
                </div>
                <div className="third">
                    <div className="about">
                        <h1>ABOUT US</h1>
                        <p>Learn about the inspirations and reasons on why we embarked on this coffee journey.</p>
                        <a href='/about'><button>LEARN MORE</button></a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>    )
};

export default home

