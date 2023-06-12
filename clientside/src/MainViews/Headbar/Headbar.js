import { UserContext } from '../../Context/UserContext';
import React, { useContext , useEffect } from 'react';
import userIcon from '../../images/userIcon.png';
import './headbarStyles.css';
import { Link } from 'react-router-dom';


const Headbar = () =>{
    const { user } = useContext(UserContext);
    useEffect(() => {
      }, [user]);
    
    return(
        <>
            <div className='headbar-Container'>
                <Link to="../profil" className='headbar-link-user'>
                    <img className='headbar-picture' src={userIcon} alt='User-Icon' />
                    <div className='headbar-text'>
                        {user && user.name ? <span>{user.name}</span> : <span>No user available</span>}
                    </div>
                </Link> 
                <div className='navigation-container'>
                    <Link to="../recommandation" className='headbar-link'>
                        <div className='headbar-text'>
                            <span> Daily Recommandation</span>
                        </div>
                    </Link> 
                    <Link to="../search" className='headbar-link'>
                        <div className='headbar-text'>
                            <span>Search for Recipes</span>
                        </div>
                    </Link> 
                    <Link to="../safed" className='headbar-link'>
                        <div className='headbar-text'>
                            <span>Safed Recipes</span>
                        </div>
                    </Link> 
                </div>
            </div>
        </>
    )
}

export default Headbar;