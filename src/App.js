import React from 'react';
import logo from './logo.svg';
import Homepage from './pages/homepage/homepage.componenet';
import './App.css';
import Shop from './pages/shop/shop.component.jsx';
import {
  Switch,
  Route
  
} from "react-router-dom";



function App() {
  return (
   

<div>
<Switch>
<Route exact path='/' component={Homepage}  />
<Route exact path='/Shop' component={Shop}  />
</Switch>
</div>



  );
}

export default App;
