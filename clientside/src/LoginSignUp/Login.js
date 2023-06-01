import React, {useState} from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";

function MyLogin() {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);

    function handleLogin(){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var data = {
            "email": username,
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
                alert("wrong username/password")
            }
        }).catch(err => {
            console.log(err);
        })

    }
    function handleSignUp(){
        alert("signup");
    }

    return (
        <div className="login-container">
            <h2>{isSignUp ? "Create new Account": "Login with username/email"}</h2>
            <form >
                {isSignUp && <input type="text" placeholder="email"></input> }
                
                <input type="text" placeholder={isSignUp ? "username" : "username/email"} id="username" ></input>
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