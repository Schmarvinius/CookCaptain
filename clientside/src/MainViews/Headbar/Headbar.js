import { UserContext } from '../../Context/UserContext';
import React, { useState, useContext , useEffect } from 'react';
import userIcon from '../../images/userIcon.png';
import './headbarStyles.css';
import { Link } from 'react-router-dom';


const Headbar = () =>{
    const { user } = useContext(UserContext);
    useEffect(() => {
    }, [user]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log(e.target.value);
  };
    
    return(
        <>
            <div className='headbar-Container'>
                <div className='Search-Container'>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={handleSearch}
                        class = "searchbar"
                        
                    />
                </div>
                <Link to="../profil" className='headbar-link-user'>
                    <div className='headbar-text'>
                        {user && user.name ? <span>{user.name}</span> : <span>No user available</span>}
                    </div>
                    <img className='headbar-picture' src={userIcon} alt='User-Icon' />
                </Link> 
            </div>
        </>
    )
}

export default Headbar;