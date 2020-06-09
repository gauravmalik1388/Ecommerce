import React from  'react';
import Forminput from '../form-input/form-input.component';
import './Sign-in-and-Sign-up.styles.scss';
import Custombutton from '../Custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utlis';


class Signinandsignup extends React.Component {


    constructor(){

super();

this.state={

email:'',
password:''


}

    }


    onHandleChange=event=>{

const{name, value}=event.target;

this.setState({[name]:value});


}


    OnhandleSubmit= async event=>{
        event.preventDefault();

const {email,password}=this.state;

try{
await auth.signInWithEmailAndPassword(email,password);
    this.setState({email:'',password:''})

}
catch(error){

console.log(error);

}

 };


    render (){


return (

<div className='sign-in'onSubmit={this.OnhandleSubmit}>
<h2>I already have an account</h2>
<span>Sign in with your username and password</span>
<form>
<Forminput name="email" label ="email" value={this.state.email} onChange={this.onHandleChange} type="email" required />

<Forminput name="password" label ="password"  onChange={this.onHandleChange} value={this.state.password} type="password" required />

<div className='buttons'>
<Custombutton type="submit" >Sign In</Custombutton>
<Custombutton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google </Custombutton>
</div>

</form>

</div>



);




    }













}


export default Signinandsignup;