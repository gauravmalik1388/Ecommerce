import React from 'react';
import './Sign-Up.styles.scss';
import {auth, createuserprofiledocument} from '../../firebase/firebase.utlis';
import Forminput from '../form-input/form-input.component';
import Custombutton from '../Custom-button/custom-button.component';


class Signup extends React.Component{

constructor(){

super();


this.state={

displayName:"",
email:"",
password:"",
confirmpassword:""



}

}


handlechange=event=>{


const {name,value}=event.target ;

this.setState({[name]:value});





}











handlesubmit=async event=>{
event.preventDefault();
const{displayName,email,password,confirmpassword}=this.state;
if(password!== confirmpassword){
alert("passwords don't match");
return;
}

try{
    
const {user}=await auth.createUserWithEmailAndPassword(email,password);
await createuserprofiledocument(user,{displayName});

this.setState({

    displayName:"",
    email:"",
    password:"",
    confirmpassword:""


});


}
catch(error)
{
console.log(error);
}

}


render(){


    const{displayName,email,password,confirmpassword}=this.state;
return(


<div className='Sign-up' >

<h1>I don't have an account</h1>
<span>Sign-up with your email and password</span>
<form className='sign-up-form' onSubmit={this.handlesubmit}>
<Forminput
type='text'
name='displayName'
value={displayName}
onChange={this.handlechange}
label='Display Name'
required
/>
<Forminput
type='email'
name='email'
value={email}
onChange={this.handlechange}
label='Email'
required
/>
<Forminput
type='password'
name='password'
value={password}
onChange={this.handlechange}
label='Password'
required
/>
<Forminput
type='password'
name='confirmpassword'
value={confirmpassword}
onChange={this.handlechange}
label='Confirm Password'
required
/>

<Custombutton type='submit'>Sign Up</Custombutton>


</form>
</div>

)


}







}


export default Signup;