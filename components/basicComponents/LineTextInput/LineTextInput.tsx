import { TextInput, TextInputProps } from "react-native";

type LineTextInputProps = TextInputProps & {

}
const LineTextInput = ({ ...props }: LineTextInputProps) => {
  return (
    <TextInput {...props} />
  );
}

export default LineTextInput;