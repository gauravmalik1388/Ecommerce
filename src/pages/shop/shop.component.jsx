import React from 'react';
import Shop_Data from './shop.data.js';
import Previewcollection from '../../components/preview-collection/preview-collection.components.jsx';


class Shop extends React.Component {


constructor(props){

super(props);

this.state={


Collections:Shop_Data









};

}

render(){

    const {Collections}=this.state;

return(<div>
{
    Collections.map(({id, ...Otherprpscollection})=> (

        <Previewcollection key={id} {...Otherprpscollection} />
    
     ) )}
</div>
);



}



}



export default Shop;




















