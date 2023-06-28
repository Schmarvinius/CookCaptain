import react from "react";
import { UserContext } from "../../src/Context/UserContext";
import "./CreateRecipe.css";

const ProfilePage = () => {
  return (
    <div className="rezepteErstellen">
      <h1>Neues Rezept</h1>
      <form>
        <input placeholder="Titel"></input>
        <div className="Schritte">
          <h2>Schritte</h2>
          <input type="button"></input>
          {/* Dynamisch erzeugen lassen */}
        </div>
        <div className="Zutaten">
          <h2>Zutaten</h2>
          <input type="button"></input>
          {/* Dynamisch erzeugen lassen */}
        </div>
      </form>
    </div>
  );
};

export default ProfilePage;
