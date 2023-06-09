import React from 'react';
import './styles.css';
import Headbar from './Headbar/Headbar.js';



function MyWelcomePage(){
    return (
        <>
            <Headbar />
                <div className="page-container">
                    <h1>Welcome Page</h1>
                    <p>Lorem Ipsum</p>
                </div>
        
            
        </>
        
    );
}

export default MyWelcomePage;