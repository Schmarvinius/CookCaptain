import React, {useState} from 'react';
import './styles.css';

function MyLogin() {

    const [isSignUp, setIsSignUp] = useState(true);

    function handleLogin(){
        alert("login");
    }
    function handleSignUp(){
        alert("signup");
    }

    return (
        <div class="login-container">
            <h2>{isSignUp ? "Create new Account": "Login with username/email"}</h2>
            <form>
                {isSignUp && <input type="text" placeholder="email"></input> }
                
                <input type="text" placeholder={isSignUp ? "username" : "username/email"} ></input>
                <br/>
                <input type="password" placeholder="password" ></input>
                <br/>
                <button onClick={isSignUp? handleSignUp : handleLogin}type="submit">{isSignUp ? "Signup" : "Login"}</button>
                <br/>
                {/* <p  onClick={() => setIsSignUp(prevValue => !prevValue)}>{isSignUp ? "Already have account?": "Create Account"}</p> */}
                <text>{isSignUp ? "Already have an account?" : "Don't have an account?"}</text>
                <button type="button"  onClick={() => setIsSignUp(prevValue => !prevValue)}>{isSignUp ? "Log in": "Sign up"}</button>
            </form>
        </div>
    );
}

export default MyLogin;