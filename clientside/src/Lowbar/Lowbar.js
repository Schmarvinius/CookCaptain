import React from 'react';
import './LowBarStyle.css';
import { useNavigate } from "react-router-dom";

function LowBar () {
    const navigate = useNavigate();

    const handleImpressumClick = () => {
        navigate("/impressum");
    }
    const handleSupportClick = () => {
        navigate("/support");
    }
    const handleFAQsClick = () => {
        navigate("/faq");
    }
    const handleAGBClick = () => {
        navigate("/agb");
    }
    return(      
    <div className='ImprintContainer'>
        <div className='ImprintInformation'>
            <button className="text-button" onClick={handleImpressumClick}>
            Impressum
            </button> <br/>
            <button className="text-button" onClick={handleSupportClick}>
            Support
            </button> <br/>
            <button className="text-button" onClick={handleFAQsClick}>
            FAQs
            </button> <br/>
            <button className="text-button" onClick={handleAGBClick}>
            AGB
            </button> <br/>
        </div>
    </div>
    );
};
export default LowBar;

