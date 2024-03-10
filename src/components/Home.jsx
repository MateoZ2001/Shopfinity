import React from 'react'
import Navbar from './Navbar'
import Products from './Products'

export default function Home() {
  return (
    <div className='hero'>
        <div class="card bg-dark text-white border-0">
  <img src="/assets/bg.jpg" class="card-img" alt="Background" height="450px"/>
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container text-dark">
    <h5 className="card-title display-3 fw-bolder mb-0">New Items coming up!</h5>
    <p className="card-text">CHECK OUT OUR TRENDS</p>
    
    </div>
    
  </div>
</div>
    <Products/>
    </div>
  )
}
