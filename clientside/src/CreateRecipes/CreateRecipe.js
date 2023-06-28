import React, { useState } from "react";
import { UserContext } from "../../src/Context/UserContext";
import "./CreateRecipe.css";

const ProfilePage = () => {
  const [StepGroup, setInputGroups] = useState([]);
  const [IngredientGroup, setIngredientGroup] = useState([]);

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

    // Perform your request with the data array
    console.log(stepData);
    console.log(ingredientData);
  };

  return (
    <div className="neuContainer">
      <h1>Neues Rezept</h1>
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Titel"></input>
        <div className="form">
          <div className="Schritte">
            <h2>Schritte</h2>
            {StepGroup.map((group) => (
              <div key={group.id} className="entry">
                <div className="title">
                  <input
                    type="text"
                    name={`IT-${group.id}`}
                    placeholder="Instruction Title"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleStepRemoveInput(group.id)}
                  >
                    -
                  </button>
                </div>
                <textarea
                  type="text"
                  name={`Instruction-${group.id}`}
                  placeholder="Instruction"
                  required
                />
              </div>
            ))}
            <button type="button" onClick={handleStepAddInput}>
              Add Input
            </button>
            {/* Dynamisch erzeugen lassen */}
          </div>
          <div className="Zutaten">
            <h2>Zutaten</h2>
            {IngredientGroup.map((group) => (
              <div key={group.id} className="entry">
                <input
                  className="IT"
                  type="text"
                  name={`Name-${group.id}`}
                  placeholder="Ingredient Name"
                  required
                />
                <input
                  className="Instruction"
                  type="text"
                  name={`Amount-${group.id}`}
                  placeholder="Amount"
                  required
                />
                <button
                  type="button"
                  onClick={() => handleIngredientRemoveInput(group.id)}
                >
                  -
                </button>
              </div>
            ))}
            <button type="button" onClick={handleIngredientAddInput}>
              Add Input
            </button>
            {/* Dynamisch erzeugen lassen */}
          </div>
        </div>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default ProfilePage;
