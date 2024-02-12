import { useContext } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { ThemeContext } from "../../../contexts/ThemeContext";

type LineTextInputProps = TextInputProps & {

}
const LineTextInput = ({ ...props }: LineTextInputProps) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  return (
    <TextInput {...props} style={styles.textInput} placeholderTextColor={theme.palette.neutral[500]} />
  );
}
const useStyles = (theme: Theme) => StyleSheet.create({
  textInput: {
    color: theme.type === 'dark' ? theme.palette.neutral.A100 : theme.palette.neutral[900],
    width: '100%',
    textAlign: 'center'
  }
})
export default LineTextInput;