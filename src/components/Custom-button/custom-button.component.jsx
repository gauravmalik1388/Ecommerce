import React from  'react';

import './custom-button-styles.scss';



const Custombutton =({children,...otherprops})=>(

<button className='custom-button' {...otherprops}>

{children}

</button>


);

export default Custombutton;