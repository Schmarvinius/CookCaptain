import React, { useContext } from "react";
import "./WelcomeStyle.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    
    const login = () => {
        navigate("/login");
    }

    return (
        <>
          <div className="container">
            <div className="text-container">
                <h3>Cook Captain</h3>
                 <p>Herzlich Willkommen zu Cook Captain - Deine Website mit Rezepten für Studierende!</p>
                 <p>Wenn du gleich auf den Knopf drückst, kommst du zum Login / SignUp. Dort meldest du dich mit deinem Konto an, oder erstellst eins. Falls du ohne Konto Rezepte sehen möchtest, drück bitte auf den dafür vorgesehenen Knopf.</p>
                 <p>Auf der Overview-Page siehst du alle Rezepte und kannst dir diese anschauen. Bist du mit deinem Konto angemeldet, kannst du deine Favoriten auch als diese markieren, um sie später wiederzufinden. <br/>
                 Drückst du auf deinen Namen oben rechts, gelangst du zu deiner Profilseite, auf der du deine erstellten und geliketen Rezepte sehen kannst und auch neue Rezepte erstellen kannst. Rezepte kannst du auch ganz einfach anklicken, um zur Detailpage zu gelangen. Dort siehst du die benötigten Zutaten und Zuberreitungsschritte.</p>
                 <p>Jetzt aber genug geredet, Viel Spaß!</p>
                 <button onClick={login}>Start</button>
            </div>
          </div>
         
        </>
      );
}

export default Welcome;