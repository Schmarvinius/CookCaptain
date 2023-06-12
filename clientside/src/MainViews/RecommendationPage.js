import React, { useState, useEffect } from 'react';
import './styles.css';
import Headbar from './Headbar/Headbar.js';
import axios from 'axios';
import './RecommendationStyles.css'
import userIcon from '../images/userIcon.png';

//
function MyWelcomePage(){
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await axios.post('http://localhost:3000/api/Recipe/Id', {
                _ids: ["64739ad038c2f868e55b15bc","64723a797ef25b980114475a"] 
              });
            setRecipes(response.data); 
            console.log(recipes);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
        fetchUsers();
      }, []);

    return (
        <>
            <Headbar />
            <ul className='recipe-list'>
                {recipes.map(recipe => (
                <li className='recipe-item' key={recipe.id}>
                    <div className='listitem-container'>
                        <img className='headbar-picture' src={userIcon} alt='User-Icon' />
                        <div className='recipe-info'>
                            <div className='nameTags'>
                                <span className='name'>name: {recipe.name}</span> <br></br>
                                <span className='tags' >tag: {recipe.name}</span>
                            </div>
                            <div className='description'>
                                <span className='description'>description: {recipe.name}</span>
                            </div>
                            <div className='dateLikes'>
                                <span className='date'> date: {recipe.name}</span> <br/>
                                <span className='Likes and Downloads'>likes: {recipe.name}</span>
                            </div>
                        </div>
                    </div>
                    <span className='event'>
                        {recipe.name ? (
                        <p>{recipe.name}</p>
                        ) : null}
                    </span>
                </li>
                ))}
            </ul>
        </>
        
    );
}

export default MyWelcomePage;