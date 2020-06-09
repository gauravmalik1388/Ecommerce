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




componentDidMount() {
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createuserprofiledocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });

        console.log(this.state);
      });
    }

    this.setState({ currentUser: userAuth });
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
