
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur 

        pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. 
        <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
        </div>
        <div className='AboutImg'>
            <img height={550} width={780} src='https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg'></img>
            &nbsp&nbsp&nbsp
            <img height={550} width={780} src='https://images.pexels.com/photos/302898/pexels-photo-302898.jpeg'></img>
        </div>
        <Footer/>
    </div>
    )
};

export default about