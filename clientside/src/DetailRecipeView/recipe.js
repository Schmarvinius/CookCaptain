import React, { useState, useContext, useEffect } from "react";
import "./recipeStyle.css"
import axios from "axios";

import { useParams } from 'react-router-dom';

const Recipe = () =>{
  const { id } = useParams();
  const [recipe, setRecipes] = useState([]);

  useEffect( () => {

    const fetchRecipe = async () => {
      try{
        const data = {_ids : [id]}
        const response = await axios.post(
          `http://localhost:3000/api/Recipe/Id`,data);
        setRecipes(response.data);
        console.log(response.data);
      } catch (err){
        setRecipes([]);
        console.log(err)
      }
      
    }
    fetchRecipe();
    console.log('Recipe ID:', id);
  }, [id]);
    return (
        <>
          <div>
          {recipe[0] ? (
            //! Hier Code wenn Recipe geladen ist



            <h1>{recipe[0]._id}</h1>
          ) : (
            //! Hier Code wenn Recipe nicht geladen ist
            <h1>No Recipe</h1>
          )}
          </div>  
        </>
    )
}
export default Recipe;