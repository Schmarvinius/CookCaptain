import React, { useState, useContext , useEffect } from 'react';
import './LinkedViewStyle.css';
import axios from 'axios';
import { SearchContext } from '../../Context/SearchContext';
import { UserContext } from '../../Context/UserContext';
import foodIcon from '../../images/Exampleimage.png';



const LinkedView = () =>{
    const [recipes, setRecipes] = useState([]);
    const { user, updateUser } = useContext(UserContext);

    useEffect(() => {
        let likedList = []; // Declare the likedList variable
      
        if (user !== null) {
          likedList = user.likedRecipes;
          console.log(likedList);
        }
      
        const fetchData = async () => {
          const data = {
            _ids:likedList,
          };
      
          try {
            const response = await axios.post('http://localhost:3000/api/Recipe/Id', data);
            setRecipes(response.data);
            console.log(response.data)
          } catch (error) {
            if (error.response && error.response.status === 404) {
              setRecipes([]);
              
            } else {
              // Handle other errors here
            }
          }
        };
      
        fetchData();
      }, [user]); // Use the "user" variable instead of "likedList" in the dependency array
      

    




    return(
        <>
            <div className='scrollable-container'>
                {recipes.length > 0 ? (
                <ul>
                    {recipes.map((recipe) => (
                    <li className="listitem-recipe" key={recipe.id}>
                      <div className='Container-List-Recipe'>
                        <div className='image-wrapper'>
                            <img className='food-picture' src={foodIcon} alt='Food-Icon' />
                        </div>
                        <div className='name-container'>
                            <span className='name'>{recipe.name}</span> 
                        </div>
                        <div className='author-container'>
                            <span className='author truncate' onClick={(e) => { e.stopPropagation(); console.log(recipe.author) }}>Author: {recipe.author}</span> 
                        </div>
                      </div>
                    </li>
                    ))}
                </ul>
                ) : (
                <p>No recipes found.</p>
                )}
            </div>
        </>
    )
}

export default LinkedView;