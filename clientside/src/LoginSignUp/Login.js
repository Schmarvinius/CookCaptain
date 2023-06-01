import React, {useState} from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";

function MyLogin() {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);

    function handleLogin(){
        // var username = document.getElementById("username").value;
        alert("alert");
        //console.log(username);
        console.log("aufruf");
        var data = {
            "email": "til@weber.de",
            "password": "1234"
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
        }).catch(err => {
            console.log(err)
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
                <input type="password" placeholder="password" ></input>
                <br/>
                <button onClick={handleLogin}type="button">{isSignUp ? "Signup" : "Login"}</button>
                {/* isSignUp? handleSignUp : handleLogin */}
                <br/>
                <p>{isSignUp ? "Already have an account?" : "Don't have an account?"}</p>
                <button type="button"  onClick={() => setIsSignUp(prevValue => !prevValue)}>{isSignUp ? "Log in": "Sign up"}</button>
                <br />
                <button onClick={handleSignUp} type="button">yannis</button>
            </form>
        </div>
    );
}
export default MyLogin;