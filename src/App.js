import "./styles.css";
import { InputContainer } from "./component/InputContainer.js";
export default function App() {
  const option = ["option 1", "option 2"];
  return (
    <div className="App">
      <InputContainer
        type="text"
        holder="Enter first name"
        inputTitle="Text"
        disable="true"
        required="true"
        errorMessage="It's required"
      />

      <InputContainer type="text" holder="Enter last name" inputTitle="Text" />

      <InputContainer
        type="number"
        inputTitle="Number"
        minLength="10"
        maxLength="20"
      />

      <InputContainer
        type="select"
        holder=""
        inputTitle="Dropdown"
        options={option}
      />

      <InputContainer
        type="radio"
        holder="Select"
        inputTitle="Radio"
        disable="true"
      />
      <InputContainer
        type="checkbox"
        holder="Select"
        required="true"
        inputTitle="checkbox"
      />
    </div>
  );
}
