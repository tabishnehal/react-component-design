export const InputComponent = ({
  type,
  inputStyle,
  inputTitle,
  required,
  disable,
  customChangeFunction,
  holder,
  labelStyle,
  errorMessage,
  error,
  maxLength,
  minLength,
  options,
}) => {
  if (type === "select") {
    return (
      <div style={{ margin: "15px" }}>
        <label style={labelStyle}>{inputTitle}</label>
        <select
          style={inputStyle}
          type={type}
          required={required}
          placeholder={holder}
          disabled={disable}
        >
          {options.map((op) => (
            <option>{op}</option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div style={{ margin: "15px" }}>
      <label style={labelStyle}>{inputTitle}</label>
      <input
        style={inputStyle}
        type={type}
        required={required}
        placeholder={holder}
        max={maxLength}
        min={minLength}
        disabled={disable}
      />
      <span>{errorMessage}</span>
    </div>
  );
};
