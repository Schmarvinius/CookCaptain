import React, { useState, useContext } from 'react';
import './LoginStyles.css';
import { useNavigate } from "react-router-dom";
import { UserContext } from '../Context/UserContext';


function MyLogin() {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const { user, setUser } = useContext(UserContext);

    function handleLogin(){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var data = {
            "email": email,
            "password": password
        };
        fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function(response) {
            if (response.ok) {
    
              return response.json();
              
            } else {
              throw new Error('Login failed');
            }
          })
          .then(function(userResponse) {
            setUser(userResponse[0]); // Update the user state using setUser (async)
            
            
            navigate('/home');
          }).catch(err => {
            console.log(err);
        })

    }
    function  handleSignUp(){
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var data = {
            "name": username,
            "email": email,
            "password": password,
            "likedRecipes": [],
            "createdRecipes": []
        };
        fetch('http://localhost:3000/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(function(response) {
            if (response.ok) {
    
              return response.json();
              
            } else {
              throw new Error('SignUp failed');
            }
          })
          .then(function(userResponse) {
            setUser(userResponse[0]); // Update the user state using setUser (async)
            
            
            navigate('/home');
          }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className='container'>
            <div className="login-container">
                <h2>{isSignUp ? "Create new Account": "Login with username/email"}</h2>
                <form >
                    {isSignUp && <input type="text" placeholder="username" id="username"></input> }
                    
                    <input type="text" className="login-container-input"  placeholder="email" id="email" ></input>
                    <br/>
                    <input type="password" id="password" placeholder="password" ></input>
                    <br/>
                    <button onClick={isSignUp? handleSignUp : handleLogin}type="button">{isSignUp ? "Signup" : "Login"}</button>
                    <br/>
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}
                    <button type="button" id="switchSignUp"  onClick={() => setIsSignUp(prevValue => !prevValue)}>{isSignUp ? "Log in": "Sign up"}</button>
                    <br />
                </form>
            </div>
        </div>
    );
}


export default MyLogin;