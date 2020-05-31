import React from 'react';

import './form-input.styles.scss';





const Forminput =({onHandleChange,label, ...otherprops})=>(
<div className='group'>

<input className='form-input' onChange={onHandleChange} {...otherprops}/>
{
label?

(
<label className={`${otherprops.value.length ? 'shrink':''}form-input-label`}>
{label}



</label>





):null






}






</div>







);



export default Forminput;