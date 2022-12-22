
import React from 'react'

import Header from '../components/header';
import Footer from '../components/footer';


import '../css/about.css'
const about = () => {
    return (
    <div className='About'>
        <Header/>
        <div className='AboutBack'>
            <div className='AboutBody'>
                OUR STORY
            </div>
        </div>
        <div className='AboutWords'>
        Our journey began when we fell in love with the unique flavors and aromas of specialty coffee while traveling abroad. We were inspired to bring these exceptional beans back home and share them with our community.

We source our beans directly from small-scale, ethical coffee farms around the world, working with farmers to ensure that they are paid a fair price for their hard work. Our beans are then roasted in small batches by our team of expert roasters, using state-of-the-art equipment to bring out the unique flavors and aromas of each bean.
<br></br><br></br>
In our café, we offer a variety of brewing methods, including pour-over, Chemex, French press, cold brew, as well as nitro cold brew on tap.

Thank you for choosing to support our small business and for helping us bring the joy of specialty coffee to our community.
        </div>
        <div className='AboutImg'>
            <img height={550} width={780} src='https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg'></img>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img height={550} width={780} src='https://images.pexels.com/photos/302898/pexels-photo-302898.jpeg'></img>
        </div>
        <Footer/>
    </div>
    )
};

export default about