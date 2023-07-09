import "./MainViewStyle.css";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../Context/UserContext";
import { TokenContext } from "../Context/TokenContext";
import HeadBar from "./Headbar/Headbar.js";
import RecipeMain from "./RecipePage/RecipeMain.js";
import LinkedView from "./LinkedBar/LinkedView.js";
import { SearchProvider } from "../Context/SearchContext.js";
import { useState } from "react";

const App = () => {
  const { user, setUser } = useContext(UserContext);
  const { token } = useContext(TokenContext);

  useEffect(() => {}, [user]);

  useEffect(() => {
    const fetchData = async () => {
      if (!user && token) {
        try {
          axios.defaults.headers.common["Authorization"] = token;
          const response = await axios.get(`http://localhost:3000/user/email`);
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user email:", error);
        }
      }
    };

    fetchData();
  }, [token]);

  const [likeRecipeChanged, setLikeRecipeChanged] = useState(false);

  const handleLikeRecipeChange = () => {
    setLikeRecipeChanged((prevState) => !prevState);
  };

  return (
    <SearchProvider>
      <div className="app">
        <HeadBar />

        <main className="modules">
          <div className="Linked">
            <h2>Liked</h2>
            <div className="mid">
              <LinkedView
                onLikeRecipeChange={handleLikeRecipeChange}
                likeRecipeChanged={likeRecipeChanged}
              />
            </div>
          </div>

          <div className="main">
            <h2>Recipes</h2>
            <div>
              <RecipeMain
                onLikeRecipeChange={handleLikeRecipeChange}
                likeRecipeChanged={likeRecipeChanged}
              />
            </div>
          </div>
        </main>
      </div>
    </SearchProvider>
  );
};

export default App;
