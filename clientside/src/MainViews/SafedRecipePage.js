import './SafedRecipePage.css'
import React, { useContext , useEffect } from 'react';
import { UserContext } from '../Context/UserContext';
import HeadBar from './Headbar/Headbar.js';

const App = () => {
  const { user } = useContext(UserContext);
    useEffect(() => {
    }, [user]);

  return (
    <div className="app">
      <HeadBar />

      <main className="modules">
        <div className="categories">
          <h2>Kategorien</h2>
          {/* Categories */}
        </div>

        <div className="main">
          <h2>Main</h2>
          {/* Main Module mit Reccomendations Rezepten */}
        </div>
      </main>
    </div>
  );
};

export default App;
