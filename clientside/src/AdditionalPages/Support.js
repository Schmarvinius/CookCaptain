import React, { useContext } from "react";
import "./AddPagesStyle.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Support = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const handleBackClick = () => {
    if (user === null) {
      return navigate("/login");
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
            <form class="contact-form">
              <h2>Contact Us</h2>
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="sname" name="name" required />
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="semail" name="email" required />
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea
                  id="smessage"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
