import React from 'react'

import Header from '../components/header';
import Footer from '../components/footer';

import '../css/cart.css'

const cart = () => {
  return (
    <div className='Cart'>
      <Header/>
      <div className="Cartbody">
        <div className="Container">
          <div className="Ctable">
          <table class="fixed_header">
  <thead>
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>row 1-0</td>
      <td>row 1-1</td>
      <td>row 1-2</td>
    </tr>
    <tr>
      <td>row 1-0</td>
      <td>row 1-1</td>
      <td>row 1-2</td>
    </tr>
    <tr>
      <td>row 1-0</td>
      <td>row 1-1</td>
      <td>row 1-2</td>
    </tr>
    <tr>
      <td>row 1-0</td>
      <td>row 1-1</td>
      <td>row 1-2</td>
    </tr>
    <tr>
      <td>row 1-0</td>
      <td>row 1-1</td>
      <td>row 1-2</td>
    </tr>
    <tr>
      <td>row 1-0</td>
      <td>row 1-1</td>
      <td>row 1-2</td>
    </tr>
    <tr>
      <td>row 1-0</td>
      <td>row 1-1</td>
      <td>row 1-2</td>
    </tr>
    <tr>
      <td>row 1-0</td>
      <td>row 1-1</td>
      <td>row 1-2</td>
    </tr>
    <tr>
      <td>row 1-0</td>
      <td>row 1-1</td>
      <td>row 1-2</td>
    </tr>
  </tbody>
</table>
          </div>
          <div className="Cbottom">
            <h1>TOTAL: </h1>
            <button className='Cbtn'>CHECK OUT</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default cart