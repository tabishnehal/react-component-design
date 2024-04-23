import React from "react";

const InputComponent = ({
  scenario,
  inputType,
  inputTitle,
  required,
  disable,
  customChangeFunction,
  holder,
  labelStyle,
  inputStyle,
  errorMessage,
  error,
  maxLength,
  minLength,
  options,
  currency,
  value,
}) => {
  const handleChange = (e) => {
    if (customChangeFunction) {
      customChangeFunction(e.target.value);
    }
  };

  // Render different input types based on inputType prop
  const renderInput = () => {
    switch (inputType) {
      case "text":
      case "number":
      case "password":
        return (
          <input
            type={inputType}
            value={value}
            onChange={handleChange}
            placeholder={holder}
            style={inputStyle}
            disabled={disable}
          />
        );
      case "select":
        return (
          <select
            value={value}
            onChange={handleChange}
            style={inputStyle}
            disabled={disable}
          >
            {options.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        );
      case "checkbox":
        return (
          <input
            type="checkbox"
            checked={value}
            onChange={handleChange}
            style={inputStyle}
            disabled={disable}
          />
        );
      case "radio":
        return (
          <div>
            {options.map((opt, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={opt.value}
                  checked={value === opt.value}
                  onChange={handleChange}
                  style={inputStyle}
                  disabled={disable}
                />
                {opt.label}
              </label>
            ))}
          </div>
        );
      case "currency":
        return (
          <input
            type="text"
            value={currencyFormat(value)}
            onChange={handleChange}
            placeholder={holder}
            style={inputStyle}
            disabled={disable}
          />
        );
      default:
        return null;
    }
  };

  const currencyFormat = (value) => {
    return `$${value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}`;
  };

  return (
    <div>
      <label style={labelStyle}>{inputTitle}</label>
      {renderInput()}
      {error && <span style={{ color: "red" }}>{errorMessage}</span>}
    </div>
  );
};

export default InputComponent;
