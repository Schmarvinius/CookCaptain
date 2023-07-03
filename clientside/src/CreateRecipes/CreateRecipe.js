import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../src/Context/UserContext";
import "./CreateRecipe.css";
import { TokenContext } from "../Context/TokenContext";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [StepGroup, setInputGroups] = useState([]);
  const [IngredientGroup, setIngredientGroup] = useState([]);

  const { user } = useContext(UserContext);
  const { token } = useContext(TokenContext);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleStepAddInput = () => {
    setInputGroups([...StepGroup, { id: Date.now() }]);
  };

  const handleIngredientAddInput = () => {
    setIngredientGroup([...IngredientGroup, { id: Date.now() }]);
  };

  const handleStepRemoveInput = (id) => {
    const updatedInputGroups = StepGroup.filter((group) => group.id !== id);
    setInputGroups(updatedInputGroups);
  };

  const handleIngredientRemoveInput = (id) => {
    const updatedInputGroups = IngredientGroup.filter(
      (group) => group.id !== id
    );
    setIngredientGroup(updatedInputGroups);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Construct the array of objects from input values
    const stepData = StepGroup.map((group) => ({
      step: event.target[`IT-${group.id}`].value,
      instruction: event.target[`Instruction-${group.id}`].value,
    }));

    const ingredientData = IngredientGroup.map((group) => ({
      name: event.target[`Name-${group.id}`].value,
      amount: event.target[`Amount-${group.id}`].value,
    }));

    const data = {
      name: title,
      description: desc,
      ingredients: ingredientData,
      steps: stepData,
      author: user.email,
    };

    // Perform your request with the data array
    console.log(stepData);
    console.log(ingredientData);

    fetch("http://localhost:3000/recipe/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        navigate("/profile");
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };

  useEffect(() => {
    if (!user) {
      navigate("/home");
    }
  });

  return (
    <div className="neuContainer">
      <h1>Neues Rezept</h1>
      <form onSubmit={handleFormSubmit} className="idk">
        <div className="head">
          <input
            type="text"
            placeholder="Titel"
            value={title}
            onChange={handleTitleChange}
          ></input>
          <textarea
            placeholder="Beschreibung"
            value={desc}
            onChange={handleDescChange}
          ></textarea>
        </div>
        <div className="form">
          <div className="Schritte">
            <h2>Schritte</h2>
            {StepGroup.map((group) => (
              <div key={group.id} className="entry">
                <div className="title">
                  <input
                    type="text"
                    name={`IT-${group.id}`}
                    placeholder="Titel"
                    required
                  />
                  <input
                    type="button"
                    onClick={() => handleStepRemoveInput(group.id)}
                    value={"-"}
                  />
                </div>
                <textarea
                  type="text"
                  name={`Instruction-${group.id}`}
                  placeholder="Beschreibung"
                  required
                />
              </div>
            ))}
            <input
              className="Add"
              type="button"
              onClick={handleStepAddInput}
              value={"Add Input"}
            />
            {/* Dynamisch erzeugen lassen */}
          </div>
          <div className="Zutaten">
            <h2>Zutaten</h2>
            {IngredientGroup.map((group) => (
              <div key={group.id} className="IngredientEntry">
                <input
                  className="IN"
                  type="text"
                  name={`Name-${group.id}`}
                  placeholder="Name"
                  required
                />
                <input
                  className="Amount"
                  type="text"
                  name={`Amount-${group.id}`}
                  placeholder="Menge"
                  required
                />
                <input
                  type="button"
                  onClick={() => handleIngredientRemoveInput(group.id)}
                  value={"-"}
                />
              </div>
            ))}
            <input
              type="button"
              className="Add"
              onClick={handleIngredientAddInput}
              value={"Add Input"}
            />
          </div>
        </div>
        <input type="submit" className="Add"></input>
      </form>
    </div>
  );
};

export default ProfilePage;
