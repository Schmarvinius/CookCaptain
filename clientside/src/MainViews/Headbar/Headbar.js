import { UserContext } from "../../Context/UserContext";
import React, { useContext, useEffect } from "react";
import userIcon from "../../images/userIcon.png";
import "./headbarStyles.css";
import { Link } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext.js";

const Headbar = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  const { user } = useContext(UserContext);
  useEffect(() => {}, [user]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className="headbar-Container">
        <div className="Search-Container">
          <input
            type="lable"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearch}
            className="searchbar"
          />
        </div>

        <Link to={user ? "../profile" : "../login"} className="headbar-link-user">
          <div className="headbar-text">
            {user && user.name ? (
              <span>{user.name}</span>
            ) : (
              <span>Guest</span>
            )}
          </div>
          <img className="headbar-picture" src={userIcon} alt="User-Icon" />
        </Link>
      </div>
    </>
  );
};

export default Headbar;
