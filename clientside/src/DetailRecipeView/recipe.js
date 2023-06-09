import React, { useState, useContext, useEffect } from "react";
import "./recipeStyle.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const { id } = useParams();
  const [recipe, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const data = { _ids: [id] };
        const response = await axios.post(
          `http://localhost:3000/recipe/id`,
          data
        );
        setRecipes(response.data);
        console.log(response.data);
      } catch (err) {
        setRecipes([]);
        console.log(err);
      }
    };
    fetchRecipe();
    console.log("Recipe ID:", id);
  }, [id]);

  return (
    <>
      <div className="container-for-layout">
        <div className="layout">
          <Link to="/home">
            <input value={"Back"} className="back"></input>
          </Link>
          {recipe[0] ? (
            //! Hier Code wenn Recipe geladen ist
            <div>
              <h1 className="recipeTitle">{recipe[0].name}</h1>
              <div className="Ingredients-Container">
                <h2>Ingredients:</h2>
                <ul className="ingredientList">
                  {recipe[0].ingredients.length ? (
                    recipe[0].ingredients.map((ingredient) => (
                      <li key={ingredient._id}>
                        {ingredient.name} - {ingredient.amount}
                      </li>
                    ))
                  ) : (
                    <li>No ingredients available</li>
                  )}
                </ul>
              </div>
              <div className="Steps-Container">
                <h2>Steps:</h2>
                <ol className="stepList">
                  {recipe[0].steps.length ? (
                    recipe[0].steps.map((step) => (
                      <li key={step._id}>
                        {step.step}: {step.instruction}
                      </li>
                    ))
                  ) : (
                    <li>No steps available</li>
                  )}
                </ol>
              </div>
            </div>
          ) : (
            //! Hier Code wenn Recipe nicht geladen ist
            <div className="No-Recipe">
              <h1>Sorry but we couldn´t find your Recipe</h1>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Recipe;
