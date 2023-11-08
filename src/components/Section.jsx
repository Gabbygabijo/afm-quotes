import React from 'react';
import { BiLogoInstagram } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';

const Section = () => {
  const items = [
    {
      id : 1,
      icon : <BiLogoInstagram />,
      text : 'Abeg follow us on instagram',
      etc : <BsThreeDots />,
      link : `https://instagram.com/afmquotes`
    },
    {
      id : 2,
      icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge" viewBox="0 0 16 16">
      <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
    </svg>,
      text : 'Abeg follow us on firebase',
      etc : <BsThreeDots />,
      link : 'https://www.tiktok.com/@afm_quotes'
    },
    {
      id : 3,
      icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>,
      text : 'Abeg follow us on X',
      etc : <BsThreeDots />,
      link : `https://www.x.com/@AfmQuotes`
    },
    {
      id : 4,
      icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>,
      text : 'Abeg follow us facebook',
      etc : <BsThreeDots />,
      link : `https://www.facebook.com/profile.php?id=61553112635158&mibextid=LQQJ4d`
    },
    {
      id : 5,
      icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>,
      text : 'Add us on snapchat',
      etc : <BsThreeDots />,
      link : `https://t.snapchat.com/IhExlx26`
    },
    {
      id : 6,
      icon : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16">
      <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg>,
      text : 'Message us on whatsapp',
      etc : <BsThreeDots />,
      link : `http://wa.me/+2348165806427/`
    }
    
  ]
  return (
    <section>
      <p>The rest goes here...</p>
      <BiLogoInstagram />
      <div className="list">
        <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.link} target='blank'>
              <p>
              {item.icon}
              </p>
              <p>{item.text}</p>
              <p className='etc'>{item.etc} </p>
            </a>
          </li>
        ))}
        </ul>
      </div>
    </section>
  )
}

export default Section