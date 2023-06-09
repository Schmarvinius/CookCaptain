import { UserContext } from '../../Context/UserContext';
import React, { useContext , useEffect } from 'react';
import './styles.css';


const Headbar = () =>{
    const { user } = useContext(UserContext);
    useEffect(() => {
        
      }, [user]);
    
    return(
        <>
           {user && user.name ? <h1>{user.name}</h1> : <h1>No user available</h1>}
        </>
    )
}

export default Headbar;