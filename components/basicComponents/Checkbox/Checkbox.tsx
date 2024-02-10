import { useContext, useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/Feather'
import { ThemeContext } from "../../../contexts/ThemeContext";

type CheckboxProps = {
  onPress: () => void,
  defaultChecked?: boolean
}
const Checkbox = ({ onPress, defaultChecked }: CheckboxProps) => {
  const { theme } = useContext(ThemeContext)
  const styles = useStyles(theme)
  const [checked, setChecked] = useState<boolean>(defaultChecked ?? false)
  const handleCheckToggle = () => {
    onPress()
    setChecked(prev => !prev)
  }
  return (
    <TouchableOpacity style={styles.container} onPress={handleCheckToggle}>
      {checked && <Icon
        name="check"
        size={24}
        color={theme.palette.tertiary.main}
        style={{ textAlign: 'center', width: '100%' }}
      />}
    </TouchableOpacity>
  );
}
const useStyles = (theme: Theme) => StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: theme.palette.primary.dark,
    aspectRatio: 1,
    height: 24,
    width: 24,
    alignContent: 'flex-end',
    justifyContent: 'center'
  }
})
export default Checkbox;