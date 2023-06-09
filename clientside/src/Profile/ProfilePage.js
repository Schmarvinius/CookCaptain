import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../src/Context/UserContext";
import "./ProfilePage.css";
import "./ProfilePageM.css";
import userIcon from "../images/Exampleimage.png";
import profilePic from "../images/profile.png";
import { TokenContext } from "../../src/Context/TokenContext";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../images/delete.png";
import ConfirmationDialog from "../Modells/ConfirmationDialog";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [likedRecipes, setLikedRecipes] = useState([]);
  const [createdRecipes, setCreatedRecipes] = useState([]);
  const [reload, setreload] = useState(false);
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const { user, setUser } = useContext(UserContext);
  const { token, clearToken } = useContext(TokenContext);
  const [recipe, setRecipe] = useState(null);

  const handleClickRecipe = (recipeId) => {
    navigate(`../home/recipe/${recipeId}`);
  };

  useEffect(() => {
    setIsConfirmationOpen(false);
    const fetchLikedRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/recipe/likes", {
          headers: {
            Authorization: token,
          },
        });
        setLikedRecipes(response.data);
      } catch (error) {
        console.log("Error fetching liked recipes:", error);
        setLikedRecipes([]);
      }
    };

    const fetchCreatedRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/recipe/created",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setCreatedRecipes(response.data);
      } catch (error) {
        console.log("Error fetching created recipes:", error);
        setCreatedRecipes([]);
      }
    };

    if (user) {
      fetchCreatedRecipes();
      fetchLikedRecipes();
    } else {
      navigate("/home");
    }
  }, [reload]);

  const signOut = () => {
    setIsConfirmationOpen(true);

    setUser(null);
    clearToken();
    navigate("/login");
  };

  const handleCancel = () => {
    setIsConfirmationOpen(false);
  };

  const handelDeleteRecipe = (recipe) => {
    setRecipe(recipe);
    setIsConfirmationOpen(true);
  };

  const deleteRecipe = async () => {
    console.log(recipe);
    let data = {};
    try {
      data = { recipeID: recipe._id };
      const config = {
        data: data,
      };
      await axios.delete("http://localhost:3000/recipe", config);
      setreload((prevState) => !prevState);
    } catch (e) {
      console.error("Failed to delete recipe:", e);
    }
  };

  return (
    <>
      <ConfirmationDialog
        isOpen={isConfirmationOpen}
        onConfirm={deleteRecipe}
        onCancel={handleCancel}
      />
      <div className="siteContainer">
        <div className="profileData">
          <h1>About me</h1>
          {user ? (
            <div>
              <img
                src={profilePic}
                alt="profilePicture"
                className="profilePic"
              ></img>
              <div className="userData">
                <span>
                  <label>Name:</label>
                  <label className="data">{user.name}</label>
                </span>
                <span>
                  <label>E-Mail:</label>
                  <label className="data">{user.email}</label>
                </span>
                <button
                  className="bottom submitButton"
                  value={"Sign Out"}
                  onClick={signOut}
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <h1>User couldn't be fetched</h1>
          )}
        </div>

        <div className="main2">
          <div className="recipes">
            <div className="createdRecipes">
              <h1>Created Recipes</h1>
              {createdRecipes.length > 0 ? (
                <div>
                  <ul className="list">
                    {createdRecipes.map((recipe) => (
                      <li
                        className="listitem-recipe"
                        key={recipe._id}
                        onClick={() => handleClickRecipe(recipe._id)}
                      >
                        <button
                          className="buttonForLike"
                          onClick={(e) => {
                            e.stopPropagation();
                            handelDeleteRecipe(recipe);
                          }}
                        >
                          <img
                            className="like-icon"
                            src={deleteIcon}
                            alt="Like Icon"
                          />
                        </button>
                        <div className="image-wrapper">
                          <img
                            className="food-picture"
                            src={userIcon}
                            alt="Food-Icon"
                          />
                        </div>
                        <div className="name-container">
                          <span className="name">{recipe.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Link to="../neu">
                    <input
                      type="submit"
                      className="submitButton"
                      value={"Neues Rezept Erstellen"}
                    ></input>
                  </Link>
                  {/* Display a list of all created recipes */}
                </div>
              ) : (
                <div className="flex">
                  <ClipLoader color="#000000" loading={true} size={30} />
                  <Link to="../neu">
                    <input
                      type="submit"
                      className="submitButton"
                      value={"Create New Recipe"}
                    ></input>
                  </Link>
                </div>
              )}
            </div>
            <div className="likedRecipes">
              <h1>Liked Recipes</h1>
              {likedRecipes.length > 0 ? (
                <div>
                  <ul className="list">
                    {likedRecipes.map((recipe) => (
                      <li
                        className="listitem-recipe"
                        key={recipe._id}
                        onClick={() => handleClickRecipe(recipe._id)}
                      >
                        <div className="image-wrapper">
                          <img
                            className="food-picture"
                            src={userIcon}
                            alt="Food-Icon"
                          />
                        </div>
                        <div className="name-container">
                          <span className="name">{recipe.name}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Display a list of all liked recipes */}
                </div>
              ) : (
                <ClipLoader
                  color="#000000"
                  loading={true}
                  size={30}
                  className="spinner"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
