import React from  'react';

import './custom-button-styles.scss';

//</button><button className='custom-button' {...otherprops} >

const Custombutton =({children,isGoogleSignIn,...otherprops})=>(
    <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherprops}
  >
{children}

</button>


);

export default Custombutton;