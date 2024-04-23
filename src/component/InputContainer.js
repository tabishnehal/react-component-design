import { InputComponent } from "./InputComponent.js";
export const InputContainer = (props) => {
  const { type } = props;
  switch (type) {
    case "text":
    case "number":
    case "radio":
    case "checkbox":
    case "select":
      return <InputComponent {...props} />;
    default:
      return "Invalid";
  }
};
