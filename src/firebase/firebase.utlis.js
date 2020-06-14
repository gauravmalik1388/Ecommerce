import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


const  firebaseConfig = {
    apiKey: "AIzaSyDEE2go1pS3LjQ5hCaUeMAclS0bPZWhLPM",
    authDomain: "ecommerce-1f426.firebaseapp.com",
    databaseURL: "https://ecommerce-1f426.firebaseio.com",
    projectId: "ecommerce-1f426",
    storageBucket: "ecommerce-1f426.appspot.com",
    messagingSenderId: "86932409729",
    appId: "1:86932409729:web:bc913008f83f444597ac80",
    measurementId: "G-C0X05MQ5BL"
  };
  // Initialize Firebase

//for app.js
export const createuserprofiledocument= async (userAuth,additionalData)=>{

if(!userAuth)return ;

const useref=firestore.doc(`users/${userAuth.uid}`);

const snapshot =await useref.get();

if(!snapshot.exists){

  const{displayName,email}=userAuth;
  const createdAt=new Date();

  try{

await useref.set({

displayName,email,createdAt,...additionalData



}); 

}
catch(error){

console.log('error creatring error',error.message);

}

}


return useref;

 }



  firebase.initializeApp(firebaseConfig);
  
  

  export const auth =firebase.auth();
  export const firestore =firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle =()=>auth.signInWithPopup(provider);
export default firebase;

