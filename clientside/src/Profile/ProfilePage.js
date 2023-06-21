import React, { useState, useContext , useEffect } from 'react';
import './ProfilePage.css';

const ProfilePage = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('localhost:3000/user/liked');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

    return(
        <div className='app'>
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
                    {/* {safed.map((recipe) => (
                        <li className="listitem-recipe" key={recipe._id}>{recipe.name}</li>
                    ))} */}
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    {/* Display a list of all created recipes */}
                </div>
                <div className='likedRecipes'>
                    <h1>Favorisierte Rezepte</h1>
                    <ul className='list'>
                    {/* {liked.map((recipe) => (
                        <li className="listitem-recipe" key={recipe._id}>{recipe.name}</li>
                    ))} */}
                    </ul>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
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