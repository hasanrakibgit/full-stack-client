import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';




const Login = () => {
    if (!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
      }else{
        firebase.app();
      };
    
    const [user, setUser] = useState({})
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {

                var credential = result.credential;

                var token = credential.accessToken;
                var user = result.user;
                console.log(user);
                setUser(user);
                const{email,displayName}=user
                setLoggedInUser({email, displayName});
                history.replace(from);
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });

    }
    return (
        <div style ={{textAlign:'center'}}>
            <h1>This is Login</h1>
            <button onClick={handleGoogleSignIn}>Sign in With Google</button>
            <h3>Name: {user.displayName}</h3>
        </div>
    );
};

export default Login;