import React from 'react'
import './slidetext.css';
import { gsap, Linear } from 'gsap';

function Slidetext() {
    
        var horizontalWidth = 1920, //same width with the original image
        speed = 60, 
        duration = horizontalWidth/speed, 
        endPosition = horizontalWidth - ( speed / 60 );
        gsap.to("#main", duration, {
        css : {
        backgroundPosition: endPosition+"px center"
        },
        repeat: 1,
        ease: Linear.easeNone
        });
        
    return(
        <div className="w-auto">
            {/* <div id="main">
            </div>
            <div id="main">
            </div>
            <div id="main">
            </div>
            <div id="main">
            </div> */}
        </div>
    );

}

export default Slidetext;
