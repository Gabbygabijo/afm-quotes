import React from 'react';
import { BiLogoInstagram } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs';
import { BsTiktok } from 'react-icons/bs';
import { RiTwitterXFill } from 'react-icons/ri';
import { BsFacebook } from 'react-icons/bs';
import { BsSnapchat } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs'

const Section = () => {
  const items = [
    {
      id : 1,
      icon : <BiLogoInstagram />,
      text : 'Follow us on instagram',
      etc : <BsThreeDots />,
      link : `https://instagram.com/afmquotes`
    },
    {
      id : 2,
      icon : <BsTiktok />,
      text : 'You can follow us on TikTok',
      etc : <BsThreeDots />,
      link : 'https://www.tiktok.com/@afm_quotes'
    },
    {
      id : 3,
      icon : <RiTwitterXFill />,
      text : 'You can follow us on X',
      etc : <BsThreeDots />,
      link : `https://www.x.com/@AfmQuotes`
    },
    {
      id : 4,
      icon : <BsFacebook />,
      text : 'You can follow us facebook',
      etc : <BsThreeDots />,
      link : `https://www.facebook.com/profile.php?id=61553112635158&mibextid=LQQJ4d`
    },
    {
      id : 5,
      icon : <BsSnapchat />,
      text : 'Add us on snapchat',
      etc : <BsThreeDots />,
      link : `https://t.snapchat.com/IhExlx26`
    },
    {
      id : 6,
      icon : <BsWhatsapp />,
      text : 'Message us on whatsapp',
      etc : <BsThreeDots />,
      link : `http://wa.me/+2348165806427/`
    }
    
  ]
  return (
    <section>
      <div className="list">
        <ul>
        {items.map((item) => (
          <li key={item.id}>
            <a href={item.link} target='blank'>
              <p className='icon'>
              {item.icon}
              </p>
              <p>{item.text}</p>
              <p className='etc icon'>{item.etc} </p>
            </a>
          </li>
        ))}
        </ul>
      </div>
    </section>
  )
}

export default Section