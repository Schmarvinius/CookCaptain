
import React, { useState, useContext , useEffect } from 'react';
import './RecipeMainStyle.css';
import axios from 'axios';
import { SearchContext } from '../../Context/SearchContext';

 




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
            <span></span>
            <div classname='listitem-recipe'>
                {recipes.length > 0 ? (
                    <ul className='list'>
                    {recipes.map((recipe) => (
                        <li className="listitem-recipe" key={recipe._id}>{recipe.name}</li>
                    ))}
                    </ul>
                ) : (
                    <p>No recipes found.</p>
                )} 
            </div>
        </>
    )

}

export default RecipeMain;