import React, { useContext } from "react";
import "./AddPagesStyle.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const FAQ = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const handleBackClick = () => {
    if (user === null) {
      return navigate("/");
    }
    return navigate("/home");
    };

    return (
        <>
          <div>
            <div className="background">
              <div className="headbar">
                <button className="textButton" onClick={handleBackClick}>
                  <div className="fancy">Cook Captain</div>
                </button>
              </div>
              <div className="pageBody">
                    <p>FAQ</p>
              </div>
            </div>
          </div>
        </>
      );
}

export default FAQ;