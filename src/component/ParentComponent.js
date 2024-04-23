import React, { useState } from "react";
import InputComponent from "./InputComponent.js";

const ParentComponent = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div>
      <h2>Create Scenario</h2>
      <InputComponent
        scenario="create"
        inputType="text"
        inputTitle="Name"
        required={true}
        disable={false}
        customChangeFunction={handleInputChange}
        holder="Enter your name"
        labelStyle={{ fontWeight: "bold" }}
        inputStyle={{
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
        errorMessage="Name is required"
        error={!inputValue}
        maxLength={50}
      />

      <h2>Edit Scenario</h2>
      <InputComponent
        scenario="edit"
        inputType="number"
        inputTitle="Age"
        required={false}
        disable={false}
        customChangeFunction={handleInputChange}
        holder="Enter your age"
        labelStyle={{ fontWeight: "bold" }}
        inputStyle={{
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
        maxLength={3}
        value={inputValue}
      />

      <h2>Disable Scenario</h2>
      <InputComponent
        scenario="disable"
        inputType="password"
        inputTitle="Password"
        required={true}
        disable={true}
        customChangeFunction={handleInputChange}
        holder="Enter your password"
        labelStyle={{ fontWeight: "bold" }}
        inputStyle={{
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
        errorMessage="Password is required"
        error={!inputValue}
        minLength={8}
      />
    </div>
  );
};

export default ParentComponent;
