import { UserContext } from '../../Context/UserContext';
import React, { useContext , useEffect } from 'react';
import './headbarStyles.css';


const Headbar = () =>{
    const { user } = useContext(UserContext);
    useEffect(() => {
        
      }, [user]);
    
    return(
        <>
            <div className='headbar-Container'>
                {user && user.name ? <h1>{user.name}</h1> : <h1>No user available</h1>}
            </div>
        </>
    )
}

export default Headbar;