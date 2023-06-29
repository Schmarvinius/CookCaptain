import React, { useContext } from "react";
import "./ImprintStyle.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

function Imprint() {
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
              <div className="fancy">Cook Kaptain</div>
            </button>
          </div>
          <div className="imprintBody">
            <div className="impressum-content">
              <h1>Impressum</h1>
              <h2 className="impressum-heading">Contact Information</h2>
              <p>Cook Captain</p>
              <p>Address: Erzbergerstraße 12, Karlsruhe, Germany</p>
              <p>Phone: +1 234 567 890</p>
              <p>Email: CookCaptain@gmail.com</p>
              <h2 className="impressum-heading">Legal Information</h2>
              <p>Registration Number: 1234567</p>
              <p>VAT Number: 1234567</p>
              <p>Legal Disclaimer: Please dont sue us</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Imprint;
