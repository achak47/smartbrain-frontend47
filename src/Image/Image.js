import React from 'react';
import '../app.css'
const Imag = ({onInputchange,onButtonSubmit})=>{      // Destructuring
return (
 <div>
<p className='f4'><b> This magic brain will detect faces in your pictures . Give it a try </b></p>
     <div className='sizer center pa4 br3 shadow-5 '>
       <input className='f4 pa2 w-75 center dib ' type='text' onChange= {onInputchange} />
       <button className='w-25 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onButtonSubmit}>Detect</button>
     </div>
     <p> </p>
 </div> );
}
export default Imag ;
// Instead of using props.onInputchange we have destructerd it as the parameter
// {} is used for a javascript element
