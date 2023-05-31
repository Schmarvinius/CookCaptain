import React from 'react';
import './styles.css';

function MyLogin() {
    return (
        <div class="login-container">
            <h2>Login</h2>
            <form>
                <input type="text" placeholder="username" required></input>
                <br/>
                <input type="password" placeholder="password" required></input>
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default MyLogin;