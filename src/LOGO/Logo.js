import React from 'react';
import Tilt from 'react-tilt' ;
import brain from './bulb.png' ;
 const Logo = ()=>{
     return(
     <div className='ma4 mt0'>
      <Tilt className="Tilt br2 shadow-2" options={{ max : 50 }} style={{ height: 150, width: 150 , background:'linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%)' }} >
         <div className="Tilt-inner"><img alt='Logo' src={brain}/></div>
     </Tilt>
     </div>
     );
 }
 export default Logo ;