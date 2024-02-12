import { useContext } from "react";
import { Pressable, PressableProps } from "react-native";
import { Neomorph, Shadow } from "react-native-neomorph-shadows";
import { ThemeContext } from "../../../contexts/ThemeContext";

type IconButtonNeomorphProps = {
  size: number,
  icon: JSX.Element,
  onPress: () => void,
  isFocused?: boolean,
  props?: PressableProps,
}
const IconButtonNeomorph = ({ size, icon, onPress, isFocused, ...props }: IconButtonNeomorphProps) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Neomorph
      swapShadows // <- change zIndex of each shadow color
      inner={isFocused}
      style={{
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 10,
        borderRadius: 12,
        backgroundColor: isFocused ? theme.palette.primary.dark : theme.palette.primary.main,
        width: size,
        height: size,
      }}
    >
      <Pressable onPress={onPress} style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} {...props}>
        {icon}
      </Pressable>
    </Neomorph>
  );
}

export default IconButtonNeomorph;