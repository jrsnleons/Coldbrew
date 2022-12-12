
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
                        <h1>COLD BREW TAGLINE</h1>
                        <button>SHOP NOW</button>
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
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur...</p>
                        <button>LEARN MORE</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default home

