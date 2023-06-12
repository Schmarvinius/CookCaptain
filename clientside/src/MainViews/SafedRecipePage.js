import './styles.css';
import './SafedRecipePage.css'
import userIcon from '../images/userIcon.png';
import Headbar from './Headbar/Headbar.js';
import axios from 'axios';
import React, { useState, useContext , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../Context/UserContext';

const App = () => {
  const { user } = useContext(UserContext);
    useEffect(() => {
      }, [user]);

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="app">
      <header class = "modules">
        {/* Bei Suche Redirection auf search Page */}
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          class = "searchbar"
        />

        <Link to="../profil" className='headbar-link-user' class="categories">
          <img className='headbar-picture' src={userIcon} alt='User-Icon' />
          <div className='headbar-text'>
            {user && user.name ? <span>{user.name}</span> : <span>No user available</span>}
          </div>
        </Link> 
        {/*Profil Bild auf die rechte Seite*/}
      </header>

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
