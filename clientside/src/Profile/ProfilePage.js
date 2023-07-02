import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../src/Context/UserContext";
import "./ProfilePage.css";
import userIcon from "../images/Exampleimage.png";
import doner from "../images/doner.png";
import { TokenContext } from "../../src/Context/TokenContext";
import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [likedRecipes, setLikedRecipes] = useState([]);
  const [createdRecipes, setCreatedRecipes] = useState([]);

  const { user } = useContext(UserContext);
  const { token, clearToken } = useContext(TokenContext);

  useEffect(() => {
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

    fetchCreatedRecipes();
    fetchLikedRecipes();
  }, []);

  const signOut = () => {
    clearToken();
    navigate("/");
  };

  return (
    <div className="siteContainer">
      <div className="profileData">
        <h1>Über mich</h1>
        {user ? (
          <div>
            <img src={doner} alt="profilePicture" className="profilePic"></img>
            <div className="userData">
              <span>
                <label>Name:</label>
                <label className="data">{user.name}</label>
              </span>
              <span>
                <label>E-Mail:</label>
                <label className="data">{user.email}</label>
              </span>
              {/* <form method="get" action="localhost:3000/redirect/password">
              <a href="localhost:3001">reset password</a>
            </form> */}
              <input
                type="button"
                className="submitButton"
                value={"Sign Out"}
                onClick={signOut}
              ></input>
            </div>
          </div>
        ) : (
          <h1>User couldn't be fetched</h1>
        )}
      </div>

      <div className="main2">
        <div className="recipes">
          <div className="createdRecipes">
            <h1>Erstellte Rezepte</h1>
            {createdRecipes.length > 0 ? (
              <div>
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
              <ClipLoader color="#000000" loading={true} size={30} />
            )}
          </div>
          <div className="likedRecipes">
            <h1>Favorisierte Rezepte</h1>
            {likedRecipes.length > 0 ? (
              <div>
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
  );
};

export default ProfilePage;
