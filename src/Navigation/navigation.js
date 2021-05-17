import React from 'react';
 const Navigation = ({onRouteChange})=>{
     return(
     <nav style={{display: 'flex' , justifyContent: 'flex-end'}}>
          <p className='_f3 link din black underline pa3 pointer' onClick={()=>onRouteChange('Signin')}>Sign Out</p>
     </nav>
     ) ;
 }
export default Navigation ;