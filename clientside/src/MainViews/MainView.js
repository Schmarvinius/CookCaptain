import './MainViewStyle.css'
import React, { useContext , useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import HeadBar from './Headbar/Headbar.js';
import RecipeMain from './RecipePage/RecipeMain.js';
import LinkedView from './LinkedBar/LinkedView.js';
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
          <div className="Linked">
            <h2>Liked</h2>
            <LinkedView/>
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
