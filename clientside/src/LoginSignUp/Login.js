import React, {useState} from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";

function MyLogin() {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);

    function handleLogin(){
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        if(email === "" || password === ""){
            alert("please enter a username and a password to login")
        }
        else {
            var data = {
                "email": email,
                "password": password
            };
            fetch('http://localhost:3000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(function(response){
                if(response.ok){
                    navigate('/welcome')
                }
                else {
                    alert("wrong email/password")
                }
            }).catch(err => {
                console.log(err);
            })
        }
        

    }
    function handleSignUp(){
        var email = document.getElementById("email").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if(email === "" || username === "" || password === ""){
            alert("please enter correct data")
        }
        else {
            var data= {
                "name": username,
                "password": password,
                "email": email,
                "likedRecipes": [],
                "createdRecipes": []
            }
            fetch('http://localhost:3000/api/user/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(function(response){
                if(response.ok){
                    navigate('/welcome')
                }
                else {
                    alert("error while creating user")
                }
            }).catch(err => {
                console.log(err);
            })
        }
    }

    return (
        <div className="login-container">
            <h2>{isSignUp ? "Create new Account": "Login with username/email"}</h2>
            <form >
                {isSignUp && <input type="text" id="username" placeholder="username"></input> }
                
                <input type="text" placeholder={isSignUp ? "email" : "username/email"} id="email" required ></input>
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
    );
}
export default MyLogin;