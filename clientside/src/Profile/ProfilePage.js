import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
    const [likes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/Recipe/likes');
        setRecipes(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    return(
        <div className='siteContainer'>
            <div className='profileData'>
                <span className='dot'></span>
                {/* <img className='profileImage'/> */}
                <div className='userData'>
                    <label>Name:</label>
                    <label className='data'></label>
                    <br></br>
                    <label>E-Mail:</label>
                    <label className='data'></label>
                    <br></br>
                    <form method='get' action='localhost:3000/redirect/password'>
                        <input type='submit'></input>
                    </form>
                </div>
            </div>
            <div className='main2'> 
            <div className='recipes'>
                <div className='createdRecipes'>
                    <h1>Erstellte Rezepte</h1>
                    <ul className='list'>
                    {likes.map((recipe) => (
                        <li className="listitem-recipe" key={recipe._id}>{recipe.name}</li>
                    ))}
                    </ul>
                    {/* Display a list of all created recipes */}
                </div>
                <div className='likedRecipes'>
                    <h1>Favorisierte Rezepte</h1>
                    <ul className='list'>
                    {/* {liked.map((recipe) => (
                        <li className="listitem-recipe" key={recipe._id}>{recipe.name}</li>
                    ))} */}
                    </ul>
                    {/* Display a list of all liked recipes */}
                </div>
            </div>
            <form method='get' action='localhost:3000/redirect/create'>   
                    <input type='submit' className='submitButton'></input>
                </form>
            </div>
        </div>
    )
}

export default ProfilePage;