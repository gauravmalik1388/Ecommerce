import React from 'react';

import './preview-collection.styles.scss';

import Collectionitem from  '../collection-item/collection-item.components';
 
const previewcollection=({title,items})=>
(

<div className='collection-preview'>
<h1 >{title}</h1>
<div className='preview'>

{
 items
 .filter( (item,index)=> index< 4)
.map(({id, ...Otherprpscollection})=> (

    <Collectionitem key={id} {...Otherprpscollection} />

 ) )





}





</div>


</div>


);







export default previewcollection;