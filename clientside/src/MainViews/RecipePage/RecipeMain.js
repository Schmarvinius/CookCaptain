import React, { useState, useContext , useEffect } from 'react';
import './RecipeMainStyle.css';
import axios from 'axios';
import { SearchContext } from '../../Context/SearchContext';
import foodIcon from '../../images/Exampleimage.png';
import notLikeIcon from '../../images/notLiked.png';
import likeIcon from '../../images/liked.png';

const RecipeMain = () => {
    const { searchQuery } = useContext(SearchContext);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
              const response = await axios.get(`http://localhost:3000/api/Recipe/Name?name=${searchQuery}`);
              setRecipes(response.data);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setRecipes([]);
                  } else {
                    console(error.message);
                  }
            }
          };
          fetchData();
    }, [searchQuery]);

    return (
        <>
            <div className='container-List'>
                <div classname='listitem-recipe'>
                    {recipes.length > 0 ? (
                        <ul className='list'>
                        {recipes.map((recipe) => (    
                             <li className="listitem-recipe" key={recipe._id} onClick={() => console.log('HI ' + recipe.name)}>
                                <div className='Container-List-Recipe'>
                                    <div className='image-wrapper'>
                                        <img className='food-picture' src={foodIcon} alt='Food-Icon' />
                                    </div>
                                    <button
                                        className="buttonForLike"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            console.log("liked " + recipe.author);
                                        }}
                                        >
                                        {/* <img className="like-icon" src={notLikeIcon} alt="Like Icon" /> */}
                                    </button>
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
            </div>
        </>
    )

}

export default RecipeMain;