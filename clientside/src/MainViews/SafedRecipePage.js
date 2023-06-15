import './SafedRecipePage.css'
import React, { useContext , useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import HeadBar from './Headbar/Headbar.js';
import RecipeMain from './RecipePage/RecipeMain.js';
import { SearchProvider } from '../Context/SearchContext.js';

const App = () => {
  const { user } = useContext(UserContext);
    useEffect(() => {
    }, [user]);

  return (
    <SearchProvider>
      <div className="app">
        <HeadBar />

        <main className="modules">
          <div className="categories">
            <h2>Liked</h2>
            {/* Categories */}
          </div>

          <div className="main">
            <h2>Recipes</h2>
            <RecipeMain />
          </div>
        </main>
      </div>
    </SearchProvider>
  );
};

export default App;
