import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./RecipeMainStyle.css";
import axios from "axios";
import { SearchContext } from "../../Context/SearchContext";
import foodIcon from "../../images/Exampleimage.png";
import notLikeIcon from "../../images/notLiked.png";
import likeIcon from "../../images/liked.png";
import { UserContext } from "../../Context/UserContext";

const RecipeMain = ({ onLikeRecipeChange, likeRecipeChanged }) => {
  const navigate = useNavigate();
  const { searchQuery } = useContext(SearchContext);
  const [recipes, setRecipes] = useState([]);
  const [likedList, setLikedList] = useState(new Set());
  const { user, setUser } = useContext(UserContext);

  const handleClickRecipe = (recipeId) => {
    navigate(`./recipe/${recipeId}`);
  };

  useEffect(() => {
    if (user !== null || user === undefined) {
      setLikedList(new Set(user.likedRecipes));
      console.log("hi");
    }
  }, [user, likeRecipeChanged]);

  const handelLikeRecipe = async (recipe) => {
    if (user === null || user === undefined) {
      // Handle the case when the user object is null
      return;
    }
    let data = {};

    if (likedList.has(recipe._id)) {
      console.log("Deleting like for " + recipe.name);
      likedList.delete(recipe._id);

      try {
        data = { ...user, recipeId: recipe._id };
        await axios.delete("http://localhost:3000/recipe/like", { data });
        console.log("Like deleted successfully");
      } catch (err) {
        console.error("Failed to delete like:", err);
      }
    } else {
      console.log("Liking " + recipe.name);
      likedList.add(recipe._id);

      try {
        data = { ...user, recipeId: recipe._id };
        await axios.patch("http://localhost:3000/recipe/like", data);
        console.log("Like added successfully");
      } catch (err) {
        console.error("Failed to add like:", err);
      }
    }

    setLikedList(new Set(likedList));
    user.likedRecipes = Array.from(likedList);
    setUser(user);
    onLikeRecipeChange();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery) {
          const response = await axios.get(
            `http://localhost:3000/recipe/name?name=${searchQuery}`
          );
          setRecipes(response.data);
        } else {
          const response = await axios.get(`http://localhost:3000/recipe/pre`);
          setRecipes(response.data);
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setRecipes([]);
        } else {
        }
      }
    };
    fetchData();
  }, [searchQuery]);

  return (
    <>
      <div className="container-List">
        <div classname="listitem-recipe">
          {recipes.length > 0 ? (
            <ul className="list">
              {recipes.map((recipe) => (
                <li
                  className="listitem-recipe"
                  key={recipe._id}
                  onClick={() => handleClickRecipe(recipe._id)}
                >
                  <div className="Container-List-Recipe">
                    <button
                      className="buttonForLike"
                      onClick={(e) => {
                        e.stopPropagation();
                        handelLikeRecipe(recipe);
                      }}
                    >
                      <img
                        className="like-icon"
                        src={likedList.has(recipe._id) ? likeIcon : notLikeIcon}
                        alt="Like Icon"
                      />
                    </button>
                    <div className="image-wrapper">
                      <img
                        className="food-picture"
                        src={foodIcon}
                        alt="Food-Icon"
                      />
                    </div>
                    <div className="name-container">
                      <span className="name">{recipe.name}</span>
                    </div>
                    <div className="author-container">
                      <span
                        className="author truncate"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log(recipe.author);
                        }}
                      >
                        Author: {recipe.author}
                      </span>
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
  );
};

export default RecipeMain;
