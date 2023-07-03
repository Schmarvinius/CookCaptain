import React, { useState, useContext, useEffect } from "react";
import "./LoginStyles.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { TokenContext } from "../Context/TokenContext";
import axios from "axios";

function MyLogin() {
    const navigate = useNavigate();
    const [isSignUp, setIsSignUp] = useState(false);
    const [showMessage, setShowMessage] = useState();
    const { setUser } = useContext(UserContext);
    const { token, setToken } = useContext(TokenContext);

    useEffect(() => {
        const fetchData = async () => {
          if (token) {
            try {
              axios.defaults.headers.common["Authorization"] = token;
              const response = await axios.get(`http://localhost:3000/user/email`);
              setUser(response.data);
              navigate("/home");
            } catch (error) {
              console.error("Error fetching user email:", error);
            }
          }
        };
    
        fetchData();
      }, [token]);

    const handleLogin = () => {
        var email = document.getElementById("email").value;
        if(!validateEmail(email)){
            return alert("please enter a correct email adress in order to login")
        }
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
        .then((response) => {
            if (response.ok) {
    
              return response.json();
              
            } else {
              throw new Error('Login failed');
            }
          })
          .then((userResponse) => {
            setToken(userResponse.token); // Update the token state using setToken (async)
            setUser(userResponse[0]); // Update the user state using setUser (async)
            
            
            navigate('/home');
          }).catch(err => {
            console.log(err);
        })

    }
    const  handleSignUp = () => {
        var email = document.getElementById("email").value;
        if(!validateEmail(email)){
            return alert("please enter a correct email adress in order to create a new account")
        }
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var data = {
            "name": username,
            "email": email,
            "password": password,
        };
        fetch('http://localhost:3000/user/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then((response) => {
            if (response.ok) {
    
              return response.json();
              
            } else {
              throw new Error('SignUp failed');
            }
          })
          .then((userResponse) => {
            setUser(userResponse[0]); // Update the user state using setUser (async)
            
            document.getElementById("username").value = '';
            document.getElementById("password").value = '';
            setIsSignUp(prevValue => !prevValue);
            setShowMessage(prevValue => !prevValue);
            setTimeout(() => {
            setShowMessage(false);
            }, 5000);

          }).catch(err => {
            console.log(err);
        })
        
    }

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }
    return (
        <div className='container'>
            { showMessage && 
                <div className="message-container">
                    Congratulations! You have been successfully registered. You can now login!
                </div>
            }
            <div className="login-container">
                <h2>{isSignUp ? "Create new account": "Login with email"}</h2>
                <form id="inputForm" >
                    {isSignUp && <input type="text" placeholder="username" id="username"></input> }
                    
                    <input type="email" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/" className="login-container-input"  placeholder="email" id="email" ></input>
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
