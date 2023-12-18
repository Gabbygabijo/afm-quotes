import React from 'react'

const Footer = () => {
    const date = new Date().getFullYear();

  return (
    <div className='footer'>
        <p><a href="https://gabijo-portfolio.netlify.app/" target="_blank" rel="noopener noreferrer">Gabbygabijo</a> &copy; {date}</p>
    </div>
  )
}

export default Footer