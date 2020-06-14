import {combineReducers} from 'redux';

import  userReducer from './user/user-reducer';

console.log('Hello from root');
export default combineReducers
(
    {

   user:userReducer
   
    }
    
    
    
    );
