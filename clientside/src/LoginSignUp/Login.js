import React, {useState} from 'react';
import './styles.css';
import { useNavigate } from "react-router-dom";

function MyLogin() {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(true);

    function handleLogin(){
        var username = document.getElementById("username").value;
        alert(username);
        if(username === 'start'){
            var data = {
                "email": "til@weber.de",
                "password": "1234"
            };
            fetch("http://localhost:3000/api/getUserByEmail/Email", {
                method: 'POST',
                headers: {
                    'ContentType': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(function(response){
                console.log(response);
            })
        }
        
    }
    function handleSignUp(){
        alert("signup");
    }

    return (
        <div class="login-container">
            <h2>{isSignUp ? "Create new Account": "Login with username/email"}</h2>
            <form>
                {isSignUp && <input type="text" placeholder="email"></input> }
                
                <input type="text" placeholder={isSignUp ? "username" : "username/email"} id="username" ></input>
                <br/>
                <input type="password" placeholder="password" ></input>
                <br/>
                <button onClick={isSignUp? handleSignUp : handleLogin}type="submit">{isSignUp ? "Signup" : "Login"}</button>
                <br/>
                <text>{isSignUp ? "Already have an account?" : "Don't have an account?"}</text>
                <button type="button"  onClick={() => setIsSignUp(prevValue => !prevValue)}>{isSignUp ? "Log in": "Sign up"}</button>
            </form>
        </div>
    );
}
export default MyLogin;