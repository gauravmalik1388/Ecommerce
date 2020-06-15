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
  Route,
  Redirect
  }
  from "react-router-dom";

import {connect} from 'react-redux';

import {setcurrentuser} from './redux/user/user.action';








class App extends React.Component {
// constructor(){

// super();


// this.state={

// currentUser :null




// }

// }




unsubscribedFromAuth=null




componentDidMount() {
  const {setcurrentuser}=this.props;

  console.log(setcurrentuser);
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createuserprofiledocument(userAuth);

      userRef.onSnapshot(snapShot => {
        setcurrentuser({

          id: snapShot.id,
          ...snapShot.data()



        });
        
  

    
      });
    }

    setcurrentuser(userAuth);
  });
}

componentWillUnmount()
{

this.unsubscribedFromAuth();
}


  render() { return (
   
//<Header  currentUser={this.state.currentUser}   
<div>
<Header />
<Switch>
<Route exact path='/' component={Homepage}  />
<Route exact path='/Shop' component={Shop}  />
<Route exact path='/Signin' 
     render={() =>
      this.props.currentUser ? (
        <Redirect to='/' />
      ) : (
        <Signinandsignup />
      )
    }
  />
</Switch>
</div>



  );

  }

  }



const mapDispatchToProps=dispatch=>({


setcurrentuser:user=>dispatch(setcurrentuser(user))



});


const mapsStatetoProps=({user})=>({

currentUser:user.currentUser


});


export default connect(mapsStatetoProps,mapDispatchToProps)(App);
