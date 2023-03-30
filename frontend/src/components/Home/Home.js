import React from 'react';
import './Home.css';
// import { CgMouse } from 'react-icons/all';

const Home = () => {
  return (
    <>
      <div className='banner'>
        <p>Welcome to Ecommerce</p>
        <h1>Find Amazing products below</h1>

        <a href='#container'>
          <button>
            {/* Scroll <CgMouse /> */}
          </button>
        </a>
      </div>
    </>
  )
}

export default Home