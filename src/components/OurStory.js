import React from 'react';

import './styling/ourStory.scss';
import Logo from '../photos/Logo.png';

const OurStory = () => {

  return (
    <div className="ourStoryContainer">
      <div className="ourStoryInnerCon">
        <img alt="Our Story Logo" src={Logo}></img>
        <p>It all started when we saw the faces of our loved ones lit up as we gave them specially handmade gifts 
          containing small bits of our memories inside. They were gleaming with joy as 
          they opened their gift box filled with special pictures, letters, and personal aesthetic touches to cherish the moment.
          <br/>
          <br/>
          We believe that personalized and memorable gifts are truly an irreplacable one. 
          So, we want you and your loved ones to be able to experience the magic of personalized and memorable gifts with us.</p>
      </div>
    </div>
  )
}

export default OurStory;