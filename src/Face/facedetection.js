import React from 'react';
import '../App.css' ;
const Facedect = ({imageUrl , box})=> {
  return(
   <div className='center ma'>
       <div className='absolute nt2'>
       <img alt='' src={imageUrl} width='500px' height= 'auto' id='inputimage'/>
       <div className='bounding-box' style={{left: box.leftCol, right: box.rightCol , top: box.topRow, bottom: box.bottomRow }}> </div>
       </div>
   </div>
  );
}
export default Facedect ;
//'https://tse2.mm.bing.net/th?id=OIP.E4-9d1QwGgcx2DvYQ9esJgHaHa&pid=Api&P=0&w=300&h=300'
// May use the above URL for testing