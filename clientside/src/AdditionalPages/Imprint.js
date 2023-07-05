import React, { useContext } from "react";
import "./AddPagesStyle.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Imprint = () => {
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
            <div className="impressum-content">
              <p>
                <b>Verantwortlich für den Inhalt dieser Website gemäß §5 TMG:</b>
                <br/>Cook Captain GmbH
                <br/>Nancystraße 24 
                <br/>76187 Karlsruhe
              </p>

              <p>
                <b>Vertreten durch:</b>
                <br/> Marvin Lindner, Yannis Moser und Til Weber
              </p>

              <p>
                <b>Kontakt:</b>
                <br/>Telefon: +49 (0)187 45772
                <br/>E-Mail: support@cookcaptain.de
              </p>

              <p>
                <b>Handelsregister:</b>
                <br/>Registergericht: Amtsgericht Karlsruhe
                <br/>Registernummer: HRB 77815
              </p>

              <p>
                <b>Umsatzsteuer-ID:</b>
                <br/>Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE 987654321
              </p>

              <p>
                <b>Verantwortlich für journalistisch-redaktionelle Inhalte gemäß § 55 RStV:</b>
                <br/>Til Weber
                <br/>Ringerottstraße 17
                <br/>45772 Marl
              </p>

              <p>
                <b>Haftungsausschluss:</b>
                <br/>Die Betreiber der Website übernehmen keine Haftung für die Inhalte und der Korrektheit der bereitgestellten Rezepte. Für den Inhalt der Rezepte sind ausschließlich deren Ersteller verantwortlich.
              </p>

              <p>
                <b>Urheberrecht:</b>
                <br/>Die auf dieser Website (und von uns) verwendeten Texte, Bilder und Grafiken unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung, Verbreitung oder jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedarf der schriftlichen Zustimmung der CookCaptain GmbH oder des jeweiligen Rechteinhabers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Imprint;
