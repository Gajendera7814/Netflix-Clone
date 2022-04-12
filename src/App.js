import { auth } from 'firebase';
import React,{ useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import HomeScreen from './HomeScreen';
import Login from "./Login";
import firebase from 'firebase';

const App=()=> {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  useEffect(()=>{
    const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
      if(user){
        dispatch(login({
          uid: user.uid,
          email:user.email
        }))
      }
      else{
        dispatch(logout)
      }
    })
   return unsubscribe;
  })
  return (
    <div className="App">
    {
      !user ? (<Login />) : (<HomeScreen />)
    }
    </div>
  );
}
export default App;