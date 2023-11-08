import React from 'react';
import { useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'

const Header = (prop) => {
  const [ toggle, setToggle ] = useState(false)
  const handleBounce = () => {
    setToggle(!toggle);
  };
  return (
    <header className="App-header" onScroll={handleBounce}>
      <div className={`${toggle ? 'minn' : 'min'}`}>
        <div className='smt' onClick={handleBounce}>
          <BsThreeDots />
        </div>
      </div>
      <div onClick={handleBounce} className={`${toggle ? 'hidden' : 'hid'}`}>
        <a href="#main" target='blank'>
          <img src={prop.logo} alt="" />
        </a>
        <a href="#main">
          <BsThreeDots />
        </a>
      </div>
      <img src={prop.logo} alt="" />
      <p className='logo-text'>AFM</p>
      <div className="main">
        <p>Quoats & Write ups</p>
        <h2>-opera_mills</h2>
      </div>
    </header>
  )
}

export default Header