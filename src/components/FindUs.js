import React from 'react';

import './styling/findUs.scss';
import ig from '../photos/igTri.svg';
import wp from '../photos/whatsappTri.svg';
import sp from '../photos/shopeeTri.svg';


const FindUs = () => {

  return (
    <div className="findUsContainer">
      <div className="iconsContainer">
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/projectmemoire.id/" className="aCon">
          <img src={ig} className="triSvg" alt="ig" />
          <p>explore our page at instagram to look at captures of our projects!</p>
        </a>
        <a target="_blank" rel="noreferrer" href="http://shopee.co.id/projectmemoire.id" className="aCon">
          <img src={sp} className="triSvg" alt="sp" />
          <p>find our shop at shopee to explore our projects there!</p>
        </a>
        <a target="_blank" rel="noreferrer" href="https://wa.me/message/COYJJNXLLBDUF1" className="aCon">
          <img src={wp} className="triSvg" alt="wp" />
          <p>chat with us for further information, purchases, and personal customization!</p>
        </a>
      </div>
    </div>
  )
}

export default FindUs;