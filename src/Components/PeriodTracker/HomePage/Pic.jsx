import React from "react";
import image1 from '../../../images/image1.jpg'
import image4 from '../../../images/image4.jpg';
import image2 from '../../../images/image2.gif';
import image6 from '../../../images/image6.jpg';

const Pic = () => {
    return(
        <div id="pic" className="pic">
        <ul>
          <li><img src={image1} alt="Image 1" width="220" height="280" /></li>
          <li><img src={image4} alt="Image 4" width="250" /></li>
          <li><img src={image2} alt="Image 2" width="260" /></li>
          <li><img src={image6} alt="Image 6" width="280" /></li>
        </ul>
        <p className="quote">
          More than just blood and cramps, our period whispers tales of resilience, creation, 
          and the enduring magic of being a woman. <br/><br/> 
          Let your flow empower you, not define you. It's a dance, a rhythm, a symphony of your womanhood.
        </p>
      </div> 
    )
}

export default Pic;