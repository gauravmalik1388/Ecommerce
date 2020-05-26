import React from 'react';
import logo from './logo.svg';
import Homepage from './pages/homepage/homepage.componenet';
import './App.css';
import {
  Switch,
  Route
  
} from "react-router-dom";

const Hatspage=()=>(

<div>
  <h1>Hats Page

</h1>

  </div>


);

function App() {
  return (
   

<div>
<Switch>
<Route exact path='/' component={Homepage}  />
<Route exact path='/Hats' component={Hatspage}  />
</Switch>
</div>



  );
}

export default App;
