import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../src/Context/UserContext";
import "./ProfilePage.css";
import userIcon from "../images/Exampleimage.png";
import doner from "../images/doner.png";

const ProfilePage = () => {
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [createdRecipes, setCreatedRecipes] = useState([]);

  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchLikedRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/Recipe/likes?email=" + user.email
        );
        setLikedRecipes(response.data);
      } catch (error) {
        console.log("Error fetching liked recipes:", error);
      }
    };

    const fetchCreatedRecipes = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/Recipe/created?email=" + user.email
        );
        setCreatedRecipes(response.data);
      } catch (error) {
        console.log("Error fetching created recipes:", error);
      }
    };

    fetchLikedRecipes();
    fetchCreatedRecipes();
  }, []);

  return (
    <div className="siteContainer">
      <div className="profileData">
        <img src={doner} alt="profilePicture" className="profilePic"></img>
        {/* <img className='profileImage'/> */}
        <div className="userData">
          <span>
            <label>Name:</label>
            <label className="data">{user.name}</label>
          </span>
          <span>
            <label>E-Mail:</label>
            <label className="data">{user.email}</label>
          </span>
          <form method="get" action="localhost:3000/redirect/password">
            <a href="localhost:3001">reset password</a>
          </form>
        </div>
      </div>

      <div className="main2">
        <div className="recipes">
          <div className="createdRecipes">
            <h1>Erstellte Rezepte</h1>
            <ul className="list">
              {createdRecipes.map((recipe) => (
                <li className="listitem-recipe" key={recipe._id}>
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
            {/* Display a list of all created recipes */}
          </div>
          <div className="likedRecipes">
            <h1>Favorisierte Rezepte</h1>
            <ul className="list">
              {likedRecipes.map((recipe) => (
                <li className="listitem-recipe" key={recipe._id}>
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
        </div>
        <form method="get" action="localhost:3000/redirect/create">
          <input
            type="submit"
            className="submitButton"
            value={"Neues Rezept Erstellen"}
          ></input>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
