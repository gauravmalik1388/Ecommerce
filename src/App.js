import React from 'react';
import logo from './logo.svg';
import Homepage from './pages/homepage/homepage.componenet';
import './App.css';
import Header from './components/header/header.component.jsx';
import Signinandsignup from './pages/Sign-in-and-sign-up/Sign-in-and-sign-up.component';
import {auth,createuserprofiledocument} from './firebase/firebase.utlis';
import Shop from './pages/shop/shop.component.jsx';
import {
  Switch,
  Route
  }
  from "react-router-dom";



class App extends React.Component {
constructor(){

super();


this.state={

currentUser :null




}

}

unsubscribedFromAuth=null



componentDidMount(){

this.unsubscribedFromAuth=auth.onAuthStateChanged(async user=>{

// this.setState({currentUser:user});

// console.log(user);

createuserprofiledocument(user);

});


}

componentWillUnmount()
{

this.unsubscribedFromAuth();
}


  render() { return (
   

<div>
<Header  currentUser={this.state.currentUser}      />
<Switch>
<Route exact path='/' component={Homepage}  />
<Route exact path='/Shop' component={Shop}  />
<Route exact path='/Signin' component={Signinandsignup}/>
</Switch>
</div>



  );

  }

  }

export default App;
