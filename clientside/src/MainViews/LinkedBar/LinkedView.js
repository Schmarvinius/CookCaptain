import React, { useState, useContext , useEffect } from 'react';
import './LinkedViewStyle.css';
import axios from 'axios';
import { SearchContext } from '../../Context/SearchContext';
import { UserContext } from '../../Context/UserContext';
import foodIcon from '../../images/Exampleimage.png';
import notLikeIcon from '../../images/notLiked.png';
import likeIcon from '../../images/liked.png';


const LinkedView = ({ onLikeRecipeChange, likeRecipeChanged }) =>{
    const [recipes, setRecipes] = useState([]);
    const { user, setUser } = useContext(UserContext);

    const handelLikeRecipe = async (recipe) => {
      if (user === null) {
        // Handle the case when the user object is null
        return;
    }
    let data = {};
      try {
        data = { ...user, recipeId: recipe._id };
        await axios.delete('http://localhost:3000/api/Recipe/like', { data });
        console.log("Like deleted successfully");
      } catch (err) {
        console.error("Failed to delete like:", err);
      }
      const updatedRecipes = recipes.filter((r) => r._id !== recipe._id);
      setRecipes(updatedRecipes);
    
      const updatedLikedRecipes = user.likedRecipes.filter((id) => id !== recipe._id);
      const updatedUser = { ...user, likedRecipes: updatedLikedRecipes };
      setUser(updatedUser);
    
      onLikeRecipeChange();
      
    };
    

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
              
            }
          }
        };
        console.log("update")
        fetchData();
      }, [user, likeRecipeChanged]); 
    return(
        <>
          <div className='scrollable-container'>
              {recipes.length > 0 ? (
              <ul className='list'>
                  {recipes.map((recipe) => (
                  <li className="listitem-recipe" key={recipe.id}>
                    <div className='Container-List-Recipe'>
                      <button
                          className="buttonForLike"
                          onClick={(e) => {
                              e.stopPropagation();
                              handelLikeRecipe(recipe);
                              
                          }}
                          >
                          <img className="like-icon" src={ likeIcon} alt="Like Icon"/>
                      </button>
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