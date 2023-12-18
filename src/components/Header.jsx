import React from 'react';
import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import mainLogo from '../imgs/AFM_main.jpg'

const Header = (prop) => {
  const [ toggle, setToggle ] = useState(false)
  const handleBounce = () => {
    setToggle(!toggle);
  };
  return (
    <header className="App-header" onScroll={handleBounce}>
      <div className={`${toggle ? 'minn' : 'min'}`}>
        <div className='smt' onClick={handleBounce}>
          <BsThreeDots className='dots' />
        </div>
      </div>
      <div onClick={handleBounce} className={`${toggle ? 'hidden' : 'hid'}`}>
        <a href='#main'>
          <img src={prop.logo} alt="" />
        </a>
        <a href="#main">
          <BsThreeDots classname='dots'/>
        </a>
      </div>
      <img src={mainLogo} alt="" />
      <div className="main">
        <h2>@afm_quotes</h2>
        <p className='logo-text'>A short saying often contains much Wisdom.</p>
      </div>
    </header>
  )
}

export default Header